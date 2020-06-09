module.exports = {
  siteMetadata: {
    title: 'Charutha Devin Bandara',
    author: 'Charutha Bandara',
    position: 'Software Engineer'
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

  ]
}
