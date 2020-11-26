import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useServicebotEmbed from "../hooks/useServicebotEmbed"

const SecondPage = () => {
  useServicebotEmbed({
    settings: {
      servicebot_id: "E0OQN0P0Dort",
      service: "Flat Subscription",
      type: "portal",
      integration: "html"
    }
  })

  return (
    <Layout>
      <SEO
        title="Servicebot Demo 1"
        description="This is a Servicebot Demo page"
      />
      <h1>Servicebot Demo</h1>
      <p>Servicebot Demo Page 1</p>
      <div id="servicebot-subscription-portal"></div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
