import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, previewMode, previewModeOn }) => (

  <>
  {!previewMode ? 
    <header>
    <div className="bg-white border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight sm:text-xl">
          {siteTitle}
        </h3>
      </div>
      <div className="mt-4 flex sm:mt-0 sm:ml-4">
        <button onClick={previewModeOn} target="_blank" className="order-1 inline-flex items-center px-4 py-2 border border-grey-200 shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 sm:order-1 sm:ml-3">
        Preview Mode   
        <svg className="h-6 w-6 text-black ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
        <Link to="https://dashboard.servicebot.io/signup?ref=demo" target="_blank" className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 sm:order-1 sm:ml-3">
          Signup for Free
        </Link>
      </div>
    </div>
  </header> : 
  <div className="border-b border-gray-200 bg-white sticky z-50 top-0">
    <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-0 flex-1 flex items-center">
          <span className="flex p-2 rounded-lg bg-white">
            {/* Heroicon name: speakerphone */}
            <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <p className="ml-3 font-medium text-black truncate">
            <span>
              You are currently viewing a live Servicebot billing demo
            </span>
          </p>
        </div>
        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <button onClick={previewModeOn} className="order-1 inline-flex items-center px-4 py-2 border border-grey-200 shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 sm:order-1 sm:ml-3">
            Exit Preview mode
            <svg className="h-5 w-5 text-black ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  }
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
