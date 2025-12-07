package love.drand

import kotlinx.coroutines.await
import kotlinx.coroutines.test.runTest
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

/**
 * Integration tests for the JavaScript Client wrapper.
 * These tests make real HTTP calls to the drand public API.
 */
class DrandClientIntegrationTest {
    private lateinit var client: Client

    @BeforeTest
    fun setup() {
        client = Client(baseUrl = "https://api.drand.sh")
    }

    @AfterTest
    fun teardown() {
        client.close()
    }

    @Test
    fun `fetches and verifies latest beacon from quicknet`() =
        runTest {
            val beacon = client.getVerifiedLatestBeacon("quicknet").await()

            assertTrue(beacon.round > 0)
            assertTrue(beacon.signature.isNotEmpty())
            assertTrue(beacon.randomness.isNotEmpty())

            console.log("✓ Verified quicknet beacon at round ${beacon.round}")
        }

    @Test
    fun `fetches and verifies latest beacon from default network`() =
        runTest {
            val beacon = client.getVerifiedLatestBeacon("default").await()

            assertTrue(beacon.round > 0)
            assertTrue(beacon.signature.isNotEmpty())
            assertTrue(beacon.randomness.isNotEmpty())

            console.log("✓ Verified default network beacon at round ${beacon.round}")
        }

    @Test
    fun `fetches and verifies specific round from quicknet`() =
        runTest {
            val targetRound = 1000.0
            val beacon = client.getVerifiedBeacon("quicknet", targetRound).await()

            assertEquals(targetRound, beacon.round)
            assertTrue(beacon.signature.isNotEmpty())
            assertTrue(beacon.randomness.isNotEmpty())

            console.log("✓ Verified quicknet beacon at specific round $targetRound")
        }

    @Test
    fun `retrieves chain info for quicknet`() =
        runTest {
            val chainInfo = client.getChainInfo("quicknet").await()

            assertTrue(chainInfo.publicKey.isNotEmpty())
            assertTrue(chainInfo.period > 0)
            assertEquals("bls-unchained-g1-rfc9380", chainInfo.scheme)
            assertEquals("quicknet", chainInfo.beaconId)

            console.log("✓ Retrieved quicknet chain info (period: ${chainInfo.period}s)")
        }

    @Test
    fun `retrieves chain info for default network`() =
        runTest {
            val chainInfo = client.getChainInfo("default").await()

            assertTrue(chainInfo.publicKey.isNotEmpty())
            assertTrue(chainInfo.period > 0)
            assertEquals("pedersen-bls-chained", chainInfo.scheme)
            assertEquals("default", chainInfo.beaconId)

            console.log("✓ Retrieved default network chain info (period: ${chainInfo.period}s)")
        }

    @Test
    fun `returns consistent chain info on repeated requests`() =
        runTest {
            val chainInfo1 = client.getChainInfo("quicknet").await()
            val chainInfo2 = client.getChainInfo("quicknet").await()

            assertEquals(chainInfo1.publicKey, chainInfo2.publicKey)
            assertEquals(chainInfo1.period, chainInfo2.period)
            assertEquals(chainInfo1.scheme, chainInfo2.scheme)

            console.log("✓ Chain info consistency verified")
        }

    @Test
    fun `throws error for non-existent beacon ID`() =
        runTest {
            val exception =
                assertFailsWith<Throwable> {
                    client.getVerifiedLatestBeacon("nonexistent-network-xyz").await()
                }

            assertNotNull(exception.message)
            console.log("✓ Correctly rejected invalid beacon ID: ${exception.message}")
        }

    @Test
    fun `throws error for non-existent round`() =
        runTest {
            val exception =
                assertFailsWith<Throwable> {
                    client.getVerifiedBeacon("quicknet", 999999999999.0).await()
                }

            assertNotNull(exception.message)
            console.log("✓ Correctly rejected invalid round: ${exception.message}")
        }
}
