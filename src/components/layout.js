/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
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

  //const [isOpen, toggleSidebar] = React.useState(true);

  return (
    <div className="h-screen bg-white overflow-hidden flex">
      <Sidebar />
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <Header siteTitle={title || `Servicebot Demo`} />
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
