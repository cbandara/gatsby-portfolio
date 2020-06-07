const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Get path to template
  const blogTemplate = path.resolve('./src/templates/blog.js')

  // get markdown data
  graphql(`
    query {
    allMarkdownRemark {
      edges {
        node {
          fields{ slug }
          }
        }
      }
    }
`)


  // create new pages
}