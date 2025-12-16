"use client";
import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'
import { clientIcons } from "@/lib/clientIcons";



const OurTeamsSnapshot = ({data}) => {
  if (!data) return null;
  const imageUrl = data.image ? data.image.url : carelabzImage.src;
    const stats = data.snapshot_stats || [];

  return (
  <div className='w-full flex justify-center bg-geen-300'>

  <div className="
    flex flex-col w-[85%] p-5 ourteam-panel1
    sm:p-10
    lg:flex-row lg:justify-start lg:items-start
    2xl:w-[70%] bg-white mt-[120px] rounded-[32px]
  ">

    {/* LEFT DIV */}
    <div className="w-full lg:w-[60%] bg--400 lg:p-4">
      <h2 className='text-[30px] md:text-[36px] font-bold montserrat-font leading-9 mb-5'
      dangerouslySetInnerHTML={{ __html: data.title }}
      ></h2>
      <p className='poppins-font para-text text-[16px] mb-5'
          dangerouslySetInnerHTML={{ __html: data.description }}
      >
     
       </p>
    </div>

    {/* RIGHT DIV */}
    <div className="w-full lg:w-[40%] lg:p-5 bg--400 mt-5 lg:mt-0">
      <div className="img w-full h-[200px] sm:h-[300px] lg:h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: `url(${imageUrl})` }}></div>

       <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
      {stats.map((item, index) => {
        // dynamically get icon from LucideIcons using string from API
        const IconComponent = clientIcons[item.icon] || clientIcons['Award']; // fallback if not found

        // optional: color can come from API
        const color = item.color || '#157de5';

        return (
          <div
            key={index}
            className="
                      p-6
                      rounded-2xl
                      bg-[rgba(255,255,255,0.80)]
                      border border-transparent
                      shadow-lg
                      transition-all duration-300 ease-out
                      hover:border-[#86b8f9]  
                      hover:scale-[1.03]
                      hover:shadow-xl"
         >
            <IconComponent size={36} color={color} />
            <p className="text-[36px] font-extrabold montserrat-font" style={{ color }}>
              {item.stats}
            </p>
            <p className="text-[16px] lg:text-[14px] poppins-font">{item.label}</p>
          </div>
        );
      })}
    </div>
    </div>

  </div>
</div>

  )
}

export default OurTeamsSnapshot