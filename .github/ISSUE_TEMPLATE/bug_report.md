---
name: Bug Report
about: Report a bug or unexpected behavior
title: '[BUG] '
labels: 'bug'
assignees: ''
---

## Bug Description

A clear and concise description of what the bug is.

## Steps to Reproduce

1. Go to '...'
2. Call method '...'
3. With parameters '...'
4. See error

## Expected Behavior

A clear and concise description of what you expected to happen.

## Actual Behavior

A clear and concise description of what actually happened.

## Code Example

```kotlin
// Minimal reproducible example
val client = DrandClient()
val result = client.getVerifiedLatestBeacon("quicknet")
// Error occurs here
```

## Environment

**Platform** (check all that apply):
- [ ] JVM
- [ ] JavaScript (Browser)
- [ ] JavaScript (Node.js)

**Version Information:**
- Library version: [e.g., 0.1.0]
- Kotlin version: [e.g., 2.2.20]
- JDK version (if JVM): [e.g., 21]
- Node.js version (if JS): [e.g., 18.0.0]
- Browser (if applicable): [e.g., Chrome 120]

**Operating System:**
- [ ] Linux (distribution: ___)
- [ ] macOS (version: ___)
- [ ] Windows (version: ___)

## Error Messages / Stack Traces

```
Paste any error messages or stack traces here
```

## Additional Context

Add any other context about the problem here:
- Does it happen consistently or intermittently?
- Did this work in a previous version?
- Any workarounds you've found?
- Related issues or discussions?

## Possible Solution

If you have an idea of what might be causing the issue or how to fix it, please share!

## Checklist

- [ ] I have searched existing issues to ensure this is not a duplicate
- [ ] I have provided a minimal reproducible example
- [ ] I have included version information
- [ ] I have checked the [documentation](https://github.com/Gimzou/drand-client-kotlin/blob/main/README.md)
