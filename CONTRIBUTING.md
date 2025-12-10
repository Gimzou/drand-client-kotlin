# Contributing to Drand Kotlin Client

Thank you for your interest in contributing to the Drand Kotlin Client! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Code Style](#code-style)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior by opening an issue.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/drand-client-kotlin.git
   cd drand-client-kotlin
   ```
3. **Add upstream remote** to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/Gimzou/drand-client-kotlin.git
   ```

## Development Setup

### Requirements

- **JDK 21** (or higher) - Required for JVM target
- **Node.js 18+** - Required for JavaScript targets
- **Git** - For version control

### Building the Project

```bash
# Build all platforms
./gradlew build

# Build specific platforms
./gradlew jvmJar          # JVM only
./gradlew jsBrowserLibraryDistribution  # Browser JS
./gradlew jsNodeLibraryDistribution     # Node.js JS
```

### Running Tests

```bash
# Run all tests
./gradlew test

# Run tests for specific platforms
./gradlew jvmTest    # JVM tests
./gradlew jsTest     # JavaScript tests (browser + nodejs)
```

### Running Examples

```bash
# JVM example
./gradlew :examples:jvm:run

# Node.js example
./gradlew jsNodeProductionLibraryDistribution
node examples/nodejs/node-example.mjs

# Browser example
./gradlew jsBrowserProductionLibraryDistribution
python3 -m http.server 8000
# Open http://localhost:8000/examples/browser/index.html
```

## How to Contribute

### Types of Contributions

- **Bug fixes** - Fix issues in existing functionality
- **New features** - Add support for new platforms, schemes, or capabilities
- **Documentation** - Improve README, KDoc, or examples
- **Tests** - Add or improve test coverage
- **Performance** - Optimize existing code

### Before You Start

1. **Check existing issues** - Someone might already be working on it
2. **Open an issue** - Discuss significant changes before implementing
3. **Keep changes focused** - One feature/fix per pull request

## Code Style

This project uses [ktlint](https://ktlint.github.io/) for Kotlin code formatting.

### Running Code Style Checks

```bash
# Check code style
./gradlew ktlintCheck

# Auto-format code
./gradlew ktlintFormat
```

**Important**: All code must pass `ktlintCheck` before being merged. The CI will automatically verify this.

### Code Style Guidelines

- Use **4 spaces** for indentation (not tabs)
- Maximum line length: **140 characters**
- Follow Kotlin [coding conventions](https://kotlinlang.org/docs/coding-conventions.html)
- Add **KDoc comments** for all public APIs
- Use **meaningful variable names**

## Testing

### Test Requirements

- All new features must include tests
- Bug fixes should include regression tests
- Aim for high test coverage on critical paths (crypto, verification)
- Tests must pass on all platforms (JVM and JS)

### Writing Tests

```kotlin
class MyFeatureTest {
    @Test
    fun `should handle expected case`() {
        // Arrange
        val input = "test"

        // Act
        val result = myFunction(input)

        // Assert
        assertEquals("expected", result)
    }
}
```

### Test Naming Convention

Use descriptive test names with backticks:
```kotlin
@Test
fun `getVerifiedBeacon should validate signature correctly`()
```

## Pull Request Process

### 1. Create a Branch

```bash
# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Write clean, documented code
- Follow the code style guidelines
- Add/update tests as needed
- Update documentation if needed

### 3. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "Add support for BN254 curve verification"
```

**Good commit messages:**
- `Add BN254 signature verification support`
- `Fix signature validation for unchained beacons`
- `Update README with Android platform examples`
- `Improve error messages for network failures`

**Avoid:**
- `fix bug`
- `update`
- `wip`

### 4. Run Pre-Submission Checks

```bash
# Ensure code style compliance
./gradlew ktlintFormat

# Run all tests
./gradlew test

# Verify build succeeds
./gradlew build
```

### 5. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then open a pull request on GitHub:
1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template
4. Submit the pull request

### 6. Code Review

- Address reviewer feedback promptly
- Be open to suggestions and discussions
- Update your PR based on feedback
- Once approved, a maintainer will merge your PR

## Reporting Bugs

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) when opening an issue.

**Include:**
- Clear description of the bug
- Steps to reproduce
- Expected behavior vs actual behavior
- Platform (JVM/JS) and version
- Kotlin version
- Relevant logs or error messages

## Suggesting Features

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) when suggesting new features.

**Include:**
- Clear description of the feature
- Use case and motivation
- Proposed API or implementation (if applicable)
- Alternatives you've considered

## Development Tips

### Platform-Specific Code

When adding platform-specific code, use `expect`/`actual`:

```kotlin
// commonMain
expect fun platformSpecificFunction(): String

// jvmMain
actual fun platformSpecificFunction(): String = "JVM implementation"

// jsMain
actual fun platformSpecificFunction(): String = "JS implementation"
```

### Debugging

```bash
# Run with stack traces
./gradlew test --stacktrace

# Run with detailed logs
./gradlew test --info

# Debug specific test
./gradlew test --tests "love.drand.DrandClientTest.getVerifiedBeacon*"
```

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream main into your main
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
```

## Questions?

- **General questions**: Open a [GitHub Discussion](https://github.com/Gimzou/drand-client-kotlin/discussions)
- **Bug reports**: Open an [Issue](https://github.com/Gimzou/drand-client-kotlin/issues/new/choose)
- **Chat**: Join the [drand Slack](https://drand.love/docs/community/)

## License

By contributing, you agree that your contributions will be licensed under the same dual license as the project (Apache 2.0 / MIT).

Thank you for contributing!
