package love.drand.crypto

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

/**
 * BLS signature verification tests using official test vectors from drand implementations.
 *
 * Test vector sources:
 * - Go drand: https://github.com/drand/drand/blob/master/crypto/curve_test.go
 * - Go schemes: https://github.com/drand/drand/blob/master/crypto/schemes_test.go
 * - TypeScript: https://github.com/drand/client-drand/blob/main/test/beacon-verification.test.ts
 *
 * These tests verify cross-implementation compatibility and ensure correct behavior
 * across all platforms (JVM with jblst, JS with noble/curves).
 */
class SchemeVerificationTest {
    // ========================================================================
    // BLS12-381 G2 Chained Scheme Tests
    // Source: pedersen-bls-chained
    // ========================================================================

    @Test
    fun `BLS12381G2Chained verifies valid beacon - Go curve_test vector`() {
        // Source: drand/crypto/curve_test.go::TestBLS12381CompatMockData
        val publicKey = "90bcf1bc6f710c23963bf402ffffa55c3dd3a9168c40d05b395d1e794797835eb494249095542e3b7e7405c8fbdb0908"
        val previousSignature = "628bdd13fbdf0eb52117514afc36af7310c3b72075780502f5f725deba2304e7"
        val round = 1969L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "b68afe4b92819ed4516a5894400cdf83ea4453c422c3b43f985087167bad044e6e11954bc4cf555905fd9968ea47ef2405a55f18afdf654c97ab9ea5c0f50921cb9288d70aa78b210191b313451c78f1c601bb2816a3d46d739a3d3b02858205"

        val message =
            Scheme.BLS12381G2Chained.hashFunction.hash(
                previousSignature.hexToByteArray() + round.toByteArray(),
            )

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification failed: ${result.exceptionOrNull()?.message}")
        assertTrue(result.getOrNull() == true, "Signature should be valid")
    }

    @Test
    fun `BLS12381G2Chained verifies valid beacon - TypeScript vector`() {
        // Source: drand/client-drand beacon-verification.test.ts
        val publicKey = "88a8227b75dba145599d894d33eebde3b36fef900d456ae2cc4388867adb4769c40359f783750a41b4d17e40f578bfdb"
        val round = 397089L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "88ccd9a91946bc0bbef2c6c60a09bbf4a247b1d2059522449aa1a35758feddfad85efe818bbde3e1e4ab0c852d96e65f0b1f97f239bf3fc918860ea846cbb500fcf7c9d0dd3d851320374460b5fc596b8cfd629f4c07c7507c259bf9beca850a"
        val previousSignature =
            @Suppress("ktlint_standard_max-line-length")
            "a2237ee39a1a6569cb8e02c6e979c07efe1f30be0ac501436bd325015f1cd6129dc56fd60efcdf9158d74ebfa34bfcbd17803dbca6d2ae8bc3a968e4dc582f8710c69de80b2e649663fef5742d22fff7d1619b75d5f222e8c9b8840bc2044bce"

        val message =
            Scheme.BLS12381G2Chained.hashFunction.hash(
                previousSignature.hexToByteArray() + round.toByteArray(),
            )

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification failed: ${result.exceptionOrNull()?.message}")
        assertTrue(result.getOrNull() == true, "Signature should be valid")
    }

    @Test
    fun `BLS12381G2Chained verifies valid beacon - Go schemes_test round 2634945`() {
        // Source: drand/crypto/schemes_test.go::TestVerifyBeacon
        val publicKey = "868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31"
        val round = 2634945L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "814778ed1e480406beb43b74af71ce2f0373e0ea1bfdfea8f9ed62c876c20fcbc7f0163860e3da42ed2148756015f4551451898ffe06d384b4d002245025571b6b7a752f7158b40ad92b13b6d703ad31922a617f2c7f6d960b84d56cf1d79eef"
        val previousSignature =
            @Suppress("ktlint_standard_max-line-length")
            "8bd96294383b4d1e04e736360bd7a487f9f409f1e7bd800b720656a310d577b3bdb1e1631af6c5782a1d8979c502f395036181eff4058960fc40bb7034cdae1991d3eda518ab204a077d2f7e724974cf87b407e549bd815cf0b8e5a3832f675d"

        val message =
            Scheme.BLS12381G2Chained.hashFunction.hash(
                previousSignature.hexToByteArray() + round.toByteArray(),
            )

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification failed: ${result.exceptionOrNull()?.message}")
        assertTrue(result.getOrNull() == true, "Signature should be valid")
    }

