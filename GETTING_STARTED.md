# 🚀 Getting Started with DripWear

Welcome to DripWear! This guide will help you get up and running quickly.

## What is DripWear?

DripWear is an **open-source protocol** that bridges physical fashion with the Drips Network on Stellar. It allows designers to:
- Embed continuous value streams into clothing
- Split revenue with collaborators and charities
- Verify garment authenticity on-chain
- Build direct relationships with wearers

## Quick Setup

### 1. Run the Setup Script

```bash
./setup.sh
```

This will:
- Check prerequisites (Rust, Node.js)
- Build Soroban contracts
- Install web app dependencies

### 2. Deploy the Contract (Optional)

```bash
cd contracts
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/dripwear.wasm \
  --network testnet
```

Save the contract ID for later use.

### 3. Run the Web App

```bash
cd web-app
npm run dev
```

Visit `http://localhost:3000` to see the app.

---

## For Designers

### Create Your First Garment

1. **Design your garment** (physical or digital)
2. **Create metadata** following `/metadata/schema.json`:

```json
{
  "garment_id": "my-design-001",
  "designer": "YOUR_STELLAR_ADDRESS",
  "drips_config": {
    "splits": [
      { "address": "YOUR_ADDRESS", "weight": 85 },
      { "address": "CHARITY_ADDRESS", "weight": 15 }
    ]
  },
  "model_uri": "ipfs://YOUR_3D_MODEL"
}
```

3. **Link to contract** using the web app
4. **Attach NFC/QR tag** to physical garment

### 3D Model Guidelines

- **Format**: GLB (preferred) or OBJ
- **Polygons**: < 50k for web performance
- **Textures**: PBR materials
- **Storage**: IPFS or Arweave

See `/metadata/README.md` for details.

---

## For Developers

### Project Structure

```
contracts/     → Soroban smart contracts (Rust)
metadata/      → Garment metadata schemas
web-app/       → React frontend (Vite)
.github/       → Contribution guidelines
```

### Key Files

- `contracts/src/lib.rs` - Core contract logic
- `web-app/src/drips-logic.js` - Soroban integration
- `metadata/schema.json` - Metadata standard

### Contributing

We welcome contributions! See `.github/CONTRIBUTING.md` for guidelines.

**Stellar Wave Opportunities**: Check `.github/STELLAR_WAVE_ISSUES.md` for pre-defined issues worth 100-350 points each.

---

## For Contributors

### How Stellar Wave Works

1. **Pick an issue** from `.github/STELLAR_WAVE_ISSUES.md`
2. **Fork the repo** and create a branch
3. **Submit a PR** with your solution
4. **Get merged** → Receive points toward reward pool
5. **Earn rewards** automatically via Drips

### Contribution Areas

- 🎨 **Design**: Create 3D garment patterns
- 🔗 **Contracts**: Add features (royalties, DAOs, etc.)
- 📱 **Web App**: Build NFC reader, wallet integration
- 📚 **Docs**: Write tutorials, translations

---

## Next Steps

### Designers
1. Read `/metadata/README.md`
2. Create your first garment metadata
3. Join the community (Discord coming soon)

### Developers
1. Explore the codebase
2. Check out Stellar Wave issues
3. Submit your first PR

### Contributors
1. Read `.github/CONTRIBUTING.md`
2. Pick an issue
3. Start building!

---

## Resources

- [Stellar Soroban Docs](https://soroban.stellar.org)
- [Drips Network](https://drips.network)
- [Stellar Wave Info](https://docs.drips.network)

---

## Need Help?

- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions
- **Discord**: Coming soon!

---

**Built with 💧 for the Stellar Wave**

Ready to turn fashion into programmable value? Let's go! 🌊
