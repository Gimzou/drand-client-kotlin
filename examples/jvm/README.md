# JVM Example

Command-line example demonstrating cryptographically verified randomness on the JVM.

## Quick Start
```bash
# From project root
./gradlew :examples:jvm:run
```

**Expected output:**
```
🎲 Drand Client - JVM Example

Fetching latest beacon from quicknet...
✓ Success!

Round:      24192551
Randomness: 9bed82f5f6a51f03ef4ccd648a05e4cf374c55a464fe7e48aeaf3de0b4e517fa...
Signature:  a139977f5abde4eb8a81fcbeae3c2347dc0e791860f60988462bccd2d8959d73...

✓ Cryptographic signature verified!

---

Fetching chain information...
✓ Chain Info:

Public Key:   83cf0f2896adee7eb8b5f01fcad3912212c437e0073e911fb90022d3e760183c...
Period:       3 seconds
Scheme:       bls-unchained-g1-rfc9380
Genesis Time: 2023-08-23T15:09:27Z

---

Fetching specific round (round 1000)...
✓ Round 1000:

Randomness: fe290beca10872ef2fb164d2aa4442de4566183ec51c56ff3cd603d930e54fdd...

✓ Resources cleaned up automatically
```

## What It Demonstrates

This example showcases:
- ✅ Kotlin coroutines for async operations
- ✅ BLS signature verification using battle-tested jblst library
- ✅ Idiomatic Kotlin with `use { }` for resource management
- ✅ `Result<T>` pattern for error handling
- ✅ Efficient chain info caching
- ✅ Type-safe beacon access

## Code Overview
```kotlin
import kotlinx.coroutines.runBlocking
import love.drand.DrandClient

fun main() = runBlocking {
    DrandClient().use { client ->
        // Fetch and verify latest beacon
        val beacon = client.getVerifiedLatestBeacon("quicknet")
            .getOrThrow()
        
        println("Round ${beacon.round}: ${beacon.randomness}")
        
        // Get chain configuration (cached)
        val info = client.getChainInfo("quicknet")
            .getOrThrow()
        
        println("Network: ${info.beaconId} (${info.period}s period)")
        
        // Fetch specific historical round
        val historical = client.getVerifiedBeacon("quicknet", 1000)
            .getOrThrow()
        
        println("Historical: ${historical.randomness}")
    } // Automatic cleanup via use { }
}
```

## Requirements

- **JDK 17+** (21 recommended for virtual threads)
- **Kotlin 2.1+** with coroutines

## Integration Patterns

### Spring Boot Service
```kotlin
@Service
class RandomnessService {
    private val client = DrandClient()
    
    suspend fun getLatestRandomness(): String {
        return client.getVerifiedLatestBeacon("quicknet")
            .map { it.randomness }
            .getOrThrow()
    }
    
    @PreDestroy
    fun cleanup() = client.close()
}
```

### Ktor Application
```kotlin
fun Application.module() {
    val drandClient = DrandClient()
    
    routing {
        get("/random") {
            val beacon = drandClient.getVerifiedLatestBeacon("quicknet")
                .getOrThrow()
            call.respond(mapOf("randomness" to beacon.randomness))
        }
    }
    
    environment.monitor.subscribe(ApplicationStopped) {
        drandClient.close()
    }
}
```

## Use Cases for Blockchain Infrastructure

Perfect for:
- 🔐 **Validator operations** - Unpredictable but verifiable randomness
- 🎯 **MEV protection** - Commit-reveal schemes using future randomness
- 🧪 **Testing frameworks** - Reproducible randomness with round numbers
- 📊 **Network simulations** - Deterministic yet unpredictable scenarios
- 🔀 **Leader election** - Fair selection in distributed systems

## API Reference

### Core Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `getVerifiedLatestBeacon(beaconId)` | Fetch & verify latest beacon | `Result<RandomnessBeacon>` |
| `getVerifiedBeacon(beaconId, round)` | Fetch & verify specific round | `Result<RandomnessBeacon>` |
| `getChainInfo(beaconId)` | Get network configuration (cached) | `Result<ChainInfo>` |
| `close()` | Release HTTP client resources | `Unit` |

### Available Networks

| Network | Beacon ID | Period | Scheme | Best For |
|---------|-----------|--------|--------|----------|
| Quicknet | `"quicknet"` | 3s | unchained-on-g1 | Low-latency applications |
| Default | `"default"` | 30s | chained-on-bls12-381 | High-security requirements |
