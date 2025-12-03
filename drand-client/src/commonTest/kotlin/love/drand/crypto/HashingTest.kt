package love.drand.crypto

import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotEquals
import kotlin.test.assertNotNull

class HashingTest {
    @Test
    fun `hash functions handle empty input`() {
        val empty = byteArrayOf()

        // SHA-256 of empty string
        val sha256Hash = HashFunction.SHA256.hash(empty)
        assertNotNull(sha256Hash)
        assertEquals(32, sha256Hash.size)

        // KECCAK-256 of empty string
        val keccak256Hash = HashFunction.KECCAK256.hash(empty)
        assertNotNull(keccak256Hash)
        assertEquals(32, keccak256Hash.size)
    }

    @Test
    fun `sha256 successfully hashes`() {
        val input = "hello world".encodeToByteArray()
        val expected = "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9"

        val hash = HashFunction.SHA256.hash(input)
        assertEquals(expected, hash.toHexString())
    }

    @Test
    fun `keccak256 produces correct hash`() {
        val input = "hello world".encodeToByteArray()
        val expected = "47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"

        val hash = HashFunction.KECCAK256.hash(input)
        assertEquals(expected, hash.toHexString())
    }

    @Test
    fun `sha256 produces consistent output for same input`() {
        val data = "test".encodeToByteArray()
        val hash1 = HashFunction.SHA256.hash(data)
        val hash2 = HashFunction.SHA256.hash(data)

        assertContentEquals(hash1, hash2)
    }

    @Test
    fun `keccak256 produces consistent output for same input`() {
        val data = "test".encodeToByteArray()
        val hash1 = HashFunction.KECCAK256.hash(data)
        val hash2 = HashFunction.KECCAK256.hash(data)

        assertContentEquals(hash1, hash2)
    }

    @Test
    fun `sha256 produces different output for different input`() {
        val hash1 = HashFunction.SHA256.hash("test".encodeToByteArray())
        val hash2 = HashFunction.SHA256.hash("test2".encodeToByteArray())

        assertFalse(hash1.contentEquals(hash2))
    }

    @Test
    fun `keccak256 produces different output for different input`() {
        val hash1 = HashFunction.KECCAK256.hash("test".encodeToByteArray())
        val hash2 = HashFunction.KECCAK256.hash("test2".encodeToByteArray())

        assertFalse(hash1.contentEquals(hash2))
    }

    @Test
    fun `sha256 output is always 32 bytes`() {
        val inputs =
            listOf(
                ByteArray(0),
                "a".encodeToByteArray(),
                "test".encodeToByteArray(),
                ByteArray(1000) { it.toByte() },
            )

        inputs.forEach { input ->
            val hash = HashFunction.SHA256.hash(input)
            assertEquals(32, hash.size, "SHA-256 should always produce 32 bytes")
        }
    }

    @Test
    fun `keccak256 output is always 32 bytes`() {
        val inputs =
            listOf(
                ByteArray(0),
                "a".encodeToByteArray(),
                "test".encodeToByteArray(),
                ByteArray(1000) { it.toByte() },
            )

        inputs.forEach { input ->
            val hash = HashFunction.KECCAK256.hash(input)
            assertEquals(32, hash.size, "KECCAK-256 should always produce 32 bytes")
        }
    }

    @Test
    fun `sha256 and keccak256 produce different outputs`() {
        val input = "test message".encodeToByteArray()
        val sha256Hash = HashFunction.SHA256.hash(input)
        val keccakHash = HashFunction.KECCAK256.hash(input)

        assertEquals(32, sha256Hash.size)
        assertEquals(32, keccakHash.size)
        assertNotEquals(
            sha256Hash.toList(),
            keccakHash.toList(),
            "SHA-256 and KECCAK-256 should produce different outputs",
        )
    }
}
