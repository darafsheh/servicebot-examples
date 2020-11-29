/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
import Header from "./header"
import "./layout.css"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  //Implment Preview Mode
  const [previewMode, setPreviewMode] = useState(false);
  function previewModeOn() {
    setPreviewMode(!previewMode);
  }

  return (
    <div className="h-screen bg-white overflow-hidden flex">
      {previewMode ? <></>:<Sidebar />}
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100" tabindex="0">
        <Header siteTitle={title || `Servicebot Demo`} previewMode={previewMode} previewModeOn={previewModeOn} />
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
