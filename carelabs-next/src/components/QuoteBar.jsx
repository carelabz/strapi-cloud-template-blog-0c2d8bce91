"use client";

import React, { useState, useEffect } from 'react';
import client from '@/lib/appollo-client'
import { GET_FOOTER } from '@/lib/api-Collection'
import { clientIcons } from "@/lib/clientIcons";
import ContactPopupModal from './Modal/ContactPopupModal';

const QuoteBar = () => {
  const [footerData, setFooterData] = useState(null)
  const [showBar, setShowBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  

   const fetchFooter = async () => {
    try {
      const response = await client.query({
        query: GET_FOOTER,
      });

      setFooterData(response.data.footer);
    } catch (error) {
      console.log("Error fetching footer in QuoteBar:", error);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  /** Scroll logic */
  const controlBar = () => {
    const currentScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (currentScrollY >= viewportHeight) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
  };

    

  useEffect(() => {
    window.addEventListener("scroll", controlBar);
    return () => window.removeEventListener("scroll", controlBar);
  }, []);

  if (!footerData) return null;

  const cta = footerData.floating_cta;
  
  const IconComponent = clientIcons[cta?.button2icon.trim()] || clientIcons.ArrowRight

  return (
    <div className="">
      <div
      className={`w-full fixed bottom-0 mb-5 z-[999] flex items-center justify-center p-2 transition-transform duration-300 ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[65%] quotes-background h-auto sm:h-[100px] rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between p-4 sm:p-5 gap-3 card-shadow">

        {/* TEXT */}
        <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
          <p className="text-lg sm:text-xl font-bold">{cta?.heading}</p>
          <p className="text-sm sm:text-base">{cta?.subheading}</p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center justify-center sm:justify-end">

          {/* CTA BUTTON */}
        <button   
          type="button"
          name="quote_Bar_Modal_Button"
          aria-label={cta?.button1text}
          className="px-4 sm:px-5 py-2 bg-[#FF7038] text-white rounded-full text-sm sm:text-base inline-flex items-center justify-center cursor-pointer hover:bg-[#ff5722] transition-colors"
          onClick={() => setIsOpen(true)}
        >
          {cta?.button1text}
        </button>


          {/* SCROLL TO TOP */}
          <button
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"
          >
            {/* Dynamic Icon EXACTLY like your style */}
          <IconComponent/>
          </button>
        </div>
      </div>



    </div>
   {isOpen && (
        <ContactPopupModal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
        )}

    </div>
  );
};

export default QuoteBar;
