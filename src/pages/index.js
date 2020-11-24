import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Image from "../components/image"
import SEO from "../components/seo"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div class="h-screen bg-white overflow-hidden flex">
      <Sidebar />
    </div>
    {/* Static sidebar for desktop */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      Toooo dfsf
    </div>
    <Link to="/demo-1/">Go to Demo 1</Link> <br />
    <Link to="/demo-2/">Go to Demo 2 - with billing page css</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
