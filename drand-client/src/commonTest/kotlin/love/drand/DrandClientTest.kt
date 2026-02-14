package love.drand

import kotlinx.coroutines.flow.take
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.test.runTest
import love.drand.network.DrandApi
import love.drand.network.data.ChainInfo
import love.drand.network.data.HealthStatus
import love.drand.network.data.RandomnessBeacon
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DrandClientTest {
    private val testChainInfo =
        ChainInfo(
            publicKey = "868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31",
            period = 30L,
            genesisTime = 1595431050L,
            genesisSeed = "176f93498eac9ca337150b46d21dd58673ea4e3581185f869672e59fa4cb390a",
            chainHash = "8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce",
            scheme = "pedersen-bls-chained",
            beaconId = "test",
        )

    private fun fakeBeacon(round: Long) =
        RandomnessBeacon(
            round = round,
            signature = "a1b2c3d4e5f6",
            randomness = "f6e5d4c3b2a1",
        )

    private fun fakeDrandApi(
        onInfo: suspend (String) -> Result<ChainInfo> = { Result.success(testChainInfo) },
        onNext: suspend (String, Long?) -> Result<RandomnessBeacon> = { _, _ -> error("next not configured") },
    ): DrandApi =
        object : DrandApi {
            override val beacons =
                object : DrandApi.BeaconOperations {
                    override suspend fun health(id: String): Result<HealthStatus> = error("not configured")

                    override suspend fun info(id: String) = onInfo(id)

                    override suspend fun latest(id: String): Result<RandomnessBeacon> = error("not configured")

                    override suspend fun next(
                        id: String,
                        longPollingTimeoutMs: Long?,
                    ) = onNext(id, longPollingTimeoutMs)

                    override suspend fun atRound(
                        id: String,
                        round: Long,
                    ): Result<RandomnessBeacon> = error("not configured")

                    override suspend fun list(): Result<List<String>> = error("not configured")
                }
            override val chains: DrandApi.ChainOperations get() = error("not configured")

            override fun close() {}
        }

    // =======================================================================
    // Chain Info Tests
    // =======================================================================

    @Test
    fun `getChainInfo returns failure when beacon is not found`() =
        runTest {
            val api =
                fakeDrandApi(
                    onInfo = { Result.failure(DrandError.NotFound()) },
                )
            val client = DrandClient(api)

            val result = client.getChainInfo("UnknownBeaconID")

            assertTrue(result.isFailure)
            assertTrue(result.exceptionOrNull() is DrandError.NotFound)

            client.close()
        }

    // =======================================================================
    // Streaming Tests
    // =======================================================================

    @Test
    fun `watchVerifiedBeacons emits verified beacons continuously`() =
        runTest {
            var nextRound = 1L
            val api =
                fakeDrandApi(
                    onNext = { _, _ -> Result.success(fakeBeacon(nextRound++)) },
                )
            val client = DrandClient(api, verifier = NoOpBeaconVerifier())

            val beacons =
                client
                    .watchVerifiedBeacons("default")
                    .take(3)
                    .toList()

            assertEquals(3, beacons.size)
            beacons.forEachIndexed { index, result ->
                assertTrue(result.isSuccess, "Beacon ${index + 1} should be successful")
                assertEquals((index + 1).toLong(), result.getOrThrow().round)
            }

            client.close()
        }

    @Test
    fun `watchVerifiedBeacons retries on transient error and recovers`() =
        runTest {
            var callCount = 0
            val api =
                fakeDrandApi(
                    onNext =
                        { _, _ ->
                            callCount++
                            if (callCount <= 2) {
                                Result.failure(DrandError.NetworkError(cause = Exception("transient")))
                            } else {
                                Result.success(fakeBeacon(callCount.toLong()))
                            }
                        },
                )
            val client = DrandClient(api, verifier = NoOpBeaconVerifier())

            val results =
                client
                    .watchVerifiedBeacons("default")
                    .take(1)
                    .toList()

            assertEquals(1, results.size)
            assertTrue(results.first().isSuccess)
            assertEquals(3L, results.first().getOrThrow().round)
            assertEquals(3, callCount, "Should have retried 2 times before succeeding")

            client.close()
        }

    @Test
    fun `watchVerifiedBeacons terminates after max consecutive retries`() =
        runTest {
            var callCount = 0
            val api =
                fakeDrandApi(
                    onNext =
                        { _, _ ->
                            callCount++
                            Result.failure(DrandError.NetworkError(cause = Exception("persistent error")))
                        },
                )
            val client = DrandClient(api, verifier = NoOpBeaconVerifier())

            val results =
                client
                    .watchVerifiedBeacons("default")
                    .toList()

            assertEquals(1, results.size, "Should emit exactly one terminal error")
            assertTrue(results.first().isFailure)
            assertTrue(results.first().exceptionOrNull() is DrandError.NetworkError)
            assertEquals(6, callCount, "Should attempt 5 retries + 1 final failure")

            client.close()
        }

    @Test
    fun `watchVerifiedBeacons resets retry counter after successful beacon`() =
        runTest {
            var callCount = 0
            val api =
                fakeDrandApi(
                    onNext = { _, _ ->
                        callCount++
                        // Fail twice, succeed once, fail twice, succeed once
                        if (callCount % 3 == 0) {
                            Result.success(fakeBeacon(callCount.toLong()))
                        } else {
                            Result.failure(DrandError.NetworkError(cause = Exception("intermittent")))
                        }
                    },
                )
            val client = DrandClient(api, verifier = NoOpBeaconVerifier())

            val results =
                client
                    .watchVerifiedBeacons("default")
                    .take(2)
                    .toList()

            assertEquals(2, results.size)
            assertTrue(results.all { it.isSuccess }, "Both beacons should be successful")
            assertEquals(6, callCount, "2 failures + 1 success + 2 failures + 1 success")

            client.close()
        }

    @Test
    fun `watchVerifiedBeacons caches chain info across iterations`() =
        runTest {
            var infoCallCount = 0
            var nextRound = 1L
            val api =
                fakeDrandApi(
                    onInfo =
                        {
                            infoCallCount++
                            Result.success(testChainInfo)
                        },
                    onNext = { _, _ -> Result.success(fakeBeacon(nextRound++)) },
                )
            val client = DrandClient(api, verifier = NoOpBeaconVerifier())

            client
                .watchVerifiedBeacons("default")
                .take(5)
                .toList()

            assertEquals(1, infoCallCount, "Chain info should be fetched only once and cached")

            client.close()
        }
}
