
import client from "@/lib/appollo-client";
import { GET_SINGLE_SERVICE_BY_SLUG } from "@/lib/api-Collection";
import ServicesLanding from "@/components/Services/ServicesLanding";
import EngineeringServices from "@/components/Services/EngineeringServices";
import FaqResourcesSection from "@/components/Services/FaqResourcesSection";
import PowerSystemAnalysisCTA from "@/components/Services/PowerSystemAnalysisCTA";
import { clientIcons } from "@/lib/clientIcons";



export default async function Page({ params }) {
  const { slug } = await params;    
  const response = await client.query({
    query: GET_SINGLE_SERVICE_BY_SLUG,
    variables: { slug },
    fetchPolicy: "no-cache",
  });
  console.log("Service Response11111",response.data);

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
  <div className="w-full min-h-[300px] flex items-center justify-center px-4 py-25 bg-[#f9fbfe]">
    <div className="w-full sm:w-[80%] lg:w-[75%] flex flex-wrap justify-center gap-6">

      {service?.service_features?.map((feat, idx) => {
       const iconName = feat?.icon?.trim();       
       const Icon = clientIcons[iconName] ?? clientIcons.CircleCheck;

        return (
          <div
          
            key={idx}
            className="
              w-full sm:w-[45%] lg:w-[31.8%] 
              bg-[#ffffffd9] p-6 rounded-2xl shadow-[0_6px_10px_rgba(0,0,0,0.15)] flex flex-col gap-3

              group transition-all duration-300 ease-out 
              hover:-translate-y-2 hover:shadow-xl
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
        bg-gradient-to-br
        from-[rgba(255,255,255,0.9)] 
         via-[rgba(239,246,255,0.85)]
         to-[rgba(255,247,237,0.8)] 
        p-8 rounded-2xl 
        w-full lg:w-[50%] xl:w-[48%] 
        shadow-[0_6px_10px_rgba(0,0,0,0.15)] flex flex-col gap-6
      ">
        <div className="w-[55px] h-[55px] bg-[#f9e0e2] rounded-xl flex justify-center items-center border border-[#EF4343]/40">
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
        bg-gradient-to-br
        from-[rgba(21,125,229,0.1)]
        via-[rgba(255,255,255,0.95)]
        to-[rgba(255,255,255,0.9)]
         p-8 rounded-2xl 
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
           <h1 className=" text-4xl p-4 font-bold montserrat-font md:text-5xl text-center leading-tight " dangerouslySetInnerHTML={{ __html: service.WhatsIncludedtitle }}></h1>
          <p className="text-gray-500 p-4 max-w-3xl text-center text-[18px] mt-3">{service?.WhatsIncludedsubtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-[90%] lg:w-[80%]">
            {service?.whats_include_features?.map((f, idx) => {
              const iconName = f.icon?.trim();
              const Icon = clientIcons[iconName] || clientIcons.Circle;
              return (
                <div
                  key={idx}
                  className="
                    bg-white p-6 rounded-2xl group
                    shadow-[0_6px_10px_rgba(0,0,0,0.15)]
                    transform transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:shadow-xl
                  "
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center 
                     bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] 
                     transition-colors duration-300
                     group-hover:scale-110 group-hover:rotate-3
                     ">
                      <Icon className="text-blue-600 text-xl group-hover:text-[#ff7038]" />
                    </div>

                    {f.stat && (
                      <span className="inline-block border-2 border-[rgba(255,112,56,0.2)] bg-[rgba(255,112,56,0.1)] text-[#ff7038] text-[12px] font-medium px-3 py-1 rounded-2xl w-fit">
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
         SECTION 4 →TimeLine
      ===================================================================================== */}

      <section>
        <div className="w-full flex flex-col items-center py-11 bg-[#f9fbfe]">

          <h1 className=" montserrat-font font-bold text-4xl md:text-5xl text-center leading-tight">
            {service?.methodsTitle?.split(" ").slice(0, -1).join(" ")} <br />
            {service?.methodsTitle?.split(" ").slice(-1)}
          </h1>

          <p className="text-gray-500 p-3 text-[18px] max-w-3xl text-center mt-3">{service?.methodsSubtitle}</p>

          <div className="w-[90%] md:w-[70%] flex flex-col gap-10 py-10 ">
            {service?.methodology?.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4">

            <div className={`flex w-full ${index % 2 === 0 ? "md:justify-start " : "md:justify-end"}`}>
        

            <div
            className={`
              group bg-white rounded-2xl shadow-[0_6px_10px_rgba(0,0,0,0.15)] flex
              flex-col md:flex-row overflow-hidden
              w-full lg:w-[80%] xl:w-[75%] 2xl:w-[70%] 
              h-full md:h-[180px]
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
              {/* OVERLAY */}
              <div
                className={`absolute inset-0 pointer-events-none
                  ${index % 2 === 0 
                    ? "bg-gradient-to-r from-white/30 via-white/10 to-transparent" 
                    : "bg-gradient-to-l from-white/30 via-white/10 to-transparent"
                  }`}
              ></div>

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
        <div className="flex items-center gap-2">
          {/* Left separator */}
          <div className="w-12 h-[2px] bg-gradient-to-l from-[#157DE5]/30 to-[#1F7FDB]/0"></div>

          {/* Icon */}
          <clientIcons.ChevronDown className="text-blue-400 w-6 h-6" />

          {/* Right separator */}
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#157DE5]/30 to-[#1F7FDB]/0"></div>
        </div>
      )}
              </div>
            ))}
          </div>

        </div>
      </section>

  

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
          className="w-[56px] h-[56px] p-[14px] rounded-xl flex justify-center items-center
          bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] 
                     transition-colors duration-300
                     group-hover:scale-110 group-hover:rotate-3           
          "
        >
          <Icon
            className="w-[28px] h-[28px] text-[#157be2] transition-all duration-300 ease-out
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
      <div key={i} className="flex gap-2 items-start">
        <div
          className="
            w-4 h-5 rounded-full 
            flex items-center justify-center
            flex-shrink-0 mt-1
          "
        >
          <clientIcons.CircleCheck className="text-orange-500 "/>
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
              <div className="w-[64px] h-[64px] rounded-xl flex justify-center items-center bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] transition-all duration-300
              group-hover:scale-110">

                <StatIcon className="w-[32px] h-[32px] text-[#157be2] transition-all duration-300 group-hover:text-orange-500" />
              </div>
             <p className="text-4xl font-bold 
              bg-[linear-gradient(90deg,#157DE5_0%,#FF7038_90%)]
              bg-clip-text text-transparent">
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