    @Test
    fun `BLS12381G2Chained verifies valid beacon - Go schemes_test round 3361396`() {
        // Source: drand/crypto/schemes_test.go::TestVerifyBeacon
        val publicKey = "922a2e93828ff83345bae533f5172669a26c02dc76d6bf59c80892e12ab1455c229211886f35bb56af6d5bea981024df"
        val round = 3361396L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "9904b4ec42e82cb42ad53f171cf0510a5eedff8b5e02e2db5a187489f7875307746998b9a6cf82130d291126d4b83cea1048c9b3f07a067e632c20391dc059d22d6a8e835f3980c8bd0183fb6df00a8fbbe6b8c9f61e888dfa76e12af4d4e355"
        val previousSignature =
            @Suppress("ktlint_standard_max-line-length")
            "a2377f4e0403f0fd05f709a3292be1b2b59fe990a673ad7b7561b5bd5982b882a2378d36e39befb6ea3bb7aac113c50a18fb07aa4f9a59f95f1aaa7826dafbfcdbf22347c29996c294286fd11b402ad83edd83fa21fe6735fccb65785edbed47"

        val message =
            Scheme.BLS12381G2Chained.hashFunction.hash(
                previousSignature.hexToByteArray() + round.toByteArray(),
            )

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification failed: ${result.exceptionOrNull()?.message}")
        assertTrue(result.getOrNull() == true, "Signature should be valid")
    }

    @Test
    fun `BLS12381G2Chained rejects signature with wrong round`() {
        val publicKey = "88a8227b75dba145599d894d33eebde3b36fef900d456ae2cc4388867adb4769c40359f783750a41b4d17e40f578bfdb"
        val wrongRound = 397088L // Changed from valid 397089
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "88ccd9a91946bc0bbef2c6c60a09bbf4a247b1d2059522449aa1a35758feddfad85efe818bbde3e1e4ab0c852d96e65f0b1f97f239bf3fc918860ea846cbb500fcf7c9d0dd3d851320374460b5fc596b8cfd629f4c07c7507c259bf9beca850a"
        val previousSignature =
            @Suppress("ktlint_standard_max-line-length")
            "a2237ee39a1a6569cb8e02c6e979c07efe1f30be0ac501436bd325015f1cd6129dc56fd60efcdf9158d74ebfa34bfcbd17803dbca6d2ae8bc3a968e4dc582f8710c69de80b2e649663fef5742d22fff7d1619b75d5f222e8c9b8840bc2044bce"

        val message =
            Scheme.BLS12381G2Chained.hashFunction.hash(
                previousSignature.hexToByteArray() + wrongRound.toByteArray(),
            )

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification should complete")
        assertFalse(result.getOrNull() ?: true, "Should reject wrong round")
    }

    // ========================================================================
    // BLS12-381 G2 Unchained Scheme Tests
    // Source: pedersen-bls-unchained
    // ========================================================================

    @Test
    fun `BLS12381G2Unchained verifies valid beacon - TypeScript vector`() {
        // Source: drand/client-drand beacon-verification.test.ts
        val publicKey = "8200fc249deb0148eb918d6e213980c5d01acd7fc251900d9260136da3b54836ce125172399ddc69c4e3e11429b62c11"
        val round = 19369534L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "a33833d2098f5e0c4df334fb6c5b1c2de3ab293c77825f55d816254dabf7f4f3d429b6207e1cd2a808876e06058a1f8102bb6f6927b654b391259ea99c3566a4eb55feb9665dbaf9d33af08a10b1d8d8b35d91fd3536eb4c197be0041beb5dc2"

        val message = Scheme.BLS12381G2Unchained.hashFunction.hash(round.toByteArray())

        val result =
            Scheme.BLS12381G2Unchained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification failed: ${result.exceptionOrNull()?.message}")
        assertTrue(result.getOrNull() == true, "Signature should be valid")
    }

