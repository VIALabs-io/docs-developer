---
sidebar_position: 1
---

# Solidity Package

Quickly integrate cross-chain functionalities into your projects with VIA Labs' Solidity package.

:::info
📘 If you just want to try us out quickly, follow our [`Cross-Chain Token`](/examples/crosschain-token) or [`Cross-Chain NFT`](/examples/crosschain-nft) guides to launch your own cross-chain assets in minutes.
:::

## Installation

Start by installing the package in your project:

```bash
npm install https://github.com/VIALabs-io/npm-contracts
```

## Contract Configuration

To enable cross-chain communication in your application, you need to implement two key functions:

1. `_sendMessage()` - Sends data to another blockchain
2. `_processMessage()` - Receives and processes data from another blockchain

## Simple Code Example

Here's a straightforward example of a cross-chain ERC20 token:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@vialabs-io/npm-contracts/MessageClient.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract HelloERC20 is ERC20Burnable, MessageClient {
    constructor() ERC20("HelloERC20", "HELLO") {
        _mint(msg.sender, 1_000_000 ether);
    }

    function bridge(uint _destChainId, address _recipient, uint _amount) external onlyActiveChain(_destChainId) {
        // burn tokens
        _burn(msg.sender, _amount);

        // send cross chain message
        _sendMessage(_destChainId, abi.encode(_recipient, _amount));
    }

    function _processMessage(uint _sourceChainId, uint /* _sourceMsgSender */, bytes calldata _data) internal virtual override {
        // decode message
        (address _recipient, uint _amount) = abi.decode(_data, (address, uint));

        // mint tokens
        _mint(_recipient, _amount);
    }
}
```

## Key Functions Explained

### _sendMessage()

The `_sendMessage()` function packages and sends data to another blockchain.

```solidity
function _sendMessage(uint destinationChainId, bytes memory data) internal returns (uint txId);
```

Parameters:
- `destinationChainId`: The ID of the chain to send the message to
- `data`: The message data to be sent (encoded using `abi.encode()`)

Returns:
- `txId`: A unique transaction ID for the message

### _processMessage()

The `_processMessage()` function receives and processes data from another blockchain. You must override this function in your contract to handle incoming messages.

```solidity
function _processMessage(uint _sourceChainId, uint _sourceMsgSender, bytes calldata _data) internal virtual;
```

Parameters:
- `_sourceChainId`: ID of the source chain from where the message is coming
- `_sourceMsgSender`: Address of the sender on the source chain (can be ignored in many cases)
- `_data`: Message data (decode using `abi.decode()`)

## Modifiers

The MessageClient contract provides useful modifiers:

- `onlyActiveChain(uint chainId)`: Ensures the destination chain is active and configured
- `onlySelf(address sender, uint sourceChainId)`: Validates that the message is from a trusted source

## Configuration

After deploying your contracts, you need to configure them to communicate with each other. This is done using the `configureClient()` function:

```javascript
const { ethers } = require('ethers');
const chainsConfig = require('./config/chains');
const { MessageClientABI } = require('./message/abi');

async function configureContract() {
    // Configuration Parameters
    const rpcUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'; 
    const privateKey = '0xYOUR_PRIVATE_KEY';
    const contractAddress = '0xabcd...1234'; // Your deployed contract address

    // Initialize ethers with provider and signer
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const signer = new ethers.Wallet(privateKey, provider);

    // Instantiate the contract
    const myContract = new ethers.Contract(contractAddress, MessageClientABI, signer);

    try {
        const chains = [5, 11155111, 17000]; // Desired chain IDs
        const endpoints = ['0x000000','0x000000','0x000000']; // Your deployed instances on each chain
        const confirmations = [12, 6, 6]; // Desired confirmation counts for each chain

        // Configure the client with MessageV3 address and chain data
        const tx = await myContract.configureClient(
            chainsConfig[hre.network.config.chainId].message, // Message contract address
            chains, 
            endpoints, 
            confirmations
        );

        console.log('Transaction sent:', tx.hash);
        await tx.wait();
        console.log('Chains configured successfully.');
    } catch (error) {
        console.error('An error occurred during configuration:', error);
    }
}

// Execute the configuration
configureContract();
```

## Next Steps

Ready to build more complex cross-chain applications? Check out our examples:

- [Cross-Chain Token](/examples/crosschain-token) - Create a token that can move between blockchains
- [Cross-Chain NFT](/examples/crosschain-nft) - Build NFTs that can travel across chains
- [Private Oracle](/examples/private-oracle) - Connect your smart contracts to off-chain data

Need help? Join our [Discord community](https://discord.gg/vialabs) for support and discussions.
