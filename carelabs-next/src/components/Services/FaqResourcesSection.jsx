"use client";

import { useState } from "react";
import { ChevronDown, FileText, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { clientIcons } from "@/lib/clientIcons";


const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        //className="w-full py-5 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
        className="
        w-full py-5 flex items-center justify-between text-left
        transition-colors duration-300
        group
        "
      >
        {/* <span className="font-semibold text-foreground pr-4">{question}</span> */}
      <span
       className="
       text-lg
       font-semibold pr-4
       group-hover:text-blue-600
       transition-colors duration-300
      "
      >
     {question}
     </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="pb-5 text-gray-600 text-sm text-muted-foreground leading-relaxed montserrat-font">
          {answer}
        </div>
      )}
    </div>
  );
};



const ResourceCard = ({ label, format, icon }) => {
  // Convert string icon name → Lucide icon component
  const IconComponent = clientIcons[icon?.trim()] || clientIcons.File;

  return (
    <div
      className="
        flex items-center gap-4 p-3 
        rounded-xl cursor-pointer
        border-none
         bg-white/50
         hover:bg-white/70
         hover:shadow-lg
         group
      "
    >
      {/* Icon Box */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl transition-transform duration-200 group-hover:scale-110">
        <IconComponent className="w-6 h-6 text-blue-600" />
      </div>

      {/* Text */}
      <div className="flex-1">
         <p className="font-normal montserrat-font group-hover:text-[#157DE5]">{label}</p>
        <p className="text-xs font-normal text-gray-500">{format}</p>
      </div>

      <clientIcons.SquareArrowOutUpRight className="hidden group-hover:block 
      style={{ color: '#65758B', width: '16px', height: '20px', opacity: 0.5 }} 
      " />
    </div>
  );
};




// Main Component
export default function FaqResourcesSection({ service }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    // <section>
    //   <div className="min-h-[80vh] w-full flex items-center justify-center">
    //     <div className="w-[95%] md:w-[85%] lg:w-[90%] 2xl:w-[75%] py-10 rounded-4xl flex flex-col items-center bg-card">
          
    //       {/* TOP TITLE */}
    //       <div className="w-full flex items-center justify-center text-center mb-10 px-4">
    //         <div className="flex flex-col items-center gap-3">
    //           <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
    //             <span className="text-primary">FAQs</span>
    //             {" & "}
    //             <span className="gradient-text">Technical Resources</span>
    //           </p>
    //           <p className="text-sm sm:text-md md:text-lg w-[95%] sm:w-[80%] text-center text-muted-foreground">
    //             Common questions about power system analysis and helpful resources to support your project planning.
    //           </p>
    //         </div>
    //       </div>

    //       {/* MAIN AREA */}
    //       <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
    //         {/* FAQ SECTION */}
    //         <div className="lg:col-span-2">
    //           <div className="space-y-1">
    //             {faqData.map((faq, index) => (
    //               <FaqItem
    //                 key={index}
    //                 question={faq.question}
    //                 answer={faq.answer}
    //                 isOpen={openIndex === index}
    //                 onClick={() =>
    //                   setOpenIndex(openIndex === index ? null : index)
    //                 }
    //               />
    //             ))}
    //           </div>
    //         </div>

    //         {/* RESOURCES */}
    //         <div className="lg:col-span-1">
    //           <div className="bg-card border border-border rounded-2xl p-6 sticky top-8">
    //             <h2 className="text-xl font-bold text-foreground mb-6">
    //               Technical Resources
    //             </h2>
    //             <div className="space-y-2">
    //               {technicalResources.map((resource, index) => (
    //                 <ResourceCard key={index} {...resource} />
    //               ))}
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </section>

     <section>
      <div className="min-h-[80vh] w-full flex items-center justify-center bg-[#f9fbfe]">
        <div className="w-[95%] md:w-[85%] lg:w-[90%] 2xl:w-[75%] py-10 rounded-4xl flex flex-col items-center bg-card">

          {/* TOP TITLE */}
          <div className="w-full text-center mb-10 px-4">

           <p 
           className="text-3xl sm:text-4xl md:text-5xl font-bold montserrat-font"
           dangerouslySetInnerHTML={{ __html: service?.faqTitle || '' }}
          />

            <p className="text-sm sm:text-md md:text-lg max-w-3xl  mx-auto text-muted-foreground mt-3 text-gray-500">
              {service?.faqSubtitle}
            </p>
          </div>

          {/* MAIN AREA */}
          <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* FAQ LEFT SIDE */}
            <div className="lg:col-span-2 space-y-1 montserrat-font">
              {service?.questions?.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.questionName}
                  answer={faq.questionAns}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>

            {/* TECH RESOURCES RIGHT SIDE */}
            <div className="lg:col-span-1">
              <div 
              //className="bg-card border border-border rounded-2xl p-6 sticky top-8"
              className="bg-white rounded-2xl p-6 sticky top-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >

                <h2 className="text-xl font-bold text-foreground mb-6 montserrat-font">
                  {service?.technicalTitle}
                </h2>

                <div className="space-y-2">
                  {service?.technicalItems?.map((item, index) => (
                    <ResourceCard
                      key={index}
                      label={item.label}
                      format={item.format}
                      icon={item.icon}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
