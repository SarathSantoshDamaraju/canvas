const path = require(`path`);
const config = require(`./config`);

module.exports = {  
  siteMetadata: {
    title: `Abstrakt`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "src/images/logo.jpeg", // This path is relative to the root of the site.
      },
    }
  ],
}