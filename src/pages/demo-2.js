import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useServicebotEmbed from "../hooks/useServicebotEmbed"

const DemoTwo = () => {
  useServicebotEmbed({
    settings: {
      billing_page_id: "dbZGtOSLqnrFdI19tN3G"
    }
  })

  return (
    <Layout>
      <SEO
        title="Servicebot Demo 1"
        description="This is a Servicebot Demo page"
      />
      <h1>Servicebot Demo 2</h1>
      <p>Servicebot Demo Page 2</p>
      <div id="servicebot-subscription-portal"></div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DemoTwo
