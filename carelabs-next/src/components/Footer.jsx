"use client"

import React, { useState, useEffect } from 'react'
import client from '@/lib/appollo-client'
import { GET_FOOTER } from '@/lib/api-Collection'
import { clientIcons } from "@/lib/clientIcons";
import Image from "next/image";

const Footer = () => {
 const [footerData, setFooterData] = useState(null)

 const fetchFooter = async () => {
    try {
        const response = await client.query({
            query:GET_FOOTER
        });

        setFooterData(response.data.footer)
    } catch (error) {
        console.log("Error fetching footer:", error);
    }
 }

 useEffect(()=> {
    fetchFooter()
 },[])

 if(!footerData) return null

 const { logo, description, socialLinks, footerMenu, bottomLinks, copyrightText } =
    footerData;

  return (
   
    
    <div>
      {/* MAIN FOOTER BLOCK */}
      <div className="w-full footer-background md:h-[350px] lg:h-[400px] py-20 flex justify-center">
        <div className="w-[90%] md:w-[90%] flex flex-col gap-10">

          {/* TOP ROW: LOGO + MENUS */}
          <div className="flex flex-col md:flex-row gap-8">

            {/* LOGO + DESC + SOCIAL LINKS */}
            <div className="flex-1 flex flex-col gap-4 text-gray-50">
              <Image
                src={logo?.url}
                alt="Footer Logo"
                width={128}
                height={128}
                className="w-32 md:w-55"
                priority
                fetchPriority="high"
                quality={70}
              />
              <p className="text-sm text-[#808898] ">{description}</p>

              <div className="flex gap-3">
                {socialLinks?.map((item, idx) => {
                  const IconComponent = clientIcons[item.icon];
                  if (!IconComponent) return null; 

                  return (
                    <a
                      key={idx}
                      href={item.url || "#"} 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#092141] text-[#157DE4] hover:bg-[#157DE4] hover:text-white transition-colors duration-300"
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* FOOTER MENUS */}
            {footerMenu?.map((col, idx) => (
              <div key={idx} className="flex-1 flex flex-col gap-4 text-gray-50">
                <p className="text-lg font-bold">{col.title}</p>

                {col.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-sm text-gray-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* BOTTOM LINKS */}
          <div className="flex flex-wrap gap-4 justify-center text-gray-300 text-sm">
            {bottomLinks?.map((item, idx) => (
              <a key={idx} href={item.url} className="hover:underline">
                {item.label}
              </a>
            ))}
          </div>

          {/* COPYRIGHT TEXT — NOW INSIDE FOOTER */}
          <div className="text-left text-gray-300 text-xs">
            {copyrightText}
          </div>

        </div>
      </div>
    </div>
  
  )
}

export default Footer
 