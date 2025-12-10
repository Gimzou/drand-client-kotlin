# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-12-10

### Added

#### Core Features
- Initial implementation of drand Kotlin Multiplatform client
- Full support for JVM (Java 21+) and JavaScript (browser) platforms
- HTTP transport implementation using Ktor (drand API v2)
- `DrandClient` class with Result-based API for safe error handling
- Automatic chain information caching for optimal performance

#### Cryptography
- Complete BLS12-381 signature verification implementation
- Support for three signing schemes:
  - `pedersen-bls-chained` (BLS12-381 on G2) - League of Entropy default network
  - `pedersen-bls-unchained` (BLS12-381 on G2) - Timelock encryption compatible
  - `bls-unchained-g1-rfc9380` (BLS12-381 on G1) - Quicknet network
- Platform-specific crypto backends:
  - JVM: jBLST (v0.3.15) + BouncyCastle (v1.82)
  - JS: @noble/curves (v2.0.1) + @noble/hashes (v2.0.1)
- SHA-256 hashing for randomness derivation
- Keccak-256 hashing (for future BN254 support)

#### Beacon Verification
- `BeaconVerificationService` with comprehensive verification pipeline:
  - Round number validation
  - Randomness derivation and validation (SHA256 of signature)
  - BLS signature cryptographic verification
  - Support for chained, unchained, and genesis beacons
- Verification against official test vectors from Go and TypeScript implementations

#### API Operations
- Fetch latest beacon from any network
- Fetch specific round by number
- Retrieve chain information with automatic caching
- List available beacon networks
- Health status checking

#### Error Handling
- Comprehensive `DrandError` sealed class hierarchy:
  - `NetworkError` - Connection and I/O failures
  - `NotFound` - Beacon or chain not found (404)
  - `InvalidRequest` - Malformed requests (400)
  - `RateLimited` - Too many requests (429)
  - `ServerError` - Server-side errors (500+)
  - `ParseError` - JSON deserialization failures
  - `VerificationError` - Cryptographic verification failures
  - `InvalidBeaconFormat` - Malformed beacon data
  - `UnknownError` - Unexpected errors

#### Testing
- 10 comprehensive test files with 1000+ lines of test code
- Official test vectors from drand Go and TypeScript clients
- Unit tests for all cryptographic operations
- Integration tests against live drand API
- Mock HTTP tests for API operations
- Cross-platform verification tests (JVM and JS)
- Cache implementation tests with concurrency scenarios

#### Documentation
- Comprehensive README with usage examples
- Inline KDoc documentation for all public APIs
- Architecture overview
- Platform support matrix
- Supported networks and schemes documentation

### Technical Details

#### Dependencies
- Kotlin 2.2.20
- Ktor 3.3.1
- Kotlinx Coroutines 1.10.2
- Kotlinx Serialization (JSON)
- Kotlinx Datetime 0.7.1

#### Build System
- Gradle 8.5+ with Kotlin DSL
- Kotlin Multiplatform plugin
- Dokka 2.0 for documentation
- ktlint for code style enforcement
- Karma + Chrome for JS testing
- JUnit 5 for JVM testing

### Limitations

- Android and iOS platforms not yet supported (planned for 0.2.0)
- gRPC transport not implemented (planned for future version)
- BN254 curve scheme defined but not implemented (planned for future version)
- No streaming API for watching new beacons

### Notes

This is the initial public release targeting feedback from the drand and Kotlin Multiplatform communities. The implementation focuses on solid foundations with full cryptographic verification and comprehensive testing.

[0.1.0]: https://github.com/Gimzou/drand-client-kotlin/releases/tag/v0.1.0
