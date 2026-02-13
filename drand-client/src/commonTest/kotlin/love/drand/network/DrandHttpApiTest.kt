package love.drand.network

import io.ktor.client.HttpClient
import io.ktor.client.engine.mock.MockEngine
import io.ktor.client.engine.mock.respond
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.headersOf
import io.ktor.serialization.kotlinx.json.json
import kotlinx.coroutines.delay
import kotlinx.coroutines.test.runTest
import kotlinx.serialization.json.Json
import love.drand.DrandError
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class DrandHttpApiTest {
    private val httpConfig =
        HttpConfig(
            requestTimeoutMs = 100,
            connectTimeoutMs = 100,
            socketTimeoutMs = 100,
        )

    private suspend fun withMockApi(
        mockEngine: MockEngine,
        block: suspend (DrandHttpApi) -> Unit,
    ) {
        val api =
            DrandHttpApi(
                baseUrl = "https://api.drand.sh",
                config = httpConfig,
                httpClient =
                    HttpClient(mockEngine) {
                        expectSuccess = true
                        install(ContentNegotiation) {
                            json(Json { ignoreUnknownKeys = true })
                        }
                        install(HttpTimeout) {
                            requestTimeoutMillis = httpConfig.requestTimeoutMs
                            connectTimeoutMillis = httpConfig.connectTimeoutMs
                            socketTimeoutMillis = httpConfig.socketTimeoutMs
                        }
                    },
            )

        try {
            block(api)
        } finally {
            api.close()
        }
    }

    @Test
    fun `client construction fails on invalid url`() =
        runTest {
            val invalidUrls =
                listOf(
                    "",
                    "tcp://",
                    "/api.drand.sh",
                    "https://api.drand.sh/",
                )

            invalidUrls.forEach { url ->
                val result = runCatching { DrandHttpApi(url) }
                val exception = result.exceptionOrNull()
                assertNotNull(exception)
                assertTrue(exception is IllegalArgumentException)
            }
        }

    @Test
    fun `404 error returns NotFound error`() =
        runTest {
            val mockEngine =
                MockEngine {
                    respond(
                        content = "",
                        status = HttpStatusCode.NotFound,
                    )
                }

            withMockApi(mockEngine) { api ->
                val result = api.beacons.info("non-existent")

                assertTrue(result.isFailure)
                val error = result.exceptionOrNull()
                assertTrue(error is DrandError.NotFound, "Expected DrandError.NotFound")
            }
        }

    @Test
    fun `serialization error is wrapped inside a DrandError`() =
        runTest {
            val mockEngine =
                MockEngine {
                    respond(
                        content = """{"invalid-key": "invalid-value"}""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val result = api.beacons.health("some-id")
                assertTrue(result.isFailure)

                val error = result.exceptionOrNull()
                assertTrue(error is DrandError.ParseError, "Expected DrandError.ParseError")
                assertNotNull(error.cause)
            }
        }

    @Test
    fun `beacons latest returns correct beacon data`() =
        runTest {
            val mockEngine =
                MockEngine { request ->
                    assertEquals(
                        "https://api.drand.sh/v2/beacons/some-id/rounds/latest",
                        request.url.toString(),
                    )
                    respond(
                        content = """{"round": 1, "signature": "sig", "previous_signature": "prev"}""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val result = api.beacons.latest("some-id").getOrThrow()

                assertEquals(1L, result.round)
                assertEquals("sig", result.signature)
                assertEquals("prev", result.previousSignature)
            }
        }

    @Test
    fun `chains atRound returns correct beacon data`() =
        runTest {
            val mockEngine =
                MockEngine { request ->
                    assertEquals(
                        "https://api.drand.sh/v2/chains/some-hash/rounds/12345",
                        request.url.toString(),
                    )
                    respond(
                        content = """{"round": 12345, "signature": "sig", "previous_signature": "prev"}""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val result = api.chains.atRound("some-hash", 12345).getOrThrow()
                assertEquals(12345, result.round)
                assertEquals("sig", result.signature)
                assertEquals("prev", result.previousSignature)
            }
        }

    @Test
    fun `beacons info returns correct chainInfo data`() =
        runTest {
            val mockEngine =
                MockEngine { request ->
                    assertEquals(
                        "https://api.drand.sh/v2/beacons/some-id/info",
                        request.url.toString(),
                    )
                    respond(
                        content =
                            """
                            {
                              "public_key": "abc",
                              "period": 3,
                              "genesis_time": 0,
                              "genesis_seed": "seed",
                              "chain_hash": "some-hash",
                              "scheme": "some-scheme",
                              "beacon_id": "some-id"
                            }
                            """.trimIndent(),
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val chainInfo = api.beacons.info("some-id").getOrThrow()
                assertEquals("abc", chainInfo.publicKey)
                assertEquals(3L, chainInfo.period)
                assertEquals(0L, chainInfo.genesisTime)
                assertEquals("seed", chainInfo.genesisSeed)
                assertEquals("seed", chainInfo.genesisSeed)
                assertEquals("some-hash", chainInfo.chainHash)
                assertEquals("some-scheme", chainInfo.scheme)
                assertEquals("some-id", chainInfo.beaconId)
            }
        }

    @Test
    fun `beacons health returns correct health status data`() =
        runTest {
            val mockEngine =
                MockEngine { request ->
                    assertEquals(
                        "https://api.drand.sh/v2/beacons/some-id/health",
                        request.url.toString(),
                    )
                    respond(
                        content = """{ "current": 1000000, "expected": 1000000 }""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val result = api.beacons.health("some-id")
                val healthStatus = result.getOrNull()
                assertNotNull(healthStatus)
                assertEquals(1_000_000, healthStatus.current)
            }
        }

    @Test
    fun `beacon health endpoint throws network exception if timeout is reached`() =
        runTest {
            val timeout = httpConfig.requestTimeoutMs
            val mockEngine =
                MockEngine { request ->
                    delay(timeout * 2)
                    respond(
                        content = """{}""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val result = api.beacons.health("some-id")
                assertTrue(result.isFailure)

                assertTrue(result.exceptionOrNull() is DrandError.NetworkError)
            }
        }

    @Test
    fun `beacon next endpoint supports long polling request with extended timeout`() =
        runTest {
            val timeout = httpConfig.requestTimeoutMs
            val mockEngine =
                MockEngine { request ->
                    delay(timeout * 2)
                    respond(
                        content = """{"round": 1, "signature": "sig", "previous_signature": "prev"}""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val longPollingTimeoutMs = httpConfig.requestTimeoutMs * 4 // longer than delay
                val nextBeacon = api.beacons.next("some-id", longPollingTimeoutMs).getOrThrow()

                assertEquals(1L, nextBeacon.round)
                assertEquals("sig", nextBeacon.signature)
                assertEquals("prev", nextBeacon.previousSignature)
            }
        }

    @Test
    fun `beacon next endpoint times out if response exceeds long polling timeout`() =
        runTest {
            val timeout = httpConfig.requestTimeoutMs
            val mockEngine =
                MockEngine { request ->
                    delay(timeout * 8) // Longer than any timeout
                    respond(
                        content = """{"round": 1, "signature": "sig", "previous_signature": "prev"}""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val longPollingTimeoutMs = httpConfig.requestTimeoutMs * 4
                val result = api.beacons.next("some-id", longPollingTimeoutMs)

                assertTrue(result.isFailure)
                assertTrue(result.exceptionOrNull() is DrandError.NetworkError)
            }
        }

    @Test
    fun `beacon next endpoint uses default timeout when longPollingTimeoutMs is null`() =
        runTest {
            val timeout = httpConfig.requestTimeoutMs
            val mockEngine =
                MockEngine { request ->
                    delay(timeout * 2) // Longer than default timeout
                    respond(
                        content = """{"round": 1, "signature": "sig", "previous_signature": "prev"}""",
                        status = HttpStatusCode.OK,
                        headers = headersOf(HttpHeaders.ContentType, "application/json"),
                    )
                }

            withMockApi(mockEngine) { api ->
                val result = api.beacons.next("some-id", longPollingTimeoutMs = null)

                assertTrue(result.isFailure)
                assertTrue(result.exceptionOrNull() is DrandError.NetworkError)
            }
        }
}
