package love.drand.crypto

import supranational.blst.BLST_ERROR
import supranational.blst.P1_Affine
import supranational.blst.P2_Affine

/**
 * Verifies a BLS signature on BLS12-381 curve with G2 signatures (96 bytes)
 * Used by pedersen-bls-chained and pedersen-bls-unchained schemes
 *
 * Public Key: G1 point (48 bytes compressed)
 * Signature: G2 point (96 bytes compressed)
 *
 * @param publicKey G1 point bytes (48 bytes, compressed)
 * @param message Message bytes to verify
 * @param signature G2 point bytes (96 bytes, compressed)
 * @param dst Domain separation tag per RFC 9380
 * @return true if signature is valid, false if verification fails
 * @throws IllegalArgumentException if inputs are malformed
 */
internal actual fun verifyBLS12381OnG2(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean {
    // Deserialize public key (G1 point)
    val pkAffine = P1_Affine(publicKey)
    if (pkAffine.is_inf) return false

    // Deserialize signature (G2 point)
    val sigAffine = P2_Affine(signature)
    if (sigAffine.is_inf) return false

    // Verify
    val result = sigAffine.core_verify(pkAffine, true, message, dst)
    return result == BLST_ERROR.BLST_SUCCESS
}

/**
 * Verifies a BLS signature on BLS12-381 curve with G1 signatures (48 bytes)
 * Used by bls-unchained-g1-rfc9380 scheme
 *
 * Signature: G1 point (48 bytes compressed)
 * Public Key: G2 point (96 bytes compressed)
 *
 * @param publicKey G2 point bytes (96 bytes, compressed)
 * @param message Message bytes to verify
 * @param signature G1 point bytes (48 bytes, compressed)
 * @param dst Domain separation tag per RFC 9380
 * @return true if signature is valid, false if verification fails
 * @throws IllegalArgumentException if inputs are malformed
 */
internal actual fun verifyBLS12381OnG1(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean {
    // Deserialize public key (G2 point)
    val pkAffine = P2_Affine(publicKey)
    if (pkAffine.is_inf) return false

    // Deserialize signature (G1 point)
    val sigAffine = P1_Affine(signature)
    if (sigAffine.is_inf) return false

    // Verify
    val result = sigAffine.core_verify(pkAffine, true, message, dst)
    return result == BLST_ERROR.BLST_SUCCESS
}

/**
 * Verifies a BLS signature on BN254 curve with G1 signatures (48 bytes)
 * Used by bls-bn254-unchained-on-g1 scheme
 *
 * Signature: G1 point (48 bytes compressed)
 * Public Key: G2 point (96 bytes compressed)
 *
 * RFC 9380 (hash-to-curve) + BLS signature draft :
 * - Public keys must NOT be point at infinity
 * - Signatures at infinity are only valid in aggregate context
 * - For single signature verification, infinity signature is invalid
 *
 * @param publicKey G2 point bytes (96 bytes, compressed)
 * @param message Message bytes to verify
 * @param signature G1 point bytes (48 bytes, compressed)
 * @param dst Domain separation tag per RFC 9380
 * @return true if signature is valid, false if verification fails
 * @throws IllegalArgumentException if inputs are malformed
 */
internal actual fun verifyBLSBN254OnG1(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean = throw NotImplementedError("BN254 verification not yet implemented on JVM")
