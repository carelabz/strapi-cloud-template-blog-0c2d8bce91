import { GET_REGIONCOMPLIANCE_BY_LOCALE } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { clientIcons } from "@/lib/clientIcons";


const RegionCompliance = () => {
  
  const params=useParams();
  let locale= params.locale;

  if(locale=="CA"||locale=="ca"){
    locale="en-CA"
  }else{
    locale="en"
  }

  console.log("Local",locale);
  
  const [compliance,setCompliance]=useState(null);

  const fetchComplianceByLocale = async()=>{
    try{
       const response = await client.query({
          query:GET_REGIONCOMPLIANCE_BY_LOCALE,
          variables: {locale },
        });

        setCompliance(response.data.homeCompliances[0]); 
    }catch(err){
       console.log("ERROR at Fetching RegionCompliance in Component",err);
       
    }

  }

const getIcon = (name) => {
  return clientIcons[name?.trim()] || clientIcons.Zap;
};


  

  useEffect(()=>{
  fetchComplianceByLocale();
  },[])


    
if (!compliance) return null;
const BadgeIcon = clientIcons[compliance.badgeicon?.trim()] || clientIcons.Zap;
  

  return (
     <div className='w-full flex flex-col items-center justify-center  mt-40 lg:mt-60'>

        <div 
           data-aos="fade-up"
            data-aos-anchor-placement="top-center"
        className="flex flex-col  items-center justify-center w-[85%] p-5 text-center
                2xl:w-[65%]">
              <div className="w-fit flex items-center justify-center ">
                  <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
                    <div className="text-[#157de5]">
                       <BadgeIcon size={18} />
                    </div>
                     {compliance.badge}
                  </h1>
              </div>    
               
              <div className="w-full sm:w-[80%] flex items-center justify-center flex-col py-5">
                  <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-[60px] py-4 font-semibold montserrat-font"
                    dangerouslySetInnerHTML={{ __html: compliance.title }}
                  >
               
                  </h2>
                  <div className="w-full sm:w-[90%] text-center py-5">
                    <p className=" sm:px-8 text-lg  md:text-xl poppins-font para-text">
                     {compliance.description}
                    </p>
                  </div>
                  
              </div> 
        </div>

        <div className="flex flex-col  items-center justify-center w-[85%] sm:w-[80%] p- rounded-2xl mt-10
            2xl:w-[65%]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

                {compliance.components_features?.map((item, index) => {
                    const FeatureIcon = getIcon(item.icon);

                    return (
                      <div 
                       data-aos="fade-up"
                       data-aos-anchor-placement="top-center"
                      key={index} className="p-8 flex flex-col justify-center gap-4 glass-panel">
                        <div className="w-[70px] h-[70px] rounded-[24px] flex items-center justify-center light-blue"
                        style={{ backgroundColor: item.color + "10" }}
>
                          <FeatureIcon size={32} color={item.color}  />
                        </div>

                        <h2 className="montserrat-font font-semibold text-[20px]"
                        style={{color:item.color}}
                        >
                          {item.title}
                        </h2>

                        <h3 className="montserrat-font font-semibold text-[20px]">
                          {item.subtitle}
                        </h3>

                        <p className="poppins-font text-[16px] para-text">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}

            </div>
          
           <div className=" w-full lg:w-[80%]  text-[#2575b6] flex items-center justify-center mt-10 p-6 rounded-2xl  card-shadow ">
            <div className="poppins-font text-[16px] text-center">
                <p> {compliance.notetext}</p>
            </div>
           </div>

        </div>       
    </div>
  )
}

export default RegionCompliance
