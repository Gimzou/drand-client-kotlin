package love.drand

import io.ktor.util.reflect.instanceOf
import kotlinx.coroutines.test.runTest
import love.drand.network.DrandApi
import love.drand.network.data.ChainInfo
import love.drand.network.data.HealthStatus
import love.drand.network.data.RandomnessBeacon
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DrandClientTest {
    @Test
    fun `getChainInfo should explicitly identify the beaconId in the exception message`() =
        runTest {
            // GIVEN
            val mockApi: DrandApi =
                object : DrandApi {
                    override val beacons =
                        object : DrandApi.BeaconOperations {
                            override suspend fun health(id: String): Result<HealthStatus> {
                                TODO("Not yet implemented")
                            }

                            override suspend fun info(id: String): Result<ChainInfo> = Result.failure(DrandError.NotFound())

                            override suspend fun latest(id: String): Result<RandomnessBeacon> {
                                TODO("Not yet implemented")
                            }

                            override suspend fun next(id: String): Result<RandomnessBeacon> {
                                TODO("Not yet implemented")
                            }

                            override suspend fun atRound(
                                id: String,
                                round: Long,
                            ): Result<RandomnessBeacon> {
                                TODO("Not yet implemented")
                            }

                            override suspend fun list(): Result<List<String>> {
                                TODO("Not yet implemented")
                            }
                        }

                    override val chains: DrandApi.ChainOperations
                        get() = TODO("Not yet implemented")

                    override fun close() {}
                }

            val beaconId = "UnknownBeaconID"
            val client = DrandClient(mockApi)

            runCatching { client.getChainInfo(beaconId) }
                .onFailure {
                    assertTrue(it.instanceOf(DrandError.NotFound::class))
                    assertEquals("ChainInfo not found for beaconId: $beaconId", it.message)
                }

            client.close()
        }
}
