package love.drand

sealed class DrandError(
    message: String,
    cause: Throwable? = null,
) : Exception(message, cause) {
    /**
     * Resource not found (404)
     */
    class NotFound(
        message: String = "Resource not found",
        cause: Throwable? = null,
    ) : DrandError(message, cause)

    /**
     * Bad Request
     */
    data class InvalidRequest(
        override val message: String,
        override val cause: Throwable? = null,
    ) : DrandError(message, cause)

    /**
     * Too many requests
     */
    data class RateLimited(
        override val message: String,
        override val cause: Throwable? = null,
    ) : DrandError(message, cause)

    /**
     * Server returned an error response (4xx or 5xx)
     */
    class ServerError(
        val statusCode: Int,
        message: String = "Server error (HTTP $statusCode)",
        cause: Throwable? = null,
    ) : DrandError(message, cause)

    /**
     * Network connectivity issues (timeouts, DNS failures, etc.)
     */
    class NetworkError(
        message: String = "Network request failed",
        cause: Throwable? = null,
    ) : DrandError(message, cause)

    /**
     * Failed to parse or deserialize the API response
     */
    class ParseError(
        message: String = "Failed to parse response",
        cause: Throwable? = null,
        val details: String? = null,
    ) : DrandError(message, cause)

    /**
     * Beacon signature verification failed
     */
    class VerificationFailed(
        message: String = "Signature verification failed",
        cause: Throwable? = null,
        val beaconRound: Long? = null,
    ) : DrandError(message, cause)

    /**
     * Invalid beacon format or value
     */
    class InvalidBeacon(
        val beaconID: String,
        val beaconRound: Long,
        message: String = "Invalid beacon ($beaconID) at round $beaconRound",
        cause: Throwable? = null,
    ) : DrandError(message, cause)

    /**
     * Unknown error
     */
    data class UnknownError(
        override val message: String,
        override val cause: Throwable? = null,
    ) : DrandError(message, cause)
}
