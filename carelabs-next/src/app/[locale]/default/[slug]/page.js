"use client";

import Link from 'next/link';
import { useEffect, useState } from "react";
import { GET_DEFAULT_PAGE_BY_LOCALE } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";
import React from 'react'
import { clientIcons } from "@/lib/clientIcons";
import { useParams } from "next/navigation";

const Page = () => {
  const [pageData, setPageData] = useState(null);
const params = useParams();
const slug = params.slug;
let locale = params.locale;



if (locale === "ca") {
  locale = "en-CA";
}


  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.query({
          query: GET_DEFAULT_PAGE_BY_LOCALE,
          variables: { slug,locale },
          fetchPolicy: "no-cache",
        });        
        setPageData(res.data.pages[0]);

      } catch (error) {
        console.error("Error fetching page:", error);
      }
    };

    fetchData();
  }, []);

  const SectionVisible = !!(
    pageData?.badgeicon ||
    pageData?.badge ||
    pageData?.title ||
    pageData?.buttonlink ||
    pageData?.buttontext ||
    pageData?.mainimage?.url
    );

  if (!pageData) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-4">

              {/* Skeleton for main card / hero section */}
              <div className="w-[80%]  h-[90%] flex items-center justify-center bg-gray-200 rounded-2xl p-4 animate-pulse flex-col gap-4">
                
                {/* Large placeholder for main heading */}
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>

                {/* Placeholder for subheading */}
                <div className="w-3/4 h-8 bg-gray-300 rounded-lg"></div>

                {/* Inner content / stats placeholders */}
                <div className="w-full flex flex-col sm:flex-row items-center  justify-between gap-4 mt-4">
                  <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                  <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                  <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                </div>

              </div>
            </div>
        );

      }
  return (
    <div>
        <section>
        {SectionVisible && (
                <div className="w-full flex items-center justify-center p-5">
                    <div className="mt-[100px] p-5 w-full lg:w-[70%] glass-panel1 rounded-[40px] lg:p-10 flex flex-col lg:flex-row items-center justify-center">

                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-[50%] h-full flex flex-col justify-center gap-10 p-5">

                        {/* Badge */}
                        {pageData.badgeicon && pageData.badge && (
                        <div className="w-full h-[30%] flex items-center justify-center lg:justify-start">
                            <div className="poppins-font flex items-center justify-start gap-4 gradient-bg-badge rounded-full py-2 px-4 w-max text-[#157DE5]">
                            {(() => {
                                const BadgeIcon = clientIcons[pageData.badgeicon] || null;
                                return BadgeIcon ? <BadgeIcon size={18} /> : null;
                            })()}
                            <p className="poppins-font">{pageData.badge}</p>
                            </div>
                        </div>
                        )}

                        {/* Title */}
                        {pageData.title && (
                        <div className="w-full lg:w-[65%] h-[40%] flex flex-col gap-3">
                            <h1 className="montserrat-font text-[40px] leading-10 title-Text">
                            {pageData.title}
                            </h1>
                        </div>
                        )}

                        {/* Button */}
                        {pageData.buttonlink && pageData.buttontext && (
                        <div className="w-full h-[30%] flex justify-start">
                            <Link
                            href={pageData.buttonlink}
                            className="px-10 py-2 bg-[#2575b6] poppins-font rounded-[40px] text-white"
                            >
                            {pageData.buttontext}
                            </Link>
                        </div>
                        )}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-[50%] h-full flex items-center justify-center">
                        {pageData.mainimage?.url && (
                        <div
                            className="w-full h-[300px] rounded-[16px] lg:w-[85%] lg:h-[450px] lg:rounded-[40px] bg-cover bg-center bg-no-repeat"
                            style={{
                            backgroundImage: `url(${pageData.mainimage.url})`,
                            }}
                        ></div>
                        )}
                    </div>

                    </div>
                </div>
                )}

        </section>
                
        {/* INTRO SECTION */}
   {(pageData.introtitle || pageData.introcontent) && (
  <section>
    <div className="w-full flex items-center justify-center p-5">
      <div className="w-full p-5 lg:w-[70%] glass-panel1 lg:p-15 mt-28">

        {pageData.introtitle && (
          <h2 className="text-[36px] font-semibold montserrat-font text-center lg:text-left">
            {pageData.introtitle}
          </h2>
        )}

        {pageData.introcontent && (
          <div className="p-5 w-full lg:w-[90%]">
            <p
              className="text-[16px] poppins-font para-text"
              dangerouslySetInnerHTML={{ __html: pageData.introcontent }}
            ></p>
          </div>
        )}

      </div>
    </div>
  </section>
)}

    </div>
    );
};

export default Page;
