"use client";
import { ChevronDown, Globe, Mail, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import client from "@/lib/appollo-client";
import { GET_REGIONS } from "@/lib/api-Collection";
import { useRegions } from "@/lib/regionContext";

const RegionModal = ({ setIsModalOpen }) => {
  console.log("OpenModals",setIsModalOpen);
  
  const router = useRouter();
  const { regions, loading } = useRegions();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const initialized = useRef(false);



   useEffect(() => {
      if (!initialized.current && !loading && regions.length) {
      initialized.current = true;
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      const currentLocale = pathParts[0] || "";
      const matchedRegion = regions.find(r => r.language === currentLocale);
      const defaultRegion = matchedRegion || regions.find(r => r.isDefault) || regions[0];
      setSelectedRegion(defaultRegion.name);
    }
  }, [loading, regions]);

  
  // Change region
  const handleSelectRegion = (region) => {
    setSelectedRegion(region.name);
    setIsDropdownOpen(false);
    setIsModalOpen(false);

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/").filter(Boolean);
    const knownLocales = regions.map((r) => r.language).filter(Boolean);

    // remove old locale
    if (knownLocales.includes(pathParts[0])) pathParts.shift();

    // build new path
    const newPath = region.language
      ? `/${region.language}/${pathParts.join("/")}`
      : `/${pathParts.join("/")}`;
      console.log("new",newPath);
      
    router.push(newPath);
  };


    if(!regions) return null;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
    >
      <div className="relative w-[90%] md:w-[70%] lg:w-[30%] rounded-2xl shadow-xl p-6 bg-white">
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl text-gray-500 hover:text-black hover:bg-gray-100"
        >
          <X size={24} />
        </button>

        <div className="text-center flex flex-col items-center justify-center xl:flex-row gap-2 mb-6">
          <Globe size={24} className="xl:mt-2 text-blue-600 mb-3" />
          <h2 className="text-xl font-semibold">Explore Carelabs in your region</h2>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-white border border-gray-300 rounded-full px-4 py-3 pr-10 flex justify-between items-center"
          >
            {selectedRegion || "Select a region"}
            <ChevronDown
              className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && regions &&(
            <ul className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border overflow-y-auto max-h-60 z-10">
              {regions.map((region) => (
                <li
                  key={region.name}
                  onClick={() => handleSelectRegion(region)}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {region.name} ({region.language || "global"})
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="text-center text-sm text-gray-600 p-3">
          You're viewing: <span className="font-semibold">{selectedRegion || "site"}</span>
        </p>

        <div className="flex items-center justify-center gap-2">
          <p className="text-sm">
            {
              regions.find((r) => r.name === selectedRegion)?.siteUrl ||
              "Go to: www.carelabs.com"
            }
          </p>
          <Mail size={14} />
        </div>
      </div>
    </div>
  );
};

export default RegionModal;
