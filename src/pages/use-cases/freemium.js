import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useServicebotEmbed from "../../hooks/useServicebotEmbed"

import { useLocation } from '@reach/router'

const SaaSFreemiumPage = () => {
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [billingPage, setBillingPage] = useState({billing_page_id:'dUEiMEpcTbHAyyRqCRl3'});

    function setStep1On(){
        setStep1(true);
        setStep2(false);
        setStep3(false);
        setStep4(false);
    }
    function setStep2On(){
        setStep1(false);
        setStep2(true);
        setStep3(false);
        setStep4(false);
    }
    function setStep3On(){
        setStep1(false);
        setStep2(false);
        setStep3(true);
        setStep4(false);
        setBillingPage({billing_page_id:'rorsBPFoAmnTPurozbOG'});
    }
    function setStep4On(){
        setStep1(false);
        setStep2(false);
        setStep3(false);
        setStep4(true);
        setBillingPage({billing_page_id:'TQhN0DueUnkMCs94qNJl',email:'shar-demo-freemium@yopmail.com'})
    }

    useServicebotEmbed({
        settings: billingPage
    });

    const location = useLocation();

  return (
    <Layout title="SaaS Freemium Billing Flow" location={location.search}>
      <SEO
        title="SaaS freemium model billing flow"
        description="Learn how SaaS freemium pricing model works with Stripe & Billflow"
        ogimage="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fe43092cb3c750200fdac5d_freemium.jpg"
      />
      <div className="px-4 mt-1 sm:px-6 lg:px-8">
        <div className="flex mb-5">
        {/* <div className="flex-initial mr-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/G8TkNJqQnY4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
        <div className="flex-initial">
            {/* Put text here */}
        </div>
        </div>

        <>
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="bg-white lg:border-t lg:border-b lg:border-gray-200 mb-5">
            <nav aria-label="Progress">
                <ol className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
                <li className="relative overflow-hidden lg:flex-1">
                    <div className="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0">
                    {/* Completed Step */}
                    <div onClick={() => {setStep1On()}} className="group cursor-pointer">
                        <span className={`${step1 ? 'bg-blue-600':'bg-transparent group-hover:bg-gray-200'} absolute top-0 left-0 w-1 h-full lg:w-full lg:h-1 lg:bottom-0 lg:top-auto`} aria-hidden="true" />
                        <span className="px-6 py-5 flex items-start text-sm font-medium">
                        <span className="flex-shrink-0">
                            <span className={`${step1 ? 'bg-blue-600':'bg-white border-2 border-gray-300'} w-10 h-10 flex items-center justify-center rounded-full`}>
                            <span className={`${step1 ? 'text-white':'text-gray-500'}`}>01</span>
                            </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                            <span className={`${step1 ? 'text-blue-600':'text-black'} text-xs font-semibold uppercase tracking-wide`}>User Registers for the app</span>
                            <span className="text-sm font-medium text-gray-500">Typically a custom registration</span>
                        </span>
                        </span>
                    </div>
                    </div>
                </li>
                <li className="relative overflow-hidden lg:flex-1">
                    <div className="border border-gray-200 overflow-hidden lg:border-0">
                    {/* Current Step */}
                    <div onClick={() => {setStep2On()}} className="group cursor-pointer">
                        <span className={`${step2 ? 'bg-blue-600':'bg-transparent group-hover:bg-gray-200'} absolute top-0 left-0 w-1 h-full lg:w-full lg:h-1 lg:bottom-0 lg:top-auto`} aria-hidden="true" />
                        <span className="px-6 py-5 flex items-start text-sm font-medium lg:pl-9">
                        <span className="flex-shrink-0">
                            <span className={`${step2 ? 'bg-blue-600':'bg-white border-2 border-gray-300'} w-10 h-10 flex items-center justify-center rounded-full`}>
                            <span className={`${step2 ? 'text-white':'text-gray-500'}`}>02</span>
                            </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                            <span className={`${step2 ? 'text-blue-600':'text-black'} text-xs font-semibold uppercase tracking-wide`}>Needs a paid feature</span>
                            <span className="text-sm font-medium text-gray-500">Plan Picker asks the user to upgrade</span>
                        </span>
                        </span>
                    </div>
                    <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                        <svg className="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                        </svg>
                    </div>
                    </div>
                </li>
                <li className="relative overflow-hidden lg:flex-1">
                    <div className="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0">
                    {/* Upcoming Step */}
                    <div onClick={() => {setStep3On()}} className="group cursor-pointer">
                        <span className={`${step3 ? 'bg-blue-600':'bg-transparent group-hover:bg-gray-200'} absolute top-0 left-0 w-1 h-full lg:w-full lg:h-1 lg:bottom-0 lg:top-auto`} aria-hidden="true" />
                        <span className="px-6 py-5 flex items-start text-sm font-medium lg:pl-9">
                        <span className="flex-shrink-0">
                            <span className={`${step3 ? 'bg-blue-600':'bg-white border-2 border-gray-300'} w-10 h-10 flex items-center justify-center rounded-full`}>
                            <span className={`${step3 ? 'text-white':'text-gray-500'}`}>03</span>
                            </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                            <span className={`${step3 ? 'text-blue-600':'text-black'} text-xs font-semibold uppercase tracking-wide`}>Upgrades to a higher tier</span>
                            <span className="text-sm font-medium text-gray-500">Subscription gets created in Stripe</span>
                        </span>
                        </span>
                    </div>
                    <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                        <svg className="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                        </svg>
                    </div>
                    </div>
                </li>
                <li className="relative overflow-hidden lg:flex-1">
                    <div className="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0">
                    {/* Upcoming Step */}
                    <div onClick={() => {setStep4On()}} className="group cursor-pointer">
                        <span className={`${step4 ? 'bg-blue-600':'bg-transparent group-hover:bg-gray-200'} absolute top-0 left-0 w-1 h-full lg:w-full lg:h-1 lg:bottom-0 lg:top-auto`} aria-hidden="true" />
                        <span className="px-6 py-5 flex items-start text-sm font-medium lg:pl-9">
                        <span className="flex-shrink-0">
                            <span className={`${step4 ? 'bg-blue-600':'bg-white border-2 border-gray-300'} w-10 h-10 flex items-center justify-center rounded-full`}>
                            <span className={`${step4 ? 'text-white':'text-gray-500'}`}>04</span>
                            </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                            <span className={`${step4 ? 'text-blue-600':'text-black'} text-xs font-semibold uppercase tracking-wide`}>Manages subscription</span>
                            <span className="text-sm font-medium text-gray-500">Uses Customer Portal</span>
                        </span>
                        </span>
                    </div>
                    <div className="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                        <svg className="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                        </svg>
                    </div>
                    </div>
                </li>
                </ol>
            </nav>
            </div>
        </>

        <div class="border-4 border-dashed border-gray-200 rounded-lg mb-5">
            {step1 && 
                <div className="py-20 bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-12 w-auto" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fc3ba5a1c29736990f78490_Example%20SaaS%20logo%20dark.svg" alt="Billflow Example SaaS demo" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Fake registration
                    </h2>
                    <p className="mt-2 text-center font-medium text-blue-600 max-w">
                        Just press register
                    </p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-gray-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Name
                            </label>
                            <div className="mt-1">
                            <input id="name" name="name" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                            </label>
                            <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                            </label>
                            <div className="mt-1">
                            <input id="password" name="password" type="password" autoComplete="current-password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <button onClick={() => {setStep2On()}} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Register
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>          
            }

            {step2 &&
                <>
                {/* This example requires Tailwind CSS v2.0+ */}
                <div className="bg-white">
                <nav className=" shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block h-8 w-auto" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fc3ba5a1c29736990f78490_Example%20SaaS%20logo%20dark.svg" alt="Billflow Example SaaS demo" />
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <span className="inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium text-gray-900">Dashboard</span>
                            <a onClick={() => {setStep3On()}} className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Billing</a>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </nav>
                <div className="py-10">
                    <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        Freemium Dashboard Example
                        </h1>
                    </div>
                    </header>
                    <main>
                    <div className="flex max-w-7xl mx-auto sm:px-6 lg:px-8 mt-5">
                        <div className="mr-5 w-2/4 h-72 bg-blue-200 overflow-hidden rounded-lg hover:shadow-md cursor-pointer">
                            <div className="pt-16 text-center">
                                <svg className="h-24 w-24 text-blue-500 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <div className="text-blue-500 text-2xl mt-4">Basic Tier Feature</div>
                            </div>
                        </div>
                        <div className="w-2/4 h-72 bg-gray-200 overflow-hidden rounded-lg">
                            <div className="pt-16 text-center">
                                <svg className="h-24 w-24 text-gray-400 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                <div className="text-gray-600 text-2xl mt-4 mb-3">Premium Feature</div>
                                <button onClick={() => {setStep3On()}} className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-black sm:order-1 sm:ml-3">
                                    Upgrade Plan
                                </button>
                            </div>
                        </div>
                    </div>
                    </main>
                </div>
                </div>
                </>
            }

            {step3 &&
                <>
                    {/* This example requires Tailwind CSS v2.0+ */}
                    <div className="bg-white">
                    <nav className=" shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block h-8 w-auto" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fc3ba5a1c29736990f78490_Example%20SaaS%20logo%20dark.svg" alt="Billflow Example SaaS demo" />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                <a onClick={() => {setStep2On()}} className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Dashboard</a>
                                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium text-gray-900">Billing</span>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </nav>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <header>
                        <div>
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            Plan Picker Example
                            </h1>
                            <span className="text-blue-600">This is a Billflow embeddable Plan Picker that let customers upgrade their account.</span>
                        </div>
                        </header>
                        <main>
                        <div className="mt-10" id="servicebot-subscription-portal"></div>
                        </main>
                    </div>
                    </div>
                </>
            }

            {step4 &&
                <>
                    {/* This example requires Tailwind CSS v2.0+ */}
                    <div className="bg-white">
                    <nav className=" shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block h-8 w-auto" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fc3ba5a1c29736990f78490_Example%20SaaS%20logo%20dark.svg" alt="Billflow Example SaaS demo" />
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                <a onClick={() => {setStep2On()}} className="cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Dashboard</a>
                                <span className="inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium text-gray-900">Billing</span>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </nav>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <header>
                        <div>
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            Customer Portal Example
                            </h1>
                            <span className="text-blue-600">This is a Billflow embeddable Customer Portal that lets customers manage their subscriptions.</span>
                        </div>
                        </header>
                        <main>
                        <div className="mt-10" id="servicebot-subscription-portal"></div>
                        </main>
                    </div>
                    </div>
                </>
            }
        </div>

      </div>
    </Layout>
  )
}

export default SaaSFreemiumPage
