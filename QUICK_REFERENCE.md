# 🌊 DripWear Quick Reference

## One-Liners

```bash
# Setup everything
./setup.sh

# Build contract
cd contracts && ./build.sh

# Run web app
cd web-app && npm run dev

# Deploy to testnet
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/dripwear.wasm --network testnet
```

---

## File Locations

| What | Where |
|------|-------|
| Smart contract | `contracts/src/lib.rs` |
| Web app | `web-app/src/App.jsx` |
| Drips logic | `web-app/src/drips-logic.js` |
| Metadata schema | `metadata/schema.json` |
| Example garment | `metadata/examples/stellar-wave-bucket-hat.json` |
| Contribution guide | `.github/CONTRIBUTING.md` |
| Wave issues | `.github/STELLAR_WAVE_ISSUES.md` |

---

## Key Commands

### Contracts
```bash
# Build
cargo build --target wasm32-unknown-unknown --release

# Deploy testnet
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/dripwear.wasm --network testnet

# Invoke function
soroban contract invoke --id CONTRACT_ID --network testnet -- link_garment --garment_id "test-001" --designer "GADDRESS..." --splits '[...]'
```

### Web App
```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## Contract Functions

```rust
// Link a garment to Drips config
link_garment(garment_id, designer, splits)

// Get garment configuration
get_config(garment_id)

// Verify designer ownership
verify_designer(garment_id, designer)
```

---

## Metadata Schema

```json
{
  "garment_id": "string",
  "designer": "G...",
  "drips_config": {
    "splits": [
      { "address": "G...", "weight": 85 }
    ]
  },
  "model_uri": "ipfs://...",
  "physical": {
    "nfc_tag_id": "...",
    "qr_code": "..."
  }
}
```

---

## Stellar Wave Issues

| # | Title | Points | Type |
|---|-------|--------|------|
| 1 | Bucket hat design | 150 | Design |
| 2 | Hoodie design | 200 | Design |
| 3 | Multi-designer splits | 300 | Contract |
| 4 | Royalty mechanism | 250 | Contract |
| 5 | Mobile NFC reader | 350 | Web App |
| 6 | Wallet integration | 200 | Web App |
| 7 | Authenticity verification | 300 | Web App |
| 8 | Deployment tutorial | 100 | Docs |
| 9 | 3D modeling guide | 150 | Docs |
| 10 | CI/CD pipeline | 250 | Infra |

**Total: 2,250+ points**

---

## Documentation Map

```
README.md              → Project overview
GETTING_STARTED.md     → Quick start guide
DEPLOYMENT.md          → Production deployment
PROJECT_SUMMARY.md     → Complete breakdown
PROJECT_STRUCTURE.md   → Architecture details
LAUNCH_CHECKLIST.md    → Pre-launch tasks
BANNER.txt             → ASCII art
QUICK_REFERENCE.md     → This file
```

---

## Useful Links

- **Stellar Soroban**: https://soroban.stellar.org
- **Drips Network**: https://drips.network
- **Stellar SDK**: https://www.npmjs.com/package/@stellar/stellar-sdk
- **Web NFC API**: https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API

---

## Environment Variables

```env
# Web App (.env)
VITE_CONTRACT_ID=CXXXXXXX...
VITE_NETWORK=testnet
VITE_RPC_URL=https://soroban-testnet.stellar.org
```

---

## Git Workflow

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit: DripWear Protocol v0.1.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dripwear-protocol.git
git push -u origin main

# Contributor workflow
git checkout -b feat/your-feature
# ... make changes ...
git commit -m "feat: add your feature"
git push origin feat/your-feature
# ... open PR on GitHub ...
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Contract won't build | Run `rustup target add wasm32-unknown-unknown` |
| Web app won't start | Delete `node_modules` and run `npm install` |
| NFC not working | Ensure HTTPS and Android device |
| Wallet won't connect | Install Freighter extension |

---

## Support

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Discord**: Coming soon
- **Email**: [Your email]

---

**Built with 💧 for the Stellar Wave**
