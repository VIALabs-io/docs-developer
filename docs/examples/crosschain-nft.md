---
sidebar_position: 2
---

# Native Cross-Chain NFT

## Prerequisites

Before you begin, make sure you have:

- Node.js (v16+) and npm
- Git
- A private key with testnet funds for deployment
- Testnet tokens for:
  - [Avalanche Testnet Faucet](https://core.app/en/tools/testnet-faucet/?subnet=c&token=c)
  - [Base Testnet Faucet](https://docs.base.org/chain/network-faucets)

## Step 1: Clone & Setup

```bash
# Clone the repository
git clone https://github.com/VIALabs-io/hello-erc721.git && cd hello-erc721

# Install dependencies
npm install

# Create a .env file with your private key
cp .env.example .env
```
> Make sure your private key is correct in the .env file and has testnet tokens.

## Step 2: Deploy Your NFT Contract

```bash
# Deploy to Ethereum Sepolia
npx hardhat --network ethereum-sepolia deploy

# Deploy to Polygon Amoy
npx hardhat --network polygon-amoy deploy
```

> The HelloERC721 contract is deployed on both chains.
> NFT IDs start at [chain-id]0000 for each chain.

## Step 3: Configure Cross-Chain Messaging

```bash
# Configure on Ethereum Sepolia
npx hardhat --network ethereum-sepolia configure

# Configure on Polygon Amoy
npx hardhat --network polygon-amoy configure
```

> This step registers each contract with VIA's messaging system.

## Step 4: Mint an NFT

```bash
# Mint an NFT on Polygon Amoy
npx hardhat --network polygon-amoy mint-nft
```

> You'll receive the next available NFT ID. On Polygon Amoy, 
> the first NFT will be 800020000, the next 800020001, etc.

## Step 5: View NFT Details

```bash
# Check your NFT details on Polygon Amoy
npx hardhat --network polygon-amoy get-nft --nftid 800020000
```

> This shows the NFT's metadata and current owner.

## Step 6: Send NFT Cross-Chain

```bash
# Send NFT from Polygon Amoy to Ethereum Sepolia
npx hardhat --network polygon-amoy bridge-nft --dest 11155111 --nftid 800020000
```

> This command bridges your NFT from Polygon Amoy to Ethereum Sepolia.
> It may take a few moments to process through the VIA network.

## Step 7: Verify the Transfer

```bash
# Check that your NFT arrived on Ethereum Sepolia
npx hardhat --network ethereum-sepolia get-nft --nftid 800020000
```

> **🎉 Congratulations!** You've successfully created and used a cross-chain NFT.

## Next Steps

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', margin: '30px 0'}}>
  <a href="/examples/crosschain-token" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Create Cross-Chain Tokens</h3>
      <p style={{flex: '1'}}>Learn how to create tokens that can move between different blockchains.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Learn More →</div>
    </div>
  </a>
  
  <a href="/examples/crosschain-oracle" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
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
