import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useServicebotEmbed from "../../hooks/useServicebotEmbed"

import { useLocation } from '@reach/router'

const TaxVatDemo = () => {
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [billingPage, setBillingPage] = useState({billing_page_id:'XXdbd9DfmASi4ODju51'});
    /*const [billingPage, setBillingPage] = useState(
        {
            billing_page_id:'O9uBmZ1cHMVxYsOWo9pD', 
            "loader": "3",
            "options": {
            "behavior": {
                "signup": {
                "enableCheckoutImage": true,
                "enableAutomaticTax": true,
                // "layout": "1",
                "layout": "2",
                }
            }
            }
        });*/

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
    <Layout title="Automatic Tax & VAT Checkout" location={location.search}>
      <SEO
        title="SaaS automatic tax & VAT calculation"
        description="Live example of automatic tax and VAT calculation with Stripe and Billflow"
        ogimage="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/60527fbb8d28fd39d811425e_billflow-demo-tax-vat.jpg"
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

export default TaxVatDemo
