"use client";

import Link from 'next/link';
import { useEffect, useState } from "react";
import { GET_DEFAULT_PAGE } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";
import React from 'react'


const Page = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.query({
          query: GET_DEFAULT_PAGE,
          fetchPolicy: "no-cache",
        });
        // Assuming you want the first page only
        setPageData(res.data.pages[0]);
      } catch (error) {
        console.error("Error fetching page:", error);
      }
    };

    fetchData();
  }, []);

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
        <div className="w-full flex items-center justify-center p-5">
          <div className="mt-[100px] p-5 w-full lg:w-[70%] glass-panel1 rounded-[40px] lg:p-10 flex flex-col lg:flex-row items-center justify-center">
            <h1>Page not found</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
