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
  ],
}