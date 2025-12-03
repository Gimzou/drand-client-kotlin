package love.drand.crypto

import org.khronos.webgl.Uint8Array

@JsModule("@noble/hashes/sha2.js")
@JsNonModule
external object Sha256Module {
    fun sha256(data: Uint8Array): Uint8Array
}

@JsModule("@noble/hashes/sha3.js")
@JsNonModule
external object Keccak256Module {
    @JsName("keccak_256")
    fun keccak256(data: Uint8Array): Uint8Array
}

internal actual fun sha256(data: ByteArray): ByteArray {
    val result = Sha256Module.sha256(data.toUint8Array())
    return result.toByteArray()
}

internal actual fun keccak256(data: ByteArray): ByteArray {
    val result = Keccak256Module.keccak256(data.toUint8Array())
    return result.toByteArray()
}
