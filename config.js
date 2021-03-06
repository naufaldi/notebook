const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://note.kureview.web.id',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://avatars3.githubusercontent.com/u/42200282?s=460&u=cbdde567fe7c7537dbed213ce64add02bed616fd&v=4',
    logoLink: 'https://naufaldi.xyz',
    title: 'Faldi Wiki',
    githubUrl: 'https://github.com/naufaldi/notebook',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/wahudamon" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>`,
    links: [
      { text: 'Blog', link: 'https://kureview.web.id' },
      { text: 'Portofolio', link: 'https://naufaldi.xyz' }
    ],
    search: {
      enabled: false,
      indexName: 'notebook',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [],
    collapsedNav: [],
    links: [],
    frontline: false,
    ignoreIndex: true,
    title:
      "Wiki Personal",
  },
  siteMetadata: {
    title: 'Notebook',
    description: "Naufaldi Rafif's personal notebook",
    ogImage: null,
    docsLocation: 'https://github.com/naufaldi/notebook/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
