import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Static sidebar for desktop */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      Toooo dfsf
    </div>
    <Link to="/demo-1/">Go to Demo 1rr</Link> <br />
    <Link to="/demo-2/">Go to Demo 2 - with billing page css</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
