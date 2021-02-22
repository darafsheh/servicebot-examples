import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useServicebotEmbed from "../../hooks/useServicebotEmbed"

import { useLocation } from '@reach/router'

const PortalMetricBilling = () => {
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [billingPage, setBillingPage] = useState({billing_page_id:'e2MnE7x0NWGJUJ2rjitF', "email":"jane@yopmail.com"});

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
    <Layout title="Metric Billing Customer Portal" location={location.search}>
      <SEO
        title="SaaS Customer Portal Metric Billing Example"
        description="Live example of metric customer portal with Stripe and Billflow"
        ogimage="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/603325388177f0202909252e_metric-billing.jpg"
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
                        <main>
                        <div className="mt-0" id="servicebot-subscription-portal"></div>
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

export default PortalMetricBilling
