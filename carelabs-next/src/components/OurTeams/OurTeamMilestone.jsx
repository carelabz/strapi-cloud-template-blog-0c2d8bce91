import React from 'react'
import { clientIcons } from "@/lib/clientIcons";


const OurTeamMilestone = ({ data }) => {

  if (!data) return null;

  const getIcon = (name) => {
    const IconComponent = clientIcons[name.trim()];
    return IconComponent ? <IconComponent size={16} color={"#f15c30"} /> : null;
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col w-[85%] p-5 text-center 2xl:w-[50%]">
          <h2 className="text-[30px] md:text-[36px] montserrat-font font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: data.title }}></h2>
          <p className="text-[18px] para-text poppins-font">{data.description}</p>
        </div>

        <div className="flex flex-col w-[85%] rounded-2xl mt-10 2xl:w-[70%] relative">

          {/* Vertical Line */}
          <div className="absolute md:left-1/2 top-0 -translate-x-1/2 w-[3px] h-full z-10
                          bg-gradient-to-br
                          from-[rgba(21,125,229,1)] 
                          via-[rgba(255,112,56,1)] 
                          to-[rgba(21,125,229,1)]">
          </div>

          {data?.Milestones_Items?.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row justify-between items-center relative"
                style={{ marginTop: index === 0 ? 0 : "100px" }} // spacing between milestones
              >
                {/* Dot */}
             {/* Dot */}
                  <div className="absolute md:left-1/2 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-6 h-6 rounded-full 
                                bg-gradient-to-br 
                                from-[rgba(21,125,229,1)] 
                                via-[rgba(255,112,56,1)] 
                                to-[rgba(21,125,229,1)]
                                border-4 border-white">
                </div>
              </div>



                {/* LEFT BLOCK */}
                {isEven && (
                  <div className="w-[90%] md:w-[40%] bg-white card-shadow flex items-end justify-end rounded-2xl h-full">
                    <div className="w-full lg:w-[80%] text-right p-5 h-full">
                      <div className="flex justify-end gap-2">{getIcon(item.icon)}
                        <p className="text-[14px] poppins-font secondary-color">{item.year}</p>
                      </div>
                      <h2 className="text-[20px] montserrat-font font-semibold">{item.title}</h2>
                      <p className="text-[14px] para-text poppins-font">{item.description}</p>
                    </div>
                  </div>
                )}

                {/* IMAGE BLOCK */}
                <div className="w-[90%] md:w-[40%] p-2 h-[200px] md:min-h-[250px]">
                  <div className="bg-cover bg-center bg-no-repeat h-full rounded-2xl"
                       style={{ backgroundImage: `url(${item.image?.url})` }}>
                  </div>
                </div>

                {/* RIGHT BLOCK */}
                {!isEven && (
                  <div className="w-[90%] md:w-[40%] bg-white card-shadow flex items-end justify-end rounded-2xl h-full">
                    <div className="w-full lg:w-[80%] text-right p-5 h-full">
                      <div className="flex justify-end gap-2">{getIcon(item.icon)}
                        <p className="text-[14px] poppins-font secondary-color">{item.year}</p>
                      </div>
                      <h2 className="text-[20px] montserrat-font font-semibold">{item.title}</h2>
                      <p className="text-[14px] para-text poppins-font">{item.description}</p>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default OurTeamMilestone;
