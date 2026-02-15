// Mocha timeout for Karma browser tests.
// The Kotlin Gradle plugin's useMocha { timeout = "30000" } does not
// propagate into the generated karma.conf.js, so we set it explicitly.
config.set({
    client: {
        mocha: {
            timeout: 30000
        }
    }
});
