package love.drand.network

import io.ktor.utils.io.core.Closeable
import love.drand.network.data.ChainInfo
import love.drand.network.data.HealthStatus
import love.drand.network.data.RandomnessBeacon

/**
 * Core interface for interacting with Drand networks.
 * Implementations provide different transport mechanisms (HTTP, gRPC, etc.)
 */
interface DrandApi : Closeable {
    /**
     * Beacon operations
     */
    val beacons: BeaconOperations

    /**
     * Chain operations
     */
    val chains: ChainOperations

    interface BeaconOperations {
        suspend fun health(id: String): Result<HealthStatus>

        suspend fun info(id: String): Result<ChainInfo>

        suspend fun latest(id: String): Result<RandomnessBeacon>

        suspend fun next(id: String): Result<RandomnessBeacon>

        suspend fun atRound(
            id: String,
            round: Long,
        ): Result<RandomnessBeacon>

        suspend fun list(): Result<List<String>>
    }

    interface ChainOperations {
        suspend fun health(chainHash: String): Result<HealthStatus>

        suspend fun info(chainHash: String): Result<ChainInfo>

        suspend fun latest(chainHash: String): Result<RandomnessBeacon>

        suspend fun next(chainHash: String): Result<RandomnessBeacon>

        suspend fun atRound(
            chainHash: String,
            round: Long,
        ): Result<RandomnessBeacon>

        suspend fun list(): Result<List<String>>
    }
}
