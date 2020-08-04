import React from 'react'
import Layout from '../components/layout'
import profileimg from "../assets/profile.jpeg"

import aboutStyles from '../styles/about.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <h1 className="main-title">About Me</h1>
      <div className={aboutStyles.aboutDiv}>
        <div className={aboutStyles.bio} >
          <img width={200} src={profileimg} className={aboutStyles.profilepic} alt="Charutha Bandara"></img>
        </div>
        <p>
          I am a full stack web developer with experience building RESTful API's, web applications
          and mobile applications. My main stack consists of Mongo,
          Express, React and Node. On top of this I am very adaptive and pick up stacks quickly. On top of MERN, I am
          working with Nest.js, PostgreSQL, Ionic.js, React Native, Firebase, GCP, AWS, Docker and many other
          leading edge frameworks and libraries.
        </p>
        <br />
        <p>
          My mission is to help solve difficult problems humanity is faced with using technology.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage