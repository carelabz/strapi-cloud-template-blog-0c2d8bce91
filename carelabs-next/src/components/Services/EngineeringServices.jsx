"use client";

//import { Zap, Activity, Target } from "lucide-react";
import { clientIcons } from "@/lib/clientIcons";

import {SquareArrowOutUpRight} from "lucide-react";


export default function EngineeringServices({ service }) {
  return (
  

    <section>
      <div className="min-h-[80vh] w-full flex items-center justify-center py-16 bg-[#f9fbfe]">
        <div className="w-[95%] md:w-[85%] lg:w-[70%] py-10 rounded-4xl flex flex-col items-center bg-card">

          {/* TOP TITLE */}
          <div className="w-full flex items-center justify-center text-center mb-10 px-4">
            <div className="flex flex-col items-center gap-3">
              {/* <h1 className="text-3xl sm:text-4xl md:text-5xl montserrat-font font-bold gradient-text leading-normal">
                {service?.relatedTitle}
              </h1> */}

              <h1 
  className="text-3xl sm:text-4xl md:text-5xl montserrat-font font-bold leading-normal"
  dangerouslySetInnerHTML={{ __html: service?.relatedTitle || '' }}
/>

              <p className="text-sm sm:text-md md:text-lg w-[95%] sm:w-[80%] text-gray-600 text-center text-muted-foreground">
                {service?.relatedSubtitle}
              </p>
            </div>
          </div>

  

<div className="w-[80%] xl:w-full grid grid-cols-1 xl:grid-cols-3 gap-6">
  {service?.relatedServices?.map((item, index) => {
    const iconName = item.icon?.trim();
    const LucideIcon = clientIcons[iconName] || clientIcons.Zap;

    return (
      <div
        key={index}
        className="bg-background rounded-2xl p-8 card-hover flex flex-col items-start gap-4 shadow-[0_6px_10px_rgba(0,0,0,0.15)]
                   transition-all duration-300 ease-out group
                   hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
      >
        {/* ICON BOX */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center
                     bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)]
                     transition-all duration-300 ease-out
                     group-hover:scale-110 group-hover:rotate-6"
        >
          <LucideIcon
            className="w-7 h-7 text-[#4A8DFF] transition-all duration-300 ease-out
                       group-hover:text-orange-500"
            strokeWidth={2.2}
          />
        </div>

        {/* FLOATING DECORATION ICON (RIGHT SIDE) */}


        {/* TITLE */}
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl montserrat-font font-bold transition-all duration-300 group-hover:text-[#157be2]">
            {item.label}
          </h3>

          {/* HOVER ICON (hidden until hover) */}
          <SquareArrowOutUpRight
            className="
              w-4 h-4 text-[#157be2] opacity-0
              transition-all duration-300 ease-out
              group-hover:opacity-100
            "
          />
        </div>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground transition-all duration-300 group-hover:text-gray-700 text-gray-600">
          {item.description}
        </p>
      </div>
    );
  })}
</div>


        </div>
      </div>
    </section>

    
  );
}
