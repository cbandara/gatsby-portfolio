import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

import codepic from "../assets/code-pic.png"
// import jslogo from "../assets/jslogo.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import firebase from "../assets/firebase.png"
import nest from "../assets/nest.png"
import mongo from "../assets/mongo.png"
import postgre from "../assets/postgre.png"
import kubernetes from "../assets/kubernetes.png"
import gatsby from "../assets/gatsby.png"
import gcp from "../assets/gcp.png"
import shopify from "../assets/shopify.png"
import graphqlimg from "../assets/graphql.png"
import reduximg from "../assets/redux.png"

import homeStyles from '../styles/home.module.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata{
        position
      }
    }
  }`)

  return (
    <div>
      <Layout>
        <div>
          <div className="hero container">
            <div>
              <h1 className={homeStyles.fadeInDown}>Hello.</h1>
              <h2>I'm a {data.site.siteMetadata.position}</h2>
              {/* <p>Need to get in touch?</p> */}
              <Link to="/contact" ><button className="button">CONTACT ME</button></Link>
            </div>
            <div className={homeStyles.picdiv}>
              <img className={homeStyles.codepic} src={codepic} alt={"Charutha Bandaa"}></img>
            </div>
          </div>
          <div className={homeStyles.skillsContainer}>
            <h2 className="centered-heading">Core Technologies</h2>
            <ul className={homeStyles.skillsList}>
              {/* <li className={homeStyles.skillsItem}>
              <img width={100} src={jslogo} alt="javascript"></img>
              <p>Javascript</p>
            </li> */}
              <li className={homeStyles.skillsItem}>
                <img width={100} src={react} alt="react"></img>
                <p>React.js</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={node} alt="node"></img>
                <p>Node.js</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={express} alt="express"></img>
                <p>Express.js</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={firebase} alt="firebase"></img>
                <p>Firebase</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={nest} alt="nest"></img>
                <p>Nest.js</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={mongo} alt="mongo"></img>
                <p>MongoDB</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={postgre} alt="postgre"></img>
                <p>PostgreSQL</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={kubernetes} alt="kubernetes"></img>
                <p>Kubernetes</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={gatsby} alt="gatsby"></img>
                <p>Gatsby.js</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={gcp} alt="gcp"></img>
                <p>Google Cloud Project</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={shopify} alt="shopify"></img>
                <p>Shopify</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={graphqlimg} alt="graphql"></img>
                <p>GraphQL</p>
              </li>
              <li className={homeStyles.skillsItem}>
                <img width={100} src={reduximg} alt="redux"></img>
                <p>Redux</p>
              </li>
            </ul>
          </div>
        </div>
      </Layout >
    </div>
  )
}

export default IndexPage