package love.drand

import love.drand.crypto.Scheme
import love.drand.crypto.sha256
import love.drand.network.data.ChainInfo
import love.drand.network.data.RandomnessBeacon

/**
 * Service responsible for cryptographic verification of drand randomness beacons.
 *
 * This service implements the complete drand beacon verification pipeline, which includes:
 * 1. **Round validation** - Ensuring the beacon round matches the expected value
 * 2. **Randomness validation** - Verifying that randomness = SHA256(signature)
 * 3. **Signature verification** - Cryptographically verifying the BLS signature
 *
 * The verification process follows the drand specification and ensures that beacons are
 * authentic and have not been tampered with. All beacons must pass all three checks to
 * be considered valid.
 *
 * ## Supported Schemes
 *
 * This service supports all BLS12-381 signing schemes:
 * - `pedersen-bls-chained` - League of Entropy default network
 * - `pedersen-bls-unchained` - Timelock encryption compatible
 * - `bls-unchained-g1-rfc9380` - Quicknet network (RFC 9380 compliant)
 *
 * ## Usage
 *
 * Typically used internally by [DrandClient], but can be used standalone:
 *
 * ```kotlin
 * val verifier = BeaconVerificationService()
 * val chainInfo = // ... fetch from drand API
 * val beacon = // ... fetch beacon
 *
 * val result = verifier.verifyBeacon(
 *     chainInfo = chainInfo,
 *     beacon = beacon,
 *     expectedRound = 1000
 * )
 *
 * result.onSuccess { verifiedBeacon ->
 *     println("Beacon verified: ${verifiedBeacon.randomness}")
 * }.onFailure { error ->
 *     println("Verification failed: ${error.message}")
 * }
 * ```
 *
 * @see DrandClient
 * @see RandomnessBeacon
 * @see ChainInfo
 */
class BeaconVerificationService : BeaconVerifier {
    /**
     * Verifies a beacon against expected round and chain info.
     *
     * Performs comprehensive validation in the following order:
     * 1. Validates beacon format (required fields present and valid)
     * 2. Validates round matches expected round
     * 3. Validates randomness equals SHA256(signature)
     * 4. Verifies BLS signature using chain's public key
     *
     * @param chainInfo The chain configuration containing public key and signing scheme
     * @param beacon The beacon to verify
     * @param expectedRound The expected round number (typically the round you requested)
     * @return Result.success containing the verified beacon if all checks pass,
     *         or Result.failure with [DrandError] describing what failed
     */
    override fun verifyBeacon(
        chainInfo: ChainInfo,
        beacon: RandomnessBeacon,
        expectedRound: Long,
    ): Result<RandomnessBeacon> {
        // Validate beacon format
        beacon.validate().onFailure {
            return Result.failure(
                DrandError.InvalidBeacon(
                    beaconID = chainInfo.beaconId,
                    beaconRound = beacon.round,
                    cause = it,
                ),
            )
        }
        // Validate round
        validateRound(beacon, expectedRound)
            .onFailure { return Result.failure(it) }

        // Validate randomness
        validateRandomness(beacon)
            .onFailure { return Result.failure(it) }

        // Verify signature
        return verifySignature(beacon, chainInfo)
    }

    /**
     * Validates that the beacon's round number matches the expected round.
     *
     * This check ensures you received the beacon you requested and protects against
     * replay attacks where an attacker might try to substitute a beacon from a different round.
     *
     * @param beacon The beacon to validate
     * @param expectedRound The expected round number
     * @return Result.success if rounds match, Result.failure with [DrandError.VerificationFailed] otherwise
     */
    fun validateRound(
        beacon: RandomnessBeacon,
        expectedRound: Long,
    ): Result<RandomnessBeacon> =
        if (beacon.round == expectedRound) {
            Result.success(beacon)
        } else {
            Result.failure(
                DrandError.VerificationFailed(
                    "Beacon round does not match expected round $expectedRound",
                    beaconRound = beacon.round,
                ),
            )
        }

