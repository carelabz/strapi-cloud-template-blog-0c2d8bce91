"use client";

import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'
import Image from "next/image";


const OurTeamsWrkProjcet = ({data}) => {
    if(!data)return null;
  return (
    <div>
       <div className='w-full flex flex-col items-center justify-center mt-20'>
        <div className="flex flex-col w-[85%] p-5 text-center items-center justify-center
                2xl:w-[50%]    ">
                    <h2 className='text-[30px] md:text-[36px] montserrat-font font-bold mb-4'
                       dangerouslySetInnerHTML={{ __html: data.title }}
                    ></h2>
                    <p className='text-[17px] max-w-2xl  para-text  poppins-font'>{data.description}</p>
                </div>

        <div className="flex flex-col w-[85%] p- rounded-2xl mt-10 
            2xl:w-[70%]">
        
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">

            {data.Guiding_Items?.map((item, index) => {
                const imageUrl = item.image?.url

                return (
                <div key={index} className="ourteam-panel rounded-[32px] overflow-hidden">

                 {/* IMAGE WRAPPER */}
                    <div className="relative group rounded-t-[32px] overflow-hidden">
                        {/* Image */}
                        <Image
                            src={imageUrl}
                            alt={item.title || "Carelabs"}
                            className="w-full xl:h-[280px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            width={800}      
                            height={280}   
                            quality={70}    
                            sizes="(max-width: 1280px) 100vw, 1280px"
                        />

                        {/* Gradient overlay for the whole image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Hover text at the bottom */}
                        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-white italic text-[14px]">{item.hovertext}</p>
                        </div>
                    </div>

                    {/* CONTENT BELOW IMAGE */}
                    <div className="flex flex-col gap-2 p-5">
                        <h3 className="text-[20px] font-bold">{item.title}</h3>
                        <h4 className="text-[15px] font-bold poppins-font primary-color">{item.subtitle}</h4>
                        <p className="text-[14px] poppins-font">{item.description}</p>
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

export default OurTeamsWrkProjcet
