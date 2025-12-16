"use client";
import client from "@/lib/appollo-client";
import { GET_CONTACT_PAGE } from "@/lib/api-Collection";
import React, { useState, useEffect } from "react";
import { CircleCheck, FileText, HelpCircle, Headphones, Users, ChevronDown, Mail, Clock , Shield, Phone, MessageCircle, Download } from "lucide-react";
import { clientIcons } from "@/lib/clientIcons";
import Image from "next/image";

const Contactpage = () => {
     const [contactData, setContactData] = useState(null);
     const [openIndex, setOpenIndex] = useState(null);
     const [selected, setSelected] = useState(null);
     const [selectedRegion, setSelectedRegion] = useState(
      contactData?.Where_we_support?.regions?.[0]?.region_item?.[0]
     );

     const fetchContactData = async () => {
        try {
          const res = await client.query({
            query: GET_CONTACT_PAGE,
          });
          setContactData(res.data.contactPage);
        } catch (err) {
          console.error("Error fetching contact page data:", err);
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          await fetchContactData();
        };

        fetchData();
      }, []);

      if (!contactData) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-4">

              {/* Skeleton for main card / hero section */}
              <div className="w-[80%]  h-[90%] flex items-center justify-center bg-gray-200 rounded-2xl p-4 animate-pulse flex-col gap-4">
                
                {/* Large placeholder for main heading */}
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>

                {/* Placeholder for subheading */}
                <div className="w-3/4 h-8 bg-gray-300 rounded-lg"></div>

                {/* Inner content / stats placeholders */}
                <div className="w-full flex flex-col sm:flex-row items-center  justify-between gap-4 mt-4">
                  <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                  <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                  <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                </div>

              </div>
            </div>
        );

      }


  return (

    <>
    <section className="w-full flex items-center justify-center py-35 bg-[#F7F8FA]">
      <div        
      className=" w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%] bg-white contact-shadow contact-panel p-10 md:p-14  flex flex-col md:flex-row items-center gap-10 ">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Badge */}
          <div className="flex">
            <button className="px-3 py-0.25 flex items-center justify-center gap-1 bg-[#e7f1fc] text-[#157de5] border border-[#157de54d] rounded-full mb-5">
              <div className="text-[#157de5]">
                  <clientIcons.Zap size={13} />
              </div>
              <div>
                <p className=" text-[12px] font-medium">{contactData.badge}</p>
              </div> 
            </button>
          </div>
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold" dangerouslySetInnerHTML={{ __html: contactData.title }}>          
          </h1>

          {/* Sub text */}
          <p className="text-gray-500 mt-7 text-[18px] leading-relaxed">
            {contactData.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-9 flex-wrap">
            {contactData?.buttons?.map((btn, index) => (
              <a
                key={index}
                href={btn.link || "#"}
                className={
                  index === 0
                    ? "px-8 py-3 bg-[#FF7038] text-white rounded-full text-sm font-medium shadow hover:bg-[#ff5820] transition"
                    : "px-8 py-3 border border-blue-300 text-[#111827] rounded-full text-sm font-medium hover:bg-blue-50 transition"
                }
              >
                {btn.text}
              </a>
            ))}
          </div>

          {/* Bullet list */}

          <div className="mt-11 space-y-3">
            {contactData?.features?.map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-3 border border-[#E5EEF5] rounded-full px-4 py-2"
              >
                {/* Icon Circle */}
                <div className="w-5 h-5 flex items-center justify-center bg-blue-50 rounded-full">
                  <CircleCheck className="text-blue-500 w-4 h-4" />
                </div>

                {/* Text */}
                <p className="text-gray-700 text-[14px] font-small">
                  {item.label}
                </p>
              </div>
            ))}
          </div>


        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-2.5">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={contactData?.image?.url || "/placeholder.jpg"}
                alt="Contact Section Image"
                width={500}
                height={350}
                className="w-full max-w-[500px] h-auto object-cover rounded-2xl"
                sizes="(max-width: 500px) 100vw, 500px"
                quality={70}
              />
            </div>
          </div>
        </div>


      </div>
    </section>

    {/* connectCard */}

    <section className="w-full flex flex-col items-center py-11 bg-[#F7F8FB]">
      <div
        className="
          w-[98%]
          md:w-[90%]
          lg:w-[85%]
          xl:w-[78%]
          2xl:w-[72%]
          text-center
        "
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: contactData?.Choose_how_to_connect?.title }}>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-14 text-[18px]">
          {contactData?.Choose_how_to_connect?.description}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactData?.Choose_how_to_connect?.connect_items?.map((item, i) => {
            const IconComponent = clientIcons[item.icon] || clientIcons.HelpCircle;

            return (
              <div
                key={i}
                className="group
                  bg-[#fbfcfe] 
                  rounded-3xl 
                  p-6 md:p-7
                  contact-shadow2 
                  transition-all duration-300 ease-out 
                  hover:-translate-y-2 
                "
              >
                <div className="flex items-start gap-4">

                  {/* ICON LEFT */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] rounded-2xl flex items-center justify-center shadow-inner transition-transform duration-300 ease-out group-hover:scale-110 border-1 border-[rgba(21,125,229,0.4)]">
                    <IconComponent className="w-7 h-7 text-[#007FFF] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* TEXT RIGHT */}
                  <div className="flex-1 item-start text-left">
                    <h3 className="text-[20px] font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-[#007FFF]">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-[16px] leading-relaxed mb-2 mt-3">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 w-full group mt-3">
                      <a
                        href={item.sharelink || "#"}
                        className="text-[#007FFF] font-medium text-[16px]"
                      >
                        {item.sharetext}
                        <span className="inline-block transition-transform duration-300 text-[16px]
                          group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* formCard */}

    <section className="w-full flex items-center justify-center py-20 bg-[#F7F8FB] ">
      <div
        className="
          w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          bg-white rounded-3xl 
          contact-shadow
          p-10 md:p-14
          flex flex-col md:flex-row gap-12
        "
      >

        {/* LEFT SIDE */}
        <div className="w-full md:w-[40%]">
          {/* Heading */}
          <h1 className="text-2xl md:text-[35px] font-bold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: contactData?.Tell_us_about_project?.title }}>
          </h1>

          {/* Info Box */}
          <div className="bg-[#157DE50D] border border-[#157DE51A] p-4 rounded-2xl flex gap-3 items-start mb-8">
            <div className="w-5 h-5 text-[#157de5] flex items-center justify-center">
              <Shield/>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {contactData?.Tell_us_about_project?.note}
            </p>
          </div>

          {/* Bullet List */}
          <h3 className="font-semibold mb-3 text-gray-900  text-[15px]">
            {contactData?.Tell_us_about_project?.What_to_share_text}
          </h3>

          <ul className="space-y-2 text-gray-500 text-sm">
            {contactData?.Tell_us_about_project?.what_to_share_Items?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CircleCheck className="text-[#157de5] w-4 h-4 mt-0.5" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full md:w-[60%]">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

            {(() => {
              const formFields = [...(contactData?.Tell_us_about_project?.contact_form?.contact_form_fields || [])];

              window._messageField = formFields.find(f =>
                f.fieldname?.toLowerCase().includes("message")
              );
              window._normalFields = formFields.filter(f =>
                f !== window._messageField
              );
            })()}

            {/* NORMAL FIELDS (NO MESSAGE FIELD HERE) */}
            {window._normalFields
              ?.sort((a, b) => a.order - b.order)
              .map((field, idx) => (
                <div key={idx} className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    {field.fieldname} {field.required ? "" : ""}
                  </label>

                  <input
                    type="text"
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full px-3 py-2 border border-[#13182014] rounded-xl placeholder:text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#157DE5] focus:border-2"
                  />
                </div>
            ))}

            {/* TYPE OF HELP */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                {contactData?.Tell_us_about_project?.contact_form?.typeOfHelpTitle}
              </label>

              <select className="w-full px-3 py-2 border border-[#13182014] rounded-xl text-[14px] text-gray-800 focus:outline-none focus:border-[#157DE5] focus:border-2 placeholder:text-sm placeholder:text-gray-500">

                {[...(contactData?.Tell_us_about_project?.contact_form?.typeOfHelpOptions || [])]
                  .sort((a, b) => a.order - b.order)
                  .map((opt, i) => (
                    <option key={i} selected={opt.default}>
                      {opt.name}
                    </option>
                ))}
              </select>
            </div>

            {/* SERVICES CHIPS */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                {contactData?.Tell_us_about_project?.contact_form?.servicesTitle}
              </label>

              <div className="flex flex-wrap gap-3 mt-3">
                {[...(contactData?.Tell_us_about_project?.contact_form?.services || [])]
                  .sort((a, b) => a.order - b.order)
                  .map((service, idx) => (
                    <span key={idx} onClick={() => setSelected(idx)}
                    className={`
                      px-3 py-2 border rounded-full text-[12px] font-semibold cursor-pointer
                      ${selected === idx ? "bg-[#157DE5] text-white border-[#157DE5]" : "border-[#13182014] text-gray-700 hover:bg-gray-200"}
                    `}
                  >
                    {service.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CONTACT METHOD */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-medium mb-2 block">
                {contactData?.Tell_us_about_project?.contact_form?.contactMethodTitle}
              </label>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-900">
                {[...(contactData?.Tell_us_about_project?.contact_form?.contactMethods || [])]
                  .sort((a, b) => a.order - b.order)
                  .map((method, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contact_method" />
                      {method.label}
                    </label>
                ))}
              </div>
            </div>

            {/* NOW PUT MESSAGE FIELD HERE */}
            {window._messageField && (
              <div className="col-span-1 md:col-span-2 flex flex-col">
                <label className="text-sm font-medium mb-1">
                  {window._messageField.fieldname} {window._messageField.required ? "*" : ""}
                </label>

                <textarea
                  rows="4"
                  placeholder={window._messageField.placeholder}
                  required={window._messageField.required}
                  className="w-full px-5 py-5 rounded-xl border border-[#13182014] text-[14px] text-gray-800 focus:outline-none focus:border-[#157DE5] focus:border-2 placeholder:text-sm placeholder:text-gray-500"
                ></textarea>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-6">
              <button
                type="submit"
                className="
                  w-[60%] md:w-[100%] 
                  py-3 bg-[linear-gradient(90deg,#FF7038FF,#FF7038E6)] text-white 
                  rounded-full text-sm font-medium 
                  shadow hover:bg-[linear-gradient(90deg,#FF7038E6,#FF7038FF)] transition
                "
              >
                {contactData?.Tell_us_about_project?.contact_form?.submitbutton}
              </button>

              <p className="flex items-center gap-2 text-[#65758B] text-sm mt-3">
                < Clock className="w-4 h-4"/>
                {contactData?.Tell_us_about_project?.contact_form?.reply_msg}
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>

    {/* support */}

    <section className="w-full flex flex-col items-center py-20 bg-[#F7F8FB]">
      <div
        className="
          w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          text-center
        "
      >
        <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight mb-4"  dangerouslySetInnerHTML={{ __html: contactData?.Where_we_support?.title }}>
        </h1>

        <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-[18px]">
          {contactData?.Where_we_support?.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT MAP CARD */}
          <div className="col-span-2 bg-white rounded-3xl shadow-[0_8px_50px_rgba(0,0,0,0.06)] p-8 md:p-12 flex items-center justify-center">
            <div className="w-full h-[350px] md:h-[420px] bg-[#F1F6FE] rounded-2xl flex flex-col items-center justify-center border border-gray-200 overflow-hidden">
               {!selectedRegion && (
                <>
                  <div className="flex gap-3 mb-3">
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-300"></span>
                    <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                  </div>

                  <p className="text-gray-600 font-medium text-sm">
                    Select a region
                  </p>
                </>
              )}

              {selectedRegion?.map_embed_code && (
                <div
                  className="w-full h-full overflow-hidden rounded-2xl"
                  dangerouslySetInnerHTML={{ __html: selectedRegion.map_embed_code }}
                />
              )}
            </div>
          </div>
      
          {/* RIGHT CARD */}
          <div className="flex flex-col gap-8 ml-6 md:ml-0">

            <div
              className="
                bg-white rounded-3xl text-[#111827]
                contact-shadow 
                p-7 text-left
              "
            >
              <h3 className="text-[14.9px] font-semibold mb-4">
                {contactData?.Where_we_support?.presence_types?.title}
              </h3>

              <ul className="space-y-3 text-[12.3px]">
                {contactData?.Where_we_support?.presence_types?.presence_type_item?.map(
                  (item, idx) => {
                    const IconComponent = clientIcons[item.icon];

                    return (
                      <li key={idx} className="flex items-center gap-3">
                        {IconComponent ? (
                          <IconComponent
                            className="w-4 h-4"
                            stroke={item.icon_color} 
                            fill="none"
                          />
                        ) : (
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.icon_color }}
                          ></span>
                        )}
                        {item.label}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* Regions */}
            <div className="bg-[#FFFFFFE6] rounded-3xl contact-shadow p-6 text-left">
              <h3 className=" font-semibold text-[14.9px] text-[#111827] mb-4">
                {contactData?.Where_we_support?.regions?.title }
              </h3>
              <div className="flex flex-wrap gap-2">
                {contactData?.Where_we_support?.regions?.region_item?.map((region, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedRegion(region)}
                    className={`w-fit px-2 py-0 rounded-full text-[11.3px] font-semibold border border-[#0F172914] text-gray-900 cursor-pointer ${
                      selectedRegion?.region_name === region.region_name
                        ? "bg-[#157DE5] text-white"
                        : "text-gray-700 hover:bg-[#157DE51A] hover:border-[#157DE533]" 
                    }`}
                  >
                    {region.region_name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <section className="w-full flex justify-center py-10 bg-[#F7F8FB] mt-10">
        <div
          className="
            w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {contactData?.Where_we_support?.locations?.map((loc, i) => {
            const IconComponent = clientIcons[loc.icon];

            return (
              <div
                key={i}
                className="bg-white group rounded-3xl px-4 py-5 space-y-3 contact-shadow2 
                  transition-all duration-300 ease-out 
                  hover:-translate-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] border-1 border-[rgba(21,125,229,0.4)]">
                    {IconComponent && (
                      <IconComponent
                        className="w-4 h-4 text-gray-900"
                        fill="none"
                      />
                    )}
                  </span>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-900 text-[17px]">
                      {loc.location_name}
                    </h3>
                    <span
                      className={`w-fit px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] text-white`} 
                      style={{ color: loc.type_color, borderColor: `${loc.type_color}33` }}
                    >
                      {loc.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">{loc.description}</p>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </section>

{/* where to start */}

<section className="w-full flex flex-col items-center py-14 bg-[#F7F8FB]">
  <div className="w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]">

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center" dangerouslySetInnerHTML={{ __html: contactData?.Not_sure?.title }}>
    </h1>

    {/* Subtitle */}
    <p className="text-gray-500 max-w-xl mx-auto mt-3 mb-14 text-center text-[18px]">
      {contactData?.Not_sure?.description}
    </p>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 w-[90%] mx-auto">
      {contactData?.Not_sure?.Not_sure_Item?.map((item, idx) => {
        const IconComponent = clientIcons[item.icon];

        return (
          <div
            key={idx}
            className="bg-[#feffff] rounded-3xl contact-shadow2 group
                  transition-all duration-300 ease-out 
                  hover:-translate-y-2 
                       p-8 flex flex-col gap-2"
          >
            {/* ICON + TITLE */}
            <div className="flex items-center gap-4 ">
              <div className="w-12 h-12 bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] border-1 border-[rgba(21,125,229,0.4)] rounded-2xl flex items-center justify-center shadow-inner transition-transform duration-300 ease-out group-hover:scale-110">
                {IconComponent && <IconComponent className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />}
              </div>

              <h3 className="text-[18px] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#007FFF]">
                {item.heading}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-[16px] leading-[1.4] ml-[60px]">
              {item.description}
            </p>

            {/* LINK */}
            {item.Go_to_from_text && (
              <a
                href={item.Go_to_from_link}
                className="text-[#007FFF] font-medium text-sm flex items-center gap-1 ml-[60px] mt-1"
              >
                {item.Go_to_from_text} →
              </a>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>


{/* global reabality */}

<section className="w-full flex justify-center py-20 bg-[#F7F8FB]">
  <div className="w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%] ">

    <div
      className="
        bg-white rounded-3xl 
        contact-shadow
        p-10 md:p-16
        text-center
        bg-[linear-gradient(to_right,#FFFFFFF2_0%,#EFF6FFCC_50%,#FFFFFFF2_100%)]
      "
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl font-bold mb-12" dangerouslySetInnerHTML={{ __html: contactData?.Local_expertise?.title }}>   
      </h2>


      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">

        {contactData?.Local_expertise?.Local_expertise_Item?.map((item, idx) => {
          const IconComponent = clientIcons[item.icon];
          return (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] border-1 border-[rgba(21,125,229,0.4)] rounded-2xl flex items-center justify-center">
                {IconComponent && <IconComponent size={28} className="text-[#157DE5]" />}
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-[#157DE5] to-[#FF7038] bg-clip-text text-transparent">
                {item.count}
              </h3>
              <p className="text-gray-500  text-sm" >{item.label}</p>
            </div>
          );
        })}
      </div>


      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* TRUST MESSAGE */}
      <h1 className="text-gray-600 text-sm max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: contactData?.Local_expertise?.Trusted_text }}>
      </h1>

    </div>
  </div>
</section>

{/* faq */}

<section className="w-full flex flex-col items-center py-12 bg-[#F7F8FB]">
      <div
        className="
          w-[98%] md:w-[90%] lg:w-[85%] xl:w-[78%] 2xl:w-[72%]
          text-center
        "
      >
        

    {/* Title + Subtitle Section */}
    <h2 className="text-4xl md:text-5xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: contactData?.Before_you_reach_out_heading }}>
    </h2>

    <p className="text-gray-500 text-[18px] mb-12">
      {contactData?.Before_you_reach_out_subheading}
    </p>

        <div
          className="
            bg-white rounded-3xl p-8 md:p-10 
            shadow-[0_12px_60px_rgba(0,0,0,0.06)]
            w-full max-w-4xl mx-auto space-y-4
          "
        >
          {contactData?.Before_you_reach_out_Item?.map((item, i) => (
            <div
              key={i}
              className="border border-[#13182014] rounded-xl focus:outline-none focus:border-[#157DE5] focus:border-2 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-gray-800 font-bold text-[16px] ml-5 hover:text-[#157DE5] hover:underline cursor-pointer">
                  {item.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 text-gray-600 text-sm leading-relaxed ${
                  openIndex === i ? "max-h-[500px] pb-5" : "max-h-0"
                }`}
              >
                <div className="px-2 text-left ml-3">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 


   <section className="w-full flex justify-center py-10 bg-[#F7F8FB]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] md:w-[85%] xl:w-[75%] ">
        {contactData?.contact_cta?.map((cta, i) => {
          const IconComponent = clientIcons[cta.icon];
          return (
            <a
            key={i}
            href={cta.link || "#"} 
            className="bg-white rounded-3xl p-6 contact-shadow2
                      flex flex-col items-center text-center gap-2 
                      transition-all duration-300
                      cursor-pointer no-underline transition-all duration-300 ease-out 
                  hover:-translate-y-2 "
          >
            <div className="w-[48px] h-[48px] bg-gradient-to-br from-[rgba(21,125,229,0.1)] to-[rgba(255,112,56,0.1)] border-1 border-[rgba(21,125,229,0.4)] text-[#157de5] flex items-center justify-center rounded-2xl shadow-sm">
              {IconComponent && <IconComponent size={25} />}
            </div>

            <p className="text-lg font-semibold mt-2">{cta.heading}</p>
            <p className="text-[#157de5] text-sm font-medium">{cta.subheading}</p>
            {cta.message && <p className="text-gray-500 text-xs">{cta.message}</p>}
          </a>
          );
        })}
      </div>
    </section>
   </>
  )
}

export default Contactpage;
