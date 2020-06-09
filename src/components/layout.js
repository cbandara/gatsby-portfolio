import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'
import SEO from './seo'

const Layout = (props) => {
  return (
    <div className={layoutStyles.safearea}>
      <div className={layoutStyles.content}>
        <SEO />
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout