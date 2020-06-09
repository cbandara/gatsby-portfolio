import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import arrowright from "../assets/arrow-right.svg"

import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
            summary {
              summary
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className="main-title">Blog</h1>
      <ol className={blogStyles.blogList}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <Link to={`/blog/${edge.node.slug}`}>
              <li key={edge.node.id} className={blogStyles.blogCard}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
                <br />
                <p>{edge.node.summary.summary}</p>
                <br />
                <div className={blogStyles.arrowLink} to="/contact" ><img src={arrowright}
                  className={blogStyles.arrow} alt="arrow"></img></div>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout >
  )
}

export default BlogPage