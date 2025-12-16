import React from 'react'
import carelabzImage from '@/assets/carlabz.jpg'
import { clientIcons } from "@/lib/clientIcons";

const OurTeamsAction = ({data}) => {
   if(!data)return null;


   return (
    <div>
         <div className='w-full flex flex-col items-center justify-center mt-20'>
              <div className="flex flex-col w-[85%] p-5 text-center
                      2xl:w-[50%]    ">
                          <h2 className='text-[30px] md:text-[36px] montserrat-font font-bold mb-4'
                            dangerouslySetInnerHTML={{ __html: data.title }}
                           ></h2>
                          <p className='text-[18px] max-w-3xl mx-auto  para-text  poppins-font'>{data.description}</p>
                      </div>
      
                    <div className="flex flex-col w-[85%]  rounded-2xl mt-10 
                        2xl:w-[70%]">

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {data?.Teams_in_Action_Items?.map((item, index) => {

                          // Fetch icon dynamically
                          const IconComponent = clientIcons[item.icon] || clientIcons.Zap;

                          // Backend Image or Local fallback
                          const imageUrl = item.image?.url
                            ? item.image.url
                            : carelabzImage.src;

                          return (
                            <div
                              key={index}
                              className="relative w-full h-[400px] lg:h-[550px] rounded-2xl bg-center bg-cover bg-no-repeat overflow-hidden group transition-transform duration-500 ease-out transform hover:scale-105"
                              style={{
                                backgroundImage: `url(${imageUrl})`,
                                
                              }}
                            >
                              {/* Gradient overlay on top of the image */}
                              <div className="absolute inset-0 rounded-2xl transition-all duration-500
                                bg-[linear-gradient(135deg,rgba(15,23,42,0.7)_0%,rgba(15,23,42,0.6)_50%,rgba(15,23,42,0.8)_100%)]
                                group-hover:bg-gradient-to-br
                                group-hover:from-[#0f172a99]
                                group-hover:via-[#0f172a80]
                                group-hover:to-[#0f172ab3]"
                              ></div>

                              {/* Content */}
                              <div className="relative z-10 p-6 flex flex-col justify-between h-full gap-4">

                                {/* Top Block */}
                                <div className="relative">
                                  {/* Icon wrapper */}
                                  <div className="absolute top-0 left-0 w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] flex items-center justify-center rounded-xl quotes-background
                opacity-0 scale-50 translate-x-6 transition-all duration-500
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0">
                                    <IconComponent color="white" size={32} />
                                  </div>

                                  <div className="pt-[70px] lg:pt-[90px] text-left">
                                    <h2 className="text-white montserrat-font text-[23px] font-bold">
                                      {item.title}
                                    </h2>
                                  </div>
                                </div>

                                {/* Points */}
                                <div>
                                  {item.Teams_in_Action_Points?.map((p, idx) =>
                                    p.points ? (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-2"
                                      >
                                        <clientIcons.Dot size={45} color="#FF7038" />
                                        <p className="poppins-font text-[16px] text-white">
                                          {p.points}
                                        </p>
                                      </div>
                                    ) : null
                                  )}
                                </div>

                              </div>
                            </div>
                          );
                        })}

                      </div>
                  </div>       
             </div>
    </div>
  )
}

export default OurTeamsAction
