import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const DashboardPage = () => (
  <Layout title="Interactive SaaS billing demo">
    <SEO 
      title="Billflow Live Demo Website" 
      description="SaaS billing live examples with Stripe Billing and Billflow"
      ogimage="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fe4309278a5f96098cfa32d_demo-home.jpg"
    />
      {/* Pinned projects */}
      <div className="px-4 mt-6 sm:px-6 lg:px-8">

        <div className="bg-gray-50 mb-10 rounded-lg  bg-blue-700">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-10 lg:px-4 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-white mb-2">What is your billing flow?</span>
                <span className="block text-blue-400">Find out in two questions.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="ml-3 inline-flex rounded-md shadow">
                <Link to="/saas-billing-flows" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Take the quiz
                </Link>
                </div>
            </div>
            </div>
        </div>

        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">SaaS Use Cases</h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
            <Link to="/saas-billing-flows" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md">
                <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                    <span className="text-gray-900 font-medium">
                    Billing Flow Quiz
                    </span>
                    <p className="text-gray-500">For product leads</p>
                </div>
                </div>
            </Link>
          <Link to="/use-cases/freemium" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Freemium Flow
                </span>
                <p className="text-gray-500">Freemium signup & billing demo</p>
              </div>
            </div>
          </Link>
          <Link to="/use-cases/metric-flow" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-blue-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Metric Billing Flow
                </span>
                <p className="text-gray-500">Metric billing flow demo</p>
              </div>
            </div>
          </Link>
          {/* <Link to="/freemium" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Free Trial Flow
                </span>
                <p className="text-gray-500">Free Trial signup & billing demo</p>
              </div>
            </div>
          </Link>
          <Link to="/freemium" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Free Trial + Paid Flow
                </span>
                <p className="text-gray-500">Free Trial + Paid signup & billing demo</p>
              </div>
            </div>
          </Link>
          <Link to="/freemium" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Paid Upfront Flow
                </span>
                <p className="text-gray-500">Paid upfront billing demo</p>
              </div>
            </div>
          </Link> */}
          {/* More project cards... */}
        </ul>
      </div>

      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pricing Page Examples</h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
          <Link to="/pricing-pages/standard" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Standard Pricing
                </span>
                <p className="text-gray-500">3 tier flat subscription</p>
              </div>
            </div>
          </Link>
          <Link to="/pricing-pages/seat-pricing" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Per Seat Pricing
                </span>
                <p className="text-gray-500">SaaS per seat pricing model</p>
              </div>
            </div>
          </Link>
          <Link to="/pricing-pages/flat-plus-metered" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Flat + Metered Pricing
                </span>
                <p className="text-gray-500">Flat + Metered pricing model</p>
              </div>
            </div>
          </Link>
          <Link to="/pricing-pages/multi-unit-pricing" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Multi-Unit Pricing
                </span>
                <p className="text-gray-500">Multi-unit pricing model</p>
              </div>
            </div>
          </Link>
          <Link to="/pricing-pages/peloton-pricing" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Peloton Pricing
                </span>
                <p className="text-gray-500">Subscription + hardware fee</p>
              </div>
            </div>
          </Link>
          <Link to="/pricing-pages/tax-vat" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Tax & VAT Demo
                </span>
                <p className="text-gray-500">Automatic Tax Calculation</p>
              </div>
            </div>
          </Link>
        </ul>
      </div>


      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Customer Portal Examples</h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
          <Link to="/customer-portals/portal" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Unit-based Customer Portal
                </span>
                <p className="text-gray-500">Quantity management enabled</p>
              </div>
            </div>
          </Link>
          <Link to="/customer-portals/seat-portal" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Per Seat Customer Portal
                </span>
                <p className="text-gray-500">Quantity management enabled</p>
              </div>
            </div>
          </Link>
          <Link to="/customer-portals/portal-metric-billing" className="relative col-span-1 flex shadow-sm rounded-md hover:shadow-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
              <svg className="mr-0 h-6 w-6 text-white group-hover:text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium">
                  Metric Billing Customer Portal
                </span>
                <p className="text-gray-500">Metric usage record with Stripe</p>
              </div>
            </div>
          </Link>
        </ul>
      </div>


    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      Hello World!
    </div>
    <Link to="/demo-1/">Go to Demo sdd</Link> <br />
    <Link to="/demo-2/">Go to Demo 2 - with billing page css</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br/>
    <Link to="/test/">Test aoge</Link> */}
  </Layout>
)

export default DashboardPage
