package love.drand.network.data

data class ClientOptions(
    // setting this to true will skip validation of beacons signatures (not recommended)
    val disableBeaconVerification: Boolean = false,
    // setting this will add a query param to requests to stop providers returning a cached version
    val noCache: Boolean = false,
    // adding these params will verify that the chain info from the requested chain matches them, otherwise an error will be thrown.
    // Leaving them out assumes that you are sure the `baseUrl` you are using for the chain client is the correct chain
    val chainVerificationParams: ChainVerificationParams? = null,
) {
    data class ChainVerificationParams(
        val chainHash: String,
        val publicKey: String,
    )
}
