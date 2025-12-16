"use client"

import React, { useEffect, useState } from 'react'
import { Globe, Zap } from 'lucide-react';
import { clientIcons } from "@/lib/clientIcons";



const GlobalReach = ({data}) => {

 const [impactData, setImpactData] = useState(null);

  useEffect(() => {
    setImpactData(data);
  }, []);



  
  if (!impactData) return null;

 
  return (
    <div >
         
    <div className="text w-full h-auto flex flex-col items-center justify-center py-10">
    
    <div 
     data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    //className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%]  2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4"
     
    className="
    w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%]
    bg-white flex items-center justify-center text-center flex-col
    gap-5 p-4
    mt-30
  "
>
      
      {/* Heading */}
        {/* Global Reach */}
      <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
        <div className="text-[#157de5]">
              <Globe size={18} />
          </div>
        {impactData.badge}
      </h1>

      
      
      {/* Title */}
      {/* Worldwide Impact */}
      <p 
      className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] montserrat-font"
      dangerouslySetInnerHTML={{ __html: impactData.title || '' }}
      />
      
      {/* Description */}
      <p className="px-4 sm:px-8 text-lg  md:text-xl para-text poppins-font ">
        {/* Operating across continents with local expertise and global standards. */}
        {impactData.description}
      </p>

    </div>

  </div>




        <div className="cover w-full flex  item-center justify-center p-5 2xl:mb-10">
            <div 
            data-aos="fade-up"
             data-aos-anchor-placement="top-center"
            className="w-[90%] flex flex-col items-center justify-center rounded-[32px] md:w-[80%] lg:w-[85%] 2xl:w-[65%] p-4 border border-[#0F172A]/10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] bg-white ">
     <div className="card-block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center sm:p-5">

              



{impactData.projectStat?.map((item, index) => {
  
  // Define color set EXACTly like screenshot
  const colors = [
    "#157DE5", // Blue
    "#157DE5", // Blue (second card)
    "#00A86B", // Green
    "#FF7038", // Orange
  ];

  const numberColor = colors[index] || "#157DE5";

  return (
    <div
      key={index}
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-delay={index * 100}
      className="w-full flex justify-center"
    >
      <div
        className="
          cards
          w-[90%] sm:w-[95%]
          flex flex-col items-center justify-center 
          gap-2 p-5 rounded-[20px]

          border border-[#0F172A]/10
          shadow-[0_24px_60px_rgba(15,23,42,0.08)]

          transition-all duration-300 transform-gpu
          hover:scale-[1.03] hover:-translate-y-[4px]
          hover:shadow-[0_30px_70px_rgba(15,23,42,0.10)]
        "
      >

        {/* NUMBER */}
        <p
          className="text-[36px] font-bold montserrat-font"
          style={{ color: numberColor }}
          dangerouslySetInnerHTML={{ __html: item.count }}
        />

        {/* TITLE */}
        <p className="text-[14px] poppins-font text-[#6C7A89]">
          {item.title}
        </p>

        {/* LINE */}
        <hr className="w-[90%] border-[#6C7A89]/30" />

        {/* COUNTRY COUNT — COLOR MATCH NUMBER */}
        <p
          className="text-[14px] poppins-font font-semibold"
          style={{ color: numberColor }}
        >
          <span dangerouslySetInnerHTML={{ __html: item.countryCount }} />
        </p>

        {/* COUNTRY NAME ( stays dark gray ) */}
        <p className="text-[13px] poppins-font text-[#6C7A89]">
          {item.countryName}
        </p>

      </div>
    </div>
  );
})}        
  </div>


     <div className="card-text grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-[95%] gap-5 sm:gap-4 justify-items-center p-5">

      
{impactData.successStat?.map((item, index) => {
  const IconComponent = clientIcons[item.icon];

  const colors = [
    { hex: "#307FE2" },  // Mariner
    { hex: "#00A86B" },  // Green Haze
    { hex: "#4169E1" },  // Royal Blue
    { hex: "#F25555" },  // Flamingo
  ];

  const c = colors[index] || colors[0];

  // underline override: first icon = black underline
  const underlineColor = index === 0 ? "#000000" : c.hex;

  return (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-4 py-6 group cursor-pointer"
    >

      {/* ROUND COLOR SHAPE POP-UP WITH SHADOW */}
      <div
        className={`icon-bg-${index} flex items-center justify-center rounded-full transition-all duration-300 ease-out`}
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: `${c.hex}20`,
          color: c.hex,
        }}
      >
        {IconComponent ? (
          <IconComponent size={26} />
        ) : (
          <clientIcons.HelpCircle size={26} />
        )}
      </div>

      <style>{`
        .group:hover .icon-bg-${index} {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0px 10px 22px ${c.hex}50;
        }
      `}</style>

      {/* TITLE */}
      <p className="text-sm poppins-font text-[#6C7A89]">
        {item.title}
      </p>

      {/* VALUE + UNDERLINE */}
      <div className="relative inline-block">
        <p
          className="text-[22px] sm:text-[24px] font-bold poppins-font text-center"
          style={{ color: c.hex }}
          dangerouslySetInnerHTML={{ __html: item.value }}
        ></p>

        <span
          className="absolute left-0 bottom-[-2px] h-[2px] block"
          style={{
            backgroundColor: underlineColor, // 🔥 FIXED HERE
            width: 0,
          }}
        ></span>

        <style>{`
          @keyframes underlineGrow {
            from { width: 0; }
            to { width: 100%; }
          }
          .group:hover span {
            animation: underlineGrow 0.4s ease-out forwards;
          }
        `}</style>
      </div>

    </div>
  );
})}







       
            </div>



            </div>
       


        </div>
      
    </div>
  )
}

export default GlobalReach
