import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useServicebotEmbed from "../../hooks/useServicebotEmbed"

import { useLocation } from '@reach/router'

const MultiUnitPricing = () => {
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [billingPage, setBillingPage] = useState({billing_page_id:'esqo5JzdxE6C4b8DqWwC'});

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
        //setBillingPage({billing_page_id:''});
    }
    function setStep4On(){
        setStep1(false);
        setStep2(false);
        setStep3(false);
        setStep4(true);
    }

    useServicebotEmbed({
        settings: billingPage
    });

    const location = useLocation();

  return (
    <Layout title="Peloton Pricing Page Example" location={location.search}>
      <SEO
        title="Multi-Unit Pricing Page"
        description="Live example of multi-unit pricing with Stripe and Billflow"
        ogimage="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5fe43090e084a831459da0af_pricing%20page.jpg"
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

        <div class="border-4 border-dashed border-gray-200 rounded-lg mb-5">
            {step1 && 
                <>
                    {/* This example requires Tailwind CSS v2.0+ */}
                    <div className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <header>
                        <div>
                            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            Live multi-unit pricing examples
                            </h1>
                            <span className="text-gray-500">You can select a plan and test a fake payment.</span>
                        </div>
                        </header>
                        <main>
                        <div className="mt-10" id="servicebot-subscription-portal"></div>
                        </main>
                    </div>
                    </div>
                </>          
            }

            {step2 &&
                <>
                </>
            }

            {step3 &&
                <>
                </>
            }

            {step4 &&
                <>
                </>
            }
        </div>

      </div>
    </Layout>
  )
}

export default MultiUnitPricing
