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

import queryString from 'query-string';

const Layout = ({ title, children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  let embedModeOn = false;
  let chatOn = true;

  if(location) {
    const embedMode = queryString.parse(location);
    console.log(embedMode);
    if(embedMode.embed){
      embedModeOn = true;
    }
  }

  //Implment Preview Mode
  const [previewMode, setPreviewMode] = useState(embedModeOn);
  

  function previewModeOn() {
    setPreviewMode(!previewMode);
  }

  return (
    <div className="h-screen bg-white overflow-hidden flex">
      {previewMode ? <></>:<Sidebar />}
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100" tabindex="0">
        {!embedModeOn &&
        <Header siteTitle={title || `Billflow Demo`} previewMode={previewMode} previewModeOn={previewModeOn} />
        }
        {children}
        
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
