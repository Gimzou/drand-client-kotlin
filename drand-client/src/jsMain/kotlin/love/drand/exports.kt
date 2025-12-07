@file:JsExport
@file:OptIn(kotlin.js.ExperimentalJsExport::class)

package love.drand

import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.promise
import kotlin.Double
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
 * Drand client for JavaScript/Browser environments.
 *
 * All async methods return JavaScript Promises.
 * Nullable fields (like beacon.randomness) work automatically.
 */
@OptIn(DelicateCoroutinesApi::class)
class Client(private val baseUrl: String = "https://api.drand.sh") {
    private val client = DrandClient(baseUrl)

    /**
     * Get latest verified beacon.
     * @return Promise<Beacon>
     */
    fun getVerifiedLatestBeacon(beaconId: String): Promise<Beacon> = GlobalScope.promise {
        val beacon = client.getVerifiedLatestBeacon(beaconId).getOrThrow()
        Beacon(
            round = beacon.round.toDouble(),
            randomness = beacon.derivedRandomness,
            signature = beacon.signature,
            previousSignature = beacon.previousSignature
        )
    }

    /**
     * Get specific round's verified beacon.
     * @return Promise<Beacon>
     */
    fun getVerifiedBeacon(beaconId: String, round: Double): Promise<Beacon> = GlobalScope.promise {
        val beacon = client.getVerifiedBeacon(beaconId, round.toLong()).getOrThrow()
        Beacon(
            round = beacon.round.toDouble(),
            randomness = beacon.derivedRandomness,
            signature = beacon.signature,
            previousSignature = beacon.previousSignature
        )
    }

    /**
     * Get chain information (automatically cached).
     * @return Promise<ChainInfo>
     */
    fun getChainInfo(beaconId: String): Promise<ChainInfo> = GlobalScope.promise {
        val chainInfo: love.drand.network.data.ChainInfo = client.getChainInfo(beaconId).getOrThrow()
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
     * Release resources.
     */
    fun close() = client.close()
}
