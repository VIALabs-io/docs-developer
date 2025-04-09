---
sidebar_position: 1
---

# Technology Overview

![Technology Overview](/tech-overview.webp)

## Smart Contract to Smart Contract Communication

### Process Flow

1. **Origin Smart Contract Sends a Message**:
   - `sendMessage()`: The process begins when the origin smart contract on the origin blockchain calls the sendMessage() function. This function sends a message to the VIA Gateway Contract on the origin chain.

2. **Message Detection**:
   - The validators "listen" to the gateway contracts to ensure a message is relayed.

3. **Multi Layer Security Stack**:
   - **Validation**: The message passes through multiple layers of security. Each layer must pass for the message to proceed. See [Security Model](#security-model) below for more information.

4. **Message Reception**:
   - The VIA Gateway Contract on the recipient blockchain receives the relayed message from the Validation Cloud and forwards it to the destination smart contract.

5. **Destination Code Execution**:
   - `_processMessage()`: The destination smart contract on the recipient blockchain processes the message received from the relayer contract. This final step completes the communication, enabling the destination contract to take appropriate actions based on the message content.

## Key Components

### Gateway Contracts

Gateway contracts are essential components that enable different blockchains to communicate with each other:

- **Purpose**: Handle the secure and efficient transfer of data and messages between networks.
- **Automated Setup**: These contracts are pre-deployed by the system, so developers don't need to set them up manually.
- **Seamless Communication**: They ensure that messages and data are correctly routed and processed between different blockchains.

### Validation Cloud

The Validation Cloud facilitates cross-chain communication by relaying messages from the source chain to the destination chain:

- **Purpose**: Off-chain relayers in the validation cloud ensure seamless and reliable execution of cross-chain transactions within the VIA Labs ecosystem.
- **Execution Handling**: Triggers the `_processMessage()` on the destination contract, ensuring correct operation execution.
- **Gas Reimbursement**: An on-chain component pays initial gas fees for transactions. Destination contracts reimburse for these fees.

## Security Model

VIA Labs' cross-chain network uses a multi-layered validation process to ensure the security and integrity of transactions:

### VIA Layer
- **Operated by**: VIA Labs
- **Function**: Validates transactions within the VIA Labs ecosystem
- **Consensus**: Proof of Authority (no stake required, no validation rewards)

### Chain Layer
- **Managed by**: Blockchain Foundations
- **Function**: Each blockchain involved manages its own validation layer
- **Purpose**: Ensures that messages exiting the blockchain are verified
- **Consensus**: Proof of Authority (no stake required, no validation rewards)

### Project Layer
- **Operated by**: Integrating dApps
- **Function**: Projects can operate their own private validation layer
- **Purpose**: Provides additional security tailored to the specific needs of the project
- **Consensus**: Proof of Authority (no stake required, no validation rewards)

### PoL Layer (Coming Soon)
- **Operated by**: Community (individuals, dApps, and foundations)
- **Requirement**: Participants must stake $VIA tokens
- **Consensus**: Proof of Liquidity (stake required, validators earn rewards)
- **Validation**: 51% consensus mechanism

> For a transaction to be processed, it must pass through all four layers. This multi-layered approach provides robust security for cross-chain messaging.

## Cross-Chain Token Implementation

VIA's cross-chain token technology enables native tokens to exist simultaneously on multiple blockchains while maintaining a unified total supply:

- **Unified Token Contract**: Instead of creating wrapped tokens, VIA enables a single token to exist natively across multiple chains.
- **Atomic Cross-Chain Transfers**: When tokens move between chains, they are burned on the source chain and minted on the destination chain in a single atomic operation.
- **Consistent Token Properties**: The same token symbol, name, and decimals are maintained across all chains.
- **Unified Total Supply**: The sum of token balances across all chains always equals the total supply, ensuring economic consistency.

## Cross-Chain NFT Capabilities

VIA's cross-chain NFT infrastructure allows non-fungible tokens to move freely between blockchains while preserving their uniqueness and provenance:

- **Persistent Metadata**: NFT metadata and attributes remain consistent regardless of which blockchain the NFT currently resides on.
- **Provenance Tracking**: The complete ownership history is maintained across chains, preserving the NFT's provenance.
- **Chain-Agnostic Ownership**: Users can own and trade the same NFT on different blockchains without creating wrapped versions.
- **Cross-Chain Royalties**: Creator royalties can be enforced across all supported blockchains.

## Private Oracle Network

VIA's private oracle solution enables secure off-chain data delivery to smart contracts across multiple blockchains:

- **Decentralized Data Sources**: Connect to any API or data source and deliver the information to smart contracts on any supported blockchain.
- **Cross-Chain Data Consistency**: Ensure the same data is available to contracts across different blockchains.
- **Custom Validation Logic**: Implement custom validation rules for data verification before delivery to smart contracts.
- **Private Data Feeds**: Create private data feeds that are only accessible to specific contracts or addresses.
- **Efficient Data Broadcasting**: Broadcast the same data to multiple chains with a single transaction, reducing costs and latency.

## Use Cases

VIA Labs' cross-chain messaging infrastructure enables a wide range of applications:

- **Cross-Chain Tokens and NFTs**: Enable the creation and management of both cross-chain tokens and non-fungible tokens (NFTs).
- **Rebroadcast Oracle Data**: Oracle data can be broadcasted across many EVM chains.
- **Multi-Chain ICOs**: For projects looking to raise capital through Initial Coin Offerings (ICOs).
- **Lending**: Cross-chain lending platforms can be built to allow users to lend and borrow assets across different blockchains.
- **Arbitrage Bots**: Arbitrage opportunities across multiple chains can be identified and capitalized upon using bots built with cross-chain messaging.
- **Unified Metaverses**: Build metaverses that span across multiple chains, creating a truly interconnected virtual world.
- **Social Media Notifications**: Create social media notifications that are triggered by cross-chain events.

## Learn More

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', margin: '30px 0'}}>
  <a href="/examples/crosschain-token" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Cross-Chain Token Example</h3>
      <p style={{flex: '1'}}>Create a token that can move between blockchains while maintaining a unified total supply.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>View Example →</div>
    </div>
  </a>
  
  <a href="/examples/crosschain-nft" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Cross-Chain NFT Example</h3>
      <p style={{flex: '1'}}>Build NFTs that can travel across chains while preserving their uniqueness and provenance.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>View Example →</div>
    </div>
  </a>
  
  <a href="/examples/private-oracle" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Private Oracle Example</h3>
      <p style={{flex: '1'}}>Connect your smart contracts to off-chain data sources across multiple blockchains.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>View Example →</div>
    </div>
  </a>
</div>
