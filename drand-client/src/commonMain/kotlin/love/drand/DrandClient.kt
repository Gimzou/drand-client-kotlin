package love.drand

import io.ktor.utils.io.core.Closeable
import kotlinx.coroutines.sync.Mutex
import love.drand.network.DrandApi
import love.drand.network.DrandHttpApi
import love.drand.network.data.ChainInfo
import love.drand.network.data.RandomnessBeacon
import love.drand.storage.Cache

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
 * @param api The underlying API implementation (for testing/customization)
 * @param verifier The beacon verification service (for testing/customization)
 */
class DrandClient(
    private val api: DrandApi,
    private val cache: Cache<String, ChainInfo> = Cache(),
    private val verifier: BeaconVerificationService = BeaconVerificationService(),
) : Closeable {
    private val chainInfoCache = mutableMapOf<String, ChainInfo>()
    private val cacheMutex = Mutex()

    /**
     * Creates a client using HTTP transport (default)
     */
    constructor(
        baseUrl: String = "https://api.drand.sh",
    ) : this(DrandHttpApi(baseUrl))

    // Direct access to underlying API
    val beacons: DrandApi.BeaconOperations get() = api.beacons
    val chains: DrandApi.ChainOperations get() = api.chains

    /**
     * Fetches a given round of randomness for a specific beacon.
     *
     * @param beaconId the beacon identifier
     * @param round the round number
     *
     * @return The beacon at the given round
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
     * Fetches the latest round of randomness for a specific beacon.
     *
     * @param beaconId the beacon identifier
     * @return The beacon at the latest round
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

        val expectedRound = latestBeacon.round // assuming latest round is expected round, will bypass part of the verification

        return verifier.verifyBeacon(chainInfo, latestBeacon, expectedRound)
    }

    /**
     * Fetches the chain information, either from the cache or from the network
     *
     * @param beaconId the beacon identifier
     * @return the ChainInfo
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
