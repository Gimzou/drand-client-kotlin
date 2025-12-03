package love.drand.crypto

/**
 * Drand cryptographic schemes.
 * Each scheme specifies how beacons are signed and verified.
 */
sealed class Scheme {
    abstract val id: String
    abstract val hashToCurve: HashToCurve

    // Convenience accessor
    val hashFunction: HashFunction get() = hashToCurve.hashFunction

    /**
     * Verifies a BLS signature for this scheme.
     * Each scheme knows which platform verification function to call.
     */
    abstract fun verifyBLSSignature(
        publicKey: ByteArray,
        message: ByteArray,
        signature: ByteArray,
    ): Result<Boolean>

    // ===== BLS12-381 Schemes =====

    /**
     * Original chained scheme (2018-present)
     * - Curve: BLS12-381
     * - Groups: G1 keys (48 bytes), G2 signatures (96 bytes)
     * - Digest: SHA256(prevSig || round)
     * - NOT compatible with timelock encryption
     */
    data object BLS12381G2Chained : Scheme() {
        override val id = "pedersen-bls-chained"
        override val hashToCurve = HashToCurve.BLS12381_G2

        override fun verifyBLSSignature(
            publicKey: ByteArray,
            message: ByteArray,
            signature: ByteArray,
        ): Result<Boolean> =
            runCatching {
                // Validate expected sizes
                require(publicKey.size == 48) {
                    "Public key must be 48 bytes (G1 compressed point), got ${publicKey.size}"
                }
                require(signature.size == 96) {
                    "Signature must be 96 bytes (G2 compressed point), got ${signature.size}"
                }

                verifyBLS12381OnG2(
                    publicKey = publicKey,
                    message = message,
                    signature = signature,
                    dst = hashToCurve.dst,
                )
            }
    }

    /**
     * Unchained Pedersen scheme
     * - Curve: BLS12-381
     * - Groups: G1 keys (48 bytes), G2 signatures (96 bytes)
     * - Digest: SHA256(round)
     * - Timelock encryption compatible
     */
    data object BLS12381G2Unchained : Scheme() {
        override val id = "pedersen-bls-unchained"
        override val hashToCurve = HashToCurve.BLS12381_G2

        override fun verifyBLSSignature(
            publicKey: ByteArray,
            message: ByteArray,
            signature: ByteArray,
        ): Result<Boolean> =
            runCatching {
                // Validate expected sizes
                require(publicKey.size == 48) {
                    "Public key must be 48 bytes (G1 compressed point), got ${publicKey.size}"
                }
                require(signature.size == 96) {
                    "Signature must be 96 bytes (G2 compressed point), got ${signature.size}"
                }

                verifyBLS12381OnG2(
                    publicKey = publicKey,
                    message = message,
                    signature = signature,
                    dst = hashToCurve.dst,
                )
            }
    }

    /**
     * Unchained Pedersen scheme
     * - Curve: BLS12-381
     * - Groups: G1 signatures (48 bytes), G2 keys (96 bytes)
     * - Digest: SHA256(round)
     * - Timelock encryption compatible and smaller signatures
     */
    data object BLS12381G1UnchainedRFC9380 : Scheme() {
        override val id = "bls-unchained-g1-rfc9380"
        override val hashToCurve = HashToCurve.BLS12381_G1_RFC9380

        override fun verifyBLSSignature(
            publicKey: ByteArray,
            message: ByteArray,
            signature: ByteArray,
        ): Result<Boolean> =
            runCatching {
                // Validate expected sizes
                require(signature.size == 48) {
                    "Signature must be 48 bytes (G1 compressed point), got ${signature.size}"
                }
                require(publicKey.size == 96) {
                    "Public key must be 96 bytes (G2 compressed point), got ${publicKey.size}"
                }

                verifyBLS12381OnG1(
                    publicKey = publicKey,
                    message = message,
                    signature = signature,
                    dst = hashToCurve.dst,
                )
            }
    }

    // ===== BN254 Scheme =====

    /**
     * EVM-optimized scheme
     * - Curve: BN254 (alt_bn128)
     * - Groups: G2 keys (128 bytes), G1 signatures (64 bytes)
     * - Digest: Keccak256(round) ← Different hash!
     * - Compatible with timelock encryption
     * - Optimized for Ethereum smart contracts
     */
    data object BN254G1Unchained : Scheme() {
        override val id = "bls-bn254-unchained-on-g1"
        override val hashToCurve = HashToCurve.BN254_G1

        override fun verifyBLSSignature(
            publicKey: ByteArray,
            message: ByteArray,
            signature: ByteArray,
        ): Result<Boolean> =
            runCatching {
                verifyBLSBN254OnG1(
                    publicKey = publicKey,
                    message = message,
                    signature = signature,
                    dst = hashToCurve.dst,
                )
            }
    }

    companion object {
        fun fromId(schemeId: String): Scheme? =
            when (schemeId) {
                "pedersen-bls-chained" -> BLS12381G2Chained
                "pedersen-bls-unchained" -> BLS12381G2Unchained
                "bls-unchained-g1-rfc9380" -> BLS12381G1UnchainedRFC9380
                "bls-bn254-unchained-on-g1" -> BN254G1Unchained
                else -> null
            }

        fun listSchemes(): List<Scheme> =
            listOf(
                BLS12381G2Chained,
                BLS12381G2Unchained,
                BLS12381G1UnchainedRFC9380,
                BN254G1Unchained,
            )
    }
}

// Platform-specific verification functions (expect/actual)
internal expect fun verifyBLS12381OnG2(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean

internal expect fun verifyBLS12381OnG1(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean

internal expect fun verifyBLSBN254OnG1(
    publicKey: ByteArray,
    message: ByteArray,
    signature: ByteArray,
    dst: String,
): Boolean
