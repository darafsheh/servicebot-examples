module.exports = {
  siteMetadata: {
    title: `Servicebot Demo`,
    description: `Page Description`,
    author: `Servicebot`,
    ogimage: `https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fe4309278a5f96098cfa32d_demo-home.jpg`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/billflow.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-98007770-1",
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        siteSpeedSampleRate: 10,
        cookieDomain: "billflow.io",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
