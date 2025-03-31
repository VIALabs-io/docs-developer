---
sidebar_position: 8
---

# Troubleshooting Guide

This guide provides solutions to common issues you might encounter when developing with VIA Labs' cross-chain messaging system.

## Deployment Issues

### Contract Deployment Fails

**Symptoms**: Contract deployment transaction reverts or fails.

**Possible Causes and Solutions**:

1. **Insufficient Gas**:
   - Ensure you have enough native tokens for gas fees.
   - Try increasing the gas limit for your deployment transaction.

2. **Constructor Arguments**:
   - Verify that you're providing the correct arguments to your contract's constructor.
   - Check the data types and formats of your constructor arguments.

3. **Contract Size Limit**:
   - Your contract might exceed the maximum contract size limit (24KB).
   - Consider refactoring your contract to reduce its size, or split it into multiple contracts.

## Configuration Issues

### Chain Configuration Fails

**Symptoms**: The `configureClient()` function reverts or fails.

**Possible Causes and Solutions**:

1. **Invalid Message Contract Address**:
   - Ensure you're using the correct VIA Gateway Contract address for each chain.
   - Verify the addresses in the [Supported Networks](/general/supported-networks) page.

2. **Incorrect Chain IDs**:
   - Verify that you're using the correct chain IDs for the networks you're configuring.
   - Check the chain IDs in the [Supported Networks](/general/supported-networks) page.

3. **Duplicate Chain IDs**:
   - Ensure you're not trying to configure the same chain ID multiple times.
   - Check your chain ID array for duplicates.

### "onlyActiveChain" Error

**Symptoms**: Transactions revert with an "onlyActiveChain" error.

**Possible Causes and Solutions**:

1. **Chain Not Configured**:
   - The destination chain hasn't been configured in your contract.
   - Call `configureClient()` to configure all chains you intend to communicate with.

2. **Incorrect Chain ID**:
   - You might be using an incorrect chain ID when sending messages.
   - Verify the chain ID against the [Supported Networks](/general/supported-networks) page.

## Message Sending Issues

### Message Sending Fails

**Symptoms**: The `_sendMessage()` function reverts or fails.

**Possible Causes and Solutions**:

1. **Insufficient Gas**:
   - Ensure you have enough native tokens for gas fees.
   - Try increasing the gas limit for your transaction.

2. **Chain Not Active**:
   - The destination chain might not be configured or active.
   - Verify that you've properly configured the destination chain using `configureClient()`.

3. **Message Too Large**:
   - Your message might be too large, exceeding gas limits.
   - Try reducing the size of your message or splitting it into multiple smaller messages.

## Message Reception Issues

### Messages Not Being Received

**Symptoms**: Messages are sent successfully but not received on the destination chain.

**Possible Causes and Solutions**:

1. **Implementation Error**:
   - Ensure you've correctly implemented the `_processMessage()` function in your contract.
   - Check for any errors in your message decoding logic.

2. **Network Congestion**:
   - During periods of high network congestion, message delivery might be delayed.
   - Wait for the network congestion to clear, or consider using a different chain.

3. **Contract Address Mismatch**:
   - Ensure that the contract addresses are correctly configured on both chains.
   - Verify that you're using the same contract implementation on both chains.

### Message Processing Errors

**Symptoms**: Messages are received but not processed correctly.

**Possible Causes and Solutions**:

1. **Decoding Errors**:
   - Ensure you're using the correct data types and format when decoding messages.
   - Verify that the encoding on the source chain matches the decoding on the destination chain.

2. **Logic Errors**:
   - Check your message processing logic for any errors or edge cases.
   - Add logging to help debug the issue.

3. **State Inconsistencies**:
   - The state of your contract on the destination chain might be inconsistent with the source chain.
   - Implement mechanisms to handle state synchronization between chains.

## Debugging Techniques

### Using Console.log for Debugging

OpenZeppelin provides a helpful `console.log` utility that allows you to print debug information to your development environment. This is extremely useful for debugging cross-chain applications.

First, import the console library in your contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract MyContract is MessageClient {
    // Your contract code
}
```

Then, you can use `console.log` to output debug information:

```solidity
function _processMessage(uint _txId, uint _sourceChainId, bytes calldata _data) internal override {
    // Log the source chain ID
    console.log("Message received from chain:", _sourceChainId);
    
    // Log the transaction ID
    console.log("Transaction ID:", _txId);
    
    // Log the data length
    console.log("Data length:", _data.length);
    
    // Decode and process the message
    (address recipient, uint amount) = abi.decode(_data, (address, uint));
    
    // Log the decoded values
    console.log("Recipient:", Strings.toHexString(uint160(recipient), 20));
    console.log("Amount:", amount);
    
    // Process the message
    // ...
}
```

**Note**: `console.log` only works in development environments like Hardhat and Foundry. It will not work on public networks, but the code will still be valid and will simply be ignored on mainnet.

### Testing on Testnets

Always test your cross-chain applications thoroughly on testnets before deploying to mainnet:

1. **Start Small**: Begin with simple message passing between two chains.
2. **Incremental Testing**: Gradually add complexity to your tests.
3. **Edge Cases**: Test edge cases and error conditions to ensure your application handles them correctly.
4. **Multiple Chains**: Test with multiple chains to ensure your application works across all supported networks.

## Getting Help

If you're still experiencing issues after trying the solutions in this guide:

1. **Check the FAQ**: Our [FAQ](/general/faq) might have answers to your questions.
2. **Join Our Discord**: Connect with the VIA Labs community on [Discord](https://discord.gg/vialabs).
3. **Contact Support**: Reach out to our support team at [support@vialabs.io](mailto:support@vialabs.io).
4. **GitHub Issues**: Check for known issues or report new ones on our [GitHub repository](https://github.com/VIALabs-io/npm-contracts).