    @Test
    fun `BLS12381G2Unchained verifies valid beacon - Go schemes_test round 7601003`() {
        // Source: drand/crypto/schemes_test.go::TestVerifyBeacon
        val publicKey = "8200fc249deb0148eb918d6e213980c5d01acd7fc251900d9260136da3b54836ce125172399ddc69c4e3e11429b62c11"
        val round = 7601003L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "af7eac5897b72401c0f248a26b612c5ef68e0ff830b4d78927988c89b5db3e997bfcdb7c24cb19f549830cd02cb854a1143fd53a1d4e0713ded471260869439060d170a77187eb6371742840e43eccfa225657c4cc2d9619f7c3d680470c9743"

        val message = Scheme.BLS12381G2Unchained.hashFunction.hash(round.toByteArray())

        val result =
            Scheme.BLS12381G2Unchained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification failed: ${result.exceptionOrNull()?.message}")
        assertTrue(result.getOrNull() == true, "Signature should be valid")
    }

    @Test
    fun `BLS12381G2Unchained rejects signature with wrong round`() {
        val publicKey = "8d91ae0f4e3cd277cfc46aba26680232b0d5bb4444602cdb23442d62e17f43cdffb1104909e535430c10a6a1ce680a65"
        val wrongRound = 397091L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "94da96b5b985a22a3d99fa3051a42feb4da9218763f6c836fca3770292dbf4b01f5d378859a113960548d167eaa144250a2c8e34c51c5270152ac2bc7a52632236f746545e0fae52f69068c017745204240d19dae2b4d038cef3c6047fcd6539"

        val message = Scheme.BLS12381G2Unchained.hashFunction.hash(wrongRound.toByteArray())

        val result =
            Scheme.BLS12381G2Unchained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification should complete")
        assertFalse(result.getOrNull() ?: true, "Should reject wrong round")
    }

    // ========================================================================
    // BLS12-381 G1 RFC9380 Scheme Tests
    // Source: bls-unchained-g1-rfc9380
    // ========================================================================

    @Test
    fun `BLS12381G1UnchainedRFC9380 verifies valid signature - TypeScript vector round 38`() {
        // Source: drand/client-drand beacon-verification.test.ts
        val publicKey =
            @Suppress("ktlint_standard_max-line-length")
            "81d320f220ee9c79e60e19dedc838c31e3ab919b15481e9feb52f643628c4f6a13fdc52129493875a818109d767272ca0541cbcdcea9335f2870d781b39b845ba8cbd44fdfe4967781cf72ca5917fc9398bcf97ca0548ed5a709016c4b1ff0f3"
        val round = 38L
        val signature = "95c93585c513ebbcb4777ff15599b3140e5ec0295faa0e483f3deadd88fa6d43f0d3703e3a4ce106e8fd6c6987f32126"

        val message = Scheme.BLS12381G1UnchainedRFC9380.hashFunction.hash(round.toByteArray())

        val result =
            Scheme.BLS12381G1UnchainedRFC9380.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification failed: ${result.exceptionOrNull()?.message}")
        assertTrue(result.getOrNull() == true, "Signature should be valid")
    }

