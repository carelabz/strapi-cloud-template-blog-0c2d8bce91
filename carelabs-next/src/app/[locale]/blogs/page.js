"use client";
import { Globe } from "lucide-react";
import React from "react";
import carlabz from "@/assets/carlabz.jpg";

const Page = () => {
  return (
   


<div className="relative w-full flex flex-col items-center justify-center gap-5 overflow-y-auto">

   <div className="w-full md:w-[80%] xl:w-[70%]  mt-20 md:mt-24 lg:mt-40 px-4 md:px-0">
    <p className="text-para text-[14px] poppins-font">Home / Insight / Blog</p>
  </div>

  {/* Hero Section */}
  <div className="w-full md:w-[80%] xl:w-[70%] bg-red flex flex-col md:flex-row items-center gap-6 p-4 md:p-10 glass-panel rounded-2xl">
    
    {/* Text Content */}
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      <div className="flex items-center gap-2 bg-amber-100 rounded-full py-1 px-2 w-max">
        <Globe size={14}/>
        <p className="montserrat-font text-sm">Insights • Electrical Safety</p>
      </div>

      <h1 className="text-[28px] lg:text-[36px] 2xl:text-[48px] font-semibold montserrat-font leading-snug">
        The Future of Electrical Safety: AI-Powered Predictive Maintenance
      </h1>

      <p className="text-[16px] xl:text-[18px] poppins-font">
        Discover how artificial intelligence and machine learning are revolutionizing electrical safety protocols and predictive maintenance strategies across global facilities.
      </p>

      <hr className="w-full border-gray-300 my-4" />

      {/* Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm poppins-font">
        <div className="flex items-center gap-2"><Globe size={14} />By Carelabs Engineering Team</div>
        <div className="flex items-center gap-2"><Globe size={14} />Published on: 10 Dec 2025</div>
        <div className="flex items-center gap-2"><Globe size={14} />8 min read</div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm"><Globe size={12}/> All</button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm"><Globe size={12}/> Predictive Maintenance</button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm"><Globe size={12}/> Electrical Safety</button>
      </div>
    </div>

    {/* Image */}
    <div
      className="w-full md:w-1/2 h-64 md:h-[400px] rounded-2xl bg-white"
      style={{
        backgroundImage: `url(${carlabz.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>

  </div>

    
        <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-[80%] xl:w-[70%] flex flex-col items-center justify-center lg:items-start lg:flex-row  gap-3">

          <div className=" w-[90%] md:w-full lg:w-[25%] flex flex-col gap-5">
            <div className="glass-panel ounded-2xl">
              <h2 className="p-5 text-[14px] font-semibold montserrat-font">IN THIS ARTICLE</h2>
              <ul className="">
                  <li className="px-10 py-3 poppins-font text-[14px]">Why Traditional Maintenance Is No Longer Enough</li>
                  <li className="px-10 py-3 poppins-font text-[14px]">Why Traditional Maintenance Is No Longer Enough</li>
                  <li className="px-10 py-3 poppins-font text-[14px]">Why Traditional Maintenance Is No Longer Enough</li>
                  <li className="px-10 py-3 poppins-font text-[14px]">Why Traditional Maintenance Is No Longer Enough</li>
                  <li className="px-10 py-3 poppins-font text-[14px]">Why Traditional Maintenance Is No Longer Enough</li>
                  <li className="px-10 py-3 poppins-font text-[14px]">Why Traditional Maintenance Is No Longer Enough</li>
              </ul>
            </div>

                <div className="glass-panel rounded-2xl p-5">
              <h2 className=" text-[14px] font-semibold montserrat-font">Weekly Insights</h2>
              <p className="py-2 poppins-font text-[14px]">Get the latest electrical safety news and technical insights delivered to your inbox.</p>
               <input placeholder="Your mail" className="w-full border border-black h-10 rounded-lg p-2"></input>
                 <button className="bg-[#2575b6] w-full p-2 mt-3 rounded-lg text-white">Subscribe</button>
            </div>


          </div>

          <div className=" w-[90%] md:w-full lg:w-[75%] flex flex-col gap-5 ">
            <div className="glass-panel rounded-2xl p-10">
              <h1 className="mb-5 text-[30px] font-semibold montserrat-font">Introduction</h1>
              <p className="mb-5 poppins-font text-[16px]">
                Electrical systems are becoming more complex, more loaded, and
                more critical than ever. From data centers and hospitals to manufacturing plants
                and utilities, even a single unexpected outage can ripple through operations, safety, and revenue.
              </p>

              <p className="mb-5 poppins-font text-[16px]">
                For decades, electrical safety has relied on a mix of periodic inspections, time-based maintenance, and post-incident investigations. That model is no longer enough. The combination of aging assets, higher energy demands,
                and stricter compliance requirements means we need a smarter way to see problems before they become incidents.
              </p>

              <p className="mb-5 poppins-font text-[16px]">
                That's where AI-powered predictive maintenance comes in.
                By combining sensor data, advanced analytics, and domain expertise, organizations can move from "fix after 
                failure" to "anticipate and prevent" — and radically change how electrical safety is managed.
              </p>
            </div>

                <div className="glass-panel rounded-2xl p-10  ">
              <h1 className="mb-5 text-[30px] font-semibold montserrat-font">Why Traditional Maintenance Is No Longer Enough</h1>
              <p className="poppins-font text-[16px]">Traditional maintenance strategies tend to fall into three buckets:</p>
               <ul className="list-disc p-5 para-text poppins-font text-[16px]">
                <li>Run-to-failure: equipment is serviced only after something breaks.</li>
                <li>Run-to-failure: equipment is serviced only after something breaks.</li>
                <li>Run-to-failure: equipment is serviced only after something breaks.</li>
               </ul>
               
                <p className="poppins-font text-[16px] text-para">These approaches can work for simple, low-risk systems.
                   But for modern electrical networks, they introduce serious challenges:</p>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-5">
                      <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold text-[16px] montserrat-font py-2">Hidden degradation</h2>
                          <p className="text-[14px] poppins-font">Many failure modes — insulation breakdown, loose terminations, 
                            thermal stress, protection mis-coordination
                             — progress quietly before any visible symptom appears.</p>
                      </div>

                          <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold text-[16px] montserrat-font py-2">Hidden degradation</h2>
                          <p className="text-[14px] poppins-font">Many failure modes — insulation breakdown, loose terminations, 
                            thermal stress, protection mis-coordination
                             — progress quietly before any visible symptom appears.</p>
                      </div>

                          <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold text-[16px] montserrat-font py-2">Hidden degradation</h2>
                          <p className="text-[14px] poppins-font">Many failure modes — insulation breakdown, loose terminations, 
                            thermal stress, protection mis-coordination
                             — progress quietly before any visible symptom appears.</p>
                      </div>

                          <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold text-[16px] montserrat-font py-2">Hidden degradation</h2>
                          <p className="text-[14px] poppins-font">Many failure modes — insulation breakdown, loose terminations, 
                            thermal stress, protection mis-coordination
                             — progress quietly before any visible symptom appears.</p>
                      </div>

                   
                  </div>  

                  <p className="text-[14px] poppins-font">
                    In short, traditional maintenance spends a lot of time chasing symptoms instead of
                     understanding risk. AI-powered predictive maintenance flips that mindset.
                  </p>
            
                </div>


              <div className="glass-panel rounded-2xl p-10 ">
              <h2 className="mb-5 text-[30px] font-semibold montserrat-font">What AI-Powered Predictive Maintenance Really Means</h2>
              <p className="text-[16px] poppins-font">Predictive maintenance is often simplified as "using sensors and alerts." In reality, 
                AI-driven predictive maintenance for electrical safety is a combination of:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">Continuous or frequent data collection from the electrical system.</li>
                <li className=" poppins-font para-text">Intelligent models that learn normal behavior and detect anomalies.</li>
                <li className=" poppins-font para-text">Risk-based insights that are understandable to engineers and operations teams.</li>
                <li className=" poppins-font para-text">Workflows that turn those insights into timely, prioritized actions.</li>
               </ul>
               
                <p className="mb-3 text-[16px] poppins-font">Instead of telling you that something has failed, the system 
                  highlights where failures are likely to emerge, why they might happen,
                   and when you should intervene to stay safe and compliant.</p>


               <p className=" poppins-font ">For electrical safety, that can mean predicting:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">COverheating connections or overloaded feeders before insulation is damaged.</li>
                <li className=" poppins-font para-text">Protection devices that are likely to mis-operate under fault condition</li>
                <li className=" poppins-font para-text">Equipment approaching thermal, mechanical, or dielectric limits.</li>
                <li className=" poppins-font para-text">Workflows that turn those insights into timely, prioritized actions.</li>
               </ul>

        
            
                </div>


              <div className="glass-panel rounded-2xl  ">
                 <div className="h-[350px] rounded-t-2xl  bg-amber-200 w-full"
                  style={{
                          backgroundImage: `url(${carlabz.src})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}>
                                        
                 </div>
                 <p className="p-4 poppins-font italic ">Real-time data from panels, relays, and sensors feeds AI models that highlight emerging risks.</p>
              </div>


              <div className=" glass-panel rounded-2xl p-10  ">
              <h1 className="mb-5 text-[30px] font-semibold montserrat-font">Key Building Blocks of an AI-Driven Electrical Safety Program</h1>
              <h2 className="mb-2 text-[#2575b6] montserrat-font text-[24px] font-semibold">1. Smart Sensing and Data Collection</h2>
              <p  className=" poppins-font ">The foundation is data. Depending on the site, this can include:</p>
               <ul className="list-disc p-5">
                <li  className=" poppins-font para-text">Thermal imaging and thermography data from panels and busbars.</li>
                <li  className=" poppins-font para-text">Online partial discharge, insulation, and leakage current monitoring.</li>
                <li  className=" poppins-font para-text">Power quality and harmonic measurements from meters and analyzers.</li>
                <li  className=" poppins-font para-text">Breaker operation counters, relay event logs, and trip histories.</li>
               </ul>
               
                <p className="mb-3 poppins-font ">Where continuous monitoring is not feasible, periodic inspections
                   (e.g., thermography rounds or testing campaigns) can still feed 
                   the predictive models as structured data.</p>


               <p className="mb-3 poppins-font ">For electrical safety, that can mean predicting:</p>
               <ul className="list-disc p-5">
                <li  className=" poppins-font para-text">COverheating connections or overloaded feeders before insulation is damaged.</li>
                <li  className=" poppins-font para-text">Protection devices that are likely to mis-operate under fault condition</li>
                <li  className=" poppins-font para-text">Equipment approaching thermal, mechanical, or dielectric limits.</li>
                <li  className=" poppins-font para-text">Workflows that turn those insights into timely, prioritized actions.</li>
               </ul>

                 <h2 className="mb-2 text-[#2575b6] montserrat-font text-[24px] font-semibold">2. Smart Sensing and Data Collection</h2>
              <p  className=" poppins-font ">The foundation is data. Depending on the site, this can include:</p>
               <ul className="list-disc p-5">
                <li  className=" poppins-font para-text">Thermal imaging and thermography data from panels and busbars.</li>
                <li  className=" poppins-font para-text">Online partial discharge, insulation, and leakage current monitoring.</li>
                <li  className=" poppins-font para-text">Power quality and harmonic measurements from meters and analyzers.</li>
                <li  className=" poppins-font para-text">Breaker operation counters, relay event logs, and trip histories.</li>
               </ul>
               
                <p className="mb-3 poppins-font">Where continuous monitoring is not feasible, periodic inspections
                   (e.g., thermography rounds or testing campaigns) can still feed 
                   the predictive models as structured data.</p>


               <p className="poppins-font">For electrical safety, that can mean predicting:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">COverheating connections or overloaded feeders before insulation is damaged.</li>
                <li className=" poppins-font para-text">Protection devices that are likely to mis-operate under fault condition</li>
                <li className=" poppins-font para-text">Equipment approaching thermal, mechanical, or dielectric limits.</li>
                <li className=" poppins-font para-text">Workflows that turn those insights into timely, prioritized actions.</li>
               </ul>


         <h2 className="mb-2 text-[#2575b6] montserrat-font text-[24px] font-semibold">3. Smart Sensing and Data Collection</h2>
              <p  className=" poppins-font ">The foundation is data. Depending on the site, this can include:</p>
               <ul className="list-disc p-5">
                <li  className=" poppins-font para-text">Thermal imaging and thermography data from panels and busbars.</li>
                <li  className=" poppins-font para-text">Online partial discharge, insulation, and leakage current monitoring.</li>
                <li  className=" poppins-font para-text">Power quality and harmonic measurements from meters and analyzers.</li>
                <li  className=" poppins-font para-text">Breaker operation counters, relay event logs, and trip histories.</li>
               </ul>
               
                <p className="mb-3 poppins-font">Where continuous monitoring is not feasible, periodic inspections
                   (e.g., thermography rounds or testing campaigns) can still feed 
                   the predictive models as structured data.</p>


               <p className="poppins-font">For electrical safety, that can mean predicting:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">COverheating connections or overloaded feeders before insulation is damaged.</li>
                <li className=" poppins-font para-text">Protection devices that are likely to mis-operate under fault condition</li>
                <li className=" poppins-font para-text">Equipment approaching thermal, mechanical, or dielectric limits.</li>
                <li className=" poppins-font para-text">Workflows that turn those insights into timely, prioritized actions.</li>
               </ul>


             <h2 className="mb-2 text-[#2575b6] montserrat-font text-[24px] font-semibold">4. Smart Sensing and Data Collection</h2>
              <p  className=" poppins-font ">The foundation is data. Depending on the site, this can include:</p>
               <ul className="list-disc p-5">
                <li  className=" poppins-font para-text">Thermal imaging and thermography data from panels and busbars.</li>
                <li  className=" poppins-font para-text">Online partial discharge, insulation, and leakage current monitoring.</li>
                <li  className=" poppins-font para-text">Power quality and harmonic measurements from meters and analyzers.</li>
                <li  className=" poppins-font para-text">Breaker operation counters, relay event logs, and trip histories.</li>
               </ul>
               
                <p className="mb-3 poppins-font">Where continuous monitoring is not feasible, periodic inspections
                   (e.g., thermography rounds or testing campaigns) can still feed 
                   the predictive models as structured data.</p>


               <p className=" poppins-font ">For electrical safety, that can mean predicting:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">COverheating connections or overloaded feeders before insulation is damaged.</li>
                <li className=" poppins-font para-text">Protection devices that are likely to mis-operate under fault condition</li>
                <li className=" poppins-font para-text">Equipment approaching thermal, mechanical, or dielectric limits.</li>
                <li className=" poppins-font para-text">Workflows that turn those insights into timely, prioritized actions.</li>
               </ul>


        
            
                </div>

               <div className="glass-panel rounded-2xl  ">
                 <div className="h-[350px] rounded-t-2xl  bg-amber-200 w-full"
                  style={{
                          backgroundImage: `url(${carlabz.src})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}>
                                        
                 </div>
                 <p className="p-4 poppins-font italic ">Real-time data from panels, relays, and sensors feeds AI models that highlight emerging risks.</p>
              </div>

               <div className="glass-panel rounded-2xl p-10  ">
              <h2  className="mb-5 text-[30px] font-semibold montserrat-font">Real-World Use Cases in Electrical Safety</h2>
              <h3 className="text-[24px] montserrat-font mb-2 font-semibold">Hot Spots in LV and MV Panels</h3>
              <p className=" poppins-font ">Thermal sensors and periodic thermography images can be analyzed by AI models to:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">Identify subtle temperature rises at connections long before they become visible hot spots.</li>
                <li className=" poppins-font para-text">Correlate temperature increases with load profiles and ambient conditions.</li>
                <li className=" poppins-font para-text">Recommend targeted tightening, re-termination, or load balancing.</li>
               </ul>
               
                <p className="mb-3 secondary-color">Result: fewer thermal failures, reduced fire risk, and more confidence
                   that panels are operating within safe limits.</p>

              <h3 className="text-[24px] montserrat-font mb-2 font-semibold">Protection and Relay Performance</h3>
              <p className=" poppins-font ">By analyzing trip histories, fault records, and simulated scenarios, AI can support:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">Early detection of relays that are slow to operate or not operating as expected.</li>
                <li className=" poppins-font para-text">Identification of feeders where protection grading is at risk.</li>
                <li className=" poppins-font para-text">Recommendations for settings review or coordination studies.</li>
               </ul>
               
                <p className="mb-3 secondary-color">Result: lower probability of nuisance trips, reduced arc-flash exposure, and stronger 
                  compliance with local and international standards.</p>


              <h3 className="text-[24px] montserrat-font mb-2 font-semibold">Asset Health for Transformers and Critical Feeders</h3>
              <p className=" poppins-font ">Thermal sensors and periodic thermography images can be analyzed by AI models to:</p>
               <ul className="list-disc p-5">
                <li className=" poppins-font para-text">Identify subtle temperature rises at connections long before they become visible hot spots.</li>
                <li className=" poppins-font para-text">Correlate temperature increases with load profiles and ambient conditions.</li>
                <li className=" poppins-font para-text">Recommend targeted tightening, re-termination, or load balancing.</li>
               </ul>
               
                <p className="mb-3 secondary-color">Result: fewer thermal failures, reduced fire risk, and more confidence
                   that panels are operating within safe limits.</p>
                </div>

                <div className="glass-panel rounded-2xl p-10 ">
                  <h2 className="mb-5 text-[30px] font-semibold montserrat-font">How to Get Started — A Practical Roadmap</h2>
                  <p className=" poppins-font para-text">Many organizations assume AI-powered predictive maintenance is a "big bang" transformation.
                    In reality, the most successful programs start small and scale with proven value.</p>
                  <ul className="list-decimal p-5 space-y-4">
                      
                      <li>
                        <h4 className="font-semibold mb-2 text-lg montserrat-font">Start with a clear safety and reliability question</h4>
                        <p className="text-gray-700 poppins-font ">
                          For example: "Which LV and MV panels pose the highest thermal risk in the next 12 months?" or 
                          "Which critical feeders are most likely to trip under fault conditions?"
                        </p>
                      </li>

                        <li>
                        <h4 className="font-semibold mb-2 text-lg montserrat-font">Start with a clear safety and reliability question</h4>
                        <p className="text-gray-700 poppins-font ">
                          For example: "Which LV and MV panels pose the highest thermal risk in the next 12 months?" or 
                          "Which critical feeders are most likely to trip under fault conditions?"
                        </p>
                      </li>


                        <li>
                        <h4 className="font-semibold mb-2 text-lg montserrat-font">Start with a clear safety and reliability question</h4>
                        <p className="text-gray-700 poppins-font ">
                          For example: "Which LV and MV panels pose the highest thermal risk in the next 12 months?" or 
                          "Which critical feeders are most likely to trip under fault conditions?"
                        </p>
                      </li>


                     <li>
                        <h4 className="font-semibold mb-2 text-lg montserrat-font">Start with a clear safety and reliability question</h4>
                        <p className="text-gray-700 poppins-font ">
                          For example: "Which LV and MV panels pose the highest thermal risk in the next 12 months?" or 
                          "Which critical feeders are most likely to trip under fault conditions?"
                        </p>
                      </li>

                        <li>
                        <h4 className="font-semibold mb-2 text-lg montserrat-font">Start with a clear safety and reliability question</h4>
                        <p className="text-gray-700 poppins-font ">
                          For example: "Which LV and MV panels pose the highest thermal risk in the next 12 months?" or 
                          "Which critical feeders are most likely to trip under fault conditions?"
                        </p>
                      </li>


                      <li>
                        <h4 className="font-semibold text-lg mb-2 montserrat-font">Start with a clear safety and reliability question</h4>
                        <p className="text-gray-700 poppins-font ">
                          For example: "Which Live and Mv panels pose the highest thermal risk in the next 12 months?" or 
                          "Which critical feeders are most likely to trip under fault conditions?"
                        </p>
                      </li>


                      <li>
                        <h4 className="font-semibold text-lg mb-2 montserrat-font">Start with a clear safety and reliability question</h4>
                        <p className="text-gray-700 poppins-font ">
                          For example: "Which LV and MV panels pose the highest thermal risk in the next 12 months?" or 
                          "Which critical feeders are most likely to trip under fault conditions?"
                        </p>
                      </li>



                
                  </ul>
               
                
                </div>

                <div className="glass-panel rounded-2xl   ">
                 <div className="h-[350px] rounded-t-2xl  bg-amber-200 w-full"
                  style={{
                          backgroundImage: `url(${carlabz.src})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}>
                                        
                 </div>
                 <p className="p-4">Real-time data from panels, relays, and sensors feeds AI models that highlight emerging risks.</p>
              </div>



                <div className=" glass-panel  rounded-2xl p-10 ">
              <h1 className="mb-5 text-[30px] font-semibold montserrat-font ">Challenges, Risks, and How to Manage Them</h1>
              <p className="poppins-font">No transformation is without challenges. Common concerns include:</p>
            
                 <div className="grid  grid-cols-1 lg:grid-cols-2 gap-3 py-5">
                      <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold montserrat-font">Hidden degradation</h2>
                          <p>Many failure modes — insulation breakdown, loose terminations, 
                            thermal stress, protection mis-coordination
                             — progress quietly before any visible symptom appears.</p>
                      </div>

                          <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold montserrat-font">Hidden degradation</h2>
                          <p>Many failure modes — insulation breakdown, loose terminations, 
                            thermal stress, protection mis-coordination
                             — progress quietly before any visible symptom appears.</p>
                      </div>

                          <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold montserrat-font">Cybersecurity and data privacy</h2>
                          <p>Any connected system must follow strong security practices: 
                            encryption, least-privilege access, and clear governance.</p>
                      </div>

                          <div className="p-3 border rounded-2xl">
                          <h2 className="font-semibold montserrat-font">Over-automation</h2>
                          <p>Automated decisions without human review can be risky. Keep
                             humans in the loop for critical safety decisions and approvals.</p>
                      </div>
                  </div>  

                  <p className="poppins-font para-text">
                   By addressing these topics openly and embedding predictive maintenance into existing 
                   safety processes, organizations can move forward with confidence.
                  </p>
            
                </div>

              <div className=" glass-panel rounded-2xl p-10  ">
                  <h1 className="mb-5 text-[30px] font-semibold montserrat-font">The Road Ahead for AI and Electrical Safety</h1>
              
                  <p className="poppins-font">AI-powered predictive maintenance is not a futuristic concept; it is already reshaping how leading organizations
                    manage electrical risk. Over the next few years, we can expect:</p>
                  <ul className="list-disc p-5">
                    <li className="poppins-font para-text">Closer integration between digital twins, ETAP-style studies, and live monitoring.</li>
                    <li  className="poppins-font para-text">More affordable sensing options, even for legacy equipment.</li>
                    <li  className="poppins-font para-text">Stronger regulatory expectations around using data to demonstrate due diligence in electrical safety.</li>
                  </ul>
                
                  <p  className="poppins-font mb-3">For companies willing to take the first steps today, the payoff is significant
                    : fewer incidents, safer people, higher uptime, and better use of maintenance budgets.</p>
                    <h4  className="montserrat-font font-semibold">
                      At Carelabs, we see predictive maintenance as a natural extension of our core mission — helping organizations
                      operate electrical systems that are safe, compliant, and optimized for the future.
                    </h4>
              
                </div>

                <div className=" glass-panel rounded-2xl p-10 text-center ">
                 <h2 className="text-[36px] font-semibold montserrat-font">Want to explore AI-powered electrical safety for your sites?</h2>
                 <p className="poppins-font py-10">
                  Our team can help you assess your current systems, identify 
                  the best starting point, and build a roadmap tailored to your operations.
                 </p>
                 <div className="flex flex-col lg:flex-row items-center gap-4 justify-center poppins-font ">
                  <button className="bg-[#2575b6] py-2 px-6 rounded-lg text-white">Talk to our team</button>
                   <button  className="border border-[#2575b6] py-2 px-6 bg-white text-black rounded-lg">Explore Power System Analysis</button>
                 </div>
                </div>

              <div className="  rounded-2xl p-3 py-10  ">
                 <h1 className="mb-5 text-[24px] font-semibold">Related Articles</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                <div className=" p-5 glass-panel rounded-2xl">
                  <p className="mb-3">Thermography</p>
                   <p className="font-semibold mb-3">Advanced Thermal Imaging in Preventive Maintenance</p> 
                   <p>Read more</p>
                </div>


                 <div className="glass-panel p-5 rounded-2xl">
                  <p className="mb-3">Thermography</p>
                   <p className="font-semibold mb-3">Advanced Thermal Imaging in Preventive Maintenance</p> 
                   <p>Read more</p>
                </div>


                  <div className="glass-panel p-5 rounded-2xl">
                  <p className="mb-3">Thermography</p>
                   <p className="font-semibold mb-3">Advanced Thermal Imaging in Preventive Maintenance</p> 
                   <p>Read more</p>
                </div>

              </div>
                </div>
                







          </div>


        </div>
        </div>
      
   

   


    </div>
  );
};

export default Page;
