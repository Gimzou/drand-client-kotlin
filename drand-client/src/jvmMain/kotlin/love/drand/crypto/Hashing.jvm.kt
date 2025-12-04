package love.drand.crypto

import org.bouncycastle.jce.provider.BouncyCastleProvider
import java.security.MessageDigest
import java.security.Security

/**
 * Lazy-initialized BouncyCastle security provider.
 *
 * BouncyCastle is required for Keccak-256 support, as the standard Java
 * security providers don't include the original Keccak algorithm (only the
 * finalized SHA-3 standard). The provider is registered once on first use.
 */
private val bcProvider by lazy {
    BouncyCastleProvider().also {
        Security.addProvider(it)
    }
}

/**
 * Thread-local SHA-256 MessageDigest instance for thread-safe, performant hashing.
 *
 * Using ThreadLocal avoids synchronization overhead while reusing digest instances
 * across multiple operations within the same thread. Each thread gets its own instance
 * automatically, eliminating the need for synchronization or instance allocation per hash.
 */
private val sha256Digest =
    ThreadLocal.withInitial<MessageDigest> {
        MessageDigest.getInstance("SHA-256")
    }

/**
 * Thread-local Keccak-256 MessageDigest instance for thread-safe, performant hashing.
 *
 * Keccak-256 requires BouncyCastle provider, so we ensure BC is registered before
 * creating the digest instance. Uses ThreadLocal for the same performance benefits
 * as SHA-256.
 */
private val keccak256Digest =
    ThreadLocal.withInitial<MessageDigest> {
        // Ensure BouncyCastle is registered
        bcProvider
        MessageDigest.getInstance("KECCAK-256", "BC")
    }

/**
 * JVM implementation of SHA-256 hashing using Java's built-in MessageDigest.
 *
 * Uses thread-local digest instances for optimal performance in multi-threaded
 * environments. The digest is reset before each use to ensure clean state.
 *
 * @param data The bytes to hash
 * @return 32-byte SHA-256 digest
 */
internal actual fun sha256(data: ByteArray): ByteArray {
    val digest = sha256Digest.get()
    digest.reset()
    return digest.digest(data)
}

/**
 * JVM implementation of Keccak-256 hashing using BouncyCastle provider.
 *
 * Note: This implements the original Keccak-256, not the finalized SHA-3 standard.
 * The BouncyCastle provider is required because standard Java providers only
 * implement SHA-3, which has different padding than the original Keccak.
 *
 * Uses thread-local digest instances for optimal performance. The digest is reset
 * before each use to ensure clean state.
 *
 * @param data The bytes to hash
 * @return 32-byte Keccak-256 digest
 */
internal actual fun keccak256(data: ByteArray): ByteArray {
    val digest = keccak256Digest.get()
    digest.reset()
    return digest.digest(data)
}
