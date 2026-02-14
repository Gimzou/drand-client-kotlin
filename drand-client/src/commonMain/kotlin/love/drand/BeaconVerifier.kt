package love.drand

import love.drand.network.data.ChainInfo
import love.drand.network.data.RandomnessBeacon

/**
 * Interface for beacon verification implementations.
 *
 * Defines the contract for verifying drand randomness beacons against
 * chain information and expected round numbers.
 *
 * @see BeaconVerificationService
 * @see NoOpBeaconVerifier
 */
interface BeaconVerifier {
    /**
     * Verifies a beacon against expected round and chain info.
     *
     * @param chainInfo The chain configuration containing public key and signing scheme
     * @param beacon The beacon to verify
     * @param expectedRound The expected round number
     * @return Result.success containing the verified beacon if all checks pass,
     *         or Result.failure with [DrandError] describing what failed
     */
    fun verifyBeacon(
        chainInfo: ChainInfo,
        beacon: RandomnessBeacon,
        expectedRound: Long,
    ): Result<RandomnessBeacon>
}
