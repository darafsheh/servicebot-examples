import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DemoTwo = () => {
  useEffect(() => {
    /**
     * Servicebot React code example
     * https://gist.github.com/bsears90/34c56aab019296e99751b7e802b2a39a
     */
    window.servicebotSettings = {
      billing_page_id: "dbZGtOSLqnrFdI19tN3G"
    }
    ;(function () {
      var s = document.createElement("script")
      s.src =
        "https://js.servicebot.io/embeds/servicebot-billing-settings-embed.js"
      s.async = true
      s.type = "text/javascript"
      s.id = "servicebot-embed-js"
      var x = document.getElementsByTagName("script")[0]
      x.parentNode.insertBefore(s, x)
    })()

    return () => {
      document.getElementById("servicebot-embed-js").remove()
      // remove style tag by ID if we have it
      var sbStyle = document.getElementById("servicebot-embed-style")
      if (sbStyle) {
        sbStyle.remove()
      }
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
