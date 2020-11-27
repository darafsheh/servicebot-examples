import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useServicebotEmbed from "../../hooks/useServicebotEmbed"

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
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <div id="servicebot-subscription-portal"></div>
      </div>
    </Layout>
  )
}

export default SecondPage
