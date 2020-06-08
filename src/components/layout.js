import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.safearea}>
      <div className={layoutStyles.content}>
        {/* <title>Charutha Bandara</title>
        <meta name="My Portfolio"></meta>
        <meta name="robots" content="noindex" /> */}
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout