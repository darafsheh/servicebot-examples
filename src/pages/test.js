import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useServicebotEmbed from "../hooks/useServicebotEmbed"

const TestPage = () => {
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
      <h1>NEW PAGE</h1>
    </Layout>
  )
}

export default TestPage
