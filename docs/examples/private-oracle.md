---
sidebar_position: 4
---

# Private Oracle Example

Private Oracles are currently available on a case by case bases, please get in touch if you have a usecase for private data integration. General availablility soon!

This project demonstrates how to create and deploy a weather oracle using VIA's messaging protocol. The oracle allows smart contracts to request weather data for a zipcode, which is fetched by an off-chain node and returned to the contract.

## Prerequisites

Before you begin, make sure you have:

- Node.js (v20+) and npm
- Git
- Testnet tokens for [Avalanche Testnet](https://core.app/en/tools/testnet-faucet/?subnet=c&token=c)


## Project Structure

```
quickstart-oracle/
├── contracts/
│   └── WeatherOracle.sol    # The oracle contract with request/response functionality
├── scripts/
│   ├── deploy.js            # Deploy script using ethers v6
│   └── request-weather.js   # Script to request weather data
├── oracle/
│   ├── index.js             # VIA Project Node implementation
│   └── features/
│       ├── index.js         # Features registry
│       └── WeatherOracle.js # Weather oracle feature implementation
├── network.config.js        # Network configuration
├── package.json             # Project dependencies
├── .env.example             # Example environment variables
└── README.md                # Project documentation
```

## Step 1: Clone & Setup

```bash
git clone https://github.com/VIALabs-io/quickstart-oracle.git && cd quickstart-oracle
npm install
cp .env.example .env
```

> Edit the `.env` file and add:
> - Your private key for deploying contracts (`PRIVATE_KEY=`)
> - Optionally, your OpenWeatherMap API key (`WEATHER_API_KEY=`) from [OpenWeatherMap](https://openweathermap.org/api)

## Step 2: Deploy Your Oracle Contract

```bash
node scripts/deploy.js
```

## Step 3: Run the Oracle Node

```bash
node oracle/index.js
```

## Step 4: Request Weather Data

```bash
node scripts/request-weather.js 90210
```

> This command requests weather data for the zipcode 90210 (Beverly Hills). The script will:
> 1. Send a transaction to the WeatherOracle contract
> 2. Wait for the transaction to be confirmed
> 3. Poll for the weather data to be received
> 4. Display the weather data when it's available


> **🎉 Congratulations!** You've successfully built and used a private oracle.

## Next Steps

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', margin: '30px 0'}}>
  <a href="/examples/crosschain-token" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Create Cross-Chain Tokens</h3>
      <p style={{flex: '1'}}>Learn how to create tokens that can move between different blockchains.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Learn More →</div>
    </div>
  </a>
  
  <a href="/examples/crosschain-nft" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Create Cross-Chain NFTs</h3>
      <p style={{flex: '1'}}>Learn how to create NFTs that can move between different blockchains.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Learn More →</div>
    </div>
  </a>
  
  <a href="/general/technology-overview" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Learn About VIA Labs Technology</h3>
      <p style={{flex: '1'}}>Understand the technical details behind VIA Labs' cross-chain infrastructure.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Learn More →</div>
    </div>
  </a>
</div>

> **Need Help?** Join our <a href="https://discord.gg/vialabs" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>Discord community</a> for support and discussions.
