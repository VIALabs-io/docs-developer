---
sidebar_position: 6
---

# Architecture Overview

VIA Labs provides a robust cross-chain messaging infrastructure that enables seamless communication between different blockchain networks without traditional bridges. This document explains the architecture and process flow of the VIA Labs cross-chain messaging system.

## Process Flow

The cross-chain messaging process follows these key steps:

1. **Origin Smart Contract Sends a Message**:
   - The process begins when the origin smart contract on the origin blockchain calls the `_sendMessage()` function.
   - This function sends a message to the VIA Gateway Contract on the origin chain.

2. **Message Detection**:
   - Validators "listen" to the gateway contracts to ensure a message is relayed.

3. **Multi-Layer Security Stack**:
   - The message passes through multiple layers of security. Each layer must pass for the message to proceed.
   - See [Security Model](#security-model) below for more information.

4. **Message Reception**:
   - The VIA Gateway Contract on the recipient blockchain receives the relayed message from the Validation Cloud.
   - It forwards the message to the destination smart contract.

5. **Destination Code Execution**:
   - The `_processMessage()` function in the destination smart contract processes the message received from the gateway contract.
   - This final step completes the communication, enabling the destination contract to take appropriate actions based on the message content.

## Key Components

### Gateway Contracts

Gateway contracts are essential components that enable different blockchains to communicate with each other:

- **Purpose**: Handle the secure and efficient transfer of data and messages between networks.
- **Automated Setup**: These contracts are pre-deployed by the system, so developers don't need to set them up manually.
- **Seamless Communication**: They ensure that messages and data are correctly routed and processed between different blockchains.

:::info
📘 Developers building cross-chain contracts do NOT need to interface with Gateway contracts directly. This is fully abstracted by the MessageClient.
:::

### Validation Cloud

The Validation Cloud facilitates cross-chain communication by relaying messages from the source chain to the destination chain:

- **Purpose**: Off-chain relayers in the validation cloud ensure seamless and reliable execution of cross-chain transactions within the VIA Labs ecosystem.
- **Execution Handling**: Triggers the `_processMessage()` on the destination contract, ensuring correct operation execution.
- **Gas Reimbursement**: An on-chain component pays initial gas fees for transactions. Destination contracts reimburse for these fees.

:::info
📘 Developers building cross-chain contracts do NOT need to interface with the relayers/validation system. This is fully abstracted by the MessageClient.
:::

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

For a transaction to be processed, it must pass through all four layers. This multi-layered approach provides robust security for cross-chain messaging.

## Use Cases

VIA Labs' cross-chain messaging infrastructure enables a wide range of applications:

- **Cross-Chain Tokens and NFTs**: Enable the creation and management of both cross-chain tokens and non-fungible tokens (NFTs).
- **Rebroadcast Oracle Data**: Oracle data can be broadcasted across many EVM chains.
- **Multi-Chain ICOs**: For projects looking to raise capital through Initial Coin Offerings (ICOs).
- **Lending**: Cross-chain lending platforms can be built to allow users to lend and borrow assets across different blockchains.
- **Arbitrage Bots**: Arbitrage opportunities across multiple chains can be identified and capitalized upon using bots built with cross-chain messaging.
- **Unified Metaverses**: Build metaverses that span across multiple chains, creating a truly interconnected virtual world.
- **Social Media Notifications**: Create social media notifications that are triggered by cross-chain events.
