const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'VIA Labs Developer Documentation',
  tagline: 'Cross-Chain Communication for Smart Contracts',
  url: 'https://developer.vialabs.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'VIALabs-io', // Usually your GitHub org/user name.
  projectName: 'docs-developer', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/VIALabs-io/docs-developer/edit/master/',
          routeBasePath: '/', // Set this to empty string to make docs the landing page
        },
        blog: false, // Disable the blog feature
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      gtag: {
        trackingID: 'G-4512C8MEN4',
        anonymizeIP: true,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'VIA Labs Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'general/package',
            position: 'left',
            label: 'General',
          },
          {
            type: 'doc',
            docId: 'examples/crosschain-token',
            position: 'left',
            label: 'Examples',
          },
          {
            type: 'doc',
            docId: 'work-with-us/developers',
            position: 'left',
            label: 'Work With Us',
          },
          {
            href: 'https://github.com/VIALabs-io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'VIA Labs Logo',
          src: 'img/logo-white.svg',
          href: '/',
        },
        links: [
          {
            title: 'Developer Resources',
            items: [
              {
                label: 'General Documentation',
                to: '/general/package',
              },
              {
                label: 'Code Examples',
                to: '/examples/crosschain-token',
              },
              {
                label: 'Architecture',
                to: '/general/architecture',
              },
              {
                label: 'Supported Networks',
                to: '/general/supported-networks',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'FAQ',
                to: '/general/faq',
              },
              {
                label: 'Troubleshooting',
                to: '/general/troubleshooting',
              },
              {
                label: 'Fees & Gas',
                to: '/general/fees-and-gas',
              },
              {
                label: 'Testnet Tokens',
                to: '/general/testnet-tokens',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/VIALabs-io',
              },
              {
                label: 'Work With Us',
                to: '/work-with-us/developers',
              },
              {
                label: 'Terms of Service',
                to: '/general/tos',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VIA Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
    }),
});
