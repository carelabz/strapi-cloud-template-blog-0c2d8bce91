"use client";


import GlobalReach from "@/components/GlobalReach";
import HomeBlog from "@/components/HomeBlog";
import HomeCounter from "@/components/Homecounter";
import HomeServices from "@/components/HomeServices";
import HomeTestimonials from "@/components/HomeTestimonials";
import RegionClients from "@/components/RegionClients";
import RegionCompliance from "@/components/RegionCompliance";
// import RegionClients from "@/components/RegionClients";
import RegionIndustries from "@/components/RegionIndustries";
import { GET_HOME_SECTION_12, GET_REGION_CLIENTS_BY_LOCALE, GET_REGION_INDUSTRIES } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";
import Aos from "aos";
import { ArrowRight, Play, Zap } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  
const params = useParams();
  

  const localeMap = {
  ca: "en-CA",
  ar: "ar",
  en: "en",
  fr: "fr-FR",   // example additional
  es: "es-ES",   // example additional
};
  var locale = "";
  locale = localeMap[params.locale] || "en";
 

  
  const [homeData,setHomeData]=useState();
  const [regionIndustries,setRegionIndustries]=useState(null);
  const [regionClients,setRegionClients]=useState(null);


  useEffect(() => {
    Aos.init({ 
      once: true,
    });
  }, []);

  const statsData = [
    { number: "50", label: "Countries Served" },
    { number: "1200", label: "Projects Delivered" },
    { number: "350", label: "Global Clients" },
  ];

  const fetchedData = async()=> {
    try{
      const { data } = await client.query({
        query: GET_HOME_SECTION_12,
        variables: { locale },
      });
      const regionIndustriesData=await client.query({
        query: GET_REGION_INDUSTRIES,
        variables: { locale },
      });
       const regionClientData=await client.query({
        query: GET_REGION_CLIENTS_BY_LOCALE,
        variables: { locale },
      });

      setRegionClients(regionClientData.data.homeOurClients[0]);
      setRegionIndustries(regionIndustriesData.data.homeIndustries[0]);
      setHomeData(data?.homes?.[0]);
    }catch(err){
      console.log("Error fetching home banner data:", err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchedData();
    };
    fetchData();
  }, []);
  
  if (!homeData) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-4">
        <div className="w-[80%]  h-[90%] flex items-center justify-center bg-gray-200 rounded-2xl p-4 animate-pulse flex-col gap-4">
          <div className="w-full h-full bg-gray-300 rounded-lg"></div>
          <div className="w-3/4 h-8 bg-gray-300 rounded-lg"></div>
          <div className="w-full flex flex-col sm:flex-row items-center  justify-between gap-4 mt-4">
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
          <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
         </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="home-cover relative w-full   top-[80px] flex flex-col items-center justify-center">
        {/* Section 1 */}
        <div 
          data-aos="fade-up"
          data-aos-duration="2000"
          className="  w-11/12 flex flex-col items-center justify-center blog-shadow border border-[#0f172914] glass-panel1  p-4 
          md:w-4/5 md:h-[85%] md:mt-2  md:p-6
          lg:w-[85%] lg:mt-5
          xl:w-[80%] xl:mt-16
          2xl:mt-0 2xl:w-[65%] 2xl:gap  " >

            <div className="w-full flex flex-col items-center justify-center">
                {/* Heading Button */}
                <div className="flex justify-center items-center ">
                  <button className="px-4 flex items-center justify-center gap-2 py-2 border border-[#157de54d] rounded-full ">
                    <div className="text-[#157de5]">
                        <Zap size={18} />
                    </div>

                    <div>
                      <p className="curved-Text text-[14px] montserrat-font">{homeData.heading}</p>
                    </div>
                    
                    
                  </button>
                </div>

                {/* Title */}
               <div className="w-full flex flex-col items-center justify-center text-center xl:text-[72px] title-Text mt-5 ">

               <p className="w-full md:w-[90%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-1">
               {homeData.title1}
               </p>

               <p className="w-full md:w-[90%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-1 gradient-text">
               {homeData.title2} <span className="text-[#157de5]">{homeData.title3}</span>
               </p>

               </div>


            </div>

            {/* Description */}
            <div className="w-full flex items-center justify-center text-center p-5">
              <div className="w-full md:w-11/12 text-[20px]   md:text-xl py-5 ">
                <p className="para-text poppins-font">{homeData.description}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full flex items-center justify-center py-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full md:w-3/5">
                <button className="secondary-bg flex items-center justify-center gap-2  text-white py-3 px-6 rounded-full text-[14px] poppins-font">
                  <a href={homeData.btn1_link}>{homeData.btn1_text}</a>
                  <ArrowRight size={14} />
                </button>
                <button className=" flex items-center justify-center gap-2 border hover:bg-[#f15c30] hover:text-white border-[#0f172914] bg-white py-3 px-6 rounded-full text-[14px] poppins-font">
                  <Play  size={14}/>
                  <a href={homeData.btn2_link}>{homeData.btn2_text}</a>
                </button>
              </div>
            </div>


              <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="w-full flex flex-col sm:flex-row items-end justify-evenly p-10 ">
                  {homeData.stats.map((item, index) => {
                    // Define a repeating color pattern
                    const colors = ["#157DE5", "#FF7038"];
                    const color = colors[index % colors.length]; // cycles through colors

                    return (
                      <div
                        key={index}
                        className="w-full sm:w-[45%] md:w-[30%] flex flex-col p-8 xl:p-10 rounded-[24px] text-center  card-shadow"
                      >
                        <HomeCounter end={item.number} duration={2} color={color} />
                        <p className="text-[14px] py-1 text-[#65758B] poppins-font">{item.label}</p>
                      </div>
                    );
                  })}
              </div>


        </div>
      </div>


      {/* section-2 */}
      <div className="w-full h-[100px]  2xl:h-[250px]"></div>

      <section>   
        <HomeServices/>
      </section>

      <section>
        <RegionIndustries data={regionIndustries}/>
      </section>

      <section>
        <RegionClients data={regionClients}/>
      </section>

       <section>
        <RegionCompliance/>
      </section>

      {/* Section-4 */}
      <section>
        <HomeTestimonials/>
      </section>

      {/* Section-5 */}
      <section>
        <div className="w-full h-[100px]  2xl:h-[150px]"></div>
        <HomeBlog/>
      </section>

    </>
  );
}
