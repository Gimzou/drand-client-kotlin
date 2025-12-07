// Node.js example using ES modules
// To run: node example/node-example.mjs (from project root after building)

import { Client } from '../../build/js/packages/drand-client/kotlin/drand-client.mjs';

async function main() {
    console.log('🎲 Drand Client - Node.js Example\n');

    // Create client instance
    const client = new Client();

    try {
        // Fetch latest beacon from quicknet
        console.log('Fetching latest beacon from quicknet...');
        const beacon = await client.getVerifiedLatestBeacon('quicknet');

        console.log('✓ Success!\n');
        console.log(`Round:      ${beacon.round}`);
        console.log(`Randomness: ${beacon.randomness.substring(0, 64)}...`);
        console.log(`Signature:  ${beacon.signature.substring(0, 64)}...`);
        console.log('\n✓ Cryptographic signature verified!');

        // Fetch chain information
        console.log('\n---\n');
        console.log('Fetching chain information...');
        const chainInfo = await client.getChainInfo('quicknet');

        console.log('✓ Chain Info:\n');
        console.log(`Public Key:   ${chainInfo.publicKey.substring(0, 64)}...`);
        console.log(`Period:       ${chainInfo.period} seconds`);
        console.log(`Scheme:       ${chainInfo.scheme}`);
        console.log(`Genesis Time: ${new Date(chainInfo.genesisTime * 1000).toISOString()}`);

        // Fetch specific round
        console.log('\n---\n');
        console.log('Fetching specific round (round 1000)...');
        const specificBeacon = await client.getVerifiedBeacon('quicknet', 1000);

        console.log('✓ Round 1000:\n');
        console.log(`Randomness: ${specificBeacon.randomness.substring(0, 64)}...`);

        // Clean up
        client.close();

    } catch (error) {
        console.error('✗ Error:', error.message);
        process.exit(1);
    }
}

main();
