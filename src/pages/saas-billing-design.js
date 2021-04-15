import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useLocation } from '@reach/router'

const IndexPage = () => {
    //Start Screen
    const [startScreen, setStartScreen] = useState(false);
    //SaaS billing questions
    const [question1, setQuestion1] = useState(true);
    const [question2, setQuestion2] = useState(false);
    //Quiz Answers
    const [answer1, setAnswer1] = useState(0);
    const [answer2, setAnswer2] = useState(0);
    const [diagramNum, setDiagramNum] = useState(0);
    //Diagrams
    const [diagram, setDiagram] = useState(false);
    const [freemiumFlat, setFreemiumFlat] = useState(false);
    const [freemiumUnit, setFreemiumUnit] = useState(false);
    const [freemiumMetric, setFreemiumMetric] = useState(false);
    const [freeTrialFlat, setFreeTrialFlat] = useState(false);
    const [freeTrialUnit, setFreeTrialUnit] = useState(false);
    const [freeTrialMetric, setFreeTrialMetric] = useState(false);
    const [upfrontFlat, setUpfrontFlat] = useState(false);
    const [upfrontUnit, setUpfrontUnit] = useState(false);
    const [upfrontMetric, setUpfrontMetric] = useState(false);

    function setEverythingOff(){
        setStartScreen(false);
        setQuestion1(false); 
        setQuestion2(false);
        setFreemiumFlat(false);
        setFreemiumUnit(false);
        setFreemiumMetric(false);
        setFreeTrialFlat(false);
        setFreeTrialUnit(false);
        setFreeTrialMetric(false);
        setUpfrontFlat(false);
        setUpfrontUnit(false);
        setUpfrontMetric(false);
        setDiagram(false);
    }
    //Quick questions
    function showQuestion2(){
        setEverythingOff();
        setQuestion2(true);
        console.log(answer1);
        console.log(answer2);
    }
    //Diagrams
    function showDiagramScreen(num){
        setDiagramAnswer(num);
        setEverythingOff();
        setDiagram(true);
    }
    function setDiagramAnswer(num){
        console.log(answer1);
        console.log(num);
        if(answer1 == 1 && num == 1){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857aedafd154f3926bb90_freemium-flat.svg");
        } else if(answer1 == 2 && num == 1){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857af70d6917c231fadd0_freemium-unit.svg");
        } else if(answer1 == 3 && num == 1){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857af66171f1d3a3ed9b3_freemium-metered.svg");
        } else if(answer1 == 1 && num == 2){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857ae843caac9faf4cbc1_freetrial-flat.svg");
        } else if(answer1 == 2 && num == 2){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857afd385c93a58ce6b67_freetrial-unit.svg");
        } else if(answer1 == 3 && num == 2){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857afc656dc6f7763c468_freetrial-metered.svg");
        } else if(answer1 == 1 && num == 3){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857af2aca1b78eefddab1_upfront-flat.svg");
        } else if(answer1 == 2 && num == 3){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857aebfbd92b39d040289_upfront-unit.svg");
        } else if(answer1 == 3 && num == 3){
            setDiagramNum("https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857ae067b79d58d34e5bc_upfront-metered.svg");
        } else {
            setStartScreen(true);
        }
    }

    const location = useLocation();

    return(
  <Layout title="SaaS billing flow generator for Stripe Billing" location={location.search}>
    <SEO 
      title="SaaS billing flow generator for Stripe Billing" 
      description="View your SaaS billing architecture based on your pricing model and onboarding flow"
      ogimafe="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607896b6beb6ebffd501439a_Billflow%20Opengraph%20Image_Billing%20Flow%20GeneratorV3.jpg"
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

        <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <header>
                <div className="text-center">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                    SaaS billing flow generator for Stripe
                    </h1>
                    <div className="mt-2">
                        <span className="text-gray-500">Answer the following two questions to view and download your SaaS billing flow.</span>
                    </div>
                    <div className="branding flex justify-center mt-4">
                        <div className="mr-5">
                            <img className="h-10" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/5ffdc333f98496b452e10303_stripe_partner_badge_verified_slate.svg"></img>
                        </div>
                    </div>
                </div>
                </header>
                <main className="mt-8">
                    {question1 && 
                        <>
                            <h2 className="text-2xl font-bold leading-tight text-gray-900 mb-4">
                                What is your pricing model?
                            </h2>
                            <div>
                            <fieldset>
                                <legend className="sr-only">
                                Server size
                                </legend>
                                <div className="space-y-4">
                                <label onClick={() => {setAnswer1(1); showQuestion2()}} className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <input type="radio" name="server_size" defaultValue="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
                                    <div className="flex items-center">
                                        <div className="h-40 mt-4 mr-4">
                                            <img className="h-full" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/60777b75035a5c6721668882_Flat.svg" alt="test"></img>
                                        </div>
                                        <div className="text-md">
                                            <p id="server-size-0-label" className="font-medium text-gray-900 text-2xl mb-2">
                                            Flat subscription
                                            </p>
                                            <div id="server-size-0-description-0" className="text-gray-500">
                                                <p className="sm:inline">You charge a flat subscription for features or premium access</p>
                                            </div>
                                            <div id="server-size-0-description-0" className="text-gray-500">
                                                <p className="sm:inline">Example: <span className="text-gray-900">$50/mo, $800/yr, $100/mo + $500 Setup Fee, etc</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                                </label>
                                <label onClick={() => {setAnswer1(2); showQuestion2()}} className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <input type="radio" name="server_size" defaultValue="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
                                    <div className="flex items-center">
                                        <div className="h-40 mt-4 mr-4">
                                            <img className="h-full" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857d0d0b132d09e925ab9_Unit-based.svg" alt="test"></img>
                                        </div>
                                        <div className="text-md">
                                            <p id="server-size-0-label" className="font-medium text-gray-900 text-2xl mb-2">
                                            Unit-based billing
                                            </p>
                                            <div id="server-size-0-description-0" className="text-gray-500">
                                                <p className="sm:inline">You charge per number of units that will carry over every month</p>
                                            </div>
                                            <div id="server-size-0-description-0" className="text-gray-500">
                                                <p className="sm:inline">Example: <span className="text-gray-900">$5/seat/mo, $10/user/mo for the first 100 users, etc</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                                </label>
                                <label onClick={() => {setAnswer1(3); showQuestion2()}} className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <input type="radio" name="server_size" defaultValue="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
                                    <div className="flex items-center">
                                        <div className="h-40 mt-4 mr-4">
                                            <img className="h-full" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857cf067b79da0834e5d1_Metered.svg" alt="test"></img>
                                        </div>
                                        <div className="text-md">
                                            <p id="server-size-0-label" className="font-medium text-gray-900 text-2xl mb-2">
                                            Metered billing
                                            </p>
                                            <div id="server-size-0-description-0" className="text-gray-500">
                                                <p className="sm:inline">You charge based on usage that will reset on every billing cycle</p>
                                            </div>
                                            <div id="server-size-0-description-0" className="text-gray-500">
                                                <p className="sm:inline">Example: <span className="text-gray-900">$0.01 per API, $0.01 per API for the first 1,000 APIs, etc</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                                </label>
                                </div>
                            </fieldset>
                            </div>
                        </>          
                    }

                    {question2 &&
                        <>
                            <h2 className="text-2xl font-bold leading-tight text-gray-900 mb-4">
                                What is your customer acquisition strategy?
                            </h2>
                            <div>
                            <fieldset>
                                <legend className="sr-only">
                                Server size
                                </legend>
                                <div className="space-y-4">
                                <label onClick={() => {showDiagramScreen(1)}} className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <input type="radio" name="server_size" defaultValue="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
                                    <div className="flex items-center">
                                        <div className="h-40 mt-4 mr-4">
                                            <img className="h-full" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857c27528094d994bbb54_freemium.svg" alt="test"></img>
                                        </div>
                                        <div className="text-md">
                                            <p id="server-size-0-label" className="font-medium text-gray-900 text-2xl mb-2">
                                            Freemium
                                            </p>
                                            <div id="server-size-0-description-0" className="text-gray-500 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                                                <p className="sm:inline">Your users can register to your app and use certain functionality for free without inputting credit card</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                                </label>
                                <label onClick={() => {showDiagramScreen(2)}} className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <input type="radio" name="server_size" defaultValue="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
                                    <div className="flex items-center">
                                        <div className="h-40 mt-4 mr-4">
                                            <img className="h-full" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857c23820bd49cb218e77_freetrial.svg" alt="test"></img>
                                        </div>
                                        <div className="text-md">
                                            <p id="server-size-0-label" className="font-medium text-gray-900 text-2xl mb-2">
                                            Free trial
                                            </p>
                                            <div id="server-size-0-description-0" className="text-gray-500 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                                                <p className="sm:inline">Your users can register and use the app premium features for a certain number of days before having to pay</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                                </label>
                                <label onClick={() => {showDiagramScreen(3)}} className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <input type="radio" name="server_size" defaultValue="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
                                    <div className="flex items-center">
                                        <div className="h-40 mt-4 mr-4">
                                            <img className="h-full" src="https://uploads-ssl.webflow.com/5ea83e59594ab8d915a2ed46/607857c22a5543a779524dda_payupfront.svg" alt="test"></img>
                                        </div>
                                        <div className="text-md">
                                            <p id="server-size-0-label" className="font-medium text-gray-900 text-2xl mb-2">
                                            Pay as you go
                                            </p>
                                            <div id="server-size-0-description-0" className="text-gray-500 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                                                <p className="sm:inline">Your users must enter a credit card as soon as registering for the app (regardless of getting charged)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true" />
                                </label>
                                </div>
                            </fieldset>
                            </div>
                        </>
                    }

                    {diagram &&
                        <>
                            <div>
                                <img className="w-full" src={diagramNum} alt="test"></img>
                            </div>
                        </>
                    }
                </main>
            </div>
        </div>

    </div>

  </Layout>
  )
}

export default IndexPage
