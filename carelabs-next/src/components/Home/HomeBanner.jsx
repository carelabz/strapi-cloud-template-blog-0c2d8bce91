"use client"

import { ArrowRight, Play, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import HomeCounter from '../Homecounter';
import Aos from 'aos';
import ContactPopupModal from '../Modal/ContactPopupModal';

const  HomeBanner = ({data}) => {
    
    const[homeData,setHomeData]=useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [videoId, setVideoId] = useState(null);
   

   
    
   useEffect(() => {
    setHomeData(data);
   }, [data]);

    useEffect(()=> {
        if (typeof window !== "undefined") {
            window.openRandomVideoGlobal = () => openRandomVideo();
        }
    },[]);
    
    useEffect(() => {
        Aos.init({ 
          once: true,     
        });
    }, []);

    useEffect(() => {
        const styleTag = document.createElement("style");
        styleTag.innerHTML = popIn;
        document.head.appendChild(styleTag);
    }, []);
    
    

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

    const popIn = `
      @keyframes popIn {
        0% { opacity: 0; transform: translateY(20px) scale(0.9); }
        60% { opacity: 1; transform: translateY(-4px) scale(1.03); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
    `;
    
    
   
   if(!homeData) return null;

  return (
    <div>
        <div className="home-cover relative  w-full pt-[90px] flex flex-col items-center p-5 justify-center">
            {/* Section 1 */}
            <div 
            data-aos="fade-up"
            data-aos-duration="2000"


            className="
            homeBanner
            w-full max-w-[1152px]
            min-h-[600px] md:h-[758px]
            flex flex-col items-center justify-center
            bg-white/90
            rounded-[40px]
            border border-[#0f172914]
            overflow-hidden
            glass-panel1
            p-4 sm:p-6 md:p-10
            "


            
            >
                <div className="w-full rounded-[40px] flex flex-col items-center justify-evenly space-y-6 md:space-y-8">

                {/* Heading Button */}
                <div className="flex justify-center items-center">
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

            <div className="flex flex-col items-center justify-center text-center 
                w-auto max-w-[900px] mx-auto montserrat-font space-y-1 sm:space-y-2 md:space-y-3">

            {/* Title 1 */}
            <p className="
                font-bold gradient-text
                text-[32px] leading-[40px]
                sm:text-[42px] sm:leading-[52px]
                md:text-[54px] md:leading-[62px]
                lg:text-[72px] lg:leading-[72px] lg:whitespace-nowrap
            ">
                {homeData.title1}
            </p>

            {/* Title 2 */}
            <p className="
                font-bold
                text-[32px] leading-[40px]
                sm:text-[42px] sm:leading-[52px]
                md:text-[54px] md:leading-[62px]
                lg:text-[72px] lg:leading-[72px] lg:whitespace-nowrap
            ">
                {homeData.title2}
            </p>

            {/* Title 3 */}
            <p className="
                font-bold text-[#157de5]
                text-[32px] leading-[40px]
                sm:text-[42px] sm:leading-[52px]
                md:text-[54px] md:leading-[62px]
                lg:text-[72px] lg:leading-[72px] lg:whitespace-nowrap
            ">
                {homeData.title3}
            </p>

            </div>


                </div>

                {/* Description */}
                <div className="w-full flex items-center justify-center text-center px-4 md:px-8">
                    <div className="w-full md:w-11/12 text-[20px]   md:text-xl py-5 ">
                    <p className="para-text poppins-font">{homeData.description}</p>
                    </div>
                </div>


                {/* Buttons */}


                <div className="w-full flex items-center justify-center py-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full md:w-3/5">

                {/* PRIMARY BUTTON — ORANGE */}
                <button
                      onClick={() => setIsOpen(true)}

                className="
                    group 
                    w-[202px] h-[44px]
                    bg-[#FF7038] text-white 
                    rounded-[9999px]
                    flex items-center justify-center gap-2
                    text-[14px] poppins-font font-medium
                    transition-all duration-300
                    hover:bg-[#FF4C05]
                    cursor-pointer
                "
                >
                {homeData.btn1_text}
                <ArrowRight size={14}
                className="
                transform
                transition-transform duration-300 
                group-hover:translate-x-1   
                "
                />
                
                </button>

                {/* SECONDARY BUTTON — BORDERED */}
                <button
                onClick={openRandomVideo}
                className="
                    w-[202px] h-[44px]
                    bg-white text-gray-800 
                    border border-gray-300
                    rounded-[9999px]
                    flex items-center justify-center gap-2
                    text-[14px] poppins-font font-medium
                    transition-all duration-300
                    hover:bg-[#FF7038] hover:text-white
                    hover:border-[#307FE2]
                    cursor-pointer
                "
                >
                <Play size={14} />
                {homeData.btn2_text}
                </button>

            </div>
            </div>


                {/* Stats */}

            <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="
                w-full flex items-center justify-center py-8
            "
            >
            <div
                className="
                w-full max-w-[1022px]
                flex flex-col sm:flex-row
                items-center justify-between
                gap-6 sm:gap-[24px]
                "
            >
                {homeData.stats?.map((item, idx) => {
                let numberColor =
                    idx === 1 ? "#FF7038" : "#157DE5";

                return (
                    <div
                    key={idx}
                    className="
                        w-[324.66px] h-[126px]
                        bg-white
                        rounded-[24px]
                        border border-[#307FE2]/10 
                        flex flex-col items-center justify-center
                        shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                        transition-all duration-500
                        hover:scale-[1.04] hover:-translate-y-1 
                        hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]
                    "
                    style={{
                        opacity: 0,
                        transform: "translateY(10px) scale(0.95)",
                        animation: `popIn 0.6s ease-out forwards`,
                        animationDelay: `${idx * 0.15}s`,
                    }}
                    >
                    {/* NUMBER */}
                    <div className="w-full h-[48px] flex items-center justify-center">
                        <p
                        className="
                            text-4xl font-extrabold montserrat-font
                        "
                        style={{ color: numberColor }}
                        >
                        <HomeCounter
                            end={item.number}
                            duration={2}
                            color={numberColor}
                        />
                        </p>
                    </div>

                    {/* LABEL */}
                    <div className="w-full h-[20px] flex items-center justify-center">
                        <p className="text-[14px] poppins-font text-[#65758B]">
                        {item.label}
                        </p>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>


            </div>
        </div>
        {isOpen && (
        <ContactPopupModal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
        )}

        {showVideo && (
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setShowVideo(false);
                }
                }}
            >
                <div className="bg-black rounded-2xl shadow-2xl relative w-full max-w-4xl">
                
                {/* Close button */}
                <button
                    onClick={() => setShowVideo(false)}
                    className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors duration-200 text-2xl font-bold z-10"
                    aria-label="Close video"
                >
                    ✖
                </button>

                {/* YouTube iframe - REMOVED autoplay=1 */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                    allow="encrypted-media; fullscreen"
                    allowFullScreen
                    title="YouTube video player"
                    ></iframe>
                </div>
                </div>
            </div>
        )}

        </div>
  )
}

export default HomeBanner
