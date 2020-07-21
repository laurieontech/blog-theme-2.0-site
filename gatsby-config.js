/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://www.mysite.com`,
    title: `My blog`,
    author: `Laurie`,
    description: `A site about me`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/laurieontech`
      }
    ]
  },
  plugins: [
    {resolve: `gatsby-theme-blog`,
    options: {
      basePath: `/blog`,
      prismPreset: `prism-okaidia`,
      preset: `theme-ui-sketchy-preset`,
      webfontURL: `https://fonts.googleapis.com/css?family=Architects+Daughter`
    }}
  ],
}
