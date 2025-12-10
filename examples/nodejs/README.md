# Node.js Example

Command-line example showing verified randomness in Node.js environments.

## Quick Start
```bash
# From project root
./gradlew jsNodeProductionLibraryDistribution
node examples/nodejs/node-example.mjs
```

**Expected output:**
```
🎲 Drand Client - Node.js Example

Fetching latest beacon from quicknet...
✓ Success!

Round:      24134824
Randomness: 238d42fadf11b58ec8beaeb0b25e2b287660f78911137508952631d24c622beb...
Signature:  af134238b7497806150f3806bafbcd081c3e8916f7c6cb75bd5ace1fe82d3d63...

✓ Cryptographic signature verified!

---

Fetching chain information...
✓ Chain Info:

Public Key:   83cf0f2896adee7eb8b5f01fcad3912212c437e0073e911fb90022d3e760183c...
Period:       3 seconds
Scheme:       bls-unchained-g1-rfc9380
Genesis Time: 2023-08-23T15:09:27.000Z

---

Fetching specific round (round 1000)...
✓ Round 1000:

Randomness: fe290beca10872ef2fb164d2aa4442de4566183ec51c56ff3cd603d930e54fdd...
```

## What It Demonstrates

This example shows:
- ✅ Fetching beacons from multiple networks (quicknet, default)
- ✅ Cryptographic signature verification
- ✅ Chain info retrieval with caching
- ✅ Fetching specific historical rounds
- ✅ Proper error handling and resource cleanup

## Code Overview
```javascript
import { Client } from 'drand-client';

const client = new Client('https://api.drand.sh');

try {
    // Get latest verified beacon
    const beacon = await client.getVerifiedLatestBeacon('quicknet');
    console.log(`Round ${beacon.round}: ${beacon.randomness}`);
    
    // Get chain information
    const info = await client.getChainInfo('quicknet');
    console.log(`Network: ${info.beaconId} (${info.period}s period)`);
    
    // Get specific round
    const historical = await client.getVerifiedBeacon('quicknet', 1000);
    console.log(`Historical round 1000: ${historical.randomness}`);
    
} catch (error) {
    console.error('Error:', error.message);
} finally {
    client.close();  // Always cleanup
}
```

## Requirements

- **Node.js 18+** for native ES module support

## Use Cases

Perfect for:
- 🎲 Random number generation in CLIs
- 🔐 Cryptographic operations requiring verified randomness
- 🤖 Bots and automation scripts
- 🧪 Testing and development workflows
- 📊 Data pipelines needing unpredictable inputs

## API Reference

### Core Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `getVerifiedLatestBeacon(beaconId)` | Fetch & verify latest beacon | `Promise<Beacon>` |
| `getVerifiedBeacon(beaconId, round)` | Fetch & verify specific round | `Promise<Beacon>` |
| `getChainInfo(beaconId)` | Get network configuration | `Promise<ChainInfo>` |
| `close()` | Release resources | `void` |

### Networks

- **`"quicknet"`** - Fast randomness (3 second period)
- **`"default"`** - Standard network (30 second period)

## Troubleshooting

**"Cannot find module"**
→ Run `./gradlew jsNodeProductionLibraryDistribution` first

**"fetch is not defined"** (Node.js < 18)
→ Upgrade to Node.js 18+ or install `node-fetch`

**Network timeout errors**
→ Check internet connection and firewall settings

## Next Steps

- Check the [browser example](../browser/) for UI integration
- Read about [drand's cryptography](https://drand.love/docs)
- Explore [timelock encryption](https://drand.love/blog/timelock-encryption-practical-guide) use cases