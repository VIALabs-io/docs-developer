---
sidebar_position: 1
---

<div className="fullscreen-container">
  <div className="header">
    <img src="/img/logo-white.svg" alt="VIA Labs Logo" className="logo" />
    <p className="description">
      Build truly interoperable blockchain applications with bridgeless cross-chain communication infrastructure.
      Our developer-friendly packages enable secure, direct smart contract messaging across 200+ public and private networks.
    </p>
  </div>

  <div className="columns">
    <div className="column">
      <h2>Quickstart Token</h2>
      <div className="terminal">
        <div className="line"><span className="prompt">$</span><span className="command">git clone https://github.com/VIALabs-io/quickstart-token</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">cd quickstart-token</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">npm install</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">node scripts/deploy.js</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">cd frontend && npm install && npm run dev</span></div>
      </div>
    </div>

  <div className="column">
      <h2>Quickstart NFT</h2>
      <div className="terminal">
        <div className="line"><span className="prompt">$</span><span className="command">git clone https://github.com/VIALabs-io/quickstart-nft.git</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">cd quickstart-nft</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">npm install</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">node scripts/deploy.js</span></div>
        <div className="line"><span className="prompt">$</span><span className="command">cd frontend && npm install && npm run dev</span></div>
      </div>
    </div>
  </div>

  <div className="docs-section">
    <div className="docs-content">
      <img src="/img/docs-qr.png" alt="Documentation QR Code" className="qr-code" />
    </div>
  </div>
</div>

<style>
{`
/* Hide Docusaurus elements */
:root {
  --ifm-navbar-height: 0px !important;
}

.navbar,
.footer,
.theme-doc-sidebar-container {
  display: none !important;
}

.main-wrapper {
  padding: 0 !important;
  margin: 0 !important;
}

.container {
  padding: 0 !important;
  margin: 0 !important;
  max-width: none !important;
}

/* Fullscreen layout */
.fullscreen-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: var(--ifm-background-color);
  color: var(--ifm-font-color-base);
  overflow: hidden;
}

/* Header section */
.header {
  text-align: center;
  padding: 3rem 2rem;
  flex: 0 0 auto;
  background: var(--ifm-background-surface-color);
  border-bottom: 1px solid var(--ifm-color-emphasis-300);
}

.logo {
  width: 220px;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 3.5rem;
  margin: 0.5rem 0;
  font-weight: 700;
  background: linear-gradient(45deg, var(--ifm-color-primary) 30%, var(--ifm-color-primary-light) 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.4rem;
  max-width: 900px;
  margin: 1.5rem auto 0;
  line-height: 1.6;
  color: var(--ifm-color-emphasis-700);
}

/* Two-column layout */
.columns {
  display: flex;
  flex: 1;
  padding: 3rem;
  gap: 3rem;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

h2 {
  font-size: 2.5rem;
  margin: 0 0 2rem;
  text-align: center;
  color: var(--ifm-color-primary);
}

/* Terminal styling */
.terminal {
  background: var(--ifm-code-background);
  border-radius: 12px;
  padding: 2rem;
  font-family: var(--ifm-font-family-monospace);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--ifm-color-emphasis-300);
}

.line {
  display: flex;
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.5;
}

.prompt {
  color: var(--ifm-color-success);
  margin-right: 1rem;
  user-select: none;
}

.command {
  color: var(--ifm-color-emphasis-900);
  white-space: pre;
  overflow-x: auto;
}

/* Dark mode enhancements */
html[data-theme='dark'] .terminal {
  background: #1a1a1a;
  border-color: #333;
}

html[data-theme='dark'] .command {
  color: #fff;
}

html[data-theme='dark'] .header {
  background: #1a1a1a;
  border-color: #333;
}
`}
</style>
