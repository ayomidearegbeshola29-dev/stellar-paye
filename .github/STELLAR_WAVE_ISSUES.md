# Stellar Wave Contribution Issues

These issues are designed for the Stellar Wave reward pool. Contributors who solve these will receive points toward the reward distribution.

## 🎨 Design Issues

### Issue #1: Design Stellar Wave Bucket Hat Collection
**Labels**: `design`, `stellar-wave`, `good-first-issue`  
**Estimated Points**: 150

Create a limited edition bucket hat design for the Stellar Wave launch:
- 3D model (GLB format, < 50k polygons)
- Constellation pattern featuring Stellar logo
- Metadata with 15% charity split to ocean conservation
- Preview renders (front, side, top views)

**Deliverables**:
- `/metadata/examples/stellar-wave-bucket-hat-v2.json`
- 3D model file
- Design story (markdown)

---

### Issue #2: Create Hoodie Design with NFC Pocket
**Labels**: `design`, `stellar-wave`  
**Estimated Points**: 200

Design a hoodie with integrated NFC tag pocket:
- Hidden NFC chip placement
- Drips logo embroidery
- Sustainable materials specification
- Size chart (XS-XXL)

---

## 🔗 Smart Contract Issues

### Issue #3: Add Multi-Designer Split Logic
**Labels**: `contracts`, `stellar-wave`, `enhancement`  
**Estimated Points**: 300

Extend the Soroban contract to support multiple designers per garment:
- Allow N designers with weighted splits
- Implement approval mechanism (2-of-N multisig)
- Add designer removal/replacement logic
- Write comprehensive tests

**Files**: `contracts/src/lib.rs`

---

### Issue #4: Implement Royalty Mechanism
**Labels**: `contracts`, `stellar-wave`  
**Estimated Points**: 250

Add secondary sale royalties:
- Track garment ownership transfers
- Automatic royalty distribution on resale
- Configurable royalty percentage (0-10%)
- Event emission for tracking

---

## 📱 Web App Issues

### Issue #5: Build Mobile NFC Reader Component
**Labels**: `web-app`, `stellar-wave`, `mobile`  
**Estimated Points**: 350

Create a production-ready NFC scanning component:
- Web NFC API integration
- Fallback to QR code scanning
- Error handling and user feedback
- iOS/Android compatibility testing

**Files**: `web-app/src/components/NFCReader.jsx`

---

### Issue #6: Integrate Freighter Wallet
**Labels**: `web-app`, `stellar-wave`, `integration`  
**Estimated Points**: 200

Replace mock wallet with real Freighter integration:
- Connect/disconnect flow
- Transaction signing
- Network switching (testnet/mainnet)
- Error handling

---

### Issue #7: Create Garment Authenticity Verification
**Labels**: `web-app`, `stellar-wave`, `security`  
**Estimated Points**: 300

Build a verification system:
- Check garment exists on-chain
- Verify designer signature
- Display authenticity certificate
- Generate shareable proof

---

## 📚 Documentation Issues

### Issue #8: Write Deployment Tutorial
**Labels**: `documentation`, `stellar-wave`, `good-first-issue`  
**Estimated Points**: 100

Create step-by-step guide:
- Contract deployment to testnet/mainnet
- Environment setup
- Common troubleshooting
- Video walkthrough (optional bonus)

---

### Issue #9: Create 3D Modeling Guidelines
**Labels**: `documentation`, `design`, `stellar-wave`  
**Estimated Points**: 150

Write comprehensive guide for designers:
- Recommended software (Blender, Maya, etc.)
- Polygon optimization techniques
- PBR texture workflow
- Export settings for GLB

---

## 🌐 Infrastructure Issues

### Issue #10: Set Up CI/CD Pipeline
**Labels**: `infrastructure`, `stellar-wave`  
**Estimated Points**: 250

Implement GitHub Actions:
- Rust contract builds
- Web app builds
- Automated testing
- Deployment to testnet

---

## How to Claim an Issue

1. Comment "I'd like to work on this"
2. Maintainers will assign you
3. Fork the repo and create a branch
4. Submit PR when ready
5. Receive Stellar Wave points upon merge

**Questions?** Ask in the issue comments or [Discussions](../../discussions).
