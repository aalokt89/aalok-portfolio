module.exports = {
  siteMetadata: {
    title: 'Aalok Trivedi: UI/UX Designer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `h5uukzlo5d52`,
        accessToken: `18a54098f34730ea722c4c658d1b3e0925f24c6c34c41b6980054a41d2dd9ccd`,
        environment: `master`
      }
    }
  ]
};
