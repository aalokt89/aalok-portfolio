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
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `aaloktrivedi`,
        accessToken: `MC5XN0pwMlJBQUFDY0FRSGVl.GXhLL34eVzXvv73vv71a77-977-9U--_vRzvv73vv73vv73vv73vv73vv73vv73vv70w77-977-977-977-9Aw4P`
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
