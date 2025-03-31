---
sidebar_position: 2
---

# Native Cross-Chain NFT

## Prerequisites

Before you begin, make sure you have:

- Node.js (v20+) and npm
- Git
- A private key with testnet funds for deployment
- Testnet tokens for:
  - [Avalanche Testnet Faucet](https://core.app/en/tools/testnet-faucet/?subnet=c&token=c)
  - [Base Testnet Faucet](https://docs.base.org/chain/network-faucets)

## Step 1: Clone & Setup

```bash
# Clone the repository
git clone https://github.com/VIALabs-io/quickstart-nft.git && cd quickstart-nft

# Install dependencies
npm install

# Create a .env file with your private key
cp .env.example .env
```
> Make sure your private key is correct in the .env file and has testnet tokens for both networks.

## Step 2: Deploy Your NFT

```bash
node scripts/deploy.js
```

> The MyNFT contract is deployed to all configured networks, an initial NFT is minted on each network, and cross-chain messaging is configured automatically.

## Step 3: Bridge NFTs Between Networks

```bash
# List NFTs on Avalanche Testnet
node scripts/bridge.js avalanche-testnet

# Bridge NFT #431130000 from Avalanche Testnet to Base Testnet
node scripts/bridge.js avalanche-testnet base-testnet 431130000
```

> You can also specify a recipient address:
> ```bash
> node scripts/bridge.js avalanche-testnet base-testnet 431130000 0x1234...
> ```

## Step 4: Use the Frontend

The project includes a React-based frontend for interacting with your NFTs:

```bash
# Start the frontend
cd frontend
npm install
npm run dev
```

The frontend allows you to:
- Connect your wallet
- View your NFTs on different networks
- Mint new NFTs
- Bridge NFTs between networks
- Monitor cross-chain events

> **🎉 Congratulations!** You've successfully created and used a cross-chain NFT.

## Adding More Networks

### Step 1: Edit Network Configuration

Edit the `network.config.js` file and add new network configurations:

```javascript
// Add a new network
const networks = {
  'avalanche-testnet': {
    name: 'avalanche-testnet',
    chainId: 43113,
    rpcUrl: process.env.AVALANCHE_TESTNET_RPC || 'https://api.avax-test.network/ext/bc/C/rpc',
    blockExplorer: 'https://testnet.snowtrace.io',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    }
  },
  'base-testnet': {
    name: 'base-testnet',
    chainId: 84532,
    rpcUrl: process.env.BASE_TESTNET_RPC || 'https://sepolia.base.org',
    blockExplorer: 'https://sepolia-explorer.base.org',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    }
  },
  // Add your new network here
  // Example for adding Polygon Mumbai:
  'polygon-testnet': {
    name: 'polygon-testnet',
    chainId: 80001,
    rpcUrl: process.env.POLYGON_TESTNET_RPC || 'https://rpc-mumbai.maticvigil.com',
    blockExplorer: 'https://mumbai.polygonscan.com',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    }
  }
};
```

### Step 2: Deploy

```bash
node scripts/deploy.js
```

> This will deploy to any new networks and reconfigure cross-chain messaging between all networks. The frontend supports hot-reloading and will automatically detect the new network configurations.

## Next Steps

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', margin: '30px 0'}}>
  <a href="/examples/crosschain-token" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Create Cross-Chain Tokens</h3>
      <p style={{flex: '1'}}>Learn how to create tokens that can move between different blockchains.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Learn More →</div>
    </div>
  </a>
  
  <a href="/examples/private-oracle" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Build a Cross-Chain Oracle</h3>
      <p style={{flex: '1'}}>Connect your smart contracts to off-chain data sources across multiple chains.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Learn More →</div>
    </div>
  </a>
  
  <a href="/general/architecture" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Learn About VIA Labs Architecture</h3>
      <p style={{flex: '1'}}>Understand the technical details behind VIA Labs' cross-chain infrastructure.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Learn More →</div>
    </div>
  </a>
</div>

> **Need Help?** Join our <a href="https://discord.gg/vialabs" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>Discord community</a> for support and discussions.
