package love.drand.crypto

/**
 * Converts a Long to a byte array in the specified byte order.
 * Used for encoding round numbers in beacon message computation.
 */
internal fun Long.toByteArray(byteOrder: ByteOrder = ByteOrder.BIG_ENDIAN): ByteArray =
    ByteArray(Long.SIZE_BYTES).apply {
        var value = this@toByteArray
        val range =
            when (byteOrder) {
                ByteOrder.BIG_ENDIAN -> (Long.SIZE_BYTES - 1) downTo 0
                ByteOrder.LITTLE_ENDIAN -> 0 until Long.SIZE_BYTES
            }

        for (i in range) {
            this[i] = (value and 0xFF).toByte()
            value = value shr 8
        }
    }

internal enum class ByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
}
