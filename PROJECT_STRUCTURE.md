# DripWear Project Structure

```
dripwear-protocol/
│
├── 📄 README.md                    # Main project documentation
├── 📄 LICENSE                      # MIT License
├── 📄 .gitignore                   # Git ignore patterns
├── 🔧 setup.sh                     # Quick setup script
│
├── 📁 contracts/                   # Soroban Smart Contracts
│   ├── src/
│   │   └── lib.rs                 # Core contract logic
│   ├── Cargo.toml                 # Rust dependencies
│   └── build.sh                   # Build script
│
├── 📁 metadata/                    # Garment Metadata Standard
│   ├── schema.json                # JSON Schema definition
│   ├── README.md                  # Schema documentation
│   └── examples/
│       └── stellar-wave-bucket-hat.json
│
├── 📁 web-app/                     # React Frontend
│   ├── src/
│   │   ├── main.jsx               # Entry point
│   │   ├── App.jsx                # Main component
│   │   ├── App.css                # Styles
│   │   ├── drips-logic.js         # Soroban integration
│   │   └── components/
│   │       └── GarmentScanner.jsx # NFC/QR scanner
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── 📁 .github/                     # GitHub Configuration
    ├── CONTRIBUTING.md            # Contribution guidelines
    ├── STELLAR_WAVE_ISSUES.md     # Pre-defined issues
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        ├── feature_request.md
        └── design_contribution.md
```

## Key Components

### Smart Contracts (`/contracts`)
- **lib.rs**: Garment-to-Drips linking with revenue splits
- Soroban SDK 21.0.0
- Optimized WASM builds

### Metadata Standard (`/metadata`)
- JSON Schema for garment properties
- 3D model references (IPFS/Arweave)
- NFC/QR tag integration
- Revenue split configuration

### Web Application (`/web-app`)
- React 18 + Vite
- Stellar SDK integration
- NFC scanning (Web NFC API)
- Wallet connection (Freighter/Albedo)

### GitHub Setup (`/.github`)
- Contribution guidelines
- 10 pre-defined Stellar Wave issues
- Issue templates for bugs, features, designs

## Quick Start

```bash
# Run setup
./setup.sh

# Deploy contract
cd contracts
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/dripwear.wasm \
  --network testnet

# Run web app
cd web-app
npm run dev
```

## Stellar Wave Integration

This project is structured to maximize Stellar Wave rewards:

1. **Open Source**: MIT licensed
2. **Developer Tool**: Reusable protocol for fashion + blockchain
3. **Contribution Ready**: 10 issues worth 100-350 points each
4. **Documentation**: Comprehensive guides for contributors
5. **Ecosystem Value**: Brings physical goods to Drips Network

## File Count

- **Total Files**: 23
- **Smart Contracts**: 3 files
- **Web App**: 9 files
- **Metadata**: 3 files
- **Documentation**: 8 files

---

**Built with 💧 for the Stellar Wave**
