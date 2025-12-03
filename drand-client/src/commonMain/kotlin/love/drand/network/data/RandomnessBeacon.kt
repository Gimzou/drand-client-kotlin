package love.drand.network.data

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import love.drand.crypto.sha256
import love.drand.crypto.toByteArray

/**
 * Currently drand supports chained and unchained randomness
 * - read more here: https://drand.love/docs/cryptography/#randomness
 */
@Serializable
data class RandomnessBeacon(
    val round: Long, // Required
    val randomness: String? = null, // Optional
    val signature: String, // Required
    @SerialName("previous_signature")
    val previousSignature: String? = null, // Optional
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
