"use client";
import React from 'react'
import { clientIcons } from "@/lib/clientIcons";



const OurTeamsDrivesUs = ({data}) => {

    if(!data)return null;

  return (
    <div className='w-full flex flex-col items-center justify-center mt-20'>
        <h2 className='text-[30px] md:text-[36px] montserrat-font font-bold text-center  my-10'
         dangerouslySetInnerHTML={{ __html: data.title }}
        ></h2>
           <div className="flex flex-col w-[85%] rounded-2xl lg:flex-row 2xl:w-[70%]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.Drives_Us_Items.map((item, index) => {
          const IconComponent = clientIcons[item.icon] || clientIcons["Target"]; // fallback icon

          return (
            <div
              key={index}
              className="rounded-2xl shadow-lg p-8"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[50px] h-[50px] rounded-full light-blue flex items-center justify-center">
                  <IconComponent size={24} color={index % 2 === 0 ? "#157de5" : "#ff7038"} />
                </div>
                <p className="montserrat-font text-[24px] font-semibold">
                  {item.title}
                </p>
              </div>

              {/* Sub Items */}
              {item.Drives_Us_subItems?.map((subItem, subIndex) => (
                <div key={subIndex} className="flex mb-3">
                  <div className="">
                    <clientIcons.Dot
                      size={45}
                      color={subIndex % 2 === 0 ? "#157de5" : "#ff7038"}
                    />
                  </div>
                  <p className="para-text poppins-font text-[16px]">
                    {subItem.points} {/* handle plain string or object */}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default OurTeamsDrivesUs
