package love.drand.crypto

import org.khronos.webgl.Uint8Array

/**
 * External declarations for @noble/hashes SHA-2 functions.
 *
 * The @noble/hashes library provides high-quality, audited cryptographic hash
 * implementations for JavaScript environments. This module exposes the SHA-256
 * function from @noble/hashes/sha2.
 *
 * Requires: `@noble/hashes` ^2.0.0
 *
 * @see <a href="https://github.com/paulmillr/noble-hashes">@noble/hashes on GitHub</a>
 */
@JsModule("@noble/hashes/sha2.js")
@JsNonModule
external object Sha256Module {
    /**
     * Computes SHA-256 hash of the input.
     *
     * @param data The data to hash as Uint8Array
     * @return SHA-256 digest as Uint8Array (32 bytes)
     */
    fun sha256(data: Uint8Array): Uint8Array
}

/**
 * External declarations for @noble/hashes SHA-3/Keccak functions.
 *
 * The @noble/hashes library provides the original Keccak-256 algorithm used by
 * Ethereum and other blockchain systems. Note that this is different from the
 * finalized NIST SHA-3 standard.
 *
 * Requires: `@noble/hashes` ^2.0.0
 *
 * @see <a href="https://github.com/paulmillr/noble-hashes">@noble/hashes on GitHub</a>
 */
@JsModule("@noble/hashes/sha3.js")
@JsNonModule
external object Keccak256Module {
    /**
     * Computes Keccak-256 hash of the input.
     *
     * Note: This is the original Keccak-256, not the finalized SHA-3 standard.
     *
     * @param data The data to hash as Uint8Array
     * @return Keccak-256 digest as Uint8Array (32 bytes)
     */
    @JsName("keccak_256")
    fun keccak256(data: Uint8Array): Uint8Array
}

/**
 * JavaScript implementation of SHA-256 hashing using @noble/hashes library.
 *
 * Converts Kotlin ByteArray to JavaScript Uint8Array, calls the noble library,
 * and converts the result back to ByteArray.
 *
 * @param data The bytes to hash
 * @return 32-byte SHA-256 digest
 */
internal actual fun sha256(data: ByteArray): ByteArray {
    val result = Sha256Module.sha256(data.toUint8Array())
    return result.toByteArray()
}

/**
 * JavaScript implementation of Keccak-256 hashing using @noble/hashes library.
 *
 * Note: This implements the original Keccak-256, not the finalized SHA-3 standard.
 * This is required for compatibility with Ethereum and other blockchain systems.
 *
 * Converts Kotlin ByteArray to JavaScript Uint8Array, calls the noble library,
 * and converts the result back to ByteArray.
 *
 * @param data The bytes to hash
 * @return 32-byte Keccak-256 digest
 */
internal actual fun keccak256(data: ByteArray): ByteArray {
    val result = Keccak256Module.keccak256(data.toUint8Array())
    return result.toByteArray()
}
