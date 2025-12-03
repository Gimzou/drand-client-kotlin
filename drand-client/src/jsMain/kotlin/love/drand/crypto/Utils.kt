package love.drand.crypto

import org.khronos.webgl.Uint8Array
import kotlin.js.unsafeCast

internal fun ByteArray.toUint8Array(): Uint8Array {
    val array = this
    return js("new Uint8Array(array)").unsafeCast<Uint8Array>()
}

internal fun Uint8Array.toByteArray(): ByteArray {
    val array = this
    return js("new Int8Array(array)").unsafeCast<ByteArray>()
}
