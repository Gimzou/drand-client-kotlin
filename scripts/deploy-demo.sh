#!/bin/bash
# deploy-demo.sh

set -e

echo "🔨 Building library..."
./gradlew jsBrowserProductionLibraryDistribution

echo "📦 Copying files to docs/..."
# Remove old demo files
rm -rf docs/drand-client

# Copy entire package (matches npm install structure)
cp -r ./build/js/packages/drand-client docs/

# Create demo HTML with correct import path
sed 's|../../build/js/packages/drand-client/kotlin/drand-client.mjs|./drand-client/kotlin/drand-client.mjs|g' \
    examples/browser/index.html > docs/index.html

# Copy screenshot if it exists
if [ -f docs/drand-client_example_browser.png ]; then
    echo "   Screenshot already in place"
fi

echo ""
echo "✅ Demo deployed to docs/"
echo "   Structure:"
echo "   docs/"
echo "   ├── index.html                    (demo page)"
echo "   ├── drand-client_example_browser.png  (screenshot)"
echo "   └── drand-client/                 (npm package)"
echo "       ├── package.json"
echo "       └── kotlin/                   (all modules)"
echo ""
echo "🌐 Commit and push to deploy to GitHub Pages"
