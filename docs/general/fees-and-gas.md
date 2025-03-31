---
sidebar_position: 3
---

# Fees and Gas Management

The fee structure involves two distinct components: **Source Fees on the Origin Chain** and **Gas Fees on the Destination Chain**.

## Source Fees on the Origin Chain

- **Type of Fees**: Paid in the respective chain's stablecoin, commonly `USDC` or `USDT`, referred to as `FEE_TOKEN`.
- **Importance of Availability**: Transactions will revert if the calling contract lacks sufficient `FEE_TOKEN`.
- **Developer’s Task**: Ensure `FEE_TOKEN` funds are available or collected from users before message transmission.
- **NOTE**: If on testnet, we sponsor almost all fees on most testnets

## Gas Fees on the Destination Chain

- **Type of Fees**: Incurred in the wrapped native gas token of the respective blockchain, such as `WETH` on Ethereum, `WMATIC` on Polygon, or `WBNB` on Binance Smart Chain.
- **Responsibility**: The receiving contract (yours) needs to have available funds in the respective wrapped native gas token.
- **Insufficient Funds Consequence**: Lack of sufficient funds or approval for the message system will result in the transaction not being delivered. 
- **Developer’s Role**: Determine the method for covering gas fees, either through protocol absorption or direct user charges.
- **NOTE**: If on testnet, we sponsor almost all fees on most testnets

:::info
📘 If a message was not processed due to the receiving contract (yours) not having available gas, the message will be processed at a later point if/when gas is added to the contract. The message will not be lost, and will be delivered/processed when funds are added and available.
:::

## Ensuring Funds for Fee Payment

When it comes to fee management in cross-chain messaging, developers have flexible options. The key is ensuring that enough funds are available in the contract to cover the gas fees on the destination chain (e.g., `WETH`, `WMATIC`) and the source fees (stablecoins like `USDT` or `USDC`, referred to as `FEE_TOKEN`). There are two primary approaches:

### Direct Deposit of Funds into the Contract

- **Simple Funding**: As a developer, you can directly send the required `WETH` (or other wrapped native gas tokens) and `FEE_TOKEN` (USDT/USDC) to your contract. This is the most straightforward method where the contract itself holds a balance sufficient to cover the transaction fees.
- **How to Do It**: Simply transfer the wrapped gas tokens and `FEE_TOKEN` from your wallet to the contract address.

### Programming Fee Collection in Solidity

- **Dynamic Fee Collection**: Alternatively, you can program the smart contract to collect these fees dynamically from the users of the protocol. This method can align the fee payment more closely with the usage patterns of your application.
- **Implementation Strategies**:
  - **Upfront Collection**: Design your contract functions to collect the necessary fees from users at the start of a transaction. This could involve transferring a calculated amount of `WETH` and `FEE_TOKEN` from the user's wallet to the contract as part of the transaction process.
  - **Reimbursement Model**: Another option is to initially pay the fees from the contract's balance and then reimburse the contract in the same transaction from the user's funds.

### Developer Discretion

- **Flexibility**: The choice between these methods depends on your application's needs and the user experience you aim to provide. Whether absorbing the fees within the protocol or passing them onto users, you have complete freedom to tailor the solution.
- **User Experience Considerations**: When deciding on a fee management strategy, consider the user experience. Transparently communicating fee structures and obligations can enhance user trust and satisfaction.


## Setting Fee Limits for Protection

- **Preventive Measures**: Utilize the `setMaxgas` and `setMaxFee` functions to cap gas and message fees, safeguarding against unpredicted fee spikes.

## Recovering Fee and Gas Tokens

- **Recovery Mechanism**: The `recoverToken` function is designed for retrieving funds mistakenly sent to the contract, including both `ERC20` and native tokens like `ETH`.
- **Customization Option**: To restrict recovery capabilities or limit them to specific tokens, consider overriding this function in your contract.
