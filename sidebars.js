/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'general/technology-overview',
        'general/supported-networks',
        'general/package',
        'general/fees-and-gas',
        'general/bridged-usdc',
        'general/proto-usd',
      ],
    },
    {
      type: 'category',
      label: 'Examples & Implementation',
      collapsed: false,
      items: [
        'examples/crosschain-token',
        'examples/crosschain-nft',
        'examples/private-oracle',
      ],
    },
    {
      type: 'category',
      label: 'Work With Us',
      collapsed: false,
      items: [
        'work-with-us/developers',
        'work-with-us/blockchains',
        'work-with-us/grant-program',
      ],
    },
    {
      type: 'category',
      label: 'Support & Resources',
      collapsed: false,
      items: [
        'general/faq',
        'general/troubleshooting',
        'general/tos',
      ],
    },
  ],
};
