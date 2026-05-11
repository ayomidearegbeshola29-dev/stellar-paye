# DripWear Metadata Standard

This directory contains the open-source schema for linking physical and digital garments to the Drips Network.

## Schema Overview

The `schema.json` file defines the standard structure for garment metadata. Key components:

- **garment_id**: Unique identifier (kebab-case)
- **designer**: Stellar address of the creator
- **drips_config**: Revenue split configuration
- **model_uri**: Link to 3D model (IPFS/Arweave)
- **physical**: NFC/QR tag data for physical items
- **edition**: Limited edition tracking

## Usage

### 1. Create Your Garment Metadata

```json
{
  "garment_id": "your-design-001",
  "designer": "GYOUR_STELLAR_ADDRESS...",
  "drips_config": {
    "splits": [
      { "address": "GYOUR_ADDRESS...", "weight": 85 },
      { "address": "GCHARITY_ADDRESS...", "weight": 15 }
    ]
  },
  "model_uri": "ipfs://Qm.../your-model.glb"
}
```

### 2. Validate Against Schema

```bash
npm install -g ajv-cli
ajv validate -s schema.json -d your-garment.json
```

### 3. Deploy to Contract

Use the web app or CLI to link your metadata to the Soroban contract.

## 3D Model Guidelines

- **Format**: GLB (preferred) or OBJ
- **Polygon count**: < 50k for web performance
- **Textures**: PBR materials (base color, metallic, roughness, normal)
- **Storage**: IPFS or Arweave for permanence

## Examples

See `examples/` for reference implementations:
- `stellar-wave-bucket-hat.json` - Limited edition hat with charity split
- More coming soon!

## Contributing

Submit your garment designs as PRs to `examples/`. Include:
- Metadata JSON
- 3D model preview image
- Brief design story

---

**Part of the DripWear Protocol** | [Main Repo](../)
