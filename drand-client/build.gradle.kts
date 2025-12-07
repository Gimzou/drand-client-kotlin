import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import kotlin.js.ExperimentalJsExport

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.kotlin.serialization)
    alias(libs.plugins.dokka)
    `maven-publish`
    signing
}

group = "love.drand"
version = "0.1.0"

kotlin {
    jvm {
        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_21)
        }
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }

    js(IR) {
        browser {
            testTask {
                useKarma {
                    useChromeHeadless()
                    useMocha {
                        timeout = "30000"
                    }
                }
            }
            webpackTask {
                output.library = "DrandClient"
                output.libraryTarget = "umd"
            }
            binaries.executable()
        }
        binaries.library()
        generateTypeScriptDefinitions()
        compilerOptions {
            target = "es2015"
        }
    }

    // Add more targets as needed:
    //
    // iosX64()
    // iosArm64()
    // iosSimulatorArm64()

    sourceSets {
        all {
            languageSettings.optIn("kotlin.time.ExperimentalTime")
        }
        val commonMain by getting {
            dependencies {
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.kotlinx.datetime)
                implementation(libs.ktor.client.core)
                implementation(libs.ktor.client.content.negotiation)
                implementation(libs.ktor.serialization.kotlinx.json)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(libs.kotlin.test)
                implementation(libs.kotlinx.coroutines.test)
                implementation(libs.ktor.client.mock)
            }
        }

        val jvmMain by getting {
            dependencies {
                implementation(libs.ktor.client.cio)

                // Crypto
                implementation("org.bouncycastle:bcprov-jdk18on:1.82")
                implementation("io.consensys.tuweni:tuweni-crypto:2.7.1")
                implementation("tech.pegasys:jblst:0.3.15")
            }
        }

        val jvmTest by getting {
            // kotlin-test automatically brings in JUnit5 for JVM
        }

        val jsMain by getting {
            dependencies {
                implementation(npm("@noble/curves", "2.0.1"))
                implementation(npm("@noble/hashes", "2.0.1"))
            }
        }

        val jsTest by getting {}
    }
}

// Publishing configuration
publishing {
    publications {
        withType<MavenPublication> {
            // Artifact ID customization
            artifactId =
                when (name) {
                    "kotlinMultiplatform" -> "drand-client"
                    "jvm" -> "drand-client-jvm"
                    "js" -> "drand-client-js"
                    else -> "drand-client-$name"
                }

            pom {
                name.set("Drand Kotlin Multiplatform Client")
                description.set(
                    "Kotlin Multiplatform client for the drand distributed randomness network with full BLS signature verification",
                )
                url.set("https://github.com/Gimzou/drand-client-kotlin")

                licenses {
                    license {
                        name.set("The Apache License, Version 2.0")
                        url.set("http://www.apache.org/licenses/LICENSE-2.0.txt")
                    }
                    license {
                        name.set("MIT License")
                        url.set("https://opensource.org/licenses/MIT")
                    }
                }

                developers {
                    developer {
                        id.set("arnould")
                        name.set("drand-client-kotlin contributors")
                        // email.set("your.email@example.com")
                    }
                }

                scm {
                    connection.set("scm:git:git://github.com/Gimzou/drand-client-kotlin.git")
                    developerConnection.set("scm:git:ssh://github.com:Gimzou/drand-client-kotlin.git")
                    url.set("https://github.com/Gimzou/drand-client-kotlin")
                }
            }
        }
    }

    repositories {
        maven {
            name = "sonatype"
            val releasesRepoUrl = uri("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")
            val snapshotsRepoUrl = uri("https://s01.oss.sonatype.org/content/repositories/snapshots/")
            url = if (version.toString().endsWith("SNAPSHOT")) snapshotsRepoUrl else releasesRepoUrl

            credentials {
                username = providers.gradleProperty("ossrhUsername").orNull
                password = providers.gradleProperty("ossrhPassword").orNull
            }
        }
    }
}

// Signing configuration (optional for now, required for Maven Central)
signing {
    // Only sign if the credentials are available
    val signingKey = providers.gradleProperty("signing.keyId").orNull
    if (signingKey != null) {
        sign(publishing.publications)
    }
}

dokka
