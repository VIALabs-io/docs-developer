import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function Terminal() {
  // All commands without the dollar signs
  const allCommands = `git clone https://github.com/VIALabs-io/quickstart-token
cd quickstart-token
npm install
node scripts/deploy.js
cd frontend && npm install && npm start`;

  // Function to copy all commands
  const copyAllCommands = () => {
    navigator.clipboard.writeText(allCommands);
  };

  return (
    <div className="terminal enhanced-terminal">
      <div className="terminal__header">
        <div className="terminal__controls">
          <div className="terminal__control terminal__control--close"></div>
          <div className="terminal__control terminal__control--minimize"></div>
          <div className="terminal__control terminal__control--maximize"></div>
        </div>
        <div className="terminal__title">Quick Start Commands</div>
        <button 
          onClick={copyAllCommands}
          className="terminal__copy-all"
          title="Copy all commands"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
      <div className="terminal__body">
        <div className="terminal__line">
          <span className="terminal__prompt" style={{ userSelect: 'none' }}>$</span>
          <span className="terminal__command">git clone https://github.com/VIALabs-io/quickstart-token</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt" style={{ userSelect: 'none' }}>$</span>
          <span className="terminal__command">cd quickstart-token</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt" style={{ userSelect: 'none' }}>$</span>
          <span className="terminal__command">npm install</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt" style={{ userSelect: 'none' }}>$</span>
          <span className="terminal__command">node scripts/deploy.js</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt" style={{ userSelect: 'none' }}>$</span>
          <span className="terminal__command">cd frontend && npm install && npm start</span>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero grid-pattern">
      {/* Animated glow elements */}
      <div className="glow-turquoise"></div>
      <div className="glow-magenta"></div>
      <div className="glow-center"></div>
      <div className="diagonal-lines"></div>
      
      <div className="container">
        <div className="hero-content text-left">
          <h1 className="hero__title">
            <span className="hero__title-main">Developer Documentation</span>
          </h1>
          <p className="hero__subtitle">
            Build truly interoperable blockchain applications with VIA Labs' bridgeless cross-chain communication infrastructure. 
            Our developer-friendly packages enable secure, direct smart contract messaging across 200+ public and private networks
            without traditional bridges or wrapped tokens. Connect your on-chain contracts to off-chain data sources, private APIs,
            and databases through our P2P node network.
          </p>
          <div className="buttons">
            <Link
              className="button button--primary"
              to="/examples/crosschain-token">
              <span>Quickstart Token</span>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              className="button button--primary"
              to="/examples/crosschain-nft">
              <span>Quickstart NFT</span>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              className="button button--primary"
              to="/examples/private-oracle">
              <span>Quickstart Oracle</span>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              className="button button--secondary"
              href="https://github.com/VIALabs-io">
              <span>Open on GitHub</span>
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link, linkText, index}) {
  return (
    <Link to={link} className="feature-card-link">
      <div className="feature-card enhanced-card" style={{'--card-index': index}}>
        <h3 className="feature-card__title">
          {title}
        </h3>
        <p className="feature-card__description">{description}</p>
        <span className="feature-card__link">
          {linkText}
          <svg className="feature-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="VIA Labs Developer Documentation - Cross-Chain Communication for Smart Contracts">
      <div className="homepage-container main-wrapper">
        {/* Background effects for the entire page */}
        <div className="glow-turquoise" style={{top: '50%', right: '-300px'}}></div>
        <div className="glow-magenta" style={{bottom: '10%', left: '-300px'}}></div>
        <HomepageHeader />
        
        <div className="content-wrapper">
          <div className="terminal-container">
            <Terminal />
          </div>
          
          <section className="features-section">
            <div className="feature-grid">
              <FeatureCard 
                title="Technology Overview" 
                description="Understand how our bridgeless cross-chain messaging system works with a comprehensive overview of the infrastructure and process flow."
                link="/general/technology-overview"
                linkText="Learn More"
                index={0}
              />
              
              <FeatureCard 
                title="SDK" 
                description="Integrate cross-chain functionality with just a few lines of code using our developer-friendly packages for your smart contracts."
                link="/general/package"
                linkText="Explore SDK"
                index={1}
              />
              
              <FeatureCard 
                title="Security" 
                description="Our multi-layered validation process ensures transaction integrity across all connected chains with robust security protocols."
                link="/general/technology-overview#security-model"
                linkText="View Security Model"
                index={2}
              />
              
              <FeatureCard 
                title="Private Oracle" 
                description="Connect your smart contracts to off-chain data sources, private APIs, and databases through our secure P2P node network."
                link="/examples/private-oracle"
                linkText="Connect Now"
                index={3}
              />
              
              <FeatureCard 
                title="Cross-Chain NFT" 
                description="Create and manage NFTs that can move seamlessly between blockchains without wrapping or traditional bridge mechanisms."
                link="/examples/crosschain-nft"
                linkText="View Example"
                index={4}
              />
              
              <FeatureCard 
                title="Cross-Chain Token" 
                description="Deploy ERC20 tokens that can be transferred across chains while maintaining their native properties without wrapped tokens."
                link="/examples/crosschain-token"
                linkText="View Example"
                index={5}
              />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
