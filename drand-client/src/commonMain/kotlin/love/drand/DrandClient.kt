package love.drand

import io.ktor.utils.io.core.Closeable
import love.drand.network.DrandApi
import love.drand.network.DrandHttpApi
import love.drand.network.HttpConfig
import love.drand.network.data.ChainInfo
import love.drand.network.data.RandomnessBeacon
import love.drand.storage.Cache
import love.drand.storage.NoOpCache
import love.drand.storage.SimpleCache

/**
 * Client for interacting with the drand distributed randomness network.
 *
 * This client provides verified access to drand beacons with automatic
 * cryptographic verification of all received randomness.
 *
 * Example usage:
 * ```kotlin
 * // Create client
 * val client = DrandClient()
 *
 * // Get latest verified randomness
 * val beacon = client.getVerifiedLatestBeacon().getOrThrow()
 * println("Randomness: ${beacon.randomness}")
 *
 * // Get specific round
 * val round1000 = client.getVerifiedBeacon(1000).getOrThrow()
 *
 * // Clean up
 * client.close()
 * ```
 *
 * Or use with Kotlin's `use`:
 * ```kotlin
 * DrandClient().use { client ->
 *     val beacon = client.getVerifiedLatestBeacon().getOrThrow()
 *     // ...
 * }
 * ```
 *
 * @param api The underlying API implementation for network transport (default: HTTP)
 * @param cache Thread-safe cache for storing chain information to reduce network calls
 * @param verifier Service for cryptographic verification of beacons
 */
class DrandClient(
    private val api: DrandApi,
    private val cache: Cache<String, ChainInfo> = SimpleCache(),
    private val verifier: BeaconVerificationService = BeaconVerificationService(),
) : Closeable {
    /**
     * Creates a client using HTTP transport with the specified base URL.
     *
     * @param baseUrl The base URL of the drand API endpoint (default: https://api.drand.sh)
     * @param httpConfig HTTP timeout configuration (optional, uses defaults if not specified)
     * @param enableCache Whether to enable caching of chain information (default: true)
     * @throws IllegalArgumentException if baseUrl is invalid for HTTP transport
     */
    constructor(
        baseUrl: String = "https://api.drand.sh",
        httpConfig: HttpConfig = HttpConfig(),
        enableCache: Boolean = true,
    ) : this(
        DrandHttpApi(baseUrl, httpConfig),
        cache = if (enableCache) SimpleCache() else NoOpCache(),
    )

    /**
     * Direct access to beacon operations (access by beacon ID).
     *
     * Provides low-level access to the underlying API for advanced use cases where
     * you want to fetch beacons without automatic verification. For most use cases,
     * prefer [getVerifiedBeacon] and [getVerifiedLatestBeacon] which include verification.
     */
    val beacons: DrandApi.BeaconOperations get() = api.beacons

    /**
     * Direct access to chain operations (access by chain hash).
     *
     * Provides low-level access to the underlying API for advanced use cases where
     * you want to fetch beacons without automatic verification. For most use cases,
     * prefer [getVerifiedBeacon] and [getVerifiedLatestBeacon] which include verification.
     */
    val chains: DrandApi.ChainOperations get() = api.chains

    /**
     * Fetches and verifies a specific round of randomness from a drand network.
     *
     * This method performs the complete verification pipeline:
     * 1. Fetches chain configuration (cached if available)
     * 2. Fetches the beacon for the requested round
     * 3. Verifies the beacon cryptographically
     *
     * @param beaconId The beacon identifier (e.g., "default", "quicknet")
     * @param round The round number to fetch (must be positive)
     * @return Result containing the verified [RandomnessBeacon] on success,
     *         or [DrandError] if fetching or verification fails
     */
    suspend fun getVerifiedBeacon(
        beaconId: String,
        round: Long,
    ): Result<RandomnessBeacon> {
        val chainInfo =
            getChainInfo(beaconId).getOrElse {
                return Result.failure(it)
            }

        val beacon =
            api.beacons.atRound(beaconId, round).getOrElse {
                return Result.failure(it)
            }

        return verifier.verifyBeacon(chainInfo, beacon, round)
    }

    /**
     * Fetches and verifies the latest round of randomness from a drand network.
     *
     * This method performs the complete verification pipeline:
     * 1. Fetches chain configuration (cached if available)
     * 2. Fetches the latest beacon
     * 3. Verifies the beacon cryptographically
     *
     * Note: When fetching the "latest" beacon, the expected round is set to the beacon's
     * own round number. This means round validation passes automatically, but signature
     * and randomness verification are still performed. This is the standard approach for
     * latest beacon verification in drand clients.
     *
     * @param beaconId The beacon identifier (e.g., "default", "quicknet")
     * @return Result containing the verified latest [RandomnessBeacon] on success,
     *         or [DrandError] if fetching or verification fails
     */
    suspend fun getVerifiedLatestBeacon(beaconId: String): Result<RandomnessBeacon> {
        val chainInfo =
            getChainInfo(beaconId).getOrElse {
                return Result.failure(it)
            }

        val latestBeacon =
            api.beacons.latest(beaconId).getOrElse {
                return Result.failure(it)
            }

        // For latest beacon, use its own round as expected round.
        // Round validation will pass, but signature and randomness are still verified.
        val expectedRound = latestBeacon.round

        return verifier.verifyBeacon(chainInfo, latestBeacon, expectedRound)
    }

    /**
     * Fetches chain configuration information, with automatic caching.
     *
     * Chain information is cached per beacon ID to avoid redundant network calls.
     * The cache is thread-safe and persists for the lifetime of this client instance.
     *
     * @param beaconId The beacon identifier (e.g., "default", "quicknet")
     * @return Result containing [ChainInfo] on success, or [DrandError] on failure
     */
    suspend fun getChainInfo(beaconId: String): Result<ChainInfo> {
        // Check cache
        cache.get("chainInfo_$beaconId")?.let { return Result.success(it) }

        // Fetch from network
        val result = api.beacons.info(beaconId)

        // Update cache on success
        result.onSuccess { info ->
            cache.put("chainInfo_$beaconId", info)
        }

        return result
    }

    override fun close() = api.close()
}
