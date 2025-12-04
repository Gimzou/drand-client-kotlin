package love.drand.network.data

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * Chain configuration information for a drand network.
 *
 * Contains all metadata needed to verify beacons from a specific drand chain,
 * including the public key, timing parameters, and cryptographic scheme.
 *
 * This data is returned by a node's `/info` endpoint and should be cached
 * to avoid redundant network calls.
 *
 * @property publicKey Hex-encoded BLS12-381 public key (no "0x" prefix).
 *           This is the aggregated public key from all nodes in the network,
 *           used to verify beacon signatures.
 * @property period How often the network emits randomness, in seconds.
 *           For example, 30 means a new beacon every 30 seconds.
 * @property genesisTime The timestamp of round 0, in Unix epoch seconds.
 *           Used to calculate expected round numbers based on current time.
 * @property genesisSeed Hex-encoded hash identifying the initial seed for this chain.
 *           This provides the starting randomness from which all beacons are derived.
 * @property chainHash Hex-encoded SHA-256 hash uniquely identifying this beacon chain.
 *           This is the cryptographic identifier for the network.
 * @property scheme The signing scheme identifier determining which cryptographic
 *           operations to use. Examples: "pedersen-bls-chained", "bls-unchained-g1-rfc9380".
 * @property beaconId Human-readable identifier for this beacon chain (e.g., "default", "quicknet").
 *           This is an alias that the drand API resolves to the chainHash.
 */
@Serializable
data class ChainInfo(
    @SerialName("public_key")
    val publicKey: String,
    val period: Long,
    @SerialName("genesis_time")
    val genesisTime: Long,
    @SerialName("genesis_seed")
    val genesisSeed: String,
    @SerialName("chain_hash")
    val chainHash: String,
    val scheme: String,
    @SerialName("beacon_id")
    val beaconId: String,
)
