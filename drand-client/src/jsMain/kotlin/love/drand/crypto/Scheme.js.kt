package love.drand.crypto

import love.drand.crypto.external.Bls12381Module

// ============================================================================
// BLS12-381 Signature Verification Implementations
// ============================================================================

/**
 * Verifies a BLS signature on BLS12-381 curve with G2 signatures (96 bytes)
 * Used by pedersen-bls-chained and pedersen-bls-unchained schemes
 *
 * Public Key: G1 point (48 bytes compressed)
 * Signature: G2 point (96 bytes compressed)
 *
 * This is the most common BLS scheme where messages are hashed to G2
 * using RFC 9380 hash-to-curve.
 *
 * @param publicKey G1 public key bytes (48 bytes compressed)
 * @param message Message bytes that were signed
 * @param signature G2 signature bytes (96 bytes compressed)
 * @param dst Domain separation tag per RFC 9380
 * @return true if signature is valid, false otherwise
 */
internal actual fun verifyBLS12381OnG2(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean {
    val scheme = Bls12381Module.Bls12381.longSignatures

    val hashedMessage = scheme.hash(message.toUint8Array(), dst)

    return scheme.verify(
        signature = signature.toUint8Array(),
        message = hashedMessage,
        publicKey = publicKey.toUint8Array(),
    )
}

/**
 * Verifies a BLS signature on BLS12-381 curve with G1 signatures (48 bytes)
 * Used by bls-unchained-g1-rfc9380 scheme
 *
 * Public Key: G2 point (96 bytes compressed)
 * Signature: G1 point (48 bytes compressed)
 *
 * This scheme swaps the groups compared to the standard, with messages
 * hashed to G1 using RFC 9380 hash-to-curve.
 *
 * @param publicKey G2 public key bytes (96 bytes compressed)
 * @param message Message bytes that were signed
 * @param signature G1 signature bytes (48 bytes compressed)
 * @param dst Domain separation tag per RFC 9380
 * @return true if signature is valid, false otherwise
 */
internal actual fun verifyBLS12381OnG1(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean {
    val scheme = Bls12381Module.Bls12381.shortSignatures

    // Hash message to G1 point per RFC9380
    val hashedMessage = scheme.hash(message.toUint8Array(), dst)

    return scheme.verify(
        signature = signature.toUint8Array(),
        message = hashedMessage,
        publicKey = publicKey.toUint8Array(),
    )
}

/**
 * BN254 verification is not yet implemented on JavaScript.
 *
 * Note: While @noble/curves supports BN254, integration with drand's
 * specific BN254 scheme parameters is not yet implemented.
 */
internal actual fun verifyBLSBN254OnG1(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean = throw NotImplementedError("BN254 verification not yet implemented on Javascript")
