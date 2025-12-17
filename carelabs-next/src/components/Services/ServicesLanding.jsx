"use client";
import React, { useState, useEffect } from "react";
import { clientIcons } from "@/lib/clientIcons";
import { ArrowRight, Download, PlayCircle } from "lucide-react";
import Image from "next/image";


const ServicesLanding = ({service}) => {

  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);


  if (!service) return null;

  const {
    badge,
    badgeicon,
    mainheading1,
    mainheading2,
    maindesc,
    mainbutton1,
    mainbuttonlink1,
    mainbutton2,
    mainbuttonlink2,
    mainbutton3,
    mainbuttonlink3,
    mainimage,
    service_stats,
  } = service;

  const randomPdfs = [
  "/pdfs/sample1.pdf",
];


const downloadRandomPdf = () => {
  const randomFile = randomPdfs[Math.floor(Math.random() * randomPdfs.length)];

  const link = document.createElement("a");
  link.href = randomFile;
  link.download = randomFile.split("/").pop(); // auto filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const randomVideos = [
  "dQw4w9WgXcQ",
  "kXYiU_JCYtU",
  "RgKAFK5djSk",
  "3JZ_D3ELwOQ",
  "9bZkp7q19f0",
];

const openRandomVideo = () => {
  const randomId = randomVideos[Math.floor(Math.random() * randomVideos.length)];
  setVideoId(randomId);
  setShowVideo(true);
};





  return (
    <div 
    className="w-full min-h-[80vh] pt-[80px] flex justify-center px-4 bg-[#f9fbfe]">
      <div 
   
      className="w-full xl:w-[90%] xl:px-6 2xl:w-[70%] flex flex-col lg:flex-row mt-12 gap-10 ">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5 py-2 ">

       
    <div className="w-fit">
     <div className="px-4 py-2 text-xs sm:text-sm rounded-full 
                   bg-white flex items-center gap-2 border border-[#c3e3fa] shadow-[0_6px_10px_rgba(0,0,0,0.15)]">

    {/* Dynamic Icon */}
    {badgeicon && (() => {
      const BadgeIcon = clientIcons[badgeicon] || clientIcons.Circle;
      return <BadgeIcon className="w-4 h-4 text-[#ff7038]" />;
    })()}

    {/* Text */}
    <span>{badge}</span>

  </div>
</div>


          {/* Heading */}
          <div className="w-full flex flex-col gap-3">
           <div className=" text-5xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold montserrat-font ">


            <h1 
             className="text-6xl font-bold"
             dangerouslySetInnerHTML={{ __html: mainheading1 || '' }}
             />

            <h1 className="text-black text-6xl font-bold "> 
              {/* for Safe, Reliable Networks */}
              {/* {mainheading2} */}
              {mainheading2}
              <br />
              
              </h1>
           </div>

            <p className="w-[85%] mt-4 text-sm sm:text-base lg:text-lg leading-7 text-[#65758b] ">
               {maindesc}
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-4">

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="px-6 sm:px-8 py-2 text-white rounded-lg text-sm bg-blue-600">
                Request a Study
              </button> */}

              {/* <a
                href={mainbuttonlink1}
                className="
                group relative px-6 sm:px-8 py-2 rounded-lg text-sm 
                bg-blue-600 text-white overflow-hidden
                "
              >
                <span
                className="
                absolute inset-0 bg-blue-400/30 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
                "
                ></span>
                <span className="relative z-10">{mainbutton1}</span>
              </a> */}

              <a
      //href={mainbuttonlink1}
      onClick={(e) => {
      e.preventDefault();
      window.openContactModal();
      }}
      className="
        group relative px-6 sm:px-8 py-2 rounded-lg text-sm 
        bg-[#157de5] text-white overflow-hidden 
        flex items-center gap-2 cursor-pointer font-semibold
      "
    >
      
      <span
        className="
          absolute inset-0 bg-blue-400/30 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
        "
      ></span>
     <button className="group flex items-center gap-3">
      <span className="relative z-10">{mainbutton1}</span>
      <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
     </button>

 
    </a>

         {/* section2 */}
              {/* <button className="px-6 sm:px-8 py-2 text-sm border-2 rounded-lg border-blue-500 bg-white text-gray-600">
                Download Sample Report
              </button> */}
               
               {/* <a
                href={mainbuttonlink2}
                className="
                group relative px-6 sm:px-8 py-2 text-sm 
                border-2 rounded-lg border-blue-500 
                bg-white text-gray-600
                overflow-hidden
                "
              >
                <span
                className="
                absolute inset-0 bg-blue-200/40 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300
                "
                ></span>
                <span className="relative z-10">{mainbutton2}</span>
              </a> */}

              {/* <a
      href={mainbuttonlink2}
      className="
        group relative px-6 sm:px-8 py-2 text-sm 
        border-2 rounded-lg border-blue-500 
        bg-white text-gray-600
        overflow-hidden flex items-center gap-2
      "
    >
      <span
        className="
          absolute inset-0 bg-blue-200/40 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
        "
      ></span>

      
      <Download className="relative z-10 w-4 h-4" />

      
      <span className="relative z-10">{mainbutton2}</span>
    </a> */}

    <button
  onClick={downloadRandomPdf}
  className="
    group relative px-6 sm:px-8 py-2 text-sm 
    border-2 rounded-lg 
    border-[#157DE54D]              /* 30% opacity border */
    hover:border-[#157DE580]        /* hover 50% opacity */
    bg-white text-gray-600
    overflow-hidden flex items-center gap-2 cursor-pointer
    transition-colors duration-300
  "
>
  <span
    className="
      absolute inset-0 bg-blue-200/40 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-300
    "
  ></span>

  {/* ICON */}
  <Download className="relative z-10 w-4 h-4 group-hover:text-white transition-colors duration-300 text-black" />

  {/* TEXT */}
  <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 ">
    {mainbutton2}
  </span>
</button>



            </div>

            {/* section3 */}

            {/* <button className="px-6 sm:px-8 py-2 text-sm rounded-lg border-2 border-orange-400 text-gray-600
              lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
              Download Sample Report
            </button> */}

            {/* <a
              href={mainbuttonlink3}
              className="
              group relative px-6 sm:px-8 py-2 text-sm rounded-lg 
              border-2 border-orange-400 text-gray-600
              lg:w-[60%] xl:w-[50%] 2xl:w-[40%]
              overflow-hidden
              "  
            >
              <span
              className="
              absolute inset-0 bg-blue-200/40 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
              "
              ></span>
              <span className="relative z-10">{mainbutton3}</span>
            </a> */}

            {/* <a
    href={mainbuttonlink3}
    className="
      group relative px-6 sm:px-8 py-2 text-sm rounded-lg 
      border-2 border-orange-400 text-gray-600
      lg:w-[60%] xl:w-[50%] 2xl:w-[40%]
      overflow-hidden flex items-center gap-2
    "
  >
    <span
      className="
        absolute inset-0 bg-blue-200/40 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300
      "
    ></span>

    
    <PlayCircle className="relative z-10 w-5 h-5 text-orange-500" />

    <span className="relative z-10">{mainbutton3}</span>
  </a> */}

  <button
  onClick={openRandomVideo}
  className="
    group relative px-6 sm:px-8 py-2 text-sm rounded-lg 
    border-2 border-[#FF70384D]       /* 30% opacity */
    text-gray-600 bg-white            /* white background */
    lg:w-[50%] xl:w-[40%] 2xl:w-[40%]
    overflow-hidden flex items-center gap-2 cursor-pointer
    hover:border-[#FF703880]          /* 50% opacity on hover */
    transition-colors duration-300
  "
>
  <span
    className="
      absolute inset-0 bg-orange-200/40 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-300
    "
  ></span>

  <PlayCircle className="relative z-10 w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
  <span className="relative z-10 group-hover:text-white text-black transition-colors duration-300">{mainbutton3}</span>
</button>



          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        {/* <div className="w-full lg:w-[50%] flex justify-center ">
          <div
            className="
              w-full 
              h-[260px] 
              sm:h-[340px] 
              md:h-[420px] 
              lg:h-[480px] 
              rounded-4xl 
              relative 
              overflow-visible 
              shadow-lg
              2xl:mt-6
            "
            style={{
              backgroundImage: `url("${mainimage?.url}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent rounded-4xl"></div>

            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 
              w-[90%] sm:w-[80%] lg:w-[90%]
              flex items-center justify-between gap-3 p-3 z-20">

              {service_stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white w-1/3 py-4 rounded-lg text-start ps-3 shadow"
                >
                  <p className="text-lg text-blue-500 font-bold">{stat.number}</p> 
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
              
            </div>
          </div>
        </div> */}

{/* <div className="w-full lg:w-[50%] flex justify-center">
  <div
    className="
      group relative w-full 
      h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]
      pb-16 sm:pb-20
    "
  >

    
    <div className="relative w-full h-full rounded-4xl shadow-lg overflow-hidden">
      
      <img
        src={mainimage?.url}
        alt="Service"
        className="
          w-full h-full object-cover
          transition-transform duration-[1100ms]
          ease-[cubic-bezier(.13,.62,.31,1)]
          group-hover:scale-[1.08]
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
    </div>

    <div
      className="
        absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2
        w-[90%] sm:w-[85%] lg:w-[90%]
        flex items-center justify-between gap-3 sm:gap-4 z-20
      "
    >
      {service_stats?.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white w-1/3 py-3 sm:py-4 px-2 sm:px-3 rounded-lg sm:rounded-xl text-start shadow-lg"
        >
          <p className="text-base sm:text-lg lg:text-xl text-blue-500 font-bold">{stat.number}</p>
          <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>

  </div>
</div> */}

<div className="w-full lg:w-[50%] flex justify-center">
  <div
    className="
      group relative w-full 
      h-[360px] sm:h-[440px] md:h-[600px] lg:h-[580px]
      pb-16 sm:pb-20
    "
  >

    {/* Image Container */}
    {/* <div className="relative w-full h-full rounded-4xl shadow-lg overflow-hidden">
      <img
        src={mainimage?.url}
        alt="Service"
        className="
          w-full h-full object-cover
          transition-transform duration-[1100ms]
          ease-[cubic-bezier(.13,.62,.31,1)]
          group-hover:scale-[1.08]
        "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
    </div> */}

    <div className="
  relative w-full 
  h-[320px] sm:h-[380px] md:h-[530px] 
  rounded-4xl shadow-lg overflow-hidden 
  mt-[20px] sm:mt-[50px] md:mt-[74.62px]
">

  <Image
    src={mainimage?.url}
    alt="Service"
    className="w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.13,.62,.31,1)] group-hover:scale-[1.08]"
    width={800} 
    height={500} 
    quality={70}
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent"></div>
</div>

    {/* Floating Stats */}
    <div
      className="
        absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
        w-[90%] sm:w-[85%] lg:w-[90%]
        flex items-center justify-between gap-4 sm:gap-5 z-20
      "
    >
      {service_stats?.map((stat, idx) => (
        <div
          key={idx}
          className="
            bg-white w-1/3 py-3 sm:py-4 px-2 sm:px-3 rounded-lg sm:rounded-xl text-start
            shadow-[0_8px_20px_rgba(0,0,0,0.15)]
            transform transition-all duration-500
            hover:scale-[1.06] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]
            overflow-hidden
            min-h-[85px] sm:min-h-[95px]
          "
        >
          <p className="text-base sm:text-lg lg:text-2xl font-bold" style={{
              background: 'linear-gradient(90deg, #157DE5 0%, #FF7038 30%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >{stat.number}</p>
          <p className="text-[12px] sm:text-[12px] text-gray-500 break-words leading-tight">{stat.label}</p>
        </div>
      ))}
    </div>

  </div>
</div>

{showVideo && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={(e) => e.target === e.currentTarget && setShowVideo(false)}
  >
    <div className="bg-black rounded-2xl shadow-xl relative w-[90%] max-w-3xl">
      
      {/* Close button */}
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-3 right-3 text-white text-xl font-bold"
      >
        ✖
      </button>

      {/* YouTube iframe */}
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}




      </div>
    </div>
  );
};

export default ServicesLanding;
