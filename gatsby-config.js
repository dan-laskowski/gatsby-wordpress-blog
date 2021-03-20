module.exports = {
  siteMetadata: {
    title: 'Gatsby Conf Demo',
    siteURL: 'https://gatsbywordpressblog.gtsb.io/',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://daniello110.usermd.net/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `gatsbywordpressblog`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
};
