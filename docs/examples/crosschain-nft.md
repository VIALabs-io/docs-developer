---
sidebar_position: 3
title: "Cross-Chain NFT"
hide_table_of_contents: true
---

<div className="doc-prerequisites">
  <div className="doc-prerequisites-title">Before You Begin</div>
  
<div className="doc-prerequisites-grid">
<div className="doc-prerequisites-item-card">
      <div className="doc-prerequisites-item-number">1</div>
      <div className="doc-prerequisites-item-header">
        <svg className="doc-prerequisites-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path>
        </svg>
        <span className="doc-prerequisites-item-title">Environment</span>
      </div>
      <div className="doc-prerequisites-item-content">
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="doc-prerequisites-link"><span className="doc-inline-code">Node.js v20+</span></a>, 
        <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noopener noreferrer" className="doc-prerequisites-link"><span className="doc-inline-code">npm</span></a>, and 
        <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" className="doc-prerequisites-link"><span className="doc-inline-code">git</span></a>
      </div>
    </div>
    
<div className="doc-prerequisites-item-card">
      <div className="doc-prerequisites-item-number">2</div>
      <div className="doc-prerequisites-item-header">
        <svg className="doc-prerequisites-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <span className="doc-prerequisites-item-title">Wallet</span>
      </div>
      <div className="doc-prerequisites-item-content">
        A wallet with <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="doc-prerequisites-link"><span className="doc-inline-code">MetaMask</span></a> or similar for testnet development
      </div>
    </div>
    
<div className="doc-prerequisites-item-card">
      <div className="doc-prerequisites-item-number">3</div>
      <div className="doc-prerequisites-item-header">
        <svg className="doc-prerequisites-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v12"></path>
          <path d="M8 10h8"></path>
          <path d="M8 14h8"></path>
        </svg>
        <span className="doc-prerequisites-item-title">Testnet Tokens</span>
      </div>
      <div className="doc-prerequisites-item-content">
        <a href="https://core.app/en/tools/testnet-faucet/?subnet=c&token=c" target="_blank" rel="noopener noreferrer" className="doc-prerequisites-link"><span className="doc-inline-code">Avalanche Testnet Faucet</span></a> and 
        <a href="https://docs.base.org/chain/network-faucets" target="_blank" rel="noopener noreferrer" className="doc-prerequisites-link"><span className="doc-inline-code">Base Testnet Faucet</span></a>
      </div>
    </div>
  </div>
</div>

<div className="doc-step">
  <div className="doc-step-title">
    <div className="doc-step-number">1</div>
    Clone & Setup
  </div>
  <div className="doc-step-content">

<div className="doc-terminal">
  <div className="doc-terminal-header">
    <div className="doc-terminal-title">terminal</div>
    <button className="doc-terminal-copy" aria-label="Copy to clipboard">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  </div>
  <div className="doc-terminal-body">
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">git</span> clone <span className="command-string">https://github.com/VIALabs-io/quickstart-nft.git</span> && <span className="command-string">cd</span> quickstart-nft
      </span>
    </div>
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">npm</span> install
      </span>
    </div>
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">cp</span> .env.example .env
      </span>
    </div>
  </div>
</div>

<div className="doc-warning">
  <div className="doc-warning-icon">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffd07e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  </div>
  <div className="doc-warning-content">
    <div className="doc-warning-title">Configure Private Key</div>
    Add your wallet's private key to the <span className="doc-inline-code">.env</span> file:<br/>
    <span className="doc-inline-code">PRIVATE_KEY=your_private_key_here</span>
  </div>
</div>

  </div>
</div>

<div className="doc-step">
  <div className="doc-step-title">
    <div className="doc-step-number">2</div>
    Deploy Your NFT
  </div>
  <div className="doc-step-content">

<div className="doc-terminal">
  <div className="doc-terminal-header">
    <div className="doc-terminal-title">terminal</div>
    <button className="doc-terminal-copy" aria-label="Copy to clipboard">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  </div>
  <div className="doc-terminal-body">
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">node</span> scripts/deploy.js
      </span>
    </div>
  </div>
</div>

  </div>
</div>

<div className="doc-step">
  <div className="doc-step-title">
    <div className="doc-step-number">3</div>
    Mint NFT and Bridge
  </div>
  <div className="doc-step-content">

<div className="doc-terminal">
  <div className="doc-terminal-header">
    <div className="doc-terminal-title">terminal</div>
    <button className="doc-terminal-copy" aria-label="Copy to clipboard">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  </div>
  <div className="doc-terminal-body">
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">node</span> scripts/bridge.js <span className="command-param">avalanche-testnet</span>
      </span>
    </div>
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">node</span> scripts/bridge.js <span className="command-param">avalanche-testnet</span> <span className="command-param">base-testnet</span> <span className="command-number">431130000</span>
      </span>
    </div>
  </div>
</div>

  </div>
</div>

<div className="doc-step">
  <div className="doc-step-title">
    <div className="doc-step-number">4</div>
    Run the Frontend
  </div>
  <div className="doc-step-content">

<div className="doc-terminal">
  <div className="doc-terminal-header">
    <div className="doc-terminal-title">terminal</div>
    <button className="doc-terminal-copy" aria-label="Copy to clipboard">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  </div>
  <div className="doc-terminal-body">
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">cd</span> frontend
      </span>
    </div>
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">npm</span> install
      </span>
    </div>
    <div className="doc-terminal-line">
      <span className="doc-terminal-prompt">$</span>
      <span className="doc-terminal-command">
        <span className="command-string">npm</span> run dev
      </span>
    </div>
  </div>
</div>

<div className="doc-success">
  <div className="doc-success-icon">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7ad488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  </div>
  <div className="doc-success-content">
    <div className="doc-success-title">Complete</div>
    Your cross-chain NFT is now deployed, bridged, and the frontend is running. Open <span className="doc-inline-code">http://localhost:3000</span> in your browser to interact with your NFTs.
  </div>
</div>
  </div>
</div>