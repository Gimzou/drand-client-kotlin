# Drand Client - JavaScript Examples

This directory contains examples for using the drand-client-kotlin library in JavaScript environments (both browser and Node.js).

## Building the Library

Before running the examples, build the JavaScript library:

```bash
# From the project root
./gradlew :drand-client:jsBrowserProductionWebpack
```

This creates a UMD bundle at:
```
drand-client/build/kotlin-webpack/js/productionExecutable/drand-client.js
```

## Browser Examples

### Simple Example (`index.html`)

An example with styled UI showing:
- Latest beacon fetching
- Specific round fetching
- Chain information retrieval
- Error handling

```bash
# Open in browser
open example/index.html
```

## Node.js Example

Run the Node.js example (requires Node.js 14+):

```bash
# From project root, after building
node example/node-example.mjs
```

## API Reference

### Creating a Client

```javascript
// Browser (after loading the script tag)
const { Client } = window.DrandClient;
const client = new Client(); // Uses https://api.drand.sh by default

// Or with custom endpoint
const client = new Client("https://api.drand.sh");
```

```javascript
// Node.js (ES modules)
import { Client } from '../path/to/drand-client.js';
const client = new Client();
```

### Available Methods

All methods return `Promise` and use JavaScript-friendly types:

#### `getVerifiedLatestBeacon(beaconId)`

Fetches and verifies the latest randomness beacon.

```javascript
const beacon = await client.getVerifiedLatestBeacon("quicknet");
console.log(beacon.round);       // Round number (number)
console.log(beacon.randomness);  // Hex string
console.log(beacon.signature);   // Hex string
```

#### `getVerifiedBeacon(beaconId, round)`

Fetches and verifies a specific round.

```javascript
const beacon = await client.getVerifiedBeacon("quicknet", 1000);
```

#### `getChainInfo(beaconId)`

Fetches chain configuration (cached automatically).

```javascript
const info = await client.getChainInfo("default");
console.log(info.publicKey);    // Public key (hex string)
console.log(info.period);       // Beacon period in seconds (number)
console.log(info.scheme);       // Signing scheme name
console.log(info.genesisTime);  // Genesis timestamp (number)
```

#### `close()`

Releases resources (HTTP clients, etc.).

```javascript
client.close();
```

### Error Handling

Errors are thrown as JavaScript exceptions:

```javascript
try {
    const beacon = await client.getVerifiedLatestBeacon("invalid-network");
} catch (error) {
    console.error("Failed:", error.message);
}
```

## Supported Networks

- `"default"` - Main drand network (30s period, pedersen-bls-chained)
- `"quicknet"` - Fast network (3s period, bls-unchained-g1-rfc9380)

## Bundle Size

The production bundle is approximately 613 KB (includes all dependencies: Kotlin stdlib, kotlinx-coroutines, ktor-client, @noble/curves, @noble/hashes).

For production usage, consider:
- Enabling gzip compression on your server
- Using a CDN for hosting
- Lazy-loading the script if not needed immediately

## TypeScript Support

TypeScript definitions are available at:
```
drand-client/build/kotlin-webpack/js/productionExecutable/drand-client-kotlin-drand-client.d.ts
```

## Troubleshooting

### "Client is not defined"

Make sure you:
1. Built the library with `./gradlew :drand-client:jsBrowserProductionWebpack`
2. Loaded the script before accessing `window.DrandClient.DrandClientJs`
3. Checked the browser console for loading errors

### CORS Errors

The default endpoint (`https://api.drand.sh`) has CORS enabled. If using a custom endpoint, ensure it allows cross-origin requests.

### "Cannot find module" in Node.js

Ensure you're using:
- Node.js 14+ with ES modules support
- The `.mjs` extension or `"type": "module"` in package.json
- The correct relative path to the built bundle

## Integration Patterns

### React

```javascript
import { useEffect, useState } from 'react';
import { Client } from './drand-client';

function RandomnessDisplay() {
  const [beacon, setBeacon] = useState(null);

  useEffect(() => {
    const client = new Client();
    client.getVerifiedLatestBeacon('quicknet')
      .then(setBeacon)
      .catch(console.error);
    return () => client.close();
  }, []);

  return <div>{beacon?.randomness}</div>;
}
```

### Vue 3

```javascript
import { ref, onMounted, onUnmounted } from 'vue';
import { Client } from './drand-client';

export default {
  setup() {
    const beacon = ref(null);
    let client;

    onMounted(async () => {
      client = new Client();
      beacon.value = await client.getVerifiedLatestBeacon('quicknet');
    });

    onUnmounted(() => client?.close());

    return { beacon };
  }
}
```

## Publishing to npm

When publishing this library to npm, the package structure should include:

```
package.json
drand-client.js          # UMD bundle
drand-client.d.ts        # TypeScript definitions
README.md
```

Example `package.json`:

```json
{
  "name": "@yourusername/drand-client",
  "version": "0.1.0",
  "main": "drand-client.js",
  "types": "drand-client.d.ts",
  "module": "drand-client.mjs",
  "browser": "drand-client.js",
  "exports": {
    ".": {
      "import": "./drand-client.mjs",
      "require": "./drand-client.js",
      "types": "./drand-client.d.ts"
    }
  }
}
```
