import client from "@/lib/appollo-client";
import { GET_SINGLE_SERVICE_BY_SLUG } from "@/lib/api-Collection";
import ServicesLanding from "@/components/Services/ServicesLanding";
import EngineeringServices from "@/components/Services/EngineeringServices";
import FaqResourcesSection from "@/components/Services/FaqResourcesSection";
import PowerSystemAnalysisCTA from "@/components/Services/PowerSystemAnalysisCTA";
import { clientIcons } from "@/lib/clientIcons";
import { ChevronDown, CircleCheck } from "lucide-react";


export default async function Page({ params }) {
  const { slug } = await params;

  const response = await client.query({
    query: GET_SINGLE_SERVICE_BY_SLUG,
    variables: { slug },
    fetchPolicy: "no-cache",
  });
   console.log("Services Api Call");
   
  //const service = response?.data?.services?.data?.[0]?.attributes;
  const service = response?.data?.services?.[0];


  if (!service) {
    return (
      <div className="w-full py-20 text-center bg-[#f9fbfe]">
        <h2 className="text-3xl font-bold">Service Not Found</h2>
        <p className="text-gray-500 mt-2">No service matches: {slug}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f9fbfe]">
      <section>
        <ServicesLanding service={service} />
      </section>

      {/* =====================================================================================
         SECTION 1 → What It Covers (service_features)
      ===================================================================================== */}


<section>
  <div className="w-full min-h-[300px] flex items-center justify-center px-4 pt-40 sm:pt-10 py-10 bg-[#f9fbfe]">
    <div className="w-full sm:w-[80%] lg:w-[75%] flex flex-wrap justify-center gap-6">

      {service?.service_features?.map((feat, idx) => {
        const iconName = feat.icon.trim();
        const Icon = clientIcons[iconName] || clientIcons.CircleCheck; 

        return (
          <div
            key={idx}
            className="
              w-full sm:w-[45%] lg:w-[31.8%] 
              bg-[#ffffffd9] p-6 rounded-2xl shadow-[0_6px_10px_rgba(0,0,0,0.15)] flex flex-col gap-3

              transform transition-all duration-500 
              hover:scale-[1.03] hover:-translate-y-1 origin-bottom
            "
          >
            <Icon className="w-8 h-8 text-[#157de5]" />

            <p className="text-lg font-bold montserrat-font">{feat.title}</p>
            <p className="text-sm text-gray-500">{feat.description}</p>
          </div>
        );
      })}

    </div>
  </div>
</section>


      {/* =====================================================================================
         SECTION 2 → Why Matters + What Carelabs Delivers
      ===================================================================================== */}
     
      <section>
  <div className="w-full flex justify-center px-4 py-10 bg-[#f9fbfe]">
    <div className="
      w-[95%] sm:w-[90%] lg:w-[90%] xl:w-[86%] 
      flex flex-col lg:flex-row gap-10 justify-center
    ">

      {/* LEFT CARD */}
      <div className="
        bg-gradient-to-br from-white/20 to-[#f0f5fd] p-8 rounded-2xl 
        w-full lg:w-[50%] xl:w-[48%] 
        shadow-[0_6px_10px_rgba(0,0,0,0.15)] flex flex-col gap-6
      ">
        <div className="w-[55px] h-[55px] bg-[#f9e0e2] rounded-xl flex justify-center items-center">
          {service?.Why_Matters?.[0]?.icon && (() => {
            const Icon1 = clientIcons[service?.Why_Matters?.[0]?.icon] || clientIcons.AlertCircle;
            return <Icon1 className="w-7 h-7 text-red-500" />;
          })()}
        </div>

        {/* SINGLE-LINE TITLE */}
        <p
          className="
            text-[22px] md:text-[24px] font-bold 
            leading-tight montserrat-font 
             text-ellipsis
          "
          dangerouslySetInnerHTML={{ __html: service?.Why_Matters?.[0]?.title || '' }}
        />

        <p className="text-gray-500 text-[16px]">{service?.Why_Matters?.[0]?.subtitle}</p>

        <div className="flex flex-col gap-4">
          {[
            service?.Why_Matters?.[0]?.ans1,
            service?.Why_Matters?.[0]?.ans2,
            service?.Why_Matters?.[0]?.ans3,
            service?.Why_Matters?.[0]?.ans4
          ]
            .filter(Boolean)
            .map((item, i) => (
              <div key={i} className="flex gap-2 text-sm">
                <i className="fa-solid fa-angle-right text-red-500 mt-1 text-[15px]" />
                <p className="text-[16px] text-[#0F1729]">{item}</p>
              </div>
            ))}
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="
        bg-gradient-to-br from-[#f0f5fd] to-white/20 p-8 rounded-2xl 
        w-full lg:w-[50%] xl:w-[48%] 
        shadow-[0_6px_10px_rgba(0,0,0,0.15)] flex flex-col gap-6
      ">
        <div className="w-[55px] h-[55px] bg-[#e2ecf8] rounded-xl flex justify-center items-center">
          {service?.Why_Matters?.[1]?.icon && (() => {
            const Icon2 = clientIcons[service?.Why_Matters?.[1]?.icon] || clientIcons.Circle;
            return <Icon2 className="w-7 h-7 text-[#2b7fff]" />;
          })()}
        </div>

        {/* SINGLE-LINE TITLE */}
        <p
          className="
            text-[22px] md:text-[24px] font-bold 
            leading-tight montserrat-font 
             text-ellipsis
          "
          dangerouslySetInnerHTML={{ __html: service?.Why_Matters?.[1]?.title || '' }}
        />

        <p className="text-gray-500 text-[16px]">{service?.Why_Matters?.[1]?.subtitle}</p>

        <div className="flex flex-col gap-4">
          {[
            service?.Why_Matters?.[1]?.ans1,
            service?.Why_Matters?.[1]?.ans2,
            service?.Why_Matters?.[1]?.ans3,
            service?.Why_Matters?.[1]?.ans4
          ]
            .filter(Boolean)
            .map((item, i) => (
              <div key={i} className="flex gap-2 text-sm">
                <i className="fa-regular fa-circle-check text-orange-500 mt-1 text-[17px]" />
                <p className="text-[16px] text-[#0F1729]">{item}</p>
              </div>
            ))}
        </div>
      </div>

    </div>
  </div>
</section>





      {/* =====================================================================================
         SECTION 3 → What's Included Grid
      ===================================================================================== */}
      <section>
        <div className="w-full flex flex-col items-center py-10 mt-10 bg-[#f9fbfe]">
           <h1 className=" text-4xl font-bold montserrat-font md:text-5xl text-center leading-tight " dangerouslySetInnerHTML={{ __html: service.WhatsIncludedtitle }}></h1>
          <p className="text-gray-500 max-w-3xl text-center text-[18px] mt-3">{service?.WhatsIncludedsubtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[90%] lg:w-[80%]">
            {service?.whats_include_features?.map((f, idx) => {
              const iconName = f.icon?.trim();
              const Icon = clientIcons[iconName] || clientIcons.Circle;
              return (
                <div
                  key={idx}
                  className="
                    bg-white p-6 rounded-2xl shadow-xl group
                    transform transition-transform duration-300
                    hover:-translate-y-2 hover:scale-[1.02]
                  "
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center transition-colors duration-300">
                      <Icon className="text-blue-600 text-xl group-hover:text-[#ff7038]" />
                    </div>

                    {f.stat && (
                      <span className="inline-block border-2 border-[#fcd3c4] bg-orange-50 text-[#ff7038] text-[12px] font-medium px-3 py-1 rounded-2xl w-fit">
                        {f.stat}
                      </span>
                    )}
                  </div>

                  <p className="text-xl text-[#10192c] font-bold mt-4 transition-colors duration-300 group-hover:text-[#2b7fff] ">
                    {f.label}
                  </p>
                  <p className="text-sm text-gray-500 text-[16px] mt-2 leading-6">{f.description}</p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================================================
         SECTION 4 → How Study Runs (Timeline)
      ===================================================================================== */}
      {/* <section>
        <div className="w-full flex flex-col items-center py-10">

          <p className="gradient-text text-4xl font-bold">{service?.methodsTitle}</p>
          <p className="text-gray-700 max-w-xl text-center mt-3">{service?.methodsSubtitle}</p>

          <div className="w-[90%] md:w-[70%] flex flex-col gap-10 py-10">
            {service?.methodology?.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4">

                <div className={`flex w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="bg-white rounded-2xl navbar-shadow flex flex-col md:flex-row overflow-hidden w-full lg:w-[60%]">
                    
                    <div
                      className="w-full md:w-[40%] h-56 md:h-auto"
                      style={{
                        backgroundImage: `url(${step?.image?.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="p-6 flex gap-4 md:w-[60%]">
                      <div className="w-[50px] h-[50px] flex justify-center items-center bg-amber-200 rounded-xl text-lg font-bold">
                        {step.Order}
                      </div>
                      <div>
                        <p className="text-xl font-bold">{step.OrderTitleText}</p>
                        <p className="text-sm text-gray-700 mt-2">{step.OrderSubtitleText}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {index !== service.methodology.length - 1 && (
                  <i className="fa-solid fa-angles-down text-blue-500 text-3xl" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section> */}

      <section>
  <div className="w-full flex flex-col items-center py-11 bg-[#f9fbfe]">

    <h1 className=" montserrat-font font-bold text-4xl md:text-5xl text-center leading-tight">
  {service?.methodsTitle?.split(" ").slice(0, -1).join(" ")} <br />
  {service?.methodsTitle?.split(" ").slice(-1)}
</h1>

    <p className="text-gray-700 max-w-xl text-center mt-3">{service?.methodsSubtitle}</p>

    <div className="w-[90%] md:w-[70%] flex flex-col gap-10 py-10 ">
      {service?.methodology?.map((step, index) => (
        <div key={index} className="flex flex-col items-center gap-4">

          <div className={`flex w-full ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
  
  <div
  className={`
    group bg-white rounded-2xl shadow-[0_6px_10px_rgba(0,0,0,0.15)] flex
    flex-col md:flex-row overflow-hidden
    w-full lg:w-[80%] xl:w-[75%] 2xl:w-[70%] h-[180px]
    ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
  `}
>
  {/* IMAGE */}
  <div className="w-full md:w-[35%] h-48 md:h-auto shrink-0 relative">

    {/* IMAGE */}
    <div
      className="
        w-full h-full
        transition-transform duration-[1100ms]
        ease-[cubic-bezier(.13,.62,.31,1)]
        group-hover:scale-[1.08]
      "
      style={{
        backgroundImage: `url(${step?.image?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent pointer-events-none"></div>

  </div>

  {/* CONTENT */}
  <div className="p-6 flex gap-4 md:w-[70%] items-start">
    {/* ORDER BOX */}
    <div className="min-w-[40px] h-[40px] flex justify-center items-center bg-[#e2ecf8] text-[#157be2] rounded-xl text-lg font-bold">
      {step.Order}
    </div>

    {/* ICON */}
    {step.icon && (() => {
      const iconName = step.icon.trim();
      const StepIcon = clientIcons[iconName] || clientIcons.Circle;
      return <StepIcon className="text-[#157be2] w-5 h-5 shrink-0 mt-1" />;
    })()}

    {/* TEXT */}
    <div className="flex-1">
      <p className="text-xl font-bold montserrat-font text-[#10192c]">{step.OrderTitleText}</p>
      <p className="text-sm text-gray-500 mt-2">
        {step.OrderSubtitleText}
      </p>
    </div>
  </div>
</div>


          </div>

          {index !== service.methodology.length - 1 && (
            <ChevronDown className="text-blue-400 w-6 h-6" />
          )}
        </div>
      ))}
    </div>

  </div>
</section>

      {/* =====================================================================================
         SECTION 5 → Sector Benefits
      ===================================================================================== */}
    

<section>
  <div className="w-full flex flex-col items-center py-10 bg-[#f9fbfe]">

    <h1 className=" montserrat-font font-bold text-4xl md:text-5xl text-center leading-tight text-[#10192c]">
  {service?.sectorBenefitsTitle.split(" ").slice(0, -1).join(" ")} <br />
  {service?.sectorBenefitsTitle?.split(" ").slice(-1)}
 </h1>
    <p className="text-gray-500 max-w-2xl text-center mt-3">{service?.sectorBenefitsSubtitle}</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] ">
  {service?.sectorBenefits?.map((sec, idx) => {
    const iconName = sec.icon?.trim();
    const Icon = clientIcons[iconName] || clientIcons.Circle;

    return (
      <div
        key={idx}
        className="bg-white p-6 rounded-2xl card-shadow flex flex-col gap-4
                   transition-all duration-300 ease-out group
                   hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
      >
        <div
          className="w-[50px] h-[50px] bg-gray-300 rounded-xl flex justify-center items-center
                     transition-all duration-300 ease-out
                     group-hover:scale-110 group-hover:rotate-6"
        >
          <Icon
            className="w-7 h-7 text-[#157be2] transition-all duration-300 ease-out
                       group-hover:text-orange-500"
          />
        </div>

        <p className="text-xl text-[#10192c] font-bold transition-all duration-300 group-hover:text-[#157be2]">
          {sec.label}
        </p>

        {/* {[sec.list1, sec.list2, sec.list3].map(
          (txt, i) =>
            txt && (
              <div key={i} className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <i className="fa-solid fa-check text-orange-500 text-[10px]"></i>
                </div>
                <p className="transition-all duration-300 text-gray-600">
                  {txt}
                </p>
              </div>
            )
        )} */}

  {[sec.list1, sec.list2, sec.list3].map(
   (txt, i) =>
    txt && (
      <div key={i} className="flex gap-3 items-start">
        <div
          className="
            w-4 h-5 rounded-full 
            flex items-center justify-center
            flex-shrink-0 mt-1
          "
        >
          <CircleCheck className="text-orange-500 "/>
        </div>

        <p className="text-sm leading-relaxed text-gray-500">
          {txt}
        </p>
      </div>
    )
)}

      
      </div>
    );
  })}
</div>

  </div>
</section>



      {/* =====================================================================================
         SECTION 6 → Results Section (Stats + Bottom Cards)
      ===================================================================================== */}
      {/* <section>
        <div className="min-h-[80vh] flex justify-center py-10">
          <div className="w-[95%] md:w-[85%] lg:w-[70%] rounded-4xl navbar-shadow p-10 flex flex-col items-center">

            <p className="gradient-text text-4xl font-bold">{service?.resultsTitle}</p>
            <p className="text-gray-700 mt-3 text-center">{service?.resultsSubtitle}</p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-10">
              {service?.resultsStat?.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl text-center flex flex-col items-center gap-3">
                  <div className="w-[50px] h-[50px] bg-yellow-300 rounded-xl flex justify-center items-center">
                    <i className="fa-solid fa-circle-exclamation" />
                  </div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#5b68c3] to-[#c58a7a] bg-clip-text text-transparent">{stat.percentage}</p>
                  <p className="text-sm text-gray-600 ">{stat.description}</p>
                </div>
              ))}
            </div>

            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full mt-10">
              {service?.resultName?.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <i className={item.icon} />
                    <p className="text-xl font-bold">{item.label}</p>
                  </div>
                  <p className="text-sm pl-10 text-gray-600 ">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section> */}

<section>
  <div className="min-h-[80vh] flex justify-center py-10 bg-[#f9fbfe]">
    <div className="w-[95%] md:w-[85%] lg:w-[70%] rounded-4xl navbar-shadow p-10 flex flex-col items-center">

      {/* <p className="gradient-text text-4xl font-bold">{service?.resultsTitle}</p> */}

      <h1 
        className=" montserrat-font font-bold text-4xl md:text-5xl text-center leading-tight "
        dangerouslySetInnerHTML={{ __html: service?.resultsTitle }}
      />

      <p className="text-gray-500 mt-3 text-center">{service?.resultsSubtitle}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-10">
        {service?.resultsStat?.map((stat, i) => {
          const iconName = stat.icon?.trim();
          const StatIcon = clientIcons[iconName] || clientIcons.Circle;

          return (
            <div key={i} className=" p-6 rounded-xl text-center flex flex-col items-center gap-3 group">
              <div className="w-[50px] h-[50px] bg-gray-300 rounded-xl flex justify-center items-center transition-all duration-300
              group-hover:scale-110">

                <StatIcon className="w-6 h-6 text-[#157be2] transition-all duration-300 group-hover:text-orange-500" />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-[#5b68c3] to-[#c58a7a] bg-clip-text text-transparent">
                {stat.percentage}
              </p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </div>
          );
        })}
      </div>

      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full mt-10">
        {service?.resultName?.map((item, idx) => {
          const iconName = item.icon?.trim();
          const ItemIcon = clientIcons[iconName] || clientIcons.Circle;

          return (
            <div key={idx} className=" p-6 rounded-xl flex flex-col gap-4 group">
              <div className="flex gap-4 items-center">
                <ItemIcon className="w-5 h-5 text-orange-500" />
                <p className="text-lg font-bold montserrat-font">{item.label}</p>
              </div>
              <p className="text-sm pl-10 text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>




      <section className="mt-10">
        <PowerSystemAnalysisCTA service={service} />
      </section>

      <section className="mt-10">
        <EngineeringServices service={service} />
      </section>

      <section className="mt-10">
        <FaqResourcesSection service={service} />
      </section>
    </div>
  );
}
