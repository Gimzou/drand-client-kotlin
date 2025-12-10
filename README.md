# Kotlin Multiplatform Client for the Drand Network

[![Kotlin](https://img.shields.io/badge/kotlin-2.2.20-blue.svg?logo=kotlin)](http://kotlinlang.org)
[![License](https://img.shields.io/badge/License-Apache%202.0%20%2F%20MIT-blue.svg)](LICENSE-APACHE)

**Secure, verifiable randomness for the Kotlin ecosystem.**

A Kotlin Multiplatform implementation of the [drand](https://drand.love) client protocol, bringing **cryptographically secure, verifiable randomness** to JVM and JavaScript applications. This library enables developers to easily integrate drand's distributed randomness beacons into Kotlin applications with full cryptographic verification.

## Features

- ✅ **Full BLS12-381 signature verification** for drand beacons
- ✅ **Support for drand networks**: `default` and `quicknet`
- ✅ **Multiplatform**: JVM (Java 21+) and JavaScript (browser, nodejs)
- ✅ **Type-safe Result API** - no unchecked exceptions
- ✅ **Automatic chain info caching** for optimal performance
- ✅ **Comprehensive test coverage** with official test vectors from Go and TypeScript implementations

## Supported Platforms

| Platform                         | Status                        | Crypto Backend                                                                                                          |
|----------------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **JVM (Java 21+)**               | ✅ Fully supported             | [jBLST (Teku Ethereum Client)](https://github.com/Consensys/teku) + BouncyCastle                                      |
| **JavaScript (Browser, Nodejs)** | ✅ Fully supported             | [@noble/curves](https://github.com/paulmillr/noble-curves) + [@noble/hashes](https://github.com/paulmillr/noble-hashes) |
| WebAssembly                      | 🚧 Planned for future version | -                                                                                                                       |
| Android                          | 🚧 Planned for 0.2.0          | -                                                                                                                       |
| iOS                              | 🚧 Planned for future version | -                                                                                                                       |

## Supported Drand Networks

| Network      | Beacon ID  | Signing Scheme                               | Status |
|--------------|------------|----------------------------------------------|--------|
| **Default**  | `default`  | `pedersen-bls-chained` (BLS12-381 on G2)     | ✅ Fully supported |
| **Quicknet** | `quicknet` | `bls-unchained-g1-rfc9380` (BLS12-381 on G1) | ✅ Fully supported |
| Evmnet       | `evmnet`   | `bls-bn254-unchained-on-g1` (BN254 on G1)    | 🚧 Planned for future version |

## Supported Schemes

| Scheme | Curve | Group | Status |
|--------|-------|-------|--------|
| `pedersen-bls-chained` | BLS12-381 | G2 signatures | ✅ Implemented |
| `pedersen-bls-unchained` | BLS12-381 | G2 signatures | ✅ Implemented |
| `bls-unchained-g1-rfc9380` | BLS12-381 | G1 signatures | ✅ Implemented |
| `bls-bn254-unchained-on-g1` | BN254 | G1 signatures | 🚧 Planned for future version |

## API

**Transport:** HTTP (drand API v2)

**Future:** gRPC support planned

## Installation

### JitPack (Recommended for 0.1.0)

Add the JitPack repository to your `build.gradle.kts`:

```kotlin
repositories {
    maven("https://jitpack.io")
}

dependencies {
    implementation("com.github.USERNAME:drand-client-kotlin:0.1.0")
}
```

### Maven Central (Coming soon)

```kotlin
dependencies {
    implementation("love.drand:drand-client:0.1.0")
}
```

## Usage

### Basic Example

```kotlin
fun main() {
    // Create a client (uses https://api.drand.sh by default)
    DrandClient().use { client ->
        // Get and verify the latest beacon from the default network
        val result = client.getVerifiedLatestBeacon("default")

        result.onSuccess { beacon ->
            println("Round: ${beacon.round}")
            println("Randomness: ${beacon.randomness}")
            println("Signature verified: ✓")
        }

        result.onFailure { error ->
            println("Error: $error")
        }
    }
}
```

### Get Specific Round

```kotlin
val client = DrandClient()

// Get beacon for specific round (e.g., round 1000)
val beacon = client.getVerifiedBeacon("quicknet", 1000)
    .getOrThrow()

println("Round ${beacon.round} randomness: ${beacon.derivedRandomness}")
```

### Get Chain Information

```kotlin
val client = DrandClient()

// Fetch chain metadata (cached automatically)
val chainInfo = client.getChainInfo("default").getOrThrow()

println("Public key: ${chainInfo.publicKey}")
println("Period: ${chainInfo.period}s")
println("Scheme: ${chainInfo.scheme}")
```

### Error Handling

The library uses Kotlin's `Result` type for safe error handling:

```kotlin
val result = client.getVerifiedLatestBeacon("quicknet")

when {
    result.isSuccess -> {
        val beacon = result.getOrNull()!!
        println("Success: ${beacon.randomness}")
    }
    result.isFailure -> {
        val error = result.exceptionOrNull()
        println("Failed: ${error?.message}")
    }
}
```

### JavaScript Example

```javascript
// In your browser or Node.js application
import { Client } from 'drand-client';

const client = new Client();

// Async/await style
const result = await client.getVerifiedLatestBeacon("quicknet");
console.log("Randomness:", result.randomness);
```

## Architecture

This library implements the complete drand verification pipeline:

1. **Fetch beacon** from drand API (HTTP/JSON)
2. **Validate format** (round, signature, randomness fields)
3. **Verify randomness** - Ensure `randomness == SHA256(signature)`
4. **Verify BLS signature** - Cryptographically verify the beacon signature
5. **Return verified beacon** - Only return beacons that pass all checks

All beacons are cryptographically verified before being returned to the application.

## Development

### Building

```bash
./gradlew build
```

### Running Tests

```bash
# Run all tests
./gradlew test

# Run JVM tests only
./gradlew jvmTest

# Run JS tests only
./gradlew jsTest
```

### Code Style

This project uses ktlint for code formatting:

```bash
./gradlew ktlintCheck
./gradlew ktlintFormat
```

## Roadmap

### 0.2.0
- Android platform support
- gRPC transport
- Streaming API for watching new beacons

### Future
- iOS, WASM platform support
- BN254 curve support for EVM compatibility
- Local beacon caching
- Batch verification

## Contributing

Contributions are welcome! This project aims to provide high-quality drand support for the Kotlin ecosystem. Please feel free to:

- Report bugs or request features via GitHub Issues
- Submit pull requests
- Improve documentation
- Share your use cases

## License

This project is dual-licensed under:

- **Apache License 2.0** ([LICENSE-APACHE](LICENSE-APACHE))
- **MIT License** ([LICENSE-MIT](LICENSE-MIT))

You may choose either license when using this software.

## Acknowledgments

- [drand team](https://drand.love) for building the distributed randomness network
- [League of Entropy](https://www.drand.love/loe) for operating the default network
- Official clients ([Go](https://github.com/drand/drand), [TypeScript](https://github.com/drand/drand-client)) for test vectors and reference implementations
- [jBLST](https://github.com/Consensys/teku) and [@noble/curves](https://github.com/paulmillr/noble-curves) for cryptographic implementations

## Links

- [drand.love](https://drand.love) - Official drand website
- [drand API documentation](https://drand.love/developer/) - API v2 specification
- [League of Entropy](https://www.drand.love/loe) - About the drand network