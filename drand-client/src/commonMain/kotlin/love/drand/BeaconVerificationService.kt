package love.drand

import love.drand.crypto.Scheme
import love.drand.crypto.sha256
import love.drand.network.data.ChainInfo
import love.drand.network.data.RandomnessBeacon

class BeaconVerificationService {
    /**
     * Verifies a beacon against expected round and chain info.
     * Performs validation in order: round → randomness → signature
     *
     * @return Result.success if all checks pass, Result.failure otherwise
     */
    fun verifyBeacon(
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
     * Validates that beacon round matches expected round
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
     * Validates that beacon randomness matches SHA-256 hash of signature
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
     * Verifies beacon signature using the chain's cryptographic scheme
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
     * Compute the message digest for a beacon according to scheme rules
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
