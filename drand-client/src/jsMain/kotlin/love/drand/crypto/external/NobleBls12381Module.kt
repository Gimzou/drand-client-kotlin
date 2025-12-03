package love.drand.crypto.external

import org.khronos.webgl.Uint8Array

@JsModule("@noble/curves/bls12-381.js")
@JsNonModule
external object Bls12381Module {
    @JsName("bls12_381")
    val Bls12381: Bls12381Curve
}

external interface Bls12381Curve {
    val longSignatures: BlsSignatureScheme // Signatures in G2 (96 bytes)
    val shortSignatures: BlsSignatureScheme // Signatures in G1 (48 bytes)
}

external interface BlsSignatureScheme {
    val lengths: CurveLengths

    fun verify(
        signature: Uint8Array,
        message: WeierstrassPoint,
        publicKey: Uint8Array,
    ): Boolean

    fun verifyBatch(
        signature: Uint8Array,
        items: Array<VerifyBatchItem>,
    ): Boolean

    fun aggregatePublicKeys(publicKeys: Array<Uint8Array>): WeierstrassPoint

    fun aggregateSignatures(signatures: Array<Uint8Array>): WeierstrassPoint

    fun hash(
        message: Uint8Array,
        DST: String = definedExternally,
    ): WeierstrassPoint

    fun getPublicKey(secretKey: Uint8Array): WeierstrassPoint
}

external interface VerifyBatchItem {
    val message: Uint8Array
    val publicKey: Uint8Array
}

external interface CurveLengths {
    val publicKey: Int
    val signature: Int
    val scalar: Int
}

external interface WeierstrassPoint {
    fun toBytes(isCompressed: Boolean = definedExternally): Uint8Array

    fun toHex(isCompressed: Boolean = definedExternally): String
}
