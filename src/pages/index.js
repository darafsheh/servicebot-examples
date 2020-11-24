import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      Test Commit i did but doesnt let me commit to main im going to try forking
      this one more time. umm maybe a github permission error, i can commit to
      the main repo probably because it's in my github account
    </div>
    <Link to="/demo-1/">Go to Demo 1</Link> <br />
    <Link to="/demo-2/">Go to Demo 2 - with billing page css</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