    /**
     * Validates that the beacon's randomness field equals SHA-256(signature).
     *
     * According to the drand specification, the randomness value must always be the
     * SHA-256 hash of the signature. This provides a deterministic, verifiable way to
     * derive random values from the signature and ensures the randomness hasn't been
     * tampered with independently from the signature.
     *
     * @param beacon The beacon to validate
     * @return Result.success if randomness matches SHA-256(signature),
     *         Result.failure with [DrandError.VerificationFailed] otherwise
     */
    fun validateRandomness(beacon: RandomnessBeacon): Result<RandomnessBeacon> {
        val hashedSignature = sha256(beacon.signatureBytes)

        return if (hashedSignature.contentEquals(beacon.randomnessBytes)) {
            Result.success(beacon)
        } else {
            Result.failure(
                DrandError.VerificationFailed(
                    "Beacon randomness does not match signature hash",
                    beaconRound = beacon.round,
                ),
            )
        }
    }

    /**
     * Verifies the beacon's BLS signature using the chain's public key and cryptographic scheme.
     *
     * This is the core cryptographic verification that proves the beacon was produced by
     * the drand network and hasn't been forged. The signature is verified using:
     * - The chain's public key (aggregated from multiple nodes)
     * - The appropriate BLS signing scheme (BLS12-381 on G1 or G2)
     * - The message digest (computed from round number and optionally previous signature)
     *
     * For chained beacons, the message includes the previous signature to create a
     * verifiable chain of randomness. For unchained beacons, only the round number is signed.
     *
     * @param beacon The beacon to verify
     * @param chainInfo The chain configuration with public key and scheme
     * @return Result.success if signature is valid,
     *         Result.failure with [DrandError.VerificationFailed] if invalid or verification errors occur
     */
    fun verifySignature(
        beacon: RandomnessBeacon,
        chainInfo: ChainInfo,
    ): Result<RandomnessBeacon> {
        val scheme =
            Scheme.fromId(chainInfo.scheme)
                ?: return Result.failure(
                    DrandError.VerificationFailed(
                        message = "Unsupported scheme: ${chainInfo.scheme}",
                        beaconRound = beacon.round,
                    ),
                )

        // Get the message to verify
        val message =
            digestBeacon(beacon, scheme).getOrElse {
                return Result.failure(
                    DrandError.VerificationFailed(
                        message = "Failed to compute beacon digest: ${it.message}",
                        beaconRound = beacon.round,
                        cause = it,
                    ),
                )
            }

        // Verify the signature
        val isValid =
            scheme
                .verifyBLSSignature(chainInfo.publicKey.hexToByteArray(), message, beacon.signatureBytes)
                .getOrElse { error ->
                    return Result.failure(
                        DrandError.VerificationFailed(
                            message = "Signature verification error: ${error.message}",
                            beaconRound = beacon.round,
                            cause = error,
                        ),
                    )
                }

        return if (isValid) {
            Result.success(beacon)
        } else {
            Result.failure(
                DrandError.VerificationFailed(
                    message = "Invalid signature for round ${beacon.round}",
                    beaconRound = beacon.round,
                ),
            )
        }
    }

    /**
     * Computes the message digest that was signed to produce the beacon.
     *
     * The digest computation follows the drand specification:
     * - **Chained beacons**: message = hash(previousSignature || round)
     * - **Unchained beacons**: message = hash(round)
     * - **Genesis beacon** (round 1): message = hash(round) with no previous signature
     *
     * The hash function used depends on the chain's scheme (SHA-256 or Keccak-256).
     *
     * @param beacon The beacon whose message to compute
     * @param scheme The cryptographic scheme that determines the hash function
     * @return Result.success containing the message bytes if computation succeeds,
     *         Result.failure if an error occurs during digest computation
     */
    private fun digestBeacon(
        beacon: RandomnessBeacon,
        scheme: Scheme,
    ): Result<ByteArray> =
        runCatching {
            val roundBytes = beacon.roundBytes
            val previousSignatureBytes = beacon.previousSignatureBytes

            val preimage =
                if (previousSignatureBytes != null && previousSignatureBytes.isNotEmpty()) {
                    previousSignatureBytes + roundBytes
                } else {
                    roundBytes // Genesis beacon or unchained beacon
                }

            scheme.hashFunction.hash(preimage)
        }
}
