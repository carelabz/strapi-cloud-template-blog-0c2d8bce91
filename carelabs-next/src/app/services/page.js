"use client"

import EngineeringServices from '@/components/Services/EngineeringServices';
import FaqResourcesSection from '@/components/Services/FaqResourcesSection';
import PowerSystemAnalysisCTA from '@/components/Services/PowerSystemAnalysisCTA';
import ServicesLanding from '@/components/Services/ServicesLanding'
import React, { useEffect, useState } from 'react'
import client from "@/lib/appollo-client";
import { GET_SINGLE_SERVICE_BY_SLUG } from "@/lib/api-Collection";

const page = () => {
    // const data = [
    //         {
    //             image: "https://preview--global-grid-glimpse.lovable.app/assets/hero-power-grid-BRAXB8uH.jpg",
    //             title: "Data Collection & Model Building",
    //             description: "Gather system single-line diagrams, equipment ratings, and operational data to build an accurate digital model."
    //         },
    //         {
    //             image: "https://preview--global-grid-glimpse.lovable.app/assets/hero-power-grid-BRAXB8uH.jpg",
    //             title: "Load Flow Analysis",
    //             description: "Analyze real power, reactive power, and voltage profiles under different conditions."
    //         },
    //         {
    //             image: "https://preview--global-grid-glimpse.lovable.app/assets/hero-power-grid-BRAXB8uH.jpg",
    //             title: "Short Circuit Analysis",
    //             description: "Determine fault currents and verify equipment protection ratings."
    //         }
    //     ];

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

     const slug = "power-system-analysis"; 

     useEffect(() => {
    client
      .query({
        query: GET_SINGLE_SERVICE_BY_SLUG,
        variables: { slug },
      })
      .then((res) => {
        setService(res.data.services[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-10">Loading...</p>;
  if (!service) return <p className="p-10">Service Not Found</p>;

  return (
//     <div>
//         <section>
//             <ServicesLanding/>
//         </section>

//         <section>
//             <div className="w-full min-h-[300px] flex items-center justify-center px-4 py-10">
                
//                 <div className="w-full mt-10 lg:mt-0 sm:w-[90%] lg:w-[70%] flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">

//                 {/* Card 1 */}
//                 <div className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white flex flex-col items-start gap-3 rounded-2xl card-shadow">
//                     <p>
//                     <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }}></i>
//                     </p>
//                     <p className="text-xl font-bold">What It Covers</p>
//                     <p className="text-sm text-gray-700">
//                     Load flow, short-circuit, protection coordination, motor starting, arc-flash inputs, and power quality analysis
//                     </p>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white flex flex-col items-start gap-3 rounded-2xl card-shadow">
//                     <p>
//                     <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }}></i>
//                     </p>
//                     <p className="text-xl font-bold">What It Covers</p>
//                     <p className="text-sm text-gray-700">
//                     Load flow, short-circuit, protection coordination, motor starting, arc-flash inputs, and power quality analysis
//                     </p>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white flex flex-col items-start gap-3 rounded-2xl card-shadow">
//                     <p>
//                     <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }}></i>
//                     </p>
//                     <p className="text-xl font-bold">What It Covers</p>
//                     <p className="text-sm text-gray-700">
//                     Load flow, short-circuit, protection coordination, motor starting, arc-flash inputs, and power quality analysis
//                     </p>
//                 </div>

//                 </div>

//             </div>
//         </section>

//         <section>
//         <div className="w-full min-h-[600px] flex items-center justify-center px-4 py-10">
//             <div className="w-full sm:w-[90%] lg:w-[75%] flex flex-col lg:flex-row items-start justify-center gap-8">

//             {/* --- Card 1 --- */}
//             <div className="w-full lg:w-[45%] flex flex-col gap-5 rounded-2xl bg-white p-6 sm:p-8 card-shadow">

//                 <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-red-300">
//                 <i className="fa-solid fa-circle-exclamation fa-xl"></i>
//                 </div>

//                 <p className="text-2xl sm:text-3xl font-bold">
//                 Why Power System Analysis Matters
//                 </p>

//                 <p className="text-sm sm:text-base text-gray-700">
//                 Without proper analysis, electrical systems face hidden risks that can lead to catastrophic failures, safety incidents, and costly downtime.
//                 </p>

//                 {/* List */}
//                 <div className="flex flex-col gap-3">
//                 {[1,2,3,4].map((i) => (
//                     <div key={i} className="flex gap-2 text-sm sm:text-base">
//                     <i className="fa-solid fa-angle-right fa-lg"></i>
//                     <p>Equipment damage from undetected overloads</p>
//                     </div>
//                 ))}
//                 </div>

//             </div>

//             {/* --- Card 2 --- */}
//             <div className="w-full lg:w-[45%] flex flex-col gap-5 rounded-2xl bg-white p-6 sm:p-8 card-shadow">

//                 <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-blue-300">
//                 <i className="fa-solid fa-circle-exclamation fa-xl"></i>
//                 </div>

//                 <p className="text-2xl sm:text-3xl font-bold">
//                 What Carelabs Delivers
//                 </p>

//                 <p className="text-sm sm:text-base text-gray-700">
//                 Our comprehensive studies provide the insights and recommendations you need to operate safely, efficiently, and in full compliance.
//                 </p>

//                 {/* List */}
//                 <div className="flex flex-col gap-3">
//                 {[1,2,3,4].map((i) => (
//                     <div key={i} className="flex gap-2 text-sm sm:text-base">
//                     <i className="fa-regular fa-circle-check fa-xl"></i>
//                     <p>Equipment damage from undetected overloads</p>
//                     </div>
//                 ))}
//                 </div>

//             </div>

//             </div>
//         </div>
//         </section>


// {/* Not Responsive ....v */}
//             <section>
//                 <div className="w-full min-h-screen flex items-center justify-center flex-col">

//                     {/* Text Section */}
//                     <div className="text w-full h-auto flex flex-col items-center justify-center py-10">
//                     <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-[65%] flex items-center justify-center text-center flex-col gap-5 p-4">

//                         {/* Title */}
//                         <p className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
//                         What's Included in Our Power System Analysis
//                         </p>

//                         {/* Description */}
//                         <p className="w-[80%] px-4 sm:px-8 text-lg md:text-xl text-[#65758B]">
//                         Comprehensive electrical engineering studies covering all critical
//                         aspects of power system design, operation, and safety.
//                         </p>

//                     </div>
//                     </div>

//                     {/* Responsive Grid Section */}
//                     <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">

//                     {/* Card Component */}
//                     {[1,2,3,4,5,6].map((item, index) => (
//                         <div key={index} className="bg-white rounded-2xl navbar-shadow">
//                         <div className="w-full h-[40%] flex items-center justify-between p-4">
//                             <div className="flex items-center justify-center">
//                             <div className="w-[70px] h-[70px] gradient-bg rounded-2xl flex items-center justify-center">
//                                 <i className="fa-solid fa-circle-nodes"></i>
//                             </div>
//                             </div>

//                             <div className="pt-3">
//                             <p className="text-sm text-center font-medium rounded-2xl bg-orange-50 px-3 py-1">
//                                 Essential
//                             </p>
//                             </div>
//                         </div>

//                         <div className="flex flex-col gap-2 p-5">
//                             <p className="text-2xl font-bold">Load Flow Analysis</p>
//                             <p className="text-sm">
//                             Analyze motor inrush impacts, voltage sag scenarios, and ensure
//                             smooth startup without network disruption.
//                             </p>
//                         </div>
//                         </div>
//                     ))}

//                     </div>

//                 </div>
//             </section>


//            <section>
//                 <div className="w-full min-h-screen flex items-center justify-center flex-col">

//                     {/* TEXT SECTION */}
//                     <div className="w-full flex flex-col items-center justify-center py-10">
//                     <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-[65%] flex flex-col items-center text-center gap-5 p-4">

//                         <p className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
//                         How a Power System Study Runs with Carelabs
//                         </p>

//                         <p className="w-[90%] sm:w-[80%] text-lg md:text-xl text-[#656668]">
//                        Our proven 5-step methodology ensures accurate, comprehensive analysis from
//                         data collection through implementation support.
//                         </p>

//                     </div>
//                     </div>

//                     {/* CARDS */}
//                 <div className="w-[90%] sm:w-[80%] md:w-[70%] flex flex-col gap-10 py-6">
//                         {data.map((item, index) => (
//                             <div key={index} className="w-full flex flex-col items-center gap-4">

//                             {/* ALIGN LEFT / RIGHT on desktop only */}
//                             <div
//                                 className={`flex w-full ${
//                                 index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//                                 }`}
//                             >
//                                 <div className="w-full   lg:w-[60%] md:h-[200px] 2xl:h-[210px] navbar-shadow  bg-white flex flex-col md:flex-row rounded-2xl overflow-hidden">

//                                 {/* IMAGE — top on mobile, left on desktop */}
//                                 <div
//                                     className="timeline-cards w-full h-56 md:h-full md:w-[40%]"
//                                     style={{
//                                     backgroundImage: `url(${item.image})`,
//                                     backgroundSize: "cover",
//                                     backgroundPosition: "center",
//                                     }}
//                                 ></div>

//                                 {/* CONTENT — below image on mobile, right on desktop */}
//                                 <div className="w-full md:w-[60%] p-4 sm:p-6 flex gap-4">
//                                     <div className="min-w-[50px] max-h-[50px] rounded-xl bg-amber-200 flex items-center justify-center text-xl font-bold">
//                                     {index + 1}
//                                     </div>

//                                     <div className="flex flex-col gap-3">
//                                     <p className="flex items-center gap-2 text-lg sm:text-xl font-bold">
//                                         <i className="fa-solid fa-circle-exclamation"></i>
//                                         {item.title}
//                                     </p>

//                                     <p className="text-[14px] leading-6">{item.description}</p>
//                                     </div>
//                                 </div>

//                                 </div>
//                             </div>

//                             {/* ANGLE DOWN ICON */}
//                             {index !== data.length - 1 && (
//                                 <div className="text-blue-500 text-3xl p-3">
//                                 <i className="fa-solid fa-angles-down"></i>
//                                 </div>
//                             )}

//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </section>


//             <section>
//                 <div className="w-full min-h-screen flex flex-col items-center justify-center py-10">

//                     {/* Text Section */}
//                     <div className="w-full flex flex-col items-center justify-center py-10">
//                     <div className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-[65%] text-center flex flex-col gap-5 p-4">

//                         {/* Title */}
//                         <p className="gradient-text font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
//                         Where Power System Analysis Adds the Most Value
//                         </p>

//                         {/* Description */}
//                         <p className="w-[80%] mx-auto px-4 sm:px-8 text-lg md:text-xl text-[#65758B]">
//                         Industry-specific applications and benefits for critical electrical
//                         infrastructure across diverse sectors.
//                         </p>

//                     </div>
//                     </div>

//                     {/* Responsive Grid Section */}
//                     <div className="w-[90%] sm:w-[85%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">

//                     {[1, 2, 3, 4].map((item) => (
//                         <div key={item} className="w-full rounded-4xl p-6 gap-4 flex flex-col card-shadow">

//                         {/* Icon */}
//                         <div className="w-[50px] h-[50px] mb-3 flex items-center justify-center rounded-xl bg-blue-300">
//                             <i className="fa-solid fa-circle-exclamation fa-xl"></i>
//                         </div>

//                         {/* Title */}
//                         <p className="text-2xl font-bold">Utilities</p>

//                         {/* List Items */}
//                         <div className="flex gap-2">
//                             <i className="fa-solid fa-circle-exclamation fa-md"></i>
//                             <p>Grid code compliance and interconnection studies</p>
//                         </div>

//                         <div className="flex gap-2">
//                             <i className="fa-solid fa-circle-exclamation fa-md"></i>
//                             <p>Grid code compliance and interconnection studies</p>
//                         </div>

//                         <div className="flex gap-2">
//                             <i className="fa-solid fa-circle-exclamation fa-md"></i>
//                             <p>Grid code compliance and interconnection studies</p>
//                         </div>

//                         </div>
//                     ))}

//                     </div>

//                 </div>
//             </section>

//              <section>
//                 <div className="min-h-[80vh] w-full flex items-center justify-center">
//                     <div className="w-[95%] md:w-[85%] lg:w-[70%]  py-10 rounded-4xl navbar-shadow flex flex-col items-center">

//                     {/* TOP TITLE */}
//                     <div className="w-full flex items-center justify-center text-center mb-10 px-4">
//                         <div className="flex flex-col items-center gap-3">
//                         <p className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
//                             Proven Results Across 50+ Countries
//                         </p>
//                         <p className="text-sm sm:text-md md:text-lg w-[95%] sm:w-[80%] text-center">
//                             Quantifiable improvements in safety, reliability, and operational
//                             efficiency from our power system analysis projects.
//                         </p>
//                         </div>
//                     </div>

//                     {/* STATS GRID */}
//                     <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-3 mb-10">

//                         {[30, 55, 40, 90].map((value, idx) => (
//                         <div
//                             key={idx}
//                             className="bg-white p-6 rounded-xl flex flex-col items-center text-center justify-evenly gap-3 min-h-[180px]"
//                         >
//                             <div className="w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-yellow-300">
//                             <i className="fa-solid fa-circle-exclamation fa-xl"></i>
//                             </div>

//                             <div className="text-4xl font-bold">{value}%</div>

//                             <p className="text-sm px-2">
//                             Average reduction in nuisance tripping incidents
//                             </p>
//                         </div>
//                         ))}

//                     </div>

//                     {/* BOTTOM GRID */}
//                     <div className="w-full 2xl:w-[95%] grid grid-cols-1 justify-items-center  xl:grid-cols-3 gap-6 px-5">

//                         {[1, 2, 3].map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="services-column bg-white p-6 rounded-xl flex flex-col gap-4 w-[80%] xl:w-full"
//                         >
//                             <div className="flex items-center gap-4">
//                             <i className="fa-solid fa-circle-exclamation fa-xl"></i>
//                             <p className="text-xl md:text-2xl font-bold">
//                                 Faster Project Delivery
//                             </p>
//                             </div>

//                             <p className="text-sm leading-6 pl-10">
//                             Streamlined workflows reduce study completion time by 30% vs
//                             industry average.
//                             </p>
//                         </div>
//                         ))}

//                     </div>

//                     </div>
//                 </div>
//             </section>

//             <section>
//                 <PowerSystemAnalysisCTA/>
//             </section>

//             <section>
//                 <EngineeringServices />
//             </section>


//            <section>
//              <FaqResourcesSection />
//            </section>
           
      
      
//     </div>

<div>

      {/* HERO SECTION */}
      <section>
        <ServicesLanding service={service} />
      </section>

      {/* ======================================================
         SECTION 1 → What It Covers (service_features)
      ====================================================== */}
      <section>
        <div className="w-full min-h-[300px] flex items-center justify-center px-4 py-10">
          <div className="w-full mt-10 lg:mt-0 sm:w-[90%] lg:w-[70%] 
               flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">

            {service?.service_features?.map((feat, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white rounded-2xl card-shadow flex flex-col gap-3"
              >
                <i className="fa-regular fa-circle-check fa-xl" style={{ color: "#1764e8" }}></i>

                <p className="text-xl font-bold">{feat.title}</p>

                <p className="text-sm text-gray-700">{feat.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ======================================================
         SECTION 2 → Why Matters + What Carelabs Delivers
      ====================================================== */}
      <section>
        <div className="w-full min-h-[600px] flex items-center justify-center px-4 py-10">
          <div className="w-full sm:w-[90%] lg:w-[75%] flex flex-col lg:flex-row gap-8">

            {/* LEFT CARD → Why Matters */}
            <div className="w-full lg:w-[45%] p-6 sm:p-8 bg-white rounded-2xl card-shadow flex flex-col gap-5">

              <div className="w-[50px] h-[50px] bg-red-300 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
              </div>

              <p className="text-2xl sm:text-3xl font-bold">
                {service?.Why_Matters?.title}
              </p>

              <p className="text-sm text-gray-700">{service?.Why_Matters?.subtitle}</p>

              <div className="flex flex-col gap-3">
                {[service?.Why_Matters?.ans1,
                  service?.Why_Matters?.ans2,
                  service?.Why_Matters?.ans3,
                  service?.Why_Matters?.ans4
                ].map((item, idx) =>
                  item ? (
                    <div key={idx} className="flex gap-2 text-sm">
                      <i className="fa-solid fa-angle-right"></i>
                      <p>{item}</p>
                    </div>
                  ) : null
                )}
              </div>

            </div>

            {/* RIGHT CARD → WhatsIncluded */}
            <div className="w-full lg:w-[45%] p-6 sm:p-8 bg-white rounded-2xl card-shadow flex flex-col gap-5">

              <div className="w-[50px] h-[50px] bg-blue-300 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-circle-exclamation fa-xl"></i>
              </div>

              <p className="text-2xl sm:text-3xl font-bold">{service?.WhatsIncludedtitle}</p>
              <p className="text-sm text-gray-700">{service?.WhatsIncludedsubtitle}</p>

              <div className="flex flex-col gap-3">
                {service?.whats_include_features?.map((f, idx) => (
                  <div key={idx} className="flex gap-2 text-sm">
                    <i className="fa-regular fa-circle-check"></i>
                    <p>{f.label}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
         SECTION 3 → What's Included Grid (whats_include_features)
      ====================================================== */}
      <section>
        <div className="w-full flex flex-col items-center py-10">

          <div className="text-center w-11/12 md:w-1/2 mb-10">
            <p className="gradient-text font-bold text-4xl">{service?.WhatsIncludedtitle}</p>
            <p className="text-lg text-gray-600">{service?.WhatsIncludedsubtitle}</p>
          </div>

          <div className="w-[90%] md:w-[80%] lg:w-[70%] 
               grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {service?.whats_include_features?.map((f, idx) => (
              <div key={idx} className="bg-white rounded-2xl navbar-shadow p-5 flex flex-col gap-3">
                <p className="text-2xl font-bold">{f.label}</p>
                <p className="text-sm text-gray-700">{f.description}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
         SECTION 4 → How Study Runs (methodology)
      ====================================================== */}
      <section>
        <div className="w-full flex flex-col items-center py-10">

          <div className="text-center w-11/12 md:w-1/2">
            <p className="gradient-text font-bold text-4xl">{service?.methodsTitle}</p>
            <p className="text-lg text-gray-700">{service?.methodsSubtitle}</p>
          </div>

          <div className="w-[90%] md:w-[70%] flex flex-col gap-10 py-6">

            {service?.methodology?.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4">

                <div className={`flex w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="w-full lg:w-[60%] bg-white rounded-2xl navbar-shadow 
                      flex flex-col md:flex-row overflow-hidden">

                    <div className="timeline-cards w-full md:w-[40%] h-56 md:h-full"
                      style={{
                        backgroundImage: `url(${step?.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}>
                    </div>

                    <div className="w-full md:w-[60%] p-6 flex gap-4">
                      <div className="min-w-[50px] max-h-[50px] bg-amber-200 rounded-xl flex items-center justify-center font-bold">
                        {step.Order}
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="font-bold text-lg">{step.OrderTitleText}</p>
                        <p className="text-sm">{step.OrderSubtitleText}</p>
                      </div>
                    </div>

                  </div>
                </div>

                {index !== service.methodology.length - 1 && (
                  <div className="text-blue-500 text-3xl">
                    <i className="fa-solid fa-angles-down"></i>
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
         SECTION 5 → Sector Benefits (sectorBenefits)
      ====================================================== */}
      <section>
        <div className="w-full flex flex-col items-center py-10">

          <div className="text-center w-11/12 md:w-1/2 mb-10">
            <p className="gradient-text font-bold text-4xl">{service?.sectorBenefitsTitle}</p>
            <p className="text-lg text-gray-600">{service?.sectorBenefitsSubtitle}</p>
          </div>

          <div className="w-[90%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">

            {service?.sectorBenefits?.map((sec, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl card-shadow flex flex-col gap-4">

                <div className="w-[50px] h-[50px] rounded-xl bg-blue-300 flex items-center justify-center">
                  <i className={sec.icon}></i>
                </div>

                <p className="text-xl font-bold">{sec.label}</p>

                {[sec.list1, sec.list2, sec.list3].map((l, i) => (
                  <div key={i} className="flex gap-2">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p>{l}</p>
                  </div>
                ))}

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
         SECTION 6 → Results (resultsStat + resultName)
      ====================================================== */}
      <section>
        <div className="min-h-[80vh] w-full flex items-center justify-center">
          <div className="w-[95%] md:w-[85%] lg:w-[70%] py-10 rounded-4xl navbar-shadow flex flex-col items-center">

            <div className="text-center mb-10">
              <p className="gradient-text font-bold text-4xl">{service?.resultsTitle}</p>
              <p className="text-lg text-gray-700">{service?.resultsSubtitle}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

              {service?.resultsStat?.map((r, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl text-center flex flex-col gap-3">
                  <div className="w-[50px] h-[50px] bg-yellow-300 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-circle-exclamation"></i>
                  </div>
                  <p className="text-4xl font-bold">{r.percentage}%</p>
                  <p className="text-sm">{r.description}</p>
                </div>
              ))}

            </div>

            {/* Result Name Bottom Boxes */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-5 w-full">

              {service?.resultName?.map((res, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl flex flex-col gap-4">

                  <div className="flex items-center gap-4">
                    <i className={res.icon}></i>
                    <p className="text-xl font-bold">{res.label}</p>
                  </div>

                  <p className="text-sm pl-10">{res.description}</p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CTA + ENGINEERING SERVICES + FAQ */}
      <section>
        <PowerSystemAnalysisCTA />
      </section>

      <section>
        <EngineeringServices />
      </section>

      <section>
        <FaqResourcesSection />
      </section>

    </div>


  )
}

export default page
