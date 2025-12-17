"use client";

import { MapPin, Shield, Zap } from 'lucide-react';
import React from 'react'
import { clientIcons } from "@/lib/clientIcons";

const HomeClient = ({data}) => {

    if(!data)return null;
      const BadgeIcon =clientIcons[data.badgeicon.trim()];
     
  return (
    <div className=' w-full flex flex-col items-center justify-center py-5 mt-40 lg:mt-60 '>
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-11/12 sm:w-4/5 md:w-3/5 lg:w-[80%] 2xl:w-[65%] bg-white flex items-center justify-center text-center flex-col gap-5 p-4 not-odd:">
            
                {/* Heading */}
                <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
                    <div className="text-[#157de5]">
                        <BadgeIcon size={18} />
                    </div>

                    {/* Global Reach */}
                  {data.badge}
                
                </h1>
                
                {/* Title */}
                <h2 className="  text-3xl sm:text-4xl md:text-5xl lg:text-[60px] py-4 font-semibold montserrat-font"
                  dangerouslySetInnerHTML={{ __html: data.title }}>
                
                </h2>
                
                {/* Description */}
                <p className="px-4 w-[80%] sm:px-8 text-lg  md:text-xl poppins-font para-text">
                  {data.description}
                </p>  
        </div>


        <div
         data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        
        className=" flex flex-col items-center lg:items-stretch justify-center p-5 sm:p-0  gap-10 mt-10
        lg:flex-row lg:w-[80%]
        2xl:w-[65%]"
           >

            <div 
             className=" w-full sm:w-[80%] lg:w-[50%]  p-10 rounded-[24px] glass-panel">
                <h3 className='mb-3 montserrat-font text-[24px] font-semibold '
                 dangerouslySetInnerHTML={{ __html: data.Partners.title }}></h3>
                <p className='mb-3 poppins-font'>{data.Partners.description}</p>
                    <p className='mb-3'>{data.Partners.Recenttitle}</p>

                <div className="flex flex-col gap-3 lg:mt-5">
                    {data.Partners?.Partners_names?.map((partner) => (
                        <div
                        key={partner.id}
                        className="flex items-center p-4 light-blue border border-[#2575b6] rounded-2xl gap-3"
                        >
                        <i className="primary-color">
                            <MapPin />
                        </i>
                        <p className="montserrat-font font-semibold">{partner.countryName}</p>
                        <p>-</p>
                        <p className="poppins-font">{partner.description}</p>
                        </div>
                    ))}
                 </div>

            </div>
            <div className="w-full sm:w-[80%] lg:w-[50%] flex flex-col justify-center  p-10 rounded-[24px] glass-panel ">
                <h2 className='text-center mb-5 text-[24px] font-semibold montserrat-font '>{data.Clients.title}</h2>
               
            <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center">
                {data.Clients?.Clients_name?.map((client, index) => (
                    <div
                    key={index}
                    className="glass-panel flex flex-col items-center rounded-xl justify-center py-10 px-3 gap-2"
                    >
                    {client.logo ? <img src={client.logo} alt={client.name} /> : <Shield size={44} />}
                    <p>{client.name}</p>
                    </div>
                ))}
            </div>

            </div>

        </div>
 
       


    </div>
  )
}

export default HomeClient
