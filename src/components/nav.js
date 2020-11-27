import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from 'react'
 
const Nav = ({}) => {

    const [ucSaas, setUcSaaSOn] = useState(true);
    const [pricingStrategy, setPricingStrategy] = useState(false); 

  return (
  <>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="h-8 w-auto" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fc080009af2653bede44190_Servicebot_Logotype_Purple.svg" alt="Workflow" />
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">  
                <>
                <div>
                    <Link to="/" activeClassName="bg-gray-100 text-gray-900" className="group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md text-gray-600">
                    {/* Heroicon name: home */}
                    <svg className="mr-3 h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Demo Home
                    </Link>
                </div>
                <div className="space-y-1">
                    <button onClick={() => setUcSaaSOn(!ucSaas)} className="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    {/* Heroicon name: users */}
                    
                    <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    SaaS Use Cases
                    {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                    <svg className={`${ucSaas ? 'text-gray-500 rotate-90' : 'text-gray-300'} ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`} viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                    </button>
                    {/* Expandable link section, show/hide based on state. */}
                    <div className={`${ucSaas ? '' : 'hidden'} space-y-1`}>
                    <Link to="/use-cases/freemium" activeClassName="bg-gray-100 text-gray-900" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"></span>
                    <span class="truncate">
                        Freemium Flow
                    </span>
                    </Link>
                    <Link to="/free-trial" activeClassName="bg-gray-100 text-gray-900" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"></span>
                    <span class="truncate">
                        Free Trial Flow
                    </span>
                    </Link>
                    <Link to="/free-trial-cc" activeClassName="bg-gray-100 text-gray-900" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"></span>
                    <span class="truncate">
                        Free Trial Card Flow
                    </span>
                    </Link>
                    <Link to="/paid-upfront" activeClassName="bg-gray-100 text-gray-900" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"></span>
                    <span class="truncate">
                        Paid Upfront Flow
                    </span>
                    </Link>
                    </div>
                </div>
                <div className="space-y-1">
                    <button onClick={() => setPricingStrategy(!pricingStrategy)} className="group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    {/* Heroicon name: folder */}
                    <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Pricing Strategies
                    {/* Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" */}
                    <svg className={`${pricingStrategy ? 'text-gray-500 rotate-90' : 'text-gray-300'} ml-auto h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150`} viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                    </button>
                    {/* Expandable link section, show/hide based on state. */}
                    <div className={`${pricingStrategy ? '' : 'hidden'} space-y-1`}>
                    <a href="" className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span class="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true"></span>
                    <span class="truncate">
                        Coming Soon
                    </span>
                    </a>
                    </div>
                </div>
                </>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <Link to="https://servicebot.io" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                    <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Back to Servicebot
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    Website
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
  </>
)}

export default Nav
