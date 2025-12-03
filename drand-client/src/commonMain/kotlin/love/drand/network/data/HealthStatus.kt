package love.drand.network.data

import kotlinx.serialization.Serializable

@Serializable
data class HealthStatus(
    val current: Long,
    val expected: Long,
)
