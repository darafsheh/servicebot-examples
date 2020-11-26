const cleanupServicebot = () => {
  const servicebotJSTag = document.getElementById("servicebot-embed-js")
  const cssStyleTag = document.getElementById("servicebot-custom-css-styles")
  if (servicebotJSTag) {
    servicebotJSTag.remove()
  }
  if (cssStyleTag) {
    cssStyleTag.remove()
  }
}

export default cleanupServicebot
