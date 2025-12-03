package love.drand.network.data

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * `ChainInfo` is returned by a node's `/info` endpoint
 */
@Serializable
data class ChainInfo(
    @SerialName("public_key")
    val publicKey: String, // hex encoded BLS12-381 public key
    val period: Long, // how often the network emits randomness (in seconds)
    @SerialName("genesis_time")
    val genesisTime: Long, // the time of the round 0 of the network (in epoch seconds)
    @SerialName("genesis_seed")
    val genesisSeed: String, // the hash identifying the initial seed
    @SerialName("chain_hash")
    val chainHash: String, // the hash identifying this specific chain of beacons
    val scheme: String, // the version/format of cryptography
    @SerialName("beacon_id")
    val beaconId: String, // the ID of the beacon chain this `ChainInfo` corresponds to
)
