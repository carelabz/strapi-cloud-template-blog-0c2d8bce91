"use client";

import carelabzImage from '@/assets/carlabz.jpg'
import React from 'react'
import Link from 'next/link';

const OurTeamsBanner = ({ data }) => {

    if (!data) {
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
        <div className=' w-full flex items-center justify-center '>

            <div className="flex flex-col w-[85%] p-5 ourteam-panel
            md:p-10
            lg:flex-row
            2xl:w-[70%]  bg-white  mt-[120px] rounded-[24px]" >
                <div className="left_section w-full
                lg:w-[50%] lg:p-5" >
                    <h1 className=' text-[36px] montserrat-font font-bold leading-10
                    md:text-[48px] md:leading-13
                    lg:text-[48px]
                    xl:text-[61px] xl:leading-14 mb-5 '
                        dangerouslySetInnerHTML={{ __html: data.mainheading }}
                    >

                    </h1>
                    <p className='
                    text-[16px]
                    md:pe-5
                    lg:text-[18px] poppins-font para-text mb-5'>
                        {data.maindescription}
                    </p>
                    {/* <div className="flex flex-col py-3 gap-3 sm:flex-row" >
                        {data.ourteam_stats?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-2 card-shadow border border-[#dae9fd] bg-white px-4 py-2 rounded-4xl"
                            >
                                <p className="montserrat-font font-semibold text-[24px]">
                                    {item.stats}
                                </p>
                                <p className="poppins-font text-[14px]">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div> */}


                    <div className="flex flex-col py-3 gap-3 sm:flex-row">
                        {data.ourteam_stats?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-2 card-shadow border border-[#dae9fd] bg-white px-4 py-2 rounded-4xl"
                            >
                                <p
                                    className="montserrat-font font-semibold text-[24px]
                                    bg-gradient-to-r from-[#157de5] via-[#91768a] to-[#ff7a00]
                                    bg-clip-text text-transparent"  >
                                    {item.stats}
                                </p>

                                {/* <p className="poppins-font text-[14px]">{item.label}</p> */}
                                <p className="poppins-font text-[14px] text-[#61758a]">
                                    {item.label}
                                </p>

                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 py-3
                      sm:flex-row ">
                        <Link
                            href={data.button1link || "#"}
                            className="
                            py-2 px-5 text-[14px] bg-[#FF7038] border border-[#dae9fd] text-white 
                            rounded-4xl poppins-font
                            transition-all duration-300 ease-out hover:bg-[#FF4C05] 
                            hover:scale-[1.05] hover:shadow-md
                        "
                        >
                            {data.button1text}
                        </Link>
                        <Link
                            href={data.button2link || "#"}
                            className="
                            poppins-font text-[14px] p-2 px-5 bg-white rounded-4xl border border-[#dae9fd]
                            transition-all duration-300
                            hover:bg-[#f5faff]      /* VERY VERY light blue */
                            hover:border-[#7db5ff]  /* slightly darker blue border */
                        "
                        >
                            {data.button2text}
                        </Link>
                    </div>
                    {/* <div className="flex items-center gap-2 text-[14px] mt-5">
                        <p>{data.scrolltext} </p>
                    </div> */}
                    <div className="flex items-center gap-2 text-[14px] mt-5">
                        <p className="animate-[bounce_1s_ease-in-out_infinite] text-[#61758a]">
                            {data.scrolltext}
                        </p>
                    </div>

                </div>
                <div className="right_section flex items-center justify-center w-full  mt-[80px] lg:mt-0 lg:w-[50%] xl:p-5">
                    <div
                        className="Img relative w-full  h-[300px] md:h-[400px] lg:w-full lg:h-full bg-cover bg-center rounded-xl"
                        style={{
                            backgroundImage: `url(${data.mainimage.url})`
                        }}
                    >
                        {/* Top-left */}
                        <div className="p-2 w-[130px] h-[100px] flex items-end justify-start rounded-2xl border-2 border-white bg-center bg-cover bg-no-repeat  absolute rotate-12 -top-10 -right-1/12
                     sm:w-[160px] 
                     md:w-[180px] md:h-32  md:p-3    
                     "
                            style={{
                                backgroundImage: `url(${data.images[0].image.url})`
                            }}>
                            <p className='text-[14px] px-1 rounded-2xl bg-white md:px-3 '>{data.images[0].label}</p>
                        </div>

                        {/* Bottom-left */}
                        <div className="w-[130px] h-[100px] p-2 rounded-2xl border-2 border-white md:p-3  flex items-end justify-start bg-center bg-cover bg-no-repeat absolute -rotate-6 bottom-10 -left-1/12
                    md:w-[180px] md:h-32
                     "
                            style={{
                                backgroundImage: `url(${data.images[1].image.url})`
                            }}>
                            <p className='text-[14px] px-1 md:px-3 rounded-2xl bg-white'>{data.images[1].label}</p>
                        </div>

                        {/* Top-right */}
                        <div className="w-[130px] h-[80px] not-first-of-type: md:w-[160px] rounded-2xl border-2 border-white p-3  flex items-end justify-start bg-center bg-cover bg-no-repeat absolute rotate-12 bottom-1/4 -right-1/12
                    md:h-28 "
                            style={{
                                backgroundImage: `url(${data.images[2].image.url})`
                            }}>
                            <p className='text-[14px] px-1 md:px-3 rounded-2xl bg-white'>{data.images[2].label}</p>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default OurTeamsBanner
