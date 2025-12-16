"use client";

import React from 'react'
import { clientIcons } from "@/lib/clientIcons";



const OurTeamsWrkTogether = ({data}) => {

    if(!data)return null
    
  return (
    <div className='w-full flex flex-col items-center justify-center mt-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[70%]    ">
                    <h2 className='text-[30px] md:text-[36px] montserrat-font font-bold mb-4'
                     dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                    <p className='text-[18px]  para-text  poppins-font'>{data.description}</p>
                </div>

        <div className="flex flex-col w-[85%] p- rounded-2xl mt-10
            2xl:w-[70%] ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {data.Work_Together_Items?.map((item, index) => {
                            // Dynamically get icon from API using LucideIcons
                            const IconComponent = item.icon ? clientIcons[item.icon] : null;

                            return (
                            <div
                                key={index}
                                // className="p-8 flex flex-col justify-center gap-4  ourteam-panel"
                                    className="
                                        group
                                        p-8 flex flex-col justify-center gap-4 rounded-[24px]
                                        border border-transparent
                                        transition-all duration-300 ease-in-out
                                        shadow-lg
                                        bg-[rgba(255,255,255,0.80)]
                                        hover:border-[#86b8f9]
                                        hover:scale-[1.03]
                                        hover:shadow-[0_0_25px_8px_rgba(183,213,255,0.35)]
                                    "
                                    >
                                <div 
                                className="w-[64px] h-[64px] rounded-[16px] flex items-center justify-center bg-gradient-to-br from-[#157DE5] to-[#FF7038] transition-transform duration-300 ease-in-out group-hover:scale-[1.1]"
                                >
                                {IconComponent && <IconComponent size={24} color="#157de5" />}
                                </div>

                                <h3 className="montserrat-font font-semibold text-[20px]">
                                {item.title}
                                </h3>
                                <p className="poppins-font text-gray-500 text-[16px] ">
                                {item.description}
                                </p>
                            </div>
                            );
                        })}
                </div>
        </div>       
    </div>
  )
}

export default OurTeamsWrkTogether
