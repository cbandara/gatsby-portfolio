import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1 className="main-title">Contact</h1>
      <div className="container contact-section">
        <div className="btn-container">
          <a href="https://twitter.com/cbandara1010" target='blank'>
            <button className="button contact-button">Twitter</button>
          </a>
        </div>
        <div className="btn-container">
          <a href="https://www.linkedin.com/in/cbandara/" target='blank'>
            <button className="button contact-button">LinkedIn</button>
          </a>
        </div>
        <div className="btn-container">
          <a href="https://github.com/cbandara" target='blank'>
            <button className="button contact-button">Github</button>
          </a>
        </div>
      </div>

    </Layout>
  )
}

export default ContactPage