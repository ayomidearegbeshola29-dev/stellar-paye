import { useState } from 'react';
import { DripWearClient, initiateDrip } from './drips-logic';
import GarmentScanner from './components/GarmentScanner';
import './App.css';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [garmentData, setGarmentData] = useState(null);

  const connectWallet = async () => {
    // Placeholder for Freighter/Albedo wallet integration
    const mockAddress = 'GEXAMPLEUSERADDRESS123456789ABCDEFGHIJKLMNOPQRSTUV';
    setWalletAddress(mockAddress);
  };

  const handleScan = async (garmentId) => {
    const client = new DripWearClient(walletAddress);
    const config = await client.getGarmentConfig(garmentId);
    setGarmentData(config);
  };

  const startSupporting = async () => {
    if (!garmentData) return;
    
    const result = await initiateDrip(
      garmentData.designer,
      0.0001, // 0.0001 USDC per second
      'USDC'
    );
    
    alert(`✅ ${result.message}`);
  };

  return (
    <div className="app">
      <header>
        <h1>🌊 DripWear</h1>
        <p>Scan garments to support designers</p>
      </header>

      {!walletAddress ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <GarmentScanner onScan={handleScan} />
          
          {garmentData && (
            <div className="garment-info">
              <h2>Garment Found</h2>
              <p>Designer: {garmentData.designer}</p>
              <button onClick={startSupporting}>
                Start Supporting
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
