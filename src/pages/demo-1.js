import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  useEffect(() => {
    /**
     * Servicebot React code example
     * https://gist.github.com/bsears90/34c56aab019296e99751b7e802b2a39a
     */

    window.servicebotSettings = {
      servicebot_id: "E0OQN0P0Dort",
      service: "Flat Subscription",
      type: "portal",
      integration: "html"
    }
    ;(function () {
      var s = document.createElement("script")
      s.src =
        "https://js.servicebot.io/embeds/servicebot-billing-settings-embed.js"
      s.async = true
      s.type = "text/javascript"
      var x = document.getElementsByTagName("script")[0]
      x.parentNode.insertBefore(s, x)
    })()
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
