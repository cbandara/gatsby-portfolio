import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <div className="container contact-section">
        <a href="https://twitter.com/cbandara1010" target='blank'>
          <button className="button contact-button">Twitter</button>
        </a>
        <a href="https://www.linkedin.com/in/cbandara/" target='blank'>
          <button className="button contact-button">LinkedIn</button>
        </a>
        <a href="https://github.com/cbandara" target='blank'>
          <button className="button contact-button">Github</button>
        </a>
      </div>

    </Layout>
  )
}

export default ContactPage