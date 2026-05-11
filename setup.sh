#!/bin/bash
set -e

echo "🌊 DripWear Protocol Setup"
echo "=========================="
echo ""

# Check prerequisites
echo "Checking prerequisites..."

if ! command -v cargo &> /dev/null; then
    echo "❌ Rust not found. Install from https://rustup.rs"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Install from https://nodejs.org"
    exit 1
fi

echo "✅ Prerequisites met"
echo ""

# Setup contracts
echo "📦 Setting up Soroban contracts..."
cd contracts
rustup target add wasm32-unknown-unknown 2>/dev/null || true
cargo build --target wasm32-unknown-unknown --release
cd ..
echo "✅ Contracts built"
echo ""

# Setup web app
echo "🌐 Setting up web app..."
cd web-app
npm install
echo "✅ Web app dependencies installed"
cd ..
echo ""

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Deploy contract: cd contracts && soroban contract deploy --wasm target/wasm32-unknown-unknown/release/dripwear.wasm --network testnet"
echo "  2. Run web app: cd web-app && npm run dev"
echo "  3. Check out contribution opportunities in .github/STELLAR_WAVE_ISSUES.md"
echo ""
echo "Built with 💧 for the Stellar Wave"
