# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

As the project matures, we will extend support to additional versions.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

We take the security of the Drand Kotlin Client seriously. If you believe you have found a security vulnerability, please report it to us privately.

### How to Report

1. **Email**: Send details to the project maintainer at the email associated with the GitHub profile [@Gimzou](https://github.com/Gimzou)
   - Alternatively, you can use GitHub's [Private Vulnerability Reporting](https://github.com/Gimzou/drand-client-kotlin/security/advisories/new)

2. **Include the following information**:
   - Type of vulnerability (e.g., signature verification bypass, cryptographic weakness)
   - Full paths of source file(s) related to the vulnerability
   - Location of the affected source code (tag/branch/commit or direct URL)
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if available)
   - Impact of the issue, including how an attacker might exploit it

3. **Expected Response Time**:
   - **Initial response**: Within 48 hours
   - **Status update**: Within 7 days
   - **Resolution timeline**: Depends on severity, typically within 30 days

### What to Expect

1. **Acknowledgment**: We will acknowledge receipt of your vulnerability report
2. **Investigation**: We will investigate and validate the vulnerability
3. **Fix Development**: We will develop a fix for the vulnerability
4. **Coordinated Disclosure**: We will work with you to coordinate public disclosure
5. **Credit**: We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security Considerations

This library handles cryptographic operations and verification. Key security aspects:

### Cryptographic Verification

- **BLS Signature Verification**: All beacons are cryptographically verified before being returned
- **Randomness Validation**: SHA-256 hash of signatures is verified against reported randomness
- **Chain Info Validation**: Public keys and chain parameters are validated

### Dependencies

We rely on well-tested cryptographic libraries:
- **JVM**: [jBLST](https://github.com/Consensys/teku) (Ethereum Consensus Client) + BouncyCastle
- **JavaScript**: [@noble/curves](https://github.com/paulmillr/noble-curves) and [@noble/hashes](https://github.com/paulmillr/noble-hashes)

### Known Limitations

- **Network Security**: This library uses HTTPS for API calls but does not implement additional network security measures. Users should ensure they trust their configured drand API endpoint.
- **Side-Channel Attacks**: The library has not been audited for side-channel attack resistance
- **Random Number Quality**: This library verifies that randomness comes from drand, but the quality of randomness depends on the drand network itself

## Security Best Practices for Users

### 1. Verify API Endpoints

Only use trusted drand API endpoints:
```kotlin
// Official drand API
DrandClient("https://api.drand.sh")

// Or run your own drand node
DrandClient("https://your-trusted-node.example.com")
```

### 2. Handle Private Keys Securely

This library does not handle private keys, but if you're building applications that generate or store keys:
- Never log private keys
- Use secure key storage mechanisms
- Follow platform-specific security guidelines

### 3. Validate Chain Information

When first using a beacon chain, validate the chain information matches expected values:
```kotlin
val chainInfo = client.getChainInfo("quicknet").getOrThrow()
require(chainInfo.publicKey == EXPECTED_PUBLIC_KEY) {
    "Chain public key mismatch!"
}
```

### 4. Use Latest Version

Always use the latest version of this library to benefit from security fixes:
```kotlin
dependencies {
    implementation("love.drand:drand-client:0.1.0") // Check for updates
}
```

### 5. Monitor for Security Advisories

Watch the repository for security advisories:
- [Security Advisories](https://github.com/Gimzou/drand-client-kotlin/security/advisories)
- Enable GitHub notifications for security updates
- We use [Aikido Security](https://www.aikido.dev/) to monitor vulnerabilities in our dependencies and their transitive dependencies.

## Disclosure Policy

- **Private Disclosure**: Security issues are initially disclosed privately to maintainers
- **Patch Development**: A patch is developed and tested
- **Security Advisory**: A GitHub Security Advisory is created
- **Public Release**: The fix is released and the advisory is published
- **CVE Assignment**: CVEs are assigned for significant vulnerabilities

## Security Audits

This project has not yet undergone a formal security audit. As the project matures and gains adoption, we plan to:
1. Conduct professional security audits
2. Implement automated security scanning
3. Participate in bug bounty programs

## Contact

For security-related questions or concerns, please contact the maintainers through:
- GitHub Security Advisories (preferred)
- Email to the maintainer (see GitHub profile)

Thank you for helping keep the Drand Kotlin Client and its users safe!
