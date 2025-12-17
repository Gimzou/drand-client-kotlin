pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        // Required for jblst (BLS cryptography library used by Teku)
        maven("https://artifacts.consensys.net/public/maven/maven/")
    }
}

rootProject.name = "drand-client-kotlin"

plugins {
    // Apply the foojay-resolver plugin to allow automatic download of JDKs
    id("org.gradle.toolchains.foojay-resolver-convention") version "0.9.0"
}

include(":drand-client")
include(":examples:jvm")
