---
sidebar_position: 1
---

# Solidity Package

Quickly integrate cross-chain functionalities into your blockchain projects with `git clone https://github.com/VIALabs-io/contracts`.

:::info
📘 If you just want to try us out quickly or if you are experiencing issues with the more complex example, you can easily follow our [`Cross-Chain Token` guide](/examples/crosschain-token) and launch your own cross chain token in minutes. It will provide you with a great foundation.
:::

## Installation

Start by installing the package in your project:

```bash
git clone https://github.com/VIALabs-io/contracts
```

## Importing the Package

```solidity
import "./message/MessageClient.sol";
```

## Example Implementation and Explanation

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./message/MessageClient.sol";

contract MyCrossChainContract is MessageClient {
    // ...
    
    // Function to send a message to another chain
    function sendMessageToAnotherChain(uint destinationChainId, bytes memory data) public {
        // Sending a message to the specified chain
        uint txId = _sendMessage(destinationChainId, data);
        // Additional logic after sending the message (if needed)
    }

    // Overriding the _processMessage function to handle incoming messages
    function _processMessage(uint _txId, uint _sourceChainId, bytes calldata _data) internal override {
        // Decode the incoming message and process it
        // Example: (address from, uint256 value) = abi.decode(_data, (address, uint256));
        // Process the message as required
    }

    // Additional functions and logic as required for your contract
    // ...
}
```

## Using the MessageClient ABI

You can import the ABI for the `MessageClient` contract directly from the package:

```javascript
// CommonJS
const { MessageClientABI } = require('./message/abi');

// ES6
import { MessageClientABI } from './message/abi';
```

You can then load contracts using this ABI:

```javascript
const myContract = new ethers.Contract(contractAddress, MessageClientABI, signer);
```

## Using the MessageClient Configuration

You can import common addresses and configuration for the `MessageClient` contract directly from the package:

```javascript
// CommonJS
const chainsConfig = require('./config/chains');

// ES6
import chainsConfig from './config/chains';
```

You can then reference values from chains by using the chainId as an index:

```javascript
// Get the message contract address of the current network
const messageAddress = chainsConfig[hre.network.config.chainId].message; 
```

### After Deployment Configuration Script

This script is an example to be ran after all of the corresponding Client contracts have been deployed and addresses collected. This script is used to enable all of the desired chains and configure each of the contracts to accept messages from each other utilizing the ```configureClient()``` function in the package.

```javascript
const { ethers } = require('ethers');
const chainsConfig = require('./config/chains');
const { MessageClientABI } = require('./message/abi');

async function configureContract() {
    // Configuration Parameters
    const rpcUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'; // Example Ethereum RPC URL
    const privateKey = '0xYOUR_PRIVATE_KEY'; // Example private key
    const contractAddress = '0xabcd...1234'; // Example deployed contract address on Ethereum

    // Initialize ethers with provider and signer
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const signer = new ethers.Wallet(privateKey, provider);

    // Instantiate the contract
    const myContract = new ethers.Contract(contractAddress, MessageClientABI, signer);

    try {
        const chains = [5, 11155111, 17000]; // Desired chain IDs
        const endpoints = ['0x000000','0x000000','0x000000']; // YOUR deployed instances of ATWTest on each chain
        const confirmations = [12, 6, 6]; // Desired confirmation counts for each chain

        // Configure the client with MessageV3 address and chain data
        const tx = await myContract.configureClient(
            chainsConfig[hre.network.config.chainId].message, // Use the message contract address of the current network
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
