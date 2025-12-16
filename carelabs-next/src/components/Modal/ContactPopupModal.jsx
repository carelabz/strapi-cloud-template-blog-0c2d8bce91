"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import client from "@/lib/appollo-client";
import { GET_CONTACT_POPUP_FIELDNAMES } from "@/lib/api-Collection";
import Image from "next/image";


const ContactPopupModal = ({ setIsOpen }) => {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fieldNames, setFieldNames] = useState([]);

console.log("KJHGFDSAASDFGGHHJKKLQWETTYUIOOPP");

 
   useEffect(() => {
    const fetchFieldValues = async () => {
        try {
            const response = await client.query({
                query: GET_CONTACT_POPUP_FIELDNAMES,
            });
            console.log("ContactData", response.data);
            setFieldNames(response.data.contactPopup);
        } catch (err) {
            console.error("Error fetching field values:", err);
        }
    };

    fetchFieldValues(); // call on mount
}, []);

   useEffect(() => {
   

    const interval = setInterval(() => {
      if (window.turnstile) {
        window.turnstile.render("#cf-turnstile", {
          sitekey: "0x4AAAAAAA_eaDkiLVUQBCGg",
          theme: "light",
        });
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = document.querySelector(
            "input[name='cf-turnstile-response']"
        )?.value;
        if (!token) {
            alert("Please complete the CAPTCHA");
            return;
        }
        setIsSubmitting(true);
        const formData = new FormData(e.target);
        const data = {
            "Contact Name": formData.get("contactName"),
            "Company Name": formData.get("companyName"),
            "Country": formData.get("country"),
            "Email": formData.get("email"),
            "Phone": `${formData.get("countryCode")}${formData.get("phone")}`,
            "Services": formData.get("services"),
            "Issue Faced": formData.get("issueFaced"),
            "cf_token": token,
        };

        const queryString = new URLSearchParams(data).toString();
        const webhookUrl = `https://sreyasteam.app.n8n.cloud/webhook/formsubmission?${queryString}`;

        try {
            const response = await fetch(webhookUrl, { method: "GET" });

            if (response.ok) {
                alert("Form submitted successfully!");
                setIsOpen(false);
                e.target.reset();
            } else {
                alert("Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again..");
        } finally {
            setIsSubmitting(false);
        }
    };


    if (fieldNames.length==0) return null;
     
    return (
        <div
            className="fixed top-0  left-0 w-full p-5 z-[1000] h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm lg:p-4"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
            <div className="relative w-full  max-w-[650px] lg:max-w-[700px] rounded-2xl shadow-xl bg-white overflow-hidden">
                <div className="max-h-[85vh] overflow-y-auto scrollbar-hide px-6 py-8 md:px-12 md:py-10">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex  justify-center mb-6">
                        <Image
                            src={fieldNames?.logo?.url}
                            alt="Carelabs Logo"
                            className="h-8 w-auto object-contain"
                            width={128}  
                            height={32} 
                            priority      
                            fetchPriority="high"
                            quality={70}  
                            />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                        {fieldNames?.heading}
                    </h2>

                    <p className="text-center text-sm text-gray-600 mb-6"
                        dangerouslySetInnerHTML={{ __html: fieldNames.subheading }}
                    >
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Contact Form Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    {fieldNames?.form_fields[0]?.label} {fieldNames?.form_fields[0]?.required && <span className="text-red-500">*</span>}
                                </label>
                                <input
                                    type="text"
                                    name="contactName"
                                    placeholder={fieldNames?.form_fields[0]?.placeholder}
                                    required
                                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    {fieldNames?.form_fields[1]?.label} {fieldNames?.form_fields[1]?.required && <span className="text-red-500">*</span>}
                                </label>
                                <input
                                    type="text"
                                    name="Company Name"
                                    placeholder={fieldNames?.form_fields[1]?.placeholder}
                                    required
                                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>



                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                {/** Get the field dynamically */}
                                {fieldNames?.form_fields[2] && (
                                    <>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                            {fieldNames.form_fields[2].label}{" "}
                                            {fieldNames.form_fields[2].required && (
                                                <span className="text-red-500">*</span>
                                            )}
                                        </label>

                                        <div className="relative">
                                            <select
                                                name={fieldNames.form_fields[2].label
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "_")}
                                                required={fieldNames.form_fields[2].required}
                                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white appearance-none pr-10 transition-colors"
                                            >
                                                <option value="">
                                                    {fieldNames.form_fields[2].placeholder ||
                                                        `Select ${fieldNames.form_fields[2].label}`}
                                                </option>

                                                {fieldNames.form_fields[2].options?.map((opt, idx) => (
                                                    <option key={idx} value={opt.options_name}>
                                                        {opt.options_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    {fieldNames?.form_fields[3]?.label} {fieldNames?.form_fields[3]?.required && <span className="text-red-500">*</span>}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={fieldNames?.form_fields[3]?.placeholder}
                                    required
                                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                                />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    {fieldNames?.form_fields[4]?.label} {fieldNames?.form_fields[4]?.required && <span className="text-red-500">*</span>}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        name="countryCode"
                                        defaultValue="+1"
                                        className="w-14 px-2 py-2.5 text-sm text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder={fieldNames?.form_fields[4]?.placeholder}
                                        required
                                        className="flex-1 px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    {fieldNames?.form_fields[5]?.label} {fieldNames?.form_fields[5]?.required && <span className="text-red-500">*</span>}
                                </label>
                                <input
                                    type="text"
                                    name="services"
                                    placeholder={fieldNames?.form_fields[5]?.placeholder}
                                    required
                                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                {fieldNames?.form_fields[6]?.label} {fieldNames?.form_fields[6]?.required && <span className="text-red-500">*</span>}
                            </label>
                            <textarea
                                name="issueFaced"
                                placeholder={fieldNames?.form_fields[6]?.placeholder}
                                rows={4}
                                required
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 resize-none focus:border-orange-500 focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                {fieldNames?.form_fields[7]?.label} {fieldNames?.form_fields[7]?.required && <span className="text-red-500">*</span>}
                            </label>

                            <div className="w-full flex justify-center">
                                {/* <div
                                    className="cf-turnstile mt-4"
                                    data-sitekey="0x4AAAAAAA_eaDkiLVUQBCGg"
                                    data-theme="light"
                                    id="cf-captcha"
                                ></div> */}
                                <div id="cf-turnstile"></div>

                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full text-white font-semibold py-3 rounded-md transition-colors duration-200 mt-6 ${isSubmitting
                                ? "bg-orange-300 cursor-not-allowed"
                                : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                                }`}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default ContactPopupModal;
