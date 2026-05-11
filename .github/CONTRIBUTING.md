# Contributing to DripWear

Thank you for your interest in contributing to the DripWear Protocol! This project is part of the **Stellar Wave** and welcomes contributions from developers, designers, and fashion enthusiasts.

## 🌊 How Stellar Wave Works

DripWear uses the Drips Network's reward pool system:

1. **Fork & Contribute**: Pick an issue and submit a PR
2. **Maintainers Review**: We merge quality contributions
3. **Automatic Points**: Drips calculates your contribution weight
4. **Receive Rewards**: Get your share of the Stellar Wave pool

[Learn more about Stellar Wave](https://docs.drips.network)

---

## 🎯 Contribution Areas

### 1. Smart Contracts (`/contracts`)
- Add multi-designer split logic
- Implement royalty mechanisms
- Build DAO governance features
- Write comprehensive tests

### 2. Metadata & Design (`/metadata`)
- Create 3D garment patterns (GLB/OBJ)
- Design limited edition collections
- Improve metadata schema
- Add validation tools

### 3. Web App (`/web-app`)
- Build mobile NFC reader
- Integrate wallet providers (Freighter, Albedo)
- Create garment authenticity verification
- Improve UI/UX

### 4. Documentation
- Write tutorials
- Create video guides
- Translate to other languages
- Improve API docs

---

## 🚀 Getting Started

### Prerequisites
- Rust + Soroban CLI (for contracts)
- Node.js 18+ (for web app)
- Git

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/dripwear-protocol.git
cd dripwear-protocol

# Install dependencies
cd web-app && npm install

# Build contracts
cd ../contracts && cargo build --target wasm32-unknown-unknown --release
```

---

## 📝 Contribution Guidelines

### Code Style
- **Rust**: Follow `rustfmt` defaults
- **JavaScript**: Use ESLint + Prettier
- **Commits**: Use conventional commits (`feat:`, `fix:`, `docs:`)

### Pull Request Process

1. **Create a branch**: `git checkout -b feat/your-feature`
2. **Make changes**: Follow existing code patterns
3. **Test**: Ensure all tests pass
4. **Commit**: Write clear commit messages
5. **Push**: `git push origin feat/your-feature`
6. **Open PR**: Reference the issue number

### PR Template

```markdown
## Description
Brief description of changes

## Related Issue
Closes #123

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Documentation updated

## Screenshots (if applicable)
```

---

## 🐛 Reporting Bugs

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md):

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details

---

## 💡 Suggesting Features

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md):

- Problem statement
- Proposed solution
- Alternatives considered
- Impact on Drips ecosystem

---

## 🎨 Design Contributions

For 3D garment submissions:

1. Follow the metadata schema in `/metadata/schema.json`
2. Include:
   - GLB/OBJ file (< 50k polygons)
   - Preview image (PNG/JPG)
   - Design story (markdown)
3. Submit to `/metadata/examples/`

---

## 🏆 Recognition

Contributors are recognized in:
- Project README
- Stellar Wave reward pool
- Community Discord (coming soon)

---

## 📜 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on collaboration
- No harassment or discrimination

---

## 🔗 Resources

- [Stellar Soroban Docs](https://soroban.stellar.org)
- [Drips Network Docs](https://docs.drips.network)
- [Project Discord](#) *(coming soon)*

---

**Questions?** Open a [discussion](../../discussions) or reach out to maintainers.

Thank you for building the future of on-chain fashion! 🌊
