package love.drand.crypto

import kotlin.test.Test
import kotlin.test.assertEquals

class UtilsTest {
    @Test
    fun `Long toByteArray with big endian`() {
        val value = 1969L
        val bytes = value.toByteArray(ByteOrder.BIG_ENDIAN)

        assertEquals(8, bytes.size)
        // Verify the encoding is correct
        assertEquals(0x00, bytes[0].toInt() and 0xFF)
        assertEquals(0x00, bytes[1].toInt() and 0xFF)
        assertEquals(0x00, bytes[2].toInt() and 0xFF)
        assertEquals(0x00, bytes[3].toInt() and 0xFF)
        assertEquals(0x00, bytes[4].toInt() and 0xFF)
        assertEquals(0x00, bytes[5].toInt() and 0xFF)
        assertEquals(0x07, bytes[6].toInt() and 0xFF)
        assertEquals(0xB1, bytes[7].toInt() and 0xFF)
    }

    @Test
    fun `Long toByteArray with little endian`() {
        val value = 1969L
        val bytes = value.toByteArray(ByteOrder.LITTLE_ENDIAN)

        assertEquals(8, bytes.size)
        assertEquals(0xB1, bytes[0].toInt() and 0xFF)
        assertEquals(0x07, bytes[1].toInt() and 0xFF)
    }

    @Test
    fun `Long toByteArray output is always 8 bytes`() {
        val testValues = listOf(0L, 1L, 255L, 256L, Long.MAX_VALUE, Long.MIN_VALUE, -1L)

        testValues.forEach { value ->
            assertEquals(8, value.toByteArray().size, "Failed for value $value")
            assertEquals(8, value.toByteArray(ByteOrder.LITTLE_ENDIAN).size, "Failed for value $value (little endian)")
        }
    }

    @Test
    fun `hexToByteArray converts correctly`() {
        val hex = "deadbeef"
        val bytes = hex.hexToByteArray()

        assertEquals(4, bytes.size)
        assertEquals(0xDE.toByte(), bytes[0])
        assertEquals(0xAD.toByte(), bytes[1])
        assertEquals(0xBE.toByte(), bytes[2])
        assertEquals(0xEF.toByte(), bytes[3])
    }
}