    @Test
    fun `BLS12381G1UnchainedRFC9380 rejects signature with wrong round`() {
        val publicKey =
            @Suppress("ktlint_standard_max-line-length")
            "81d320f220ee9c79e60e19dedc838c31e3ab919b15481e9feb52f643628c4f6a13fdc52129493875a818109d767272ca0541cbcdcea9335f2870d781b39b845ba8cbd44fdfe4967781cf72ca5917fc9398bcf97ca0548ed5a709016c4b1ff0f3"
        val wrongRound = 55L
        val signature = "95c93585c513ebbcb4777ff15599b3140e5ec0295faa0e483f3deadd88fa6d43f0d3703e3a4ce106e8fd6c6987f32126"

        val message = Scheme.BLS12381G1UnchainedRFC9380.hashFunction.hash(wrongRound.toByteArray())

        val result =
            Scheme.BLS12381G1UnchainedRFC9380.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification should complete")
        assertFalse(result.getOrNull() ?: true, "Should reject wrong round")
    }

    // ========================================================================
    // Edge Cases and Error Handling
    // ========================================================================

    @Test
    fun `handles malformed public key gracefully`() {
        val invalidPublicKey = "not-a-valid-hex-string"
        val message = byteArrayOf(1, 2, 3)
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "b68afe4b92819ed4516a5894400cdf83ea4453c422c3b43f985087167bad044e6e11954bc4cf555905fd9968ea47ef2405a55f18afdf654c97ab9ea5c0f50921cb9288d70aa78b210191b313451c78f1c601bb2816a3d46d739a3d3b02858205"

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = invalidPublicKey.encodeToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isFailure, "Should fail with malformed public key")
    }

    @Test
    fun `handles infinity public key - G2 signatures`() {
        val infinityPublicKey = "c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        val message = byteArrayOf(1, 2, 3)
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "b68afe4b92819ed4516a5894400cdf83ea4453c422c3b43f985087167bad044e6e11954bc4cf555905fd9968ea47ef2405a55f18afdf654c97ab9ea5c0f50921cb9288d70aa78b210191b313451c78f1c601bb2816a3d46d739a3d3b02858205"

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = infinityPublicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification should complete")
        assertFalse(result.getOrNull() ?: true, "Should reject infinity public key")
    }

    @Test
    fun `handles infinity signature - G2 signatures`() {
        val publicKey = "90bcf1bc6f710c23963bf402ffffa55c3dd3a9168c40d05b395d1e794797835eb494249095542e3b7e7405c8fbdb0908"
        val message = byteArrayOf(1, 2, 3)
        val infinitySignature =
            @Suppress("ktlint_standard_max-line-length")
            "c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

        val result =
            Scheme.BLS12381G2Chained.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = infinitySignature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification should complete")
        assertFalse(result.getOrNull() ?: true, "Should reject infinity signature")
    }

    @Test
    fun `handles infinity public key - G1 signatures`() {
        val infinityPublicKey =
            @Suppress("ktlint_standard_max-line-length")
            "c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        val message = byteArrayOf(1, 2, 3)
        val signature = "95c93585c513ebbcb4777ff15599b3140e5ec0295faa0e483f3deadd88fa6d43f0d3703e3a4ce106e8fd6c6987f32126"

        val result =
            Scheme.BLS12381G1UnchainedRFC9380.verifyBLSSignature(
                publicKey = infinityPublicKey.hexToByteArray(),
                message = message,
                signature = signature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification should complete")
        assertFalse(result.getOrNull() ?: true, "Should reject infinity public key")
    }

    @Test
    fun `handles infinity signature - G1 signatures`() {
        val publicKey =
            @Suppress("ktlint_standard_max-line-length")
            "81d320f220ee9c79e60e19dedc838c31e3ab919b15481e9feb52f643628c4f6a13fdc52129493875a818109d767272ca0541cbcdcea9335f2870d781b39b845ba8cbd44fdfe4967781cf72ca5917fc9398bcf97ca0548ed5a709016c4b1ff0f3"
        val message = byteArrayOf(1, 2, 3)
        val infinitySignature = "c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

        val result =
            Scheme.BLS12381G1UnchainedRFC9380.verifyBLSSignature(
                publicKey = publicKey.hexToByteArray(),
                message = message,
                signature = infinitySignature.hexToByteArray(),
            )

        assertTrue(result.isSuccess, "Verification should complete")
        assertFalse(result.getOrNull() ?: true, "Should reject infinity signature")
    }
}
