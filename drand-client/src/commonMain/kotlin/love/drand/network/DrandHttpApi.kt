package love.drand.network

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.ClientRequestException
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.ServerResponseException
import io.ktor.client.plugins.UserAgent
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.request.get
import io.ktor.client.statement.request
import io.ktor.http.HttpStatusCode
import io.ktor.serialization.JsonConvertException
import io.ktor.serialization.kotlinx.json.json
import kotlinx.coroutines.CancellationException
import kotlinx.io.IOException
import kotlinx.serialization.SerializationException
import kotlinx.serialization.json.Json
import love.drand.BuildConfig
import love.drand.DrandError
import love.drand.network.data.ChainInfo
import love.drand.network.data.HealthStatus
import love.drand.network.data.RandomnessBeacon

private fun createDefaultHttpClient() =
    HttpClient {
        expectSuccess = true

        install(UserAgent) {
            agent = "drand-kotlin-client-${BuildConfig.VERSION}"
        }

        install(ContentNegotiation) {
            json(
                Json {
                    ignoreUnknownKeys = true
                    useAlternativeNames = false
                },
            )
        }
        install(HttpTimeout) {
            requestTimeoutMillis = 30_000 // 30 seconds total
            connectTimeoutMillis = 10_000 // 10 seconds to connect
            socketTimeoutMillis = 10_000 // 10 seconds to read
        }
    }

/**
 * HTTP implementation of the drand API using Ktor client.
 *
 * Provides access to drand's v2 HTTP API with proper error handling
 * and JSON serialization.
 *
 * Example:
 * ```kotlin
 * val api = DrandHttpApi()
 * val beacon = api.beacons.latest("default").getOrThrow()
 * api.close()
 * ```
 *
 * @param baseUrl Base URL for the drand API (default: https://api.drand.sh)
 * @param httpClient Custom HttpClient instance (optional, for testing/customization)
 */
class DrandHttpApi(
    private val baseUrl: String = "https://api.drand.sh",
    private val httpClient: HttpClient = createDefaultHttpClient(),
) : DrandApi {
    override val beacons =
        object : DrandApi.BeaconOperations {
            private val resourceType = "beacons"

            override suspend fun health(id: String): Result<HealthStatus> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$id/health").body()
                }

            override suspend fun info(id: String): Result<ChainInfo> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$id/info").body()
                }

            override suspend fun latest(id: String): Result<RandomnessBeacon> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$id/rounds/latest").body()
                }

            override suspend fun next(id: String): Result<RandomnessBeacon> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$id/rounds/next").body()
                }

            override suspend fun atRound(
                id: String,
                round: Long,
            ): Result<RandomnessBeacon> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$id/rounds/$round").body()
                }

            override suspend fun list(): Result<List<String>> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType").body()
                }
        }

    override val chains =
        object : DrandApi.ChainOperations {
            private val resourceType = "chains"

            override suspend fun health(chainHash: String): Result<HealthStatus> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$chainHash/health").body()
                }

            override suspend fun info(chainHash: String): Result<ChainInfo> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$chainHash/info").body()
                }

            override suspend fun latest(chainHash: String): Result<RandomnessBeacon> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$chainHash/rounds/latest").body()
                }

            override suspend fun next(chainHash: String): Result<RandomnessBeacon> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$chainHash/rounds/next").body()
                }

            override suspend fun atRound(
                chainHash: String,
                round: Long,
            ): Result<RandomnessBeacon> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType/$chainHash/rounds/$round").body()
                }

            override suspend fun list(): Result<List<String>> =
                executeRequest {
                    httpClient.get("$baseUrl/v2/$resourceType").body()
                }
        }

    private suspend inline fun <T> executeRequest(crossinline block: suspend () -> T): Result<T> =
        try {
            Result.success(block())
        } catch (e: CancellationException) {
            throw e
        } catch (e: ClientRequestException) {
            Result.failure(
                when (e.response.status) {
                    HttpStatusCode.NotFound ->
                        DrandError.NotFound(
                            message = "Resource not found: ${e.response.request.url}",
                            cause = e,
                        )
                    HttpStatusCode.BadRequest ->
                        DrandError.InvalidRequest(
                            message = "Invalid request: ${e.response.status}",
                            cause = e,
                        )
                    HttpStatusCode.TooManyRequests ->
                        DrandError.RateLimited(
                            message = "Rate limited by server",
                            cause = e,
                        )
                    else ->
                        DrandError.ServerError(
                            statusCode = e.response.status.value,
                            message = "Client error: ${e.response.status}",
                            cause = e,
                        )
                },
            )
        } catch (e: ServerResponseException) {
            Result.failure(
                DrandError.ServerError(
                    statusCode = e.response.status.value,
                    message = "Server error: ${e.response.status}",
                    cause = e,
                ),
            )
        } catch (e: SerializationException) {
            Result.failure(
                DrandError.ParseError(
                    message = "Failed to parse response: ${e.message}",
                    cause = e,
                ),
            )
        } catch (e: JsonConvertException) {
            Result.failure(
                DrandError.ParseError(
                    message = "Failed to parse JSON: ${e.message}",
                    cause = e,
                ),
            )
        } catch (e: IOException) {
            Result.failure(
                DrandError.NetworkError(
                    message = "Network I/O error: ${e.message}",
                    cause = e,
                ),
            )
        } catch (e: Exception) {
            Result.failure(
                DrandError.UnknownError(
                    message = "Unexpected error: ${e.message}",
                    cause = e,
                ),
            )
        }

    override fun close() {
        httpClient.close()
    }
}
