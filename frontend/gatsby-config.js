module.exports = {  
  siteMetadata: {
    title: `Sketch Repo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `files`
        ],
        loginData: {
          identifier: "sample@sample.com",
          password: "allowme",
        }
      },
    },
  ],
}