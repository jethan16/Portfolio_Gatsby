require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Ethan Jones | Portfolio`,
    author: `Ethan Jones`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `raleway`,
            variants: [`300`, `400`, `600`, `700`],
          },
          {
            family: `raleway dots`,
            variants: [`300`, `400`, `600`, `700`],
          },
          {
            family: `Rubik`,
            variants: [`300`, `400`, `500`, `700`],
          },
          {
            family: `Work Sans`,
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /* eslint-disable @typescript-eslint/camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ethan Jones - Portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-plugin-graphql-codegen`,
    //   options: {
    //     fileName: `types/graphql-types.d.ts`,
    //   },
    // },
    /* eslint-enable @typescript-eslint/camelcase */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
