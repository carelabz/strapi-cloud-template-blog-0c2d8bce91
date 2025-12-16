"use client";

import React from 'react'
import { clientIcons } from "@/lib/clientIcons";


const OurTeamPartner = ({data}) => {

    if(!data)return null;

     const items = data.How_We_Partner_Items || [];

  return (
    <div>
        <div className='w-full flex flex-col items-center justify-center mt-20 mb-20'>
        <div className="flex flex-col w-[85%] p-5 text-center
                2xl:w-[70%]    ">
                    <h2 className='text-[30px] md:text-[36px] montserrat-font font-bold mb-4'
                      dangerouslySetInnerHTML={{ __html: data.title }}
                    ></h2>
                    <p className='text-[18px]   para-text  poppins-font'>{data.description}</p>
                </div>

              <div className="flex flex-col gap-5 w-[85%] p-5 rounded-2xl mt-10 ourteam-panel
                    lg:flex-row 2xl:w-[70%]">

      {items.map((item, index) => {
        const iconName = item.icon?.trim();
        
        const ItemIcon = clientIcons[iconName] || clientIcons.HelpCircle;
        // fallback icon

        return (
          <div key={index} className="flex items-center justify-around py-5 flex-col">
            
            {/* ICON BLOCK */}
            <div className="flex items-center justify-center lg:w-full">
              <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br
                     from-[#157defB3] 
      to-[#ff7038B3] text-[#157de5] flex items-center justify-center">
                <ItemIcon size={40}  className="transform transition-transform duration-500 ease-out hover:scale-125"/>
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className=" flex flex-col gap-3 p-4 text-center w-full">
              <p className="secondary-color text-[14px] font-semibold">{item.step}</p>
              <h3 className="montserrat-font text-[18px] font-bold">{item.title}</h3>
              <p className="text-[14px] poppins-font para-text">{item.description}</p>
            </div>

          </div>
        );
      })}

    </div>    
    </div>
    </div>
  )
}

export default OurTeamPartner
