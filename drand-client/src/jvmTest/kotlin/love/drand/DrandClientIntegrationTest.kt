package love.drand

import kotlinx.coroutines.flow.take
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.test.runTest
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue
import kotlin.time.Duration.Companion.seconds

class DrandClientIntegrationTest {
    private lateinit var client: DrandClient

    @BeforeTest
    fun setup() {
        client = DrandClient(baseUrl = "https://api.drand.sh")
    }

    @AfterTest
    fun teardown() {
        client.close()
    }

    @Test
    fun `fetches and verifies real beacon from default`() =
        runTest {
            val result = client.getVerifiedLatestBeacon("default")

            assertTrue(result.isSuccess, "Should successfully fetch and verify default beacon")

            val beacon = result.getOrNull()
            assertNotNull(beacon)
            assertTrue(beacon.round > 0, "Beacon should have positive round number")
            assertNotNull(beacon.signature, "Beacon should have signature")
            assertNotNull(beacon.derivedRandomness, "Beacon should have randomness")
        }

    @Test
    fun `streams and verifies real beacons from quicknet`() =
        runTest(timeout = 30.seconds) {
            val beacons =
                client
                    .watchVerifiedBeacons("quicknet")
                    .take(2)
                    .toList()

            assertEquals(2, beacons.size)
            assertTrue(beacons.all { it.isSuccess }, "All beacons should be verified successfully")

            val rounds = beacons.map { it.getOrThrow().round }
            assertTrue(rounds[1] > rounds[0], "Rounds should be increasing")

            beacons.forEach { result ->
                val beacon = result.getOrThrow()
                assertTrue(beacon.round > 0)
                assertTrue(beacon.signature.isNotEmpty())
                assertTrue(beacon.derivedRandomness.isNotEmpty())
            }
        }
}
