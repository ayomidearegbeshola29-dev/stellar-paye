# 🚀 Deployment Guide

Complete guide for deploying DripWear to production.

## Prerequisites

- Stellar account with XLM for fees
- Soroban CLI installed
- Contract built (`./contracts/build.sh`)

---

## 1. Deploy Smart Contract

### Testnet Deployment

```bash
cd contracts

# Build optimized WASM
cargo build --target wasm32-unknown-unknown --release

# Deploy to testnet
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/dripwear.wasm \
  --source YOUR_SECRET_KEY \
  --network testnet

# Save the contract ID
export CONTRACT_ID="CXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

### Mainnet Deployment

```bash
# Deploy to mainnet (requires XLM for fees)
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/dripwear.wasm \
  --source YOUR_SECRET_KEY \
  --network mainnet
```

---

## 2. Configure Web App

### Environment Variables

Create `web-app/.env`:

```env
VITE_CONTRACT_ID=your_deployed_contract_id
VITE_NETWORK=testnet  # or mainnet
VITE_RPC_URL=https://soroban-testnet.stellar.org
```

### Build for Production

```bash
cd web-app
npm run build
```

This creates a `dist/` folder ready for deployment.

---

## 3. Deploy Web App

### Option A: Vercel

```bash
npm install -g vercel
vercel --prod
```

### Option B: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option C: IPFS (Decentralized)

```bash
# Install IPFS CLI
npm install -g ipfs

# Add to IPFS
ipfs add -r dist/

# Pin to Pinata/Infura for persistence
```

---

## 4. Link Garments

### Create Garment Metadata

```json
{
  "garment_id": "your-design-001",
  "designer": "GYOUR_STELLAR_ADDRESS...",
  "drips_config": {
    "splits": [
      { "address": "GYOUR_ADDRESS...", "weight": 85 },
      { "address": "GCHARITY...", "weight": 15 }
    ]
  },
  "model_uri": "ipfs://Qm.../model.glb"
}
```

### Upload to IPFS

```bash
ipfs add garment-metadata.json
# Returns: QmXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Link via Contract

Use the web app or CLI:

```bash
soroban contract invoke \
  --id $CONTRACT_ID \
  --source YOUR_SECRET_KEY \
  --network testnet \
  -- \
  link_garment \
  --garment_id "your-design-001" \
  --designer "GYOUR_ADDRESS..." \
  --splits '[{"address":"GYOUR_ADDRESS...","weight":85}]'
```

---

## 5. Physical Integration

### NFC Tags

1. **Purchase NFC tags** (NTAG215/216 recommended)
2. **Write garment ID** to tag:
   ```
   https://your-app.com/scan/your-design-001
   ```
3. **Attach to garment** (sewn pocket, heat-sealed, etc.)

### QR Codes

Generate QR codes linking to:
```
https://your-app.com/scan/your-design-001
```

---

## 6. Claim on Drips

### Register Your Project

1. Go to [Drips App](https://drips.network)
2. Connect wallet
3. Click "Claim Repository"
4. Enter your GitHub repo URL
5. Verify ownership

### Configure Splits

Set up your project's revenue splits:
- Maintainers
- Contributors
- Protocol fees

---

## 7. Monitoring

### Contract Events

Monitor contract calls:

```bash
soroban events \
  --id $CONTRACT_ID \
  --network testnet \
  --start-ledger XXXXX
```

### Analytics

Track:
- Garments linked
- Drips initiated
- Revenue generated
- Active wearers

---

## 8. Security Checklist

- [ ] Contract audited (recommended for mainnet)
- [ ] Private keys secured (hardware wallet)
- [ ] Environment variables not committed
- [ ] HTTPS enabled on web app
- [ ] Rate limiting on API endpoints
- [ ] Input validation on all user data

---

## 9. Maintenance

### Update Contract

```bash
# Build new version
cargo build --target wasm32-unknown-unknown --release

# Deploy new version
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/dripwear.wasm \
  --source YOUR_SECRET_KEY \
  --network testnet

# Update web app with new contract ID
```

### Update Web App

```bash
cd web-app
git pull
npm install
npm run build
vercel --prod  # or your deployment method
```

---

## 10. Troubleshooting

### Contract Deployment Fails

- Check XLM balance for fees
- Verify WASM is optimized
- Ensure Soroban CLI is up to date

### Web App Can't Connect

- Verify contract ID in `.env`
- Check RPC URL is correct
- Ensure wallet is connected

### NFC Not Working

- Test on Android (better support)
- Check HTTPS is enabled
- Verify Web NFC API permissions

---

## Cost Estimates

### Testnet (Free)
- Contract deployment: Free
- Transactions: Free
- Testing: Unlimited

### Mainnet
- Contract deployment: ~0.1 XLM
- Transaction fees: ~0.00001 XLM each
- Storage: ~0.0001 XLM per entry

---

## Next Steps

1. Deploy to testnet first
2. Test all functionality
3. Get community feedback
4. Audit contract (if handling significant value)
5. Deploy to mainnet
6. Announce launch!

---

**Questions?** Open an issue or check the [main README](README.md).

**Built with 💧 for the Stellar Wave**
