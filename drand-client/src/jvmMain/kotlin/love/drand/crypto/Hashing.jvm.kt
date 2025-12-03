package love.drand.crypto

import org.bouncycastle.jce.provider.BouncyCastleProvider
import java.security.MessageDigest
import java.security.Security

private val bcProvider by lazy {
    BouncyCastleProvider().also {
        Security.addProvider(it)
    }
}

// Thread-local MessageDigest instances for performance
private val sha256Digest =
    ThreadLocal.withInitial<MessageDigest> {
        MessageDigest.getInstance("SHA-256")
    }

private val keccak256Digest =
    ThreadLocal.withInitial<MessageDigest> {
        // Ensure BouncyCastle is registered
        bcProvider
        MessageDigest.getInstance("KECCAK-256", "BC")
    }

internal actual fun sha256(data: ByteArray): ByteArray {
    val digest = sha256Digest.get()
    digest.reset()
    return digest.digest(data)
}

internal actual fun keccak256(data: ByteArray): ByteArray {
    val digest = keccak256Digest.get()
    digest.reset()
    return digest.digest(data)
}
