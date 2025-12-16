

import React from 'react'
import { clientIcons } from "@/lib/clientIcons";






const OurTeamRecognitions = ({data}) => {
  if(!data)return null;

    const IconComponent = clientIcons[data.icon.trim()];
    const certifications=data.Recognitions_Item1 ||  [];
    const affiliations=data.Recognitions_Item2 || [];
    


  return (
    <div>
       <section className="w-full flex items-center justify-center lg:mt-20">
      <div className=" w-[85%] p- rounded-2xl mt-10
            2xl:w-[70%]">
        <div className="bg-card rounded-[32px] p-8 sm:p-12 ourteam-panel">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
               <IconComponent  className="w-6 h-6 text-accent secondary-color" />
              
              <h2 className="text-[17px] sm:text-3xl md:text-4xl font-bold text-foreground"
                dangerouslySetInnerHTML={{ __html: data.title }}>
              
              </h2>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg">
             {data.description}
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12">
            {certifications.map((cert, index) => {
              const iconName = cert.icon.trim(); 
               const IconComponent = clientIcons[iconName]
             
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 ourteam-panel rounded-[12px] transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30"
                >
                 <IconComponent size={32} className="primary-color"/>
                  <span className="text-xs font-semibold text-foreground mt-4">
                    {cert.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Affiliations List */}
          <div className="space-y-4">
            {affiliations.map((affiliation, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 px-4 rounded-lg border-b border-[#65758b1a] hover:border hover:border-[#157de54d] hover:bg-secondary/50 hover:shadow-[0_8px_16px_-6px_rgba(0,0,0,0.2)] transition-all duration-300
"
              >
                <h3 className="text-[15px] font-semibold text-foreground mb-2 sm:mb-0 montserrat-font">
                  {affiliation.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground para-text">
                  <span>{affiliation.countryyear}</span>
                  {/* <span className="text-border">•</span>
                  <span>{affiliation.}</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default OurTeamRecognitions
