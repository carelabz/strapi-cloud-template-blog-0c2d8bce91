import { clientIcons } from "@/lib/clientIcons";

import React from 'react';

const OurTeamConverstation = ({data}) => {

  if(!data) return null;

  return (
    <section className="w-full p-10 mt-20">
      <div className="w-full flex items-center justify-center">
        <div className="w-[95%] sm:w-[85%] lg:w-[70%] xl:w-[60%]  flex flex-col items-center justify-center gap-6 sm:gap-8 p-6 sm:p-10 bg-white shadow-lg rounded-[32px] shadow-lg rounded-2xl p-10 text-center bg-gradient-to-br 
                  from-[rgba(31,127,219,0.08)] 
                  to-[rgba(255,122,60,0.08)]">

          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl montserrat-font font-bold text-center leading-tight"
             dangerouslySetInnerHTML={{ __html: data.title }} />

          <p className="text-sm sm:text-base md:text-lg text-center w-[95%] sm:w-[85%] para-text leading-relaxed">
            {data.description}
          </p>

          {/* Dynamic Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {data.Ready_to_Talk_buttons?.map((btn, index) => {
              const Icon = clientIcons[btn.icon.trim()] || clientIcons.ArrowRight;
              return (
                <a key={index} href={btn.link || "#"} className="w-full sm:w-auto">
                  <button
                    className={`flex items-center justify-center rounded-full px-5 py-3 w-full sm:w-auto text-base text-[14px] font-medium
                      ${index === 0 ? "secondary-bg text-white" : "border border-[#2575b6] text-[#111827]"}`}
                  >
                    <Icon className=" h-5 w-5 mx-2" />
                    {btn.text}
                  </button>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurTeamConverstation;
