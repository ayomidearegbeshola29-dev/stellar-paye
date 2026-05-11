#!/bin/bash
set -e

echo "🔨 Building DripWear contract..."
cargo build --target wasm32-unknown-unknown --release

echo "✅ Contract built successfully!"
echo "📦 WASM location: target/wasm32-unknown-unknown/release/dripwear.wasm"
