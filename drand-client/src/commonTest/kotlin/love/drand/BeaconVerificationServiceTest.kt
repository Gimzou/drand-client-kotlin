package love.drand

import love.drand.crypto.sha256
import love.drand.network.data.ChainInfo
import love.drand.network.data.RandomnessBeacon
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class BeaconVerificationServiceTest {
    private val service = BeaconVerificationService()

    // Helper to create test chain info
    private fun createChainInfo(
        publicKey: String = "868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31",
        scheme: String = "pedersen-bls-chained",
        period: Long = 30L,
        genesisTime: Long = 1595431050L,
    ) = ChainInfo(
        publicKey = publicKey,
        period = period,
        genesisTime = genesisTime,
        genesisSeed = "deadbeef",
        chainHash = "test-chain",
        scheme = scheme,
        beaconId = "test-beacon",
    )

    // Helper to create test beacon
    private fun createBeacon(
        round: Long = 100L,
        signature: String = "deadbeef",
        randomness: String? = null,
        previousSignature: String? = null,
    ): RandomnessBeacon {
        val finalRandomness = randomness ?: computeRandomness(signature)
        return RandomnessBeacon(
            round = round,
            signature = signature,
            randomness = finalRandomness,
            previousSignature = previousSignature,
        )
    }

    private fun computeRandomness(signature: String): String {
        val sigBytes = signature.hexToByteArray()
        return sha256(sigBytes).toHexString()
    }

    // =======================================================================
    // Round Validation Tests
    // =======================================================================

    @Test
    fun `validateRound succeeds when rounds match`() {
        val beacon = createBeacon(round = 100L)

        val result = service.validateRound(beacon, expectedRound = 100L)

        assertTrue(result.isSuccess)
        assertEquals(beacon, result.getOrNull())
    }

    @Test
    fun `validateRound fails when rounds do not match`() {
        val beacon = createBeacon(round = 100L)

        val result = service.validateRound(beacon, expectedRound = 99L)

        assertTrue(result.isFailure)
        val error = result.exceptionOrNull() as? DrandError.VerificationFailed
        assertTrue(error != null)
        assertEquals(100L, error.beaconRound)
        assertEquals(error.message?.contains("does not match expected round"), true)
    }

    // =======================================================================
    // Randomness Validation Tests
    // =======================================================================

    @Test
    fun `validateRandomness succeeds when randomness matches SHA-256 of signature`() {
        val signature = "deadbeef"
        val correctRandomness = computeRandomness(signature)
        val beacon = createBeacon(signature = signature, randomness = correctRandomness)

        val result = service.validateRandomness(beacon)

        assertTrue(result.isSuccess)
        assertEquals(beacon, result.getOrNull())
    }

    @Test
    fun `validateRandomness fails when randomness does not match signature hash`() {
        val beacon = createBeacon(signature = "deadbeef", randomness = 1.toHexString())

        val result = service.validateRandomness(beacon)

        assertTrue(result.isFailure)
        val error = result.exceptionOrNull() as? DrandError.VerificationFailed
        assertTrue(error != null)
        assertEquals(error.message?.contains("randomness does not match"), true)
    }

    // =======================================================================
    // Signature Verification Tests
    // =======================================================================

    @Test
    fun `verifySignature fails for unsupported scheme`() {
        val chainInfo = createChainInfo(scheme = "unknown-scheme")
        val beacon = createBeacon()

        val result = service.verifySignature(beacon, chainInfo)

        assertTrue(result.isFailure)
        val error = result.exceptionOrNull()
        assertTrue(error is DrandError.VerificationFailed)
        assertEquals(error.message?.contains("Unsupported scheme"), true)
    }

    @Test
    fun `verifySignature succeeds with valid signature from Go test vector`() {
        // Using official test vector from drand Go implementation
        val chainInfo =
            createChainInfo(
                publicKey = "90bcf1bc6f710c23963bf402ffffa55c3dd3a9168c40d05b395d1e794797835eb494249095542e3b7e7405c8fbdb0908",
                scheme = "pedersen-bls-chained",
            )

        val previousSignature = "628bdd13fbdf0eb52117514afc36af7310c3b72075780502f5f725deba2304e7"
        val round = 1969L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "b68afe4b92819ed4516a5894400cdf83ea4453c422c3b43f985087167bad044e6e11954bc4cf555905fd9968ea47ef2405a55f18afdf654c97ab9ea5c0f50921cb9288d70aa78b210191b313451c78f1c601bb2816a3d46d739a3d3b02858205"

        val beacon =
            createBeacon(
                round = round,
                signature = signature,
                randomness = computeRandomness(signature),
                previousSignature = previousSignature,
            )

        val result = service.verifySignature(beacon, chainInfo)

        assertTrue(result.isSuccess, "Valid signature should verify successfully")
        assertEquals(beacon, result.getOrNull())
    }

    @Test
    fun `verifySignature fails with invalid signature`() {
        val chainInfo = createChainInfo(scheme = "pedersen-bls-chained")
        val beacon =
            createBeacon(
                round = 1969L,
                signature = "a".repeat(192), // Wrong signature
                previousSignature = "628bdd13fbdf0eb52117514afc36af7310c3b72075780502f5f725deba2304e7",
            )

        val result = service.verifySignature(beacon, chainInfo)

        assertTrue(result.isFailure)
        val error = result.exceptionOrNull() as? DrandError.VerificationFailed
        assertTrue(error != null)
    }

    @Test
    fun `verifySignature fails with wrong public key`() {
        val chainInfo =
            createChainInfo(
                publicKey = "a".repeat(96), // Wrong public key
                scheme = "pedersen-bls-chained",
            )

        val beacon =
            createBeacon(
                round = 1969L,
                signature =
                    @Suppress("ktlint_standard_max-line-length")
                    "b68afe4b92819ed4516a5894400cdf83ea4453c422c3b43f985087167bad044e6e11954bc4cf555905fd9968ea47ef2405a55f18afdf654c97ab9ea5c0f50921cb9288d70aa78b210191b313451c78f1c601bb2816a3d46d739a3d3b02858205",
                previousSignature = "628bdd13fbdf0eb52117514afc36af7310c3b72075780502f5f725deba2304e7",
            )

        val result = service.verifySignature(beacon, chainInfo)

        assertTrue(result.isFailure)
    }

    @Test
    fun `verifySignature handles genesis beacon without previous signature`() {
        val chainInfo = createChainInfo(scheme = "pedersen-bls-unchained")

        // Genesis beacon has no previous signature
        val genesisBeacon =
            createBeacon(
                round = 1L,
                signature = "a".repeat(192),
                previousSignature = null,
            )

        // Should not crash on null previousSignature
        val result = service.verifySignature(genesisBeacon, chainInfo)

        // Will fail on signature verification (invalid sig), but shouldn't crash
        assertTrue(result.isFailure)
        val error = result.exceptionOrNull()
        assertTrue(error is DrandError.VerificationFailed)
    }

    // =======================================================================
    // Full Verification Pipeline Tests
    // =======================================================================

    @Test
    fun `verifyBeacon succeeds with valid beacon - Go test vector`() {
        val chainInfo =
            createChainInfo(
                publicKey = "90bcf1bc6f710c23963bf402ffffa55c3dd3a9168c40d05b395d1e794797835eb494249095542e3b7e7405c8fbdb0908",
                scheme = "pedersen-bls-chained",
            )

        val previousSignature = "628bdd13fbdf0eb52117514afc36af7310c3b72075780502f5f725deba2304e7"
        val round = 1969L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "b68afe4b92819ed4516a5894400cdf83ea4453c422c3b43f985087167bad044e6e11954bc4cf555905fd9968ea47ef2405a55f18afdf654c97ab9ea5c0f50921cb9288d70aa78b210191b313451c78f1c601bb2816a3d46d739a3d3b02858205"

        val beacon =
            createBeacon(
                round = round,
                signature = signature,
                randomness = null,
                previousSignature = previousSignature,
            )

        val result = service.verifyBeacon(chainInfo, beacon, expectedRound = round)

        assertTrue(result.isSuccess, "Complete verification should succeed with valid beacon")
        assertEquals(beacon, result.getOrNull())
    }

    // =======================================================================
    // Scheme-Specific Tests
    // =======================================================================

    @Test
    fun `verifyBeacon works with unchained scheme`() {
        val chainInfo =
            createChainInfo(
                publicKey = "8200fc249deb0148eb918d6e213980c5d01acd7fc251900d9260136da3b54836ce125172399ddc69c4e3e11429b62c11",
                scheme = "pedersen-bls-unchained",
            )

        val round = 7601003L
        val signature =
            @Suppress("ktlint_standard_max-line-length")
            "af7eac5897b72401c0f248a26b612c5ef68e0ff830b4d78927988c89b5db3e997bfcdb7c24cb19f549830cd02cb854a1143fd53a1d4e0713ded471260869439060d170a77187eb6371742840e43eccfa225657c4cc2d9619f7c3d680470c9743"

        val beacon =
            createBeacon(
                round = round,
                signature = signature,
                randomness = null, // shall be computed on validation
                previousSignature = null, // Unchained has no previous signature
            )

        val result = service.verifyBeacon(chainInfo, beacon, expectedRound = round)

        assertTrue(result.isSuccess, "Unchained beacon should verify successfully")
    }

    @Test
    fun `verifyBeacon works with G1 RFC9380 scheme`() {
        val chainInfo =
            createChainInfo(
                publicKey =
                    @Suppress("ktlint_standard_max-line-length")
                    "81d320f220ee9c79e60e19dedc838c31e3ab919b15481e9feb52f643628c4f6a13fdc52129493875a818109d767272ca0541cbcdcea9335f2870d781b39b845ba8cbd44fdfe4967781cf72ca5917fc9398bcf97ca0548ed5a709016c4b1ff0f3",
                scheme = "bls-unchained-g1-rfc9380",
            )

        val round = 38L
        val signature = "95c93585c513ebbcb4777ff15599b3140e5ec0295faa0e483f3deadd88fa6d43f0d3703e3a4ce106e8fd6c6987f32126"

        val beacon =
            createBeacon(
                round = round,
                signature = signature,
                randomness = null, // shall be computed on validation
                previousSignature = null,
            )

        val result = service.verifyBeacon(chainInfo, beacon, expectedRound = round)

        assertTrue(result.isSuccess, "G1 RFC9380 beacon should verify successfully")
    }
}
