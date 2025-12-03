package love.drand

import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class DrandClientIntegrationTest {
    @Test
    fun `fetches and verifies real beacon from default`() =
        runTest {
            val client = DrandClient(baseUrl = "https://api.drand.sh")

            try {
                val result = client.getVerifiedLatestBeacon("default")

                assertTrue(result.isSuccess, "Should successfully fetch and verify default beacon")

                val beacon = result.getOrNull()
                assertNotNull(beacon)
                assertTrue(beacon.round > 0, "Beacon should have positive round number")
                assertNotNull(beacon.signature, "Beacon should have signature")
                assertNotNull(beacon.derivedRandomness, "Beacon should have randomness")

                println("Successfully verified default beacon at round ${beacon.round}")
            } finally {
                client.close()
            }
        }
}
