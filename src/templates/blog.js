import React from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import blogStyles from '../styles/blog.module.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file.url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <div className="container">
        <div className={blogStyles.blogContainer}>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </div>
      </div>
    </Layout>
  )
}

export default Blog