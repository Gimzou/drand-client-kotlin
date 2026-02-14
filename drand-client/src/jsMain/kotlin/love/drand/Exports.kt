@file:JsExport
@file:OptIn(ExperimentalJsExport::class)

package love.drand

import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.coroutines.promise
import love.drand.network.data.RandomnessBeacon
import kotlin.js.Promise

data class Beacon(
    val round: Double,
    val randomness: String,
    val signature: String,
    val previousSignature: String?,
)

data class ChainInfo(
    val publicKey: String,
    val period: Double,
    val genesisTime: Double,
    val genesisSeed: String,
    val chainHash: String,
    val scheme: String,
    val beaconId: String,
)

/**
 * Handle for cancelling a beacon watch stream.
 *
 * Returned by [Client.watchVerifiedBeacons]. Call [cancel] to stop
 * receiving beacons and release resources.
 */
class Cancellable internal constructor(
    private val job: Job,
) {
    /**
     * Cancel the beacon watch stream.
     */
    fun cancel() = job.cancel()
}

/**
 * Drand client for JavaScript/Browser environments.
 *
 * All async methods return JavaScript Promises.
 * Nullable fields (like beacon.randomness) work automatically.
 */
@OptIn(DelicateCoroutinesApi::class)
class Client(
    private val baseUrl: String = "https://api.drand.sh",
) {
    private val client = DrandClient(baseUrl)

    private fun RandomnessBeacon.toBeacon() =
        Beacon(
            round = round.toDouble(),
            randomness = derivedRandomness,
            signature = signature,
            previousSignature = previousSignature,
        )

    /**
     * Get latest verified beacon.
     * @return Promise<Beacon>
     */
    fun getVerifiedLatestBeacon(beaconId: String): Promise<Beacon> =
        GlobalScope.promise {
            client.getVerifiedLatestBeacon(beaconId).getOrThrow().toBeacon()
        }

    /**
     * Get specific round's verified beacon.
     * @return Promise<Beacon>
     */
    fun getVerifiedBeacon(
        beaconId: String,
        round: Double,
    ): Promise<Beacon> =
        GlobalScope.promise {
            client.getVerifiedBeacon(beaconId, round.toLong()).getOrThrow().toBeacon()
        }

    /**
     * Wait for and return the next verified beacon (long polling).
     * @return Promise<Beacon>
     */
    fun getVerifiedNextBeacon(beaconId: String): Promise<Beacon> =
        GlobalScope.promise {
            client.getVerifiedNextBeacon(beaconId).getOrThrow().toBeacon()
        }

    /**
     * Get chain information (automatically cached).
     * @return Promise<ChainInfo>
     */
    fun getChainInfo(beaconId: String): Promise<ChainInfo> =
        GlobalScope.promise {
            val chainInfo: love.drand.network.data.ChainInfo =
                client.getChainInfo(beaconId).getOrThrow()

            ChainInfo(
                publicKey = chainInfo.publicKey,
                period = chainInfo.period.toDouble(),
                genesisTime = chainInfo.genesisTime.toDouble(),
                genesisSeed = chainInfo.genesisSeed,
                chainHash = chainInfo.chainHash,
                scheme = chainInfo.scheme,
                beaconId = chainInfo.beaconId,
            )
        }

    /**
     * Stream verified beacons as they are published.
     *
     * Usage:
     * ```javascript
     * const subscription = client.watchVerifiedBeacons("quicknet",
     *   (beacon) => console.log(`Round ${beacon.round}`),
     *   (error) => console.error(error)
     * );
     *
     * // Later, stop watching:
     * subscription.cancel();
     * ```
     *
     * @param beaconId The beacon identifier (e.g., "quicknet")
     * @param onBeacon Callback invoked for each verified beacon
     * @param onError Callback invoked when the stream terminates after max retries
     * @return Cancellable handle to stop watching
     */
    fun watchVerifiedBeacons(
        beaconId: String,
        onBeacon: (Beacon) -> Unit,
        onError: (String) -> Unit,
    ): Cancellable {
        val job =
            GlobalScope.launch {
                client
                    .watchVerifiedBeacons(beaconId)
                    .collect { result ->
                        result.fold(
                            onSuccess = { beacon -> onBeacon(beacon.toBeacon()) },
                            onFailure = { error -> onError(error.message ?: "Unknown error") },
                        )
                    }
            }
        return Cancellable(job)
    }

    /**
     * Release resources.
     */
    fun close() = client.close()
}
