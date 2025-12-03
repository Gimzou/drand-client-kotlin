package love.drand.crypto

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals

class HashToCurveTest {
    @Test
    fun `BLS12381_G2 has correct DST`() {
        val dst = HashToCurve.BLS12381_G2.dst
        assertEquals("BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_", dst)
    }

    @Test
    fun `BLS12381_G1_RFC9380 has correct DST`() {
        val dst = HashToCurve.BLS12381_G1_RFC9380.dst
        assertEquals("BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_", dst)
    }

    @Test
    fun `BN254_G1 has correct DST`() {
        val dst = HashToCurve.BN254_G1.dst
        assertEquals("BLS_SIG_BN254G1_XMD:KECCAK-256_SVDW_RO_NUL_", dst)
    }

    @Test
    fun `BLS12381 specs use SHA-256`() {
        assertEquals(HashFunction.SHA256, HashToCurve.BLS12381_G2.hashFunction)
        assertEquals(HashFunction.SHA256, HashToCurve.BLS12381_G1_RFC9380.hashFunction)
    }

    @Test
    fun `BN254 spec uses KECCAK-256`() {
        assertEquals(HashFunction.KECCAK256, HashToCurve.BN254_G1.hashFunction)
    }

    @Test
    fun `G1 and G2 DSTs are different for BLS12381`() {
        val g1Dst = HashToCurve.BLS12381_G1_RFC9380.dst
        val g2Dst = HashToCurve.BLS12381_G2.dst

        assertNotEquals(g1Dst, g2Dst)
    }

    @Test
    fun `BLS12381_G2 targets correct curve and group`() {
        assertEquals(HashToCurve.Curve.BLS12_381, HashToCurve.BLS12381_G2.curve)
        assertEquals(HashToCurve.Group.G2, HashToCurve.BLS12381_G2.targetGroup)
    }

    @Test
    fun `BLS12381_G1_RFC9380 targets correct curve and group`() {
        assertEquals(HashToCurve.Curve.BLS12_381, HashToCurve.BLS12381_G1_RFC9380.curve)
        assertEquals(HashToCurve.Group.G1, HashToCurve.BLS12381_G1_RFC9380.targetGroup)
    }

    @Test
    fun `BN254_G1 targets correct curve and group`() {
        assertEquals(HashToCurve.Curve.BN254, HashToCurve.BN254_G1.curve)
        assertEquals(HashToCurve.Group.G1, HashToCurve.BN254_G1.targetGroup)
    }
}
