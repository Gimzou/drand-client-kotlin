package love.drand.network

import io.ktor.utils.io.core.Closeable
import love.drand.DrandError
import love.drand.network.data.ChainInfo
import love.drand.network.data.HealthStatus
import love.drand.network.data.RandomnessBeacon

/**
 * Core interface for interacting with drand networks via various transport mechanisms.
 *
 * This interface defines the complete drand API for fetching randomness beacons and
 * chain information. Implementations provide different transport layers (HTTP, gRPC, etc.)
 * while maintaining a consistent API surface.
 *
 * ## API Organization
 *
 * The API is organized into two parallel operation sets:
 * - **Beacon operations**: Access networks by human-readable beacon ID (e.g., "default", "quicknet")
 * - **Chain operations**: Access networks by cryptographic chain hash (hex-encoded)
 *
 * Both operation sets provide identical functionality. Beacon IDs are convenient aliases
 * that the drand API resolves to chain hashes. For maximum reliability, use chain hashes
 * directly as they cannot be changed, whereas beacon IDs could theoretically be reassigned.
 *
 * ## Usage
 *
 * ```kotlin
 * val api = DrandHttpApi()
 *
 * // Using beacon ID (convenient)
 * val beacon = api.beacons.latest("quicknet").getOrThrow()
 *
 * // Using chain hash (more explicit)
 * val sameBeacon = api.chains.latest(
 *     "52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971"
 * ).getOrThrow()
 * ```
 *
 * @see DrandHttpApi for HTTP/JSON transport implementation
 */
interface DrandApi : Closeable {
    /**
     * Operations for accessing drand networks by beacon ID.
     *
     * Beacon IDs are human-readable identifiers like "default" or "quicknet" that
     * the drand API maps to specific chain hashes. This is the most convenient way
     * to access well-known drand networks.
     */
    val beacons: BeaconOperations

    /**
     * Operations for accessing drand networks by chain hash.
     *
     * Chain hashes are the cryptographic identifiers (hex-encoded SHA-256) that
     * uniquely identify a drand network. Using chain hashes provides maximum
     * explicitness and reliability.
     */
    val chains: ChainOperations

    /**
     * Operations for accessing drand networks by beacon ID.
     *
     * All methods in this interface accept a beacon ID string (e.g., "default", "quicknet")
     * and return Result types for safe error handling.
     */
    interface BeaconOperations {
        /**
         * Gets the health status of a drand network by beacon ID.
         *
         * @param id The beacon identifier (e.g., "default", "quicknet")
         * @return Result containing [HealthStatus] on success, or [DrandError] on failure
         */
        suspend fun health(id: String): Result<HealthStatus>

        /**
         * Gets the chain configuration information by beacon ID.
         *
         * Returns metadata about the drand network including public key, period,
         * genesis time, and signing scheme.
         *
         * @param id The beacon identifier (e.g., "default", "quicknet")
         * @return Result containing [ChainInfo] on success, or [DrandError] on failure
         */
        suspend fun info(id: String): Result<ChainInfo>

        /**
         * Gets the most recent randomness beacon from a network by beacon ID.
         *
         * @param id The beacon identifier (e.g., "default", "quicknet")
         * @return Result containing the latest [RandomnessBeacon] on success, or [DrandError] on failure
         */
        suspend fun latest(id: String): Result<RandomnessBeacon>

        /**
         * Waits for and returns the next randomness beacon (long polling).
         *
         * This is a long-polling endpoint that blocks until the next beacon is produced.
         * Useful for real-time applications that need beacons as soon as they're available.
         *
         * @param id The beacon identifier (e.g., "default", "quicknet")
         * @return Result containing the next [RandomnessBeacon] when available, or [DrandError] on failure
         */
        suspend fun next(id: String): Result<RandomnessBeacon>

        /**
         * Gets a specific randomness beacon by round number.
         *
         * @param id The beacon identifier (e.g., "default", "quicknet")
         * @param round The round number to fetch (must be positive)
         * @return Result containing the [RandomnessBeacon] for the requested round on success,
         *         or [DrandError.NotFound] if the round doesn't exist, or other [DrandError] on failure
         */
        suspend fun atRound(
            id: String,
            round: Long,
        ): Result<RandomnessBeacon>

        /**
         * Lists all available beacon IDs on this drand API endpoint.
         *
         * @return Result containing a list of beacon ID strings (e.g., ["default", "quicknet"]) on success,
         *         or [DrandError] on failure
         */
        suspend fun list(): Result<List<String>>
    }

    /**
     * Operations for accessing drand networks by chain hash.
     *
     * All methods in this interface accept a chain hash (hex-encoded, 64 characters)
     * and return Result types for safe error handling.
     *
     * Chain hashes are more explicit than beacon IDs and cannot be reassigned, making
     * them suitable for applications requiring maximum reliability.
     */
    interface ChainOperations {
        /**
         * Gets the health status of a drand network by chain hash.
         *
         * @param chainHash The chain hash (hex-encoded, 64 characters, no "0x" prefix)
         * @return Result containing [HealthStatus] on success, or [DrandError] on failure
         */
        suspend fun health(chainHash: String): Result<HealthStatus>

        /**
         * Gets the chain configuration information by chain hash.
         *
         * Returns metadata about the drand network including public key, period,
         * genesis time, and signing scheme.
         *
         * @param chainHash The chain hash (hex-encoded, 64 characters, no "0x" prefix)
         * @return Result containing [ChainInfo] on success, or [DrandError] on failure
         */
        suspend fun info(chainHash: String): Result<ChainInfo>

        /**
         * Gets the most recent randomness beacon from a network by chain hash.
         *
         * @param chainHash The chain hash (hex-encoded, 64 characters, no "0x" prefix)
         * @return Result containing the latest [RandomnessBeacon] on success, or [DrandError] on failure
         */
        suspend fun latest(chainHash: String): Result<RandomnessBeacon>

        /**
         * Waits for and returns the next randomness beacon (long polling).
         *
         * This is a long-polling endpoint that blocks until the next beacon is produced.
         * Useful for real-time applications that need beacons as soon as they're available.
         *
         * @param chainHash The chain hash (hex-encoded, 64 characters, no "0x" prefix)
         * @return Result containing the next [RandomnessBeacon] when available, or [DrandError] on failure
         */
        suspend fun next(chainHash: String): Result<RandomnessBeacon>

        /**
         * Gets a specific randomness beacon by round number.
         *
         * @param chainHash The chain hash (hex-encoded, 64 characters, no "0x" prefix)
         * @param round The round number to fetch (must be positive)
         * @return Result containing the [RandomnessBeacon] for the requested round on success,
         *         or [DrandError.NotFound] if the round doesn't exist, or other [DrandError] on failure
         */
        suspend fun atRound(
            chainHash: String,
            round: Long,
        ): Result<RandomnessBeacon>

        /**
         * Lists all available chain hashes on this drand API endpoint.
         *
         * @return Result containing a list of chain hash strings (hex-encoded) on success,
         *         or [DrandError] on failure
         */
        suspend fun list(): Result<List<String>>
    }
}
