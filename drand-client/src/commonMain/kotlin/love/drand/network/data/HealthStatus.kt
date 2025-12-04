package love.drand.network.data

import kotlinx.serialization.Serializable

/**
 * Health status of a drand network, indicating how up-to-date it is.
 *
 * The health status compares the current round the network is at versus the expected round
 * based on the chain's period and genesis time. This helps detect if the network is falling
 * behind or has stopped producing beacons.
 *
 * ## Health Indicators
 *
 * - **Healthy**: `current >= expected` - Network is on time or ahead
 * - **Behind**: `current < expected` - Network is delayed
 * - **Gap size**: `expected - current` shows how many rounds behind
 *
 * ## Usage
 *
 * ```kotlin
 * val health = api.health("quicknet").getOrThrow()
 *
 * when {
 *     health.current >= health.expected ->
 *         println("Network is healthy")
 *     health.current < health.expected ->
 *         println("Network is ${health.expected - health.current} rounds behind")
 * }
 * ```
 *
 * @property current The most recent round number produced by the network
 * @property expected The round number the network should be at based on its schedule
 *                    (calculated from genesis time, period, and current time)
 */
@Serializable
data class HealthStatus(
    val current: Long,
    val expected: Long,
)
