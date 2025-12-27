import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.kotlin.serialization)
    alias(libs.plugins.dokka)
    `maven-publish`
    signing
}

group = "love.drand"
version = "0.1.0"

// Generate BuildConfig - configuration cache compatible
val generateBuildConfig =
    tasks.register("generateBuildConfig") {
        // Capture values at configuration time (not execution time)
        val projectVersion = project.version.toString()
        val projectName = project.name

        val outputDir = layout.buildDirectory.dir("generated/buildConfig/commonMain/kotlin")

        inputs.property("version", projectVersion)
        inputs.property("name", projectName)
        outputs.dir(outputDir)

        doLast {
            val file = outputDir.get().file("love/drand/BuildConfig.kt").asFile
            file.parentFile.mkdirs()
            file.writeText(
                """
                |package love.drand
                |
                |/**
                | * Build configuration generated at compile time.
                | * Do not edit manually - this file is auto-generated.
                | */
                |internal object BuildConfig {
                |    const val VERSION = "$projectVersion"
                |    const val NAME = "$projectName"
                |}
                |
                """.trimMargin(),
            )
        }
    }

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
        outputModuleName = "drand-client"

        browser {
            testTask {
                useKarma {
                    useChromeHeadless()
                    useMocha {
                        timeout = "30000"
                    }
                }
            }
        }
        nodejs {
            testTask {
                useMocha { timeout = "30000" }
            }
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
            // Add generated BuildConfig to sources
            kotlin.srcDir(layout.buildDirectory.dir("generated/buildConfig/commonMain/kotlin"))

            dependencies {
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.kotlinx.datetime)
                api(libs.ktor.client.core)
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

// Ensure BuildConfig is generated before compilation and linting
tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask<*>>().configureEach {
    dependsOn(generateBuildConfig)
}

tasks.matching { it.name.startsWith("runKtlintCheckOver") || it.name.startsWith("runKtlintFormatOver") }.configureEach {
    dependsOn(generateBuildConfig)
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
