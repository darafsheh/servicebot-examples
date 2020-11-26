import { useEffect } from "react"
import cleanupServicebot from "../functions/cleanup-servicebot"

const useServicebotEmbed = props => {
  const { settings } = props

  useEffect(() => {
    /**
     * Servicebot React code example
     * https://gist.github.com/bsears90/34c56aab019296e99751b7e802b2a39a
     */

    window.servicebotSettings = {
      ...settings
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
      cleanupServicebot()
    }
  })

  return { settings }
}

export default useServicebotEmbed
