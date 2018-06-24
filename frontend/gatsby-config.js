const path = require(`path`);
const config = require(`./config`);

module.exports = {  
  siteMetadata: {
    title: `Sketch Repo`,
  },
  pathPrefix: `../`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: config.api,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `files`,
          `featuredBlogs`,
          `featuredVideos`,
          `featuredFiles`,
          `externallinks`
        ],
        loginData: {
          identifier: "sample@sample.com",
          password: "allowme",
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "119882110-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
}