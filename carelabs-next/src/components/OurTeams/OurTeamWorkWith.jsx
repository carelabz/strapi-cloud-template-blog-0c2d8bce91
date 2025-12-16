"use client";

import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { clientIcons } from "@/lib/clientIcons";


const OurTeamWorkWith = ({data}) => {

 const ICON_COLORS = [
  { color: "#1F8FEB", shadow: "0px 10px 25px rgba(31, 143, 235, 0.25)" }, // Curious Blue
  { color: "#FF7038", shadow: "0px 10px 25px rgba(255, 112, 56, 0.25)" }, // Burning Orange
  { color: "#1F8FEB", shadow: "0px 10px 25px rgba(31, 143, 235, 0.25)" }, // Curious Blue
];


  if(!data)return null;
  return (
    <div>
        <div className='w-full flex flex-col items-center justify-center mt-20'>
          <div className="w-[80%]">
              <h2 className='text-[30px] md:text-[36px] montserrat-font font-bold text-center  my-10'
                  dangerouslySetInnerHTML={{ __html: data.title }}
              ></h2>
                <p className='text-[18px] text-center  para-text  poppins-font'>{data.description}</p>
          </div>
  

            <div className="flex flex-col w-[85%]  ourteam-panel  rounded-[16px]    
                2xl:w-[70%] mt-10 ">

              <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-10">

                {data.Where_you_work_Items?.map((item, index) => {
                  const iconName = item.icon?.trim();

                     
                  const IconComponent = clientIcons[iconName] || clientIcons.Map;

                  // Select colors based on index
                  const { color, shadow } = ICON_COLORS[index] || ICON_COLORS[0];

                  return (
                    <div key={index} className="p-10 md:p-5 flex flex-col justify-start gap-3">
                      
                      {/* Icon Box */}
                      <div
                        className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] rounded-[16px] flex items-center justify-center"
                        style={{
                          backgroundColor: `${color}15`, // very light tint
                                      
                        }}
                      >
                        <IconComponent
                          className="w-[32px] h-[32px] lg:w-8 lg:h-8"
                          stroke={color}  // ← icon color
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-[18px] montserrat-font font-semibold">
                        {item.title}
                      </h3>

                      {/* Countries */}
                      <div className="flex flex-wrap gap-5 text-[14px] para-text">
                        {item.Where_you_work_countries?.map((countryItem, i) => (
                          <p key={i}>{countryItem.country}</p>
                        ))}
                      </div>

                    </div>
                  );
                })}


              </div>

              
              <div className="w-full flex items-center justify-center pt-4 pb-8 ">
                     <div className="w-[80%]   flex items-center justify-center ">
                      <Link href={data.viewLink} className='flex items-center justify-center'>
                       <p className='montserrat-font primary-color font-semibold'>{data.viewText} </p>
                      <ArrowRight color='#2575b6'/>
                      </Link>
                     
              </div>

          
             </div>
               
            </div> 
    </div>
    </div>
  )
}

export default OurTeamWorkWith
