package com.example

import kotlinx.coroutines.runBlocking
import love.drand.DrandClient
import java.time.Instant
import java.time.format.DateTimeFormatter

fun main() =
    runBlocking {
        println("🎲 Drand Client - JVM Example\n")

        DrandClient().use { client ->
            // Fetch latest beacon from quicknet
            println("Fetching latest beacon from quicknet...")
            val beacon = client.getVerifiedLatestBeacon("quicknet").getOrThrow()

            println("✓ Success!\n")
            println("Round:      ${beacon.round}")
            println("Randomness: ${beacon.derivedRandomness.take(64)}...")
            println("Signature:  ${beacon.signature.take(64)}...")
            println("\n✓ Cryptographic signature verified!")

            // Fetch chain information
            println("\n---\n")
            println("Fetching chain information...")
            val chainInfo = client.getChainInfo("quicknet").getOrThrow()

            println("✓ Chain Info:\n")
            println("Public Key:   ${chainInfo.publicKey.take(64)}...")
            println("Period:       ${chainInfo.period} seconds")
            println("Scheme:       ${chainInfo.scheme}")

            val genesisInstant = Instant.ofEpochSecond(chainInfo.genesisTime)
            val isoTime = DateTimeFormatter.ISO_INSTANT.format(genesisInstant)
            println("Genesis Time: $isoTime")

            // Fetch specific round
            println("\n---\n")
            println("Fetching specific round (round 1000)...")
            val specificBeacon = client.getVerifiedBeacon("quicknet", 1000).getOrThrow()

            println("✓ Round 1000:\n")
            println("Randomness: ${specificBeacon.derivedRandomness.take(64)}...")
        }

        println("\n✓ Resources cleaned up automatically")
    }
