import React from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import blogStyles from '../styles/blog.module.scss'

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: {slug: { eq: $slug}}) {
    frontmatter {
      title
      date
    }
    html
  }
}
`

const Blog = (props) => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const alt = node.data.target.fields.ide
  //       const url = node.data.target.fields.file.url
  //       return <img alt={alt} src={url} />
  //     }
  //   }
  // }
  return (
    <Layout>
      <div className="container">
        <div className={blogStyles.blogContainer}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog