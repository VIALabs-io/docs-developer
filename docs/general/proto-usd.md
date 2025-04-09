---
sidebar_position: 8
---

# Proto-USD

Proto-USD is VIA Labs' solution that provides immediate access to the benefits of Circle's Cross-Chain Transfer Protocol (CCTP) upon deployment of the Bridged USDC Standard.

## What is Proto-USD?

Proto-USD is a bridging solution that enables seamless USDC transfers between blockchains that have implemented the Bridged USDC Standard. It serves as an interim solution until a blockchain receives native USDC with official CCTP support from Circle.

## Key Benefits

- **Immediate Cross-Chain Capabilities**: Access cross-chain USDC transfers without waiting for native CCTP implementation
- **Seamless User Experience**: End users experience the same smooth transfer process as with native CCTP
- **Consistent Integration**: Developers can build applications using the same interfaces they would with native CCTP
- **Future-Proof**: Designed to work alongside the Bridged USDC Standard's upgrade path to native USDC

## How It Works

1. **User Initiates Transfer**: A user on Blockchain A initiates a USDC transfer to Blockchain B
2. **Proto-USD Processing**: The Proto-USD system:
   - Burns the Bridged USDC on Blockchain A
   - Securely relays the transfer message to Blockchain B
   - Mints the equivalent amount of Bridged USDC on Blockchain B
3. **Completion**: The recipient receives the USDC on Blockchain B

## Integration with Bridged USDC Standard

Proto-USD is automatically available when a blockchain integrates with the [Bridged USDC Standard](/general/bridged-usdc). This provides immediate cross-chain functionality while maintaining the upgrade path to native USDC and official CCTP support.

## Technical Implementation

Proto-USD leverages VIA Labs' secure cross-chain messaging infrastructure to ensure reliable and efficient USDC transfers. The system is designed with multiple security layers to protect user funds and ensure transaction integrity.

## Getting Started

If you're interested in implementing Proto-USD along with the Bridged USDC Standard on your blockchain, please refer to our [Bridged USDC Standard Onboarding](/general/bridged-usdc) guide or contact us directly via [Discord](https://discord.gg/vialabs).
