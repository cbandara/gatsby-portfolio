import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import arrowright from "../assets/arrow-right.svg"

import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              summary
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className="main-title">Blog</h1>
      <ol className={blogStyles.blogList}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.id} className={blogStyles.blogCard}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              <br />
              <p>{edge.node.frontmatter.summary}</p>
              <br />
              <Link className={blogStyles.arrowLink} to="/contact" ><img src={arrowright} className={blogStyles.arrow} alt="arrow"></img></Link>
            </li>
          )
        })}
      </ol>

    </Layout>
  )
}

export default BlogPage