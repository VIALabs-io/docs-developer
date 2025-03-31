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
      label: 'General',
      collapsed: false,
      items: [
        'general/package',
        'general/supported-networks',
        'general/fees-and-gas',
        'general/testnet-tokens',
        'general/tos',
        'general/architecture',
        'general/faq',
        'general/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
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
      ],
    },
  ],
};
