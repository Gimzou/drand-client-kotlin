// Configure Mocha timeout for integration tests
// Integration tests make real network calls and perform cryptographic verification,
// which can take longer than the default 2000ms timeout

config.set({
    client: {
        mocha: {
            timeout: 30000  // 30 seconds - allows time for network requests + crypto verification
        }
    }
});
