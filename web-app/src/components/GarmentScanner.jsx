import { useState } from 'react';

export default function GarmentScanner({ onScan }) {
  const [garmentId, setGarmentId] = useState('');

  const handleScan = () => {
    if (garmentId) {
      onScan(garmentId);
    }
  };

  const handleNFCScan = async () => {
    if ('NDEFReader' in window) {
      try {
        const ndef = new NDEFReader();
        await ndef.scan();
        
        ndef.addEventListener('reading', ({ message }) => {
          const record = message.records[0];
          const textDecoder = new TextDecoder();
          const garmentId = textDecoder.decode(record.data);
          onScan(garmentId);
        });
      } catch (error) {
        alert('NFC not supported or permission denied');
      }
    } else {
      alert('NFC not supported on this device');
    }
  };

  return (
    <div className="scanner">
      <h3>Scan Garment</h3>
      
      <div className="scan-options">
        <div>
          <input
            type="text"
            placeholder="Enter garment ID"
            value={garmentId}
            onChange={(e) => setGarmentId(e.target.value)}
          />
          <button onClick={handleScan}>Lookup</button>
        </div>
        
        <button onClick={handleNFCScan}>
          📱 Scan NFC Tag
        </button>
      </div>
    </div>
  );
}
