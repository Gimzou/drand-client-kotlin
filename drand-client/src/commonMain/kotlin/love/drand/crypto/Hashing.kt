// crypto/Hashing.kt - commonMain
package love.drand.crypto

enum class HashFunction {
    SHA256,
    KECCAK256, ;

    /**
     * Computes the hash of the input bytes
     * This is used to derive randomness from signatures and to hash beacon messages.
     */
    fun hash(data: ByteArray): ByteArray =
        when (this) {
            SHA256 -> sha256(data)
            KECCAK256 -> keccak256(data)
        }
}

/**
 * Computes SHA-256 hash of the input bytes.
 */
internal expect fun sha256(data: ByteArray): ByteArray

/**
 * Computes the KECCAK-256 hash of the input bytes
 */
internal expect fun keccak256(data: ByteArray): ByteArray
