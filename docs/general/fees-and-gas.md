---
sidebar_position: 3
---

# Fees and Gas Management

<div style={{display: 'flex', flexDirection: 'column', gap: '30px', margin: '20px 0'}}>
  <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--ifm-card-background-color)'}}>
    <h3>Source Fees on the Origin Chain</h3>
    <div style={{display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
      <div style={{flex: '1'}}>
        <ul>
          <li><strong>Token Type:</strong> Paid in the chain's stablecoin (USDC or USDT), referred to as <code>FEE_TOKEN</code></li>
          <li><strong>Requirement:</strong> Transactions will revert if your contract lacks sufficient <code>FEE_TOKEN</code></li>
          <li><strong>Developer Action:</strong> Ensure <code>FEE_TOKEN</code> funds are available before message transmission</li>
          <li><strong>Testnet Note:</strong> We sponsor almost all fees on most testnets</li>
        </ul>
      </div>
      <div style={{maxWidth: '300px'}}>
        <img src="/message-fee-sender.avif" alt="Source Fee Diagram" style={{width: '100%', borderRadius: '8px'}} />
      </div>
    </div>
  </div>

  <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', backgroundColor: 'var(--ifm-card-background-color)'}}>
    <h3>Gas Fees on the Destination Chain</h3>
    <div style={{display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
      <div style={{flex: '1'}}>
        <ul>
          <li><strong>Token Type:</strong> Paid in wrapped native gas tokens (WETH, WMATIC, WBNB, etc.)</li>
          <li><strong>Responsibility:</strong> Your receiving contract needs available funds in the respective wrapped token</li>
          <li><strong>Consequence:</strong> Messages won't be delivered without sufficient funds or approval</li>
          <li><strong>Developer Decision:</strong> Choose whether to absorb fees or charge users directly</li>
          <li><strong>Testnet Note:</strong> We sponsor almost all fees on most testnets</li>
        </ul>
      </div>
      <div style={{maxWidth: '300px'}}>
        <img src="/message-fee-recipient.avif" alt="Destination Fee Diagram" style={{width: '100%', borderRadius: '8px'}} />
      </div>
    </div>
  </div>
</div>

:::info Message Delivery Guarantee
If a message wasn't processed due to insufficient gas in your receiving contract, it won't be lost. The message will be delivered and processed when funds are added and available.
:::

## Fee Management Strategies

When implementing cross-chain messaging, you have flexible options for managing fees. The key is ensuring your contracts have sufficient funds for both source fees and destination gas.

### Option 1: Direct Contract Funding

The simplest approach is to directly fund your contract with the necessary tokens:

```solidity
// No special code needed - just transfer tokens to your contract address
// For example, send USDC (FEE_TOKEN) and WETH to your contract
```

**Benefits:**
- Simple implementation
- No additional code required
- Predictable fee management

**How to implement:**
1. Determine the expected message volume and fee requirements
2. Transfer sufficient wrapped gas tokens and FEE_TOKEN to your contract address
3. Monitor balances and replenish as needed

### Option 2: Dynamic Fee Collection

Alternatively, collect fees from users at transaction time:

```solidity
// Example of collecting fees from users
function sendCrossChainMessage(uint256 destinationChainId, bytes memory data) external {
    // Calculate required fees
    uint256 sourceFee = calculateSourceFee(destinationChainId);
    uint256 destinationGas = calculateDestinationGas(destinationChainId);
    
    // Collect fees from user
    require(feeToken.transferFrom(msg.sender, address(this), sourceFee), "Fee transfer failed");
    require(wrappedGasToken.transferFrom(msg.sender, address(this), destinationGas), "Gas transfer failed");
    
    // Send the cross-chain message
    _sendMessage(destinationChainId, data);
}
```

**Benefits:**
- Pay-as-you-go model
- Fees aligned with actual usage
- No need to pre-fund contracts

## Fee Protection Mechanisms

### Setting Maximum Fee Limits

Protect your application from unexpected fee spikes:

```solidity
// Set maximum gas limit for destination chain
function setMaxGas(uint256 chainId, uint256 maxGasAmount) external onlyOwner {
    maxGasLimits[chainId] = maxGasAmount;
}

// Set maximum fee limit for source chain
function setMaxFee(uint256 chainId, uint256 maxFeeAmount) external onlyOwner {
    maxFeeLimits[chainId] = maxFeeAmount;
}

// Use these limits in your message sending function
function sendProtectedMessage(uint256 destinationChainId, bytes memory data) external {
    uint256 gasCost = getGasCost(destinationChainId);
    uint256 feeCost = getFeeCost(destinationChainId);
    
    require(gasCost <= maxGasLimits[destinationChainId], "Gas cost exceeds maximum");
    require(feeCost <= maxFeeLimits[destinationChainId], "Fee cost exceeds maximum");
    
    // Proceed with message sending
    _sendMessage(destinationChainId, data);
}
```

### Recovering Tokens

Implement token recovery for emergency situations:

```solidity
// Recover ERC20 tokens accidentally sent to the contract
function recoverToken(address tokenAddress, uint256 amount) external onlyOwner {
    IERC20(tokenAddress).transfer(owner(), amount);
}

// Recover native tokens (ETH, AVAX, etc.)
function recoverNative(uint256 amount) external onlyOwner {
    payable(owner()).transfer(amount);
}
```

:::caution
Consider overriding the default `recoverToken` function if you need to restrict recovery capabilities or limit them to specific tokens.
:::

## Best Practices

1. **Monitor Balances:** Regularly check your contract's token balances to ensure sufficient funds for message processing
2. **Implement Alerts:** Set up notifications for low balance thresholds
3. **Fee Transparency:** Clearly communicate fee structures to your users
4. **Emergency Recovery:** Include mechanisms to recover funds in case of unexpected issues
5. **Test Thoroughly:** Verify fee collection and message processing on testnets before mainnet deployment

# Next Steps

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', margin: '30px 0'}}>
  <a href="/examples/crosschain-token" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Create Cross-Chain Tokens</h3>
      <p style={{flex: '1'}}>Build a token that can move between different blockchains with integrated fee handling.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Try It Now →</div>
    </div>
  </a>
  
  <a href="/general/package" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Solidity Package</h3>
      <p style={{flex: '1'}}>Learn how to use our Solidity package to implement cross-chain messaging with proper fee handling.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>Explore Package →</div>
    </div>
  </a>
  
  <a href="/general/troubleshooting" style={{textDecoration: 'none', color: 'var(--ifm-font-color-base)'}}>
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px', padding: '20px', transition: 'transform 0.3s ease', boxShadow: 'var(--ifm-card-shadow)', backgroundColor: 'var(--ifm-card-background-color)', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h3 style={{marginTop: '0', color: 'var(--ifm-heading-color)'}}>Troubleshooting</h3>
      <p style={{flex: '1'}}>Find solutions to common fee-related issues and other cross-chain messaging problems.</p>
      <div style={{color: 'var(--ifm-color-primary)', fontWeight: 'bold', marginTop: 'auto'}}>View Solutions →</div>
    </div>
  </a>
</div>

> **Need Help?** Join our <a href="https://discord.gg/vialabs" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>Discord community</a> for support and discussions.
