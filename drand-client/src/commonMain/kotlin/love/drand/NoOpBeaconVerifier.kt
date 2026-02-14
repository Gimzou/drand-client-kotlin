package love.drand

import love.drand.network.data.ChainInfo
import love.drand.network.data.RandomnessBeacon

/**
 * A no-op beacon verifier that accepts all beacons without verification.
 * Useful for testing scenarios where verification should be bypassed.
 */
class NoOpBeaconVerifier : BeaconVerifier {
    override fun verifyBeacon(
        chainInfo: ChainInfo,
        beacon: RandomnessBeacon,
        expectedRound: Long,
    ): Result<RandomnessBeacon> = Result.success(beacon)
}
