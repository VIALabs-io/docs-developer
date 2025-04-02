import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal__header">
        <div className="terminal__controls">
          <div className="terminal__control terminal__control--close"></div>
          <div className="terminal__control terminal__control--minimize"></div>
          <div className="terminal__control terminal__control--maximize"></div>
        </div>
        <div className="terminal__title">Quick Start Commands</div>
      </div>
      <div className="terminal__body">
        <div className="terminal__line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__command">git clone https://github.com/VIALabs-io/quickstart-token</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__command">cd quickstart-token</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__command">npm install</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__command">node scripts/deploy.js</span>
        </div>
        <div className="terminal__line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__command">cd frontend && npm install && npm run dev</span>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero grid-pattern">
      <div className="container">
        <h1 className="hero__title">VIA Labs Developer Documentation</h1>
        <p className="hero__subtitle">
          Build truly interoperable blockchain applications with VIA Labs' bridgeless cross-chain communication infrastructure. 
          Our developer-friendly packages enable secure, direct smart contract messaging across 200+ public and private networks
          without traditional bridges or wrapped tokens. Connect your on-chain contracts to off-chain data sources, private APIs,
          and databases through our P2P node network. Seamlessly integrate cross-chain functionality into your ERC20 tokens,
          NFTs, DeFi applications, and more with just a few lines of code.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary"
            to="/examples/crosschain-token">
            Quickstart Token
          </Link>
          <Link
            className="button button--primary"
            to="/examples/crosschain-nft">
            Quickstart NFT
          </Link>
          <Link
            className="button button--primary"
            to="/examples/private-oracle">
            Quickstart Oracle
          </Link>
          <Link
            className="button button--secondary"
            href="https://github.com/VIALabs-io/hello-erc20">
            Open on GitHub →
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link, linkText, index}) {
  return (
    <Link to={link} className="feature-card-link">
      <div className="feature-card" style={{'--card-index': index}}>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
        <span className="feature-card__link">{linkText} →</span>
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
      <div className="homepage-container">
        <HomepageHeader />
        
        <div className="content-wrapper">
          <div className="terminal-container">
            <Terminal />
          </div>
          
          <section className="features-section">
            <div className="feature-grid">
              <FeatureCard 
                title="Architecture" 
                description="Understand how our bridgeless cross-chain messaging system works with a comprehensive overview of the infrastructure and process flow."
                link="/general/architecture"
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
                link="/general/architecture#security-model"
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
