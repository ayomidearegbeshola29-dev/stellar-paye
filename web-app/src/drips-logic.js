import { Contract, SorobanRpc, TransactionBuilder, Networks } from '@stellar/stellar-sdk';

const RPC_URL = 'https://soroban-testnet.stellar.org';
const CONTRACT_ID = process.env.VITE_CONTRACT_ID;

export class DripWearClient {
  constructor(walletAddress) {
    this.walletAddress = walletAddress;
    this.server = new SorobanRpc.Server(RPC_URL);
  }

  async linkGarment(garmentId, splits) {
    const contract = new Contract(CONTRACT_ID);
    
    // Build transaction to link garment
    const account = await this.server.getAccount(this.walletAddress);
    const transaction = new TransactionBuilder(account, {
      fee: '100',
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        contract.call(
          'link_garment',
          garmentId,
          this.walletAddress,
          splits
        )
      )
      .setTimeout(30)
      .build();

    return transaction;
  }

  async getGarmentConfig(garmentId) {
    const contract = new Contract(CONTRACT_ID);
    const result = await this.server.getContractData(
      CONTRACT_ID,
      contract.call('get_config', garmentId)
    );
    return result;
  }

  async verifyDesigner(garmentId, designerAddress) {
    const contract = new Contract(CONTRACT_ID);
    const result = await this.server.getContractData(
      CONTRACT_ID,
      contract.call('verify_designer', garmentId, designerAddress)
    );
    return result;
  }
}

export async function initiateDrip(designerAddress, amountPerSecond, asset = 'USDC') {
  // Placeholder for Drips SDK integration
  // Once Drips launches on Stellar, this will use their official SDK
  console.log(`Starting drip to ${designerAddress}: ${amountPerSecond} ${asset}/sec`);
  
  return {
    success: true,
    message: 'Drip stream initiated',
    recipient: designerAddress,
    rate: amountPerSecond,
  };
}
