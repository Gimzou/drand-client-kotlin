// crypto/Hashing.kt - commonMain
package love.drand.crypto

/**
 * Cryptographic hash functions used by drand signing schemes.
 *
 * Different drand networks use different hash functions depending on their requirements:
 * - Most networks (BLS12-381) use SHA-256 for beacon message hashing
 * - BN254-based networks use Keccak-256 for EVM compatibility
 *
 * ## Platform Implementations
 *
 * - **JVM**: Uses BouncyCastle provider with ThreadLocal digest instances for performance
 * - **JS**: Uses @noble/hashes library for browser compatibility
 *
 * @see Scheme for which hash function each signing scheme uses
 */
enum class HashFunction {
    /**
     * SHA-256 (Secure Hash Algorithm 256-bit).
     *
     * Used by all BLS12-381 schemes (default, quicknet, unchained).
     * Standard cryptographic hash function defined in FIPS 180-4.
     */
    SHA256,

    /**
     * Keccak-256 hash function.
     *
     * Used by BN254 schemes for Ethereum Virtual Machine (EVM) compatibility.
     * Note: This is Keccak-256, not the finalized SHA-3 standard.
     */
    KECCAK256,
    ;

    /**
     * Computes the hash of the input bytes using this hash function.
     *
     * This is used throughout drand for:
     * - Deriving randomness from signatures (randomness = hash(signature))
     * - Hashing beacon messages before signing (message = hash(round || previous))
     *
     * @param data The bytes to hash
     * @return The hash digest (32 bytes for both SHA-256 and Keccak-256)
     */
    fun hash(data: ByteArray): ByteArray =
        when (this) {
            SHA256 -> sha256(data)
            KECCAK256 -> keccak256(data)
        }
}

/**
 * Computes SHA-256 hash of the input bytes.
 *
 * Platform-specific implementation:
 * - JVM: Uses Java MessageDigest with ThreadLocal for thread safety
 * - JS: Uses @noble/hashes sha256 function
 *
 * @param data The bytes to hash
 * @return 32-byte SHA-256 digest
 */
internal expect fun sha256(data: ByteArray): ByteArray

/**
 * Computes Keccak-256 hash of the input bytes.
 *
 * Platform-specific implementation:
 * - JVM: Uses BouncyCastle Keccak256Digest
 * - JS: Uses @noble/hashes keccak256 function
 *
 * Note: This is the original Keccak-256, not the finalized SHA-3 standard.
 *
 * @param data The bytes to hash
 * @return 32-byte Keccak-256 digest
 */
internal expect fun keccak256(data: ByteArray): ByteArray
