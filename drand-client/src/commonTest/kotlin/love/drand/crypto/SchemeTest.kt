package love.drand.crypto

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

class SchemeTest {
    // Test that all schemes can be retrieved by their ID
    @Test
    fun `all schemes are accessible via fromId`() {
        val schemes =
            listOf(
                "pedersen-bls-chained" to Scheme.BLS12381G2Chained,
                "pedersen-bls-unchained" to Scheme.BLS12381G2Unchained,
                "bls-unchained-g1-rfc9380" to Scheme.BLS12381G1UnchainedRFC9380,
                "bls-bn254-unchained-on-g1" to Scheme.BN254G1Unchained,
            )

        schemes.forEach { (id, expectedScheme) ->
            val scheme = Scheme.fromId(id)
            assertNotNull(scheme, "Scheme with ID '$id' should be found")
            assertEquals(expectedScheme, scheme)
        }
    }

    @Test
    fun `fromId returns null for unknown scheme`() {
        assertNull(Scheme.fromId("unknown-scheme-id"))
        assertNull(Scheme.fromId(""))
    }

    @Test
    fun `listSchemes returns all schemes`() {
        val schemes = Scheme.listSchemes()
        assertEquals(4, schemes.size)
        assertTrue(schemes.contains(Scheme.BLS12381G2Chained))
        assertTrue(schemes.contains(Scheme.BLS12381G2Unchained))
        assertTrue(schemes.contains(Scheme.BLS12381G1UnchainedRFC9380))
        assertTrue(schemes.contains(Scheme.BN254G1Unchained))
    }

    // ========================================================================
    // Scheme Configuration Tests
    // ========================================================================

    @Test
    fun `BLS12381G2Chained has correct configuration`() {
        val scheme = Scheme.BLS12381G2Chained

        assertEquals("pedersen-bls-chained", scheme.id)
        assertEquals(HashFunction.SHA256, scheme.hashFunction)
        assertEquals(HashToCurve.BLS12381_G2, scheme.hashToCurve)
    }

    @Test
    fun `BLS12381G2Unchained has correct configuration`() {
        val scheme = Scheme.BLS12381G2Unchained

        assertEquals("pedersen-bls-unchained", scheme.id)
        assertEquals(HashFunction.SHA256, scheme.hashFunction)
        assertEquals(HashToCurve.BLS12381_G2, scheme.hashToCurve)
    }

    @Test
    fun `BLS12381G1UnchainedRFC9380 has correct configuration`() {
        val scheme = Scheme.BLS12381G1UnchainedRFC9380

        assertEquals("bls-unchained-g1-rfc9380", scheme.id)
        assertEquals(HashFunction.SHA256, scheme.hashFunction)
        assertEquals(HashToCurve.BLS12381_G1_RFC9380, scheme.hashToCurve)
    }

    @Test
    fun `BN254G1Unchained has correct configuration`() {
        val scheme = Scheme.BN254G1Unchained

        assertEquals("bls-bn254-unchained-on-g1", scheme.id)
        assertEquals(HashFunction.KECCAK256, scheme.hashFunction)
        assertEquals(HashToCurve.BN254_G1, scheme.hashToCurve)
    }

    // ========================================================================
    // Hash Function Tests
    // ========================================================================

    @Test
    fun `schemes using BLS12-381 use SHA256`() {
        assertEquals(HashFunction.SHA256, Scheme.BLS12381G2Chained.hashFunction)
        assertEquals(HashFunction.SHA256, Scheme.BLS12381G2Unchained.hashFunction)
        assertEquals(HashFunction.SHA256, Scheme.BLS12381G1UnchainedRFC9380.hashFunction)
    }

    @Test
    fun `BN254 scheme uses KECCAK256`() {
        assertEquals(HashFunction.KECCAK256, Scheme.BN254G1Unchained.hashFunction)
    }
}
