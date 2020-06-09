module.exports = {
  siteMetadata: {
    title: 'Charutha Devin Bandara',
    titleTemplate: "%s · The Real Hero",
    author: 'Charutha Bandara',
    position: 'Software Engineer',
    description: 'My Javascript Portfolio',
    url: 'https://www.cbandara.com',
    image: './../assets/profile.jpeg',
    twitterUsername: '@cbandara1010'
  },
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'i8u59mg9xoed',
        accessToken: 'f-rpAl3shaOAbRM5BYS-uOmbM4fE8Zrcl-dDTWo5QjU',
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Raleway', 'Roboto']
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 780,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
