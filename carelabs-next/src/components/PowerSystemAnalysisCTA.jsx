"use client";

// import { Button } from "@/components/ui/button";
import { ArrowRight ,ChevronRight} from "lucide-react";

const PowerSystemAnalysisCTA = ({ service }) => {
  return (

    <section className="w-full py-12 md:py-20 bg-[#f9fbfe]">
      <div className="w-full min-h-[50vh] flex items-center justify-center">
        <div className=" w-[95%] sm:w-[85%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] 
        rounded-4xl flex flex-col items-center justify-center gap-6 sm:gap-8 
        p-6 sm:p-10 
        bg-gradient-to-br from-[#4A88FF] via-[#4A88FF] to-[#FF7038] 
        contact-shadow
        ">

          {/* TITLE */}
        <p
  className="text-xl sm:text-3xl md:text-4xl lg:text-5xl montserrat-font font-bold text-center text-white leading-tight line-clamp-2"
  dangerouslySetInnerHTML={{ __html: service?.readyTitle }}
/>


          {/* SUBTITLE */}
          <p className="text-sm sm:text-base md:text-lg text-center w-[95%] sm:w-[85%] text-white leading-relaxed">
            {service?.readySubtitle}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* BUTTON 1 */}
            {/* <a href={service?.readyButton1Link || "#"} className="w-full sm:w-auto">
              <button className="flex items-center justify-center
               rounded-lg text-blue-600 bg-white px-5 py-3 w-full sm:w-auto text-base sm:text-lg font-medium
               transition-all duration-500 ease-out
               hover:scale-[1.06] hover:-translate-y-1 
               hover:bg-white/90 hover:text-white
               ">
                {service?.readyButton1}
                <ArrowRight className="ml-2 h-5 w-5 transition-colors duration-300 group-hover:text-white" />
              </button>
            </a> */}

      {service?.readyButton1Link && (
  <a
    href={service.readyButton1Link}
    className="w-full sm:w-auto flex items-center justify-center
      rounded-lg text-blue-600 bg-white px-5 py-3 text-base sm:text-lg font-medium
      transition-all duration-500 ease-out
      hover:scale-[1.06] hover:-translate-y-1 
      hover:bg-white/90 hover:text-white"
  >
    {service?.readyButton1}
    <ArrowRight className="ml-2 h-5 w-5 transition-colors duration-300" />
  </a>
)}


            {/* BUTTON 2 */}
            {/* <a href={service?.readyButton2Link || "#"} className="w-full sm:w-auto">
              <button className="flex items-center justify-center
               rounded-lg text-white border-[2px] border-white/30 px-5 py-3 w-full sm:w-auto text-base sm:text-lg font-medium
               transition-all duration-500 ease-out
                hover:scale-[1.06] hover:-translate-y-1 hover:bg-white/30
               ">
                {service?.readyButton2}
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </a> */}
            {service?.readyButton2Link && (
  <a
    href={service.readyButton2Link}
    className="w-full sm:w-auto flex items-center justify-center
      rounded-lg text-white border-[2px] border-white/30 px-5 py-3
      text-base sm:text-lg font-medium
      transition-all duration-500 ease-out
      hover:scale-[1.06] hover:-translate-y-1 hover:bg-white/30"
  >
    {service?.readyButton2}
    <ChevronRight className="ml-2 h-5 w-5" />
  </a>
)}

          </div>

        </div>
      </div>
    </section>

  );
}

export default PowerSystemAnalysisCTA;
