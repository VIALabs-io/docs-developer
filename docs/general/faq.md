---
sidebar_position: 7
---

# Frequently Asked Questions

This FAQ addresses common questions about VIA Labs' cross-chain messaging system. If you don't find an answer to your question here, please reach out to us on [Discord](https://discord.gg/vialabs) or contact [support@vialabs.io](mailto:support@vialabs.io).

## General Questions

### What is VIA Labs?
VIA Labs provides a cross-chain messaging infrastructure that enables seamless communication between different blockchain networks without traditional bridges. Our technology allows developers to build truly interoperable blockchain applications.

### How is VIA Labs different from traditional bridges?
Traditional bridges typically involve locking assets on one chain and minting wrapped versions on another. VIA Labs enables direct cross-chain communication without wrapping or locking assets, allowing for native cross-chain functionality built directly into smart contracts.

### Which blockchains are supported?
VIA Labs supports a wide range of EVM-compatible blockchains. New chains are able to be quickly added. For a complete list, see our [Supported Networks](/general/supported-networks) page.

## Technical Questions

### How do I integrate VIA Labs into my project?
Integration is straightforward. Start by importing our Solidity package:
```solidity
import "@vialabs-io/contracts/message/MessageClient.sol";
```
Then extend your contract with `MessageClient` and implement the `_processMessage()` function to handle incoming messages. See our [Package documentation](/general/package) for details.

### How do I send a cross-chain message?
Use the `_sendMessage()` function provided by the `MessageClient`:
```solidity
_sendMessage(destinationChainId, data);
```
Where `destinationChainId` is the ID of the target chain and `data` is the encoded message data.

### How do I receive a cross-chain message?
Implement the `_processMessage()` function in your contract:
```solidity
function _processMessage(uint _txId, uint _sourceChainId, bytes calldata _data) internal override {
    // Decode and process the message
}
```

### What data format should I use for cross-chain messages?
Messages are sent as bytes, typically encoded using Solidity's `abi.encode()` function. You can encode any data types supported by Solidity, including addresses, integers, strings, and complex data structures.

### How long does it take for a cross-chain message to be delivered?
Message delivery time depends on the source and destination chains' block times and confirmation requirements. Typically, messages are delivered within a few seconds, but it can take longer during periods of blockchain network congestion.

### Are there any size limitations for cross-chain messages?
Yes, there are practical limits to message size due to gas constraints. We recommend keeping messages as compact as possible. For large data transfers, consider using a pattern where you store the data elsewhere (like IPFS) and only send a reference in the cross-chain message.

## Security Questions

### How secure is the VIA Labs messaging system?
VIA Labs employs a multi-layered security approach with four validation layers: VIA Layer, Chain Layer, Project Layer, and (coming soon) PoL Layer. For a message to be processed, it must pass through all applicable layers. See our [Architecture Overview](/general/architecture#security-model) for more details.

### Can messages be tampered with during transmission?
No, messages cannot be tampered with during transmission. The multi-layered validation process ensures that only authentic messages are delivered to the destination chain.

### What happens if a message fails to be delivered?
If a message fails to be delivered due to technical issues, it will be retried automatically. The system is designed to be resilient and ensure eventual delivery of messages.

## Development and Testing

### How do I test my cross-chain application?
You can test your application on testnets before deploying to mainnet. We support various testnets for each blockchain. See our [Testnet Tokens](/general/testnet-tokens) page for information on obtaining testnet tokens.

### Do I need to pay fees for cross-chain messaging?
On mainnet, yes. Cross-chain messaging requires fees to cover the cost of validation and execution. On testnets, all fees are turned off, so you only need native tokens for gas to deploy and interact with your contracts.

## Troubleshooting

### My cross-chain message isn't being received. What should I check?
1. Verify that your destination contract is properly configured to receive messages
2. Check that you've implemented the `_processMessage()` function correctly
3. Ensure that your contract has been properly configured using the `configureClient()` function
4. Verify that you're using the correct chain IDs
5. Check for any errors in your message encoding/decoding logic

### How can I debug cross-chain messages?
You can use events to log information about sent and received messages. This can help you track the flow of messages and identify any issues. For example:
```solidity
event MessageSent(uint destinationChainId, bytes data);
event MessageReceived(uint sourceChainId, bytes data);
```

### I'm getting an "onlyActiveChain" error. What does this mean?
This error occurs when you try to send a message to a chain that hasn't been configured in your contract. Make sure you've properly configured all chains using the `configureClient()` function.
