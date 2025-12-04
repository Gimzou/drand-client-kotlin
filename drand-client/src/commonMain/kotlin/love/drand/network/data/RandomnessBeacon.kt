package love.drand.network.data

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import love.drand.crypto.sha256
import love.drand.crypto.toByteArray

/**
 * A randomness beacon from a drand network.
 *
 * Drand networks produce randomness beacons at regular intervals (rounds).
 * Each beacon contains a BLS signature over the round number (and optionally
 * the previous signature for chained schemes), and the final randomness value
 * is derived from this signature.
 *
 * ## Chained vs Unchained
 *
 * Drand supports two modes:
 * - **Chained**: Each beacon signs both the round and the previous signature,
 *   creating a hash chain. The [previousSignature] field is populated.
 * - **Unchained**: Each beacon signs only the round number. The [previousSignature]
 *   field is null. This mode enables timelock encryption.
 *
 * Read more: https://drand.love/docs/cryptography/#randomness
 *
 * @property round The round number for this beacon (must be positive).
 *           Round numbers start at 1 and increment sequentially.
 * @property randomness Hex-encoded randomness bytes (optional, may be null).
 *           When present, this is the pre-computed randomness value.
 *           When null, randomness is derived via SHA-256 of the signature.
 * @property signature Hex-encoded BLS signature bytes (required).
 *           This signature can be verified against the network's public key
 *           and proves the authenticity of this beacon.
 * @property previousSignature Hex-encoded previous signature (optional, for chained mode).
 *           In chained mode, this links the current beacon to the previous one.
 *           In unchained mode, this is null.
 * @property derivedRandomness The final randomness value for this beacon.
 *           Returns [randomness] if present, otherwise computes SHA-256([signature]).
 *           This is the value you should use for random number generation.
 * @property roundBytes The [round] number as an 8-byte big-endian array.
 *           Used internally for signature verification.
 * @property signatureBytes The [signature] decoded from hex to bytes.
 *           Used for cryptographic verification operations.
 * @property randomnessBytes The [derivedRandomness] decoded from hex to bytes.
 *           The actual random bytes you can use in your application.
 * @property previousSignatureBytes The [previousSignature] decoded from hex to bytes, or null.
 *           Used for chained signature verification.
 */
@Serializable
data class RandomnessBeacon(
    val round: Long,
    val randomness: String? = null,
    val signature: String,
    @SerialName("previous_signature")
    val previousSignature: String? = null,
) {
    val derivedRandomness: String by lazy {
        randomness ?: computeRandomness()
    }

    val roundBytes: ByteArray
        get() = round.toByteArray()

    val signatureBytes: ByteArray
        get() = signature.hexToByteArray()

    val randomnessBytes: ByteArray
        get() = derivedRandomness.hexToByteArray()

    val previousSignatureBytes: ByteArray?
        get() = previousSignature?.hexToByteArray()

    private fun computeRandomness(): String {
        val sigBytes = signature.hexToByteArray()
        val randomnessBytes = sha256(sigBytes)
        return randomnessBytes.toHexString()
    }

    /**
     * Validate this beacon has well-formed data
     */
    fun validate(): Result<Unit> =
        runCatching {
            require(round > 0) { "Round must be positive, got: $round" }
            require(signature.isValidHex()) { "Signature is not valid hex" }
            require(derivedRandomness.isValidHex()) { "Randomness is not valid hex" }
            if (previousSignature != null) {
                require(previousSignature.isValidHex()) { "Previous signature is not valid hex" }
            }
        }

    private fun String.isValidHex(): Boolean = this.isNotEmpty() && this.matches(Regex("^[0-9a-fA-F]+$"))
}
