# 🌊 DripWear: On-Chain Fashion Protocol

**Turn physical fashion into programmable value streams on Stellar.**

DripWear is an open-source protocol that bridges physical garments with the [Drips Network](https://drips.network), enabling designers to embed continuous value flows into clothing via NFC/QR tags linked to Soroban smart contracts.

---

## 🎯 Why DripWear?

**For Fashion Designers:**
- Earn recurring revenue from garments after sale
- Split proceeds with collaborators automatically
- Build direct relationships with wearers

**For the Drips Ecosystem:**
- Brings blockchain utility to physical goods
- Onboards fashion communities to Stellar
- Creates recursive funding loops (5% protocol fee flows back to Drips treasury)

**For Wearers:**
- Support designers/causes by wearing clothing
- Verify authenticity on-chain
- Participate in fashion DAOs

---

## 🏗️ Architecture

```
┌─────────────┐      NFC/QR Scan      ┌──────────────┐
│   Garment   │ ───────────────────> │   Web App    │
│  (Physical) │                       │  (Frontend)  │
└─────────────┘                       └──────┬───────┘
                                             │
                                             ▼
                                      ┌──────────────┐
                                      │   Soroban    │
                                      │   Contract   │
                                      └──────┬───────┘
                                             │
                                             ▼
                                      ┌──────────────┐
                                      │ Drips Network│
                                      │   (Streams)  │
                                      └──────────────┘
```

---

## 🚀 Quick Start

### One-Command Setup

```bash
./setup.sh
```

This will:
- ✅ Check prerequisites (Rust, Node.js)
- ✅ Build Soroban contracts
- ✅ Install web app dependencies

### Manual Setup

**Prerequisites:**
- [Rust](https://www.rust-lang.org/tools/install) + `wasm32-unknown-unknown` target
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup)
- [Node.js](https://nodejs.org/) v18+

**Deploy Contract:**
```bash
cd contracts
./build.sh
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/dripwear.wasm \
  --network testnet
```

**Run Web App:**
```bash
cd web-app
npm install
npm run dev
```

📖 **Detailed guides:** See [GETTING_STARTED.md](GETTING_STARTED.md) and [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📦 Project Structure

```
drip-wear-protocol/
├── contracts/          # Soroban smart contracts (Rust)
│   ├── src/
│   │   └── lib.rs     # Core garment-to-drips linking logic
│   └── Cargo.toml
├── metadata/           # Open-source 3D garment schemas
│   ├── schema.json    # Standard for garment metadata
│   └── examples/      # Sample patterns (GLB/OBJ references)
├── web-app/            # React frontend for linking & streaming
│   ├── src/
│   │   ├── drips-logic.js
│   │   └── components/
│   └── package.json
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── CONTRIBUTING.md
├── README.md
└── LICENSE
```

---

## 🧪 How It Works

### 1. Designer Creates Garment
Use the metadata schema in `/metadata` to define your garment's properties:

```json
{
  "garment_id": "bucket-hat-001",
  "designer": "GDESIGNER...",
  "drips_config": {
    "splits": [
      { "address": "GDESIGNER...", "weight": 80 },
      { "address": "GCHARITY...", "weight": 15 },
      { "address": "GDRIPS_TREASURY...", "weight": 5 }
    ]
  },
  "model_uri": "ipfs://Qm..."
}
```

### 2. Deploy Contract
The Soroban contract stores the garment-to-drips mapping on-chain:

```rust
pub fn link_garment(env: Env, garment_id: Symbol, drips_address: Address)
```

### 3. Wearer Scans Tag
NFC/QR tag on garment → Web app → Initiates Drips stream:

```javascript
await client.createDrip(designerAddress, {
  amount: amountPerSecond,
  asset: 'USDC'
});
```

---

## 🌊 Stellar Wave Integration

This project is designed for the **Stellar Wave** reward pool:

### Contribution Opportunities
- **Issue #1:** Design 3D bucket hat for Stellar Wave collection
- **Issue #2:** Add multi-designer split logic to contract
- **Issue #3:** Build mobile NFC reader component
- **Issue #4:** Create garment authenticity verification system

### Claiming Rewards
1. Fork this repo and solve an issue
2. Submit PR with your contribution
3. Maintainers merge → Drips automatically calculates your points
4. Receive share of Stellar Wave reward pool

[Learn more about Stellar Wave](https://docs.drips.network)

---

## 🤝 Contributing

We welcome designers, developers, and fashion enthusiasts!

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines.

**Key Areas:**
- 🎨 3D garment pattern library
- 🔗 Smart contract features (royalties, DAOs, etc.)
- 📱 Mobile app development
- 🌐 Internationalization

---

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

## 🔗 Links

- [Drips Network](https://drips.network)
- [Stellar Soroban Docs](https://soroban.stellar.org)
- [Discord Community](#) *(coming soon)*

---

**Built with 💧 for the Stellar Wave**
