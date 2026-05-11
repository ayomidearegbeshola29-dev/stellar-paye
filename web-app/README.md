# DripWear Web App

React frontend for scanning garments and initiating Drips streams.

## Features

- 🔗 Connect Stellar wallet (Freighter/Albedo)
- 📱 NFC tag scanning (Web NFC API)
- 🔍 Manual garment lookup
- 💧 Initiate Drips streams to designers

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create `.env`:

```
VITE_CONTRACT_ID=your_deployed_contract_id
```

## Architecture

- `drips-logic.js` - Soroban contract interaction
- `components/GarmentScanner.jsx` - NFC/QR scanning
- `App.jsx` - Main application flow

## Browser Support

NFC scanning requires:
- Chrome/Edge on Android
- Safari on iOS (limited support)

Desktop browsers can use manual garment ID lookup.
