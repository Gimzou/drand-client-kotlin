plugins {
    kotlin("jvm")
    application
}

dependencies {
    implementation(project(":drand-client"))
    runtimeOnly("org.slf4j:slf4j-simple:2.0.9")
}

application {
    mainClass.set("com.example.DrandExampleKt")
}
