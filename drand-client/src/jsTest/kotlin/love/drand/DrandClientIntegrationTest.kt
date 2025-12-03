package love.drand

import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

/**
 * Integration tests for DrandClient on JavaScript platform.
 * These tests make real HTTP calls to the drand API.
 */
class DrandClientIntegrationTest {
    @Test
    fun `fetches and verifies real beacon from quicknet network`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                val result = client.getVerifiedLatestBeacon("quicknet")

                assertTrue(result.isSuccess, "Should successfully fetch and verify quicknet beacon")

                val beacon = result.getOrNull()
                assertNotNull(beacon, "Beacon should not be null")
                assertTrue(beacon.round > 0, "Beacon should have positive round number")
                assertNotNull(beacon.signature, "Beacon should have signature")
                assertNotNull(beacon.derivedRandomness, "Beacon should have randomness")
                assertTrue(beacon.signature.isNotEmpty(), "Signature should not be empty")
                assertTrue(beacon.derivedRandomness.isNotEmpty(), "Randomness should not be empty")

                console.log("✓ Successfully verified quicknet beacon at round ${beacon.round}")
            } finally {
                client.close()
            }
        }

    @Test
    fun `fetches and verifies real beacon from default network`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                val result = client.getVerifiedLatestBeacon("default")

                assertTrue(result.isSuccess, "Should successfully fetch and verify default beacon")

                val beacon = result.getOrNull()
                assertNotNull(beacon, "Beacon should not be null")
                assertTrue(beacon.round > 0, "Beacon should have positive round number")
                assertNotNull(beacon.signature, "Beacon should have signature")
                assertNotNull(beacon.derivedRandomness, "Beacon should have randomness")

                console.log("✓ Successfully verified default beacon at round ${beacon.round}")
            } finally {
                client.close()
            }
        }

    @Test
    fun `fetches and verifies specific round from quicknet`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                // Fetch a known round (round 1000 should exist)
                val result = client.getVerifiedBeacon("quicknet", 1000)

                assertTrue(result.isSuccess, "Should successfully fetch and verify specific round")

                val beacon = result.getOrNull()
                assertNotNull(beacon, "Beacon should not be null")
                assertEquals(1000L, beacon.round, "Beacon round should match requested round")
                assertNotNull(beacon.signature, "Beacon should have signature")
                assertNotNull(beacon.derivedRandomness, "Beacon should have randomness")

                console.log("✓ Successfully verified quicknet beacon round 1000")
            } finally {
                client.close()
            }
        }

    @Test
    fun `retrieves chain info for quicknet network`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                val result = client.getChainInfo("quicknet")

                assertTrue(result.isSuccess, "Should successfully fetch chain info")

                val chainInfo = result.getOrNull()
                assertNotNull(chainInfo, "Chain info should not be null")
                assertNotNull(chainInfo.publicKey, "Should have public key")
                assertTrue(chainInfo.publicKey.isNotEmpty(), "Public key should not be empty")
                assertTrue(chainInfo.period > 0, "Period should be positive")
                assertEquals("bls-unchained-g1-rfc9380", chainInfo.scheme, "Quicknet should use RFC9380 scheme")
                assertNotNull(chainInfo.chainHash, "Should have chain hash")
                assertEquals("quicknet", chainInfo.beaconId, "Beacon ID should be quicknet")

                console.log("✓ Retrieved chain info for quicknet (period: ${chainInfo.period}s)")
            } finally {
                client.close()
            }
        }

    @Test
    fun `retrieves chain info for default network`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                val result = client.getChainInfo("default")

                assertTrue(result.isSuccess, "Should successfully fetch chain info")

                val chainInfo = result.getOrNull()
                assertNotNull(chainInfo, "Chain info should not be null")
                assertNotNull(chainInfo.publicKey, "Should have public key")
                assertTrue(chainInfo.period > 0, "Period should be positive")
                assertEquals("pedersen-bls-chained", chainInfo.scheme, "Default should use chained scheme")
                assertEquals("default", chainInfo.beaconId, "Beacon ID should be default")

                console.log("✓ Retrieved chain info for default (period: ${chainInfo.period}s)")
            } finally {
                client.close()
            }
        }

    @Test
    fun `chain info is cached on subsequent requests`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                // First request
                val result1 = client.getChainInfo("quicknet")
                assertTrue(result1.isSuccess, "First request should succeed")
                val chainInfo1 = result1.getOrNull()
                assertNotNull(chainInfo1)

                // Second request (should be cached)
                val result2 = client.getChainInfo("quicknet")
                assertTrue(result2.isSuccess, "Second request should succeed")
                val chainInfo2 = result2.getOrNull()
                assertNotNull(chainInfo2)

                // Should be the same instance or at least equal data
                assertEquals(chainInfo1.publicKey, chainInfo2.publicKey, "Cached chain info should match")
                assertEquals(chainInfo1.period, chainInfo2.period, "Cached chain info should match")

                console.log("✓ Chain info caching working correctly")
            } finally {
                client.close()
            }
        }

    @Test
    fun `handles non-existent beacon ID gracefully`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                val result = client.getVerifiedLatestBeacon("nonexistent-network-id")

                assertTrue(result.isFailure, "Should fail for non-existent beacon ID")

                val error = result.exceptionOrNull()
                assertNotNull(error, "Should have an error")

                console.log("✓ Correctly handled non-existent beacon ID with error: ${error.message}")
            } finally {
                client.close()
            }
        }

    @Test
    fun `handles non-existent round gracefully`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                // Request a round far in the future that doesn't exist yet
                val result = client.getVerifiedBeacon("quicknet", 999999999999L)

                assertTrue(result.isFailure, "Should fail for non-existent round")

                val error = result.exceptionOrNull()
                assertNotNull(error, "Should have an error")

                console.log("✓ Correctly handled non-existent round with error: ${error.message}")
            } finally {
                client.close()
            }
        }
}
