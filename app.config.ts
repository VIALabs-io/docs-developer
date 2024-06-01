export default defineAppConfig({
  docus: {
    title: 'VIA Labs Developers',
    description: 'VIA Labs Cross Chain Infrastructure Documentation',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: '',
      github: 'VIALabs-io',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docs-developer',
      owner: 'VIALabs-io',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      title: " ",
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
