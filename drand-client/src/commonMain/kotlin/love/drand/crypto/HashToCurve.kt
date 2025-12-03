package love.drand.crypto

/**
 * Hash-to-curve configuration per RFC 9380.
 * Each configuration specifies how to hash messages onto elliptic curve points.
 */
sealed class HashToCurve {
    abstract val dst: String
    abstract val curve: Curve
    abstract val targetGroup: Group
    abstract val hashFunction: HashFunction

    enum class Curve {
        BLS12_381,
        BN254,
    }

    enum class Group {
        G1,
        G2,
    }

    /**
     * BLS12-381, signatures on G2
     * DST: BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_
     */
    @Suppress("ktlint:standard:class-naming")
    data object BLS12381_G2 : HashToCurve() {
        override val dst = "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_"
        override val curve = Curve.BLS12_381
        override val targetGroup = Group.G2
        override val hashFunction = HashFunction.SHA256
    }

    /**
     * BLS12-381, signatures on G1 (RFC 9380 compliant)
     * DST: BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_
     */
    @Suppress("ktlint:standard:class-naming")
    data object BLS12381_G1_RFC9380 : HashToCurve() {
        override val dst = "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_"
        override val curve = Curve.BLS12_381
        override val targetGroup = Group.G1
        override val hashFunction = HashFunction.SHA256
    }

    /**
     * BN254, signatures on G1 (EVM-optimized)
     * DST: BLS_SIG_BN254G1_XMD:KECCAK-256_SVDW_RO_NUL_
     */
    @Suppress("ktlint:standard:class-naming")
    data object BN254_G1 : HashToCurve() {
        override val dst = "BLS_SIG_BN254G1_XMD:KECCAK-256_SVDW_RO_NUL_"
        override val curve = Curve.BN254
        override val targetGroup = Group.G1
        override val hashFunction = HashFunction.KECCAK256
    }
}
