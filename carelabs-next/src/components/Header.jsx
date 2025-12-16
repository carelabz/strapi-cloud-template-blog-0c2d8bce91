"use client";
import { GET_NAVBAR } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import { ChevronDown,Moon,ArrowRight, Menu, X, Globe} from 'lucide-react';
import React, { useEffect, useState } from 'react'
import RegionModal from '../components/Modal/RegionModal';
import Link from 'next/link';
import { clientIcons } from "@/lib/clientIcons";
import { useParams, useRouter } from "next/navigation";
import { useLocalizedNavigate } from '@/lib/navigation';
import ContactPopupModal from './Modal/ContactPopupModal';
import Image from 'next/image';


const Header = () => {


  const [navbarData, setNavbarData] = useState();
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSubmenuIndex, setSelectedSubmenuIndex] = useState(0);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Global");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoUrl, setLogoUrl] = useState("https://inspired-gem-f09bdfaddd.media.strapiapp.com/carelab_logo_7d51f198e5.png");

  const router = useRouter();
  const navigate = useLocalizedNavigate();
  const params = useParams(); // Next.js hook
  const currentLocale = params?.locale || ""; // default locale

  const activeSubmenu =
    navbarData?.items?.[activeIndex]?.submenus?.[selectedSubmenuIndex];
  const ActiveIcon = activeSubmenu ? clientIcons[activeSubmenu.icon] : null;



  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };


  const openMobilemenus = () => {
    console.log("TETEE");

    setOpenMobileMenu(!openMobileMenu);
  }




  const fetchNavbarData = async () => {
    try {
      const res = await client.query({
        query: GET_NAVBAR,
      });

      const allSlugs =
        res.data.navbar.items
          ?.flatMap(item => item.submenus || [])
          ?.map(sub => sub.slug);
      setNavbarData(res.data.navbar);
      setLogoUrl(res.data.navbar.Logo?.url || logoUrl);

    } catch (err) {
      console.log("Error fetching navbar data:", err);
    }
  }


  useEffect(() => {
    fetchNavbarData();

    // if (typeof window !== "undefined") {
    //   window.openContactModal = () => setIsContactModalOpen(true);
    // }


  }, []);

  //cloudFlare
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [])

  useEffect(() => {
    if (isContactModalOpen) {
      setTimeout(() => {
        if (window.turnstile) {
          window.turnstile.render("#cf-captcha", {
            sitekey: "0x4AAAAAAA_eaDkiLVUQBCGg",
            theme: "light",
          });
        }
      }, 100);
    }
  }, [isContactModalOpen]);


  if (!navbarData) {
    return (
      <div className="w-full bg-gray-100 flex items-center justify-center h-[80px] gap-3 p-2">
        <div className="w-[10%] h-full rounded-md bg-gray-300 animate-pulse"></div>
        <div className="w-[60%] h-full rounded-md bg-gray-300 animate-pulse"></div>
        <div className="w-[20%] h-full rounded-md bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  //slugmethod 
  const currentItem = navbarData?.items?.[activeIndex] ?? null;
  const currentSubmenu = currentItem?.submenus?.[selectedSubmenuIndex] ?? null; 
  const isBlogMenu = currentItem?.label === "Insights Hub";

  const targetSlug = isBlogMenu
    ? `/blogs/${currentSubmenu?.slug}`
    : `/services/${currentSubmenu?.slug}`;

  return (
    <>
      <div className="headCvr w-full h-[80px] flex items-center justify-center navbar-shadow fixed z-50 header-background">
        <div className="header w-full  h-full flex items-center justify-between lg:justify-center  2xl:p-3 ">
          <div className="logo flex item center justify-center w-[50%] sm:w-[40%]  lg:w-[22%] ">
            <Link href={currentLocale ? `/${currentLocale}/` : "/"}>
              <Image
                className="p-3  lg:w-[75%] object-contain"
                // src={navbarData.Logo?.url}
                src={logoUrl}
                alt="Logo"
                width={400}
                height={100}
                priority   
                />
            </Link>
          </div>

          <div className="menuList hidden lg:flex lg:w-[60%] xl:w-[38%] lg:justify-center h-full ">
            <ul className='flex text-[14px] font-medium justify-evenly items-center gap-6 w-[95%] p-3'>
              {navbarData.items.map((item, index) => (


                <li
                  key={item.id}
                  className="relative flex items-center lg:gap-0 2xl:gap-2 cursor-pointer group hover:text-[#1f7fdb] transition-colors duration-300"
                  onMouseEnter={() => {
                    if (item.submenus?.length > 0) {
                      setActiveIndex(index);
                      setSelectedSubmenuIndex(0);
                    }
                  }}
                  onClick={() => {
                    if (!item.submenus || item.submenus.length === 0) {
                      setActiveIndex(null);
                      setSelectedSubmenuIndex(0);
                      // window.location.href = item.link || "/";
                      navigate(item.link || "/");
                    }
                  }}
                >
                  {item.label}

                  {/* Only show chevron for first 3 items */}
                  {index < 3 && item.submenus?.length > 0 && (
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180"
                    />
                  )}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1f7fdb] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

          </div>


          <div className="nav-Container h-full flex items-center gap-5
            lg:justify-center lg:w-[30%] lg:gap-3
            2xl:justify-end 2xl:pe-[5%]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="global hidden sm:flex items-center justify-center gap-2 px-2 py-2 rounded-4xl border border-gray-300 hover:border-blue-400 w-24"
              aria-label="Select region"
            >

              <Globe size={16} />
              <p className="text-[14px] font-medium">{navbarData?.regionSelector}</p>
            </button>


            <div className="mob-global flex sm:hidden">
              <button onClick={() => setIsModalOpen(true)} aria-label="Select region">
                <Globe/>
              </button>
            </div>

            {isModalOpen && <RegionModal setIsModalOpen={setIsModalOpen} />}


            {/* <div className="theme hidden">
              <button className='bg-[#2575B626] border border-[#2575b64d]  w-[50px] h-[50px] flex items-center justify-center sm:p-3 rounded-full '>
                <a href="/services" style={{ color: "#2575b6" }}> <Moon /></a>
              </button>
            </div> */}


            <div className="nav-bttn hidden lg:flex justify-center items-center rounded-md xl:w-[35%] 2xl:w-[45%] bg-[#157de5]">
              <button className="text-sm lg:py-[10px] lg:px-3 cursor-pointer" onClick={() => navigate(navbarData.buttonlink)}>
                <span className="text-[14px] text-white font-medium">
                  {navbarData?.buttontext}
                </span>
              </button>

              <ContactPopupModal
                isOpen={isContactModalOpen}
                setIsOpen={setIsContactModalOpen}
              />
            </div>




           <div
              className="menu-bar h-full flex items-center justify-center p-2 z-[999] lg:hidden"
              onClick={openMobilemenus}
            >
             {openMobileMenu ? (
                  <X size={30}  strokeWidth={2.5}  color="#000000" />
                ) : (
                  <Menu size={30} color="#000000"  strokeWidth={2.5}  />
                )}

            </div>

          </div>

        </div>
      </div>


      {activeIndex !== null &&
        navbarData.items[activeIndex]?.submenus?.length > 0 && (
          <div className="sub-menu-cards absolute top-[80px] w-full flex justify-center z-50"
          >

            <div className="w-[65%] h-[500px] bg-white mt-2 rounded-2xl hidden lg:flex items-center justify-evenly p-6 navbar-shadow fixed"
              onMouseLeave={() => setActiveIndex(null)}>

              {/* LEFT SECTION */}
              <div className="w-[35%] h-full">
                <h2 className="font-bold text-sm text-[#111827] mb-3">
                  {navbarData.items[activeIndex].heading}
                </h2>

                {navbarData.items[activeIndex].submenus.map((submenu, index) => {
                  const IconComponent = clientIcons[submenu.icon];
                  return (
                    <div
                      key={submenu.id}
                      className={`flex items-center gap-3 p-3 rounded-l-2xl cursor-pointer
                          ${selectedSubmenuIndex === index ? "border-l-4 border-[#157de5]" : ""}`}
                      onClick={() => setSelectedSubmenuIndex(index)}
                    >

                      {IconComponent && (
                        <IconComponent
                          style={
                            selectedSubmenuIndex === index
                              ? { animation: "blink 0.25s infinite" }
                              : {}
                          }
                          className={`w-5 h-5 
                              ${selectedSubmenuIndex === index
                              ? "text-[#FF7038] blink"
                              : "text-[#157de5]"
                            }`}
                        />
                      )}

                      <div>
                        <h3 className="font-semibold">{submenu.title}</h3>
                        <p className="text-sm text-gray-600">View Details</p>
                      </div>

                    </div>
                  );
                })}


              </div>

              {/* RIGHT SECTION */}
              <div className="w-[55%] h-full card-shadow rounded-2xl">

                <div className="p-5 flex flex-col h-full justify-between">

                  <div className=" w-full flex items-center gap-3">
                    {ActiveIcon && (
                      <ActiveIcon className="w-5 h-5 text-[#157de5]" />
                    )}
                    <h3 className="text-[14px] w-[15%] text-center p-1 rounded-full text-blue-600 bg-blue-200">{navbarData.items[activeIndex].badge}</h3>
                  </div>


                  <div className="py-4">
                    <p className="text-2xl font-bold  text-black">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].title}</p>
                    <hr className="w-[15%] rounded-full h-1 mt-1 gradient-bg border-none" />
                  </div>


                  <p className="text-sm  text-gray-600 py-4">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].subtitle}</p>

                  <div className="py-5">
                    <p className="text-sm font-bold  text-gray-800">{navbarData.items[activeIndex].submenus[selectedSubmenuIndex].featureheading}</p>
                    {navbarData.items[activeIndex].submenus[selectedSubmenuIndex].features.map((feature) => (
                      <div key={feature.id} className="flex items-center gap-2 mt-2">
                        <i className="fa-solid fa-circle fa-2xs text-blue-500"></i>
                        <p className="text-sm text-gray-600">{feature.name}</p>
                      </div>
                    ))}
                  </div>

                  {/* <Link 
                        href={`/services/${navbarData.items[activeIndex].submenus[selectedSubmenuIndex].slug}`}
                        className="group relative inline-flex items-center justify-center bg-[#157de5] text-white text-[14px] font-semibold py-2 px-4 rounded-full w-[45%] text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#157de5] hover:to-[#ff7038] hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
                      >
                        <span className="flex items-center gap-2">
                          {navbarData.items[activeIndex].submenus[selectedSubmenuIndex].Button}
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link> */}

                  <Link href={targetSlug} className="relative inline-flex items-center justify-center bg-[#157de5] text-white text-[14px] font-semibold py-2 px-4 rounded-full w-[45%] text-center hover:bg-gradient-to-r hover:from-[#157de5] hover:to-[#ff7038] hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105">
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      {currentSubmenu?.Button}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>

                  {/* <Link
                        //href={finalURL}
                        className="group relative inline-flex items-center justify-center bg-[#157de5] text-white text-[14px] font-semibold py-2 px-4 rounded-full w-[45%] text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#157de5] hover:to-[#ff7038] hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
                      >
                        <span className="flex items-center gap-2">
                          {submenu.Button}
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link> */}


                </div>

              </div>

            </div>

          </div>
        )
      }


      {/* Mobile Bar  Menus */}
      {openMobileMenu && (
        // <div className="w-full h-max bg-white  fixed flex items-center top-[80px] z-[1000] justify-center p-3 lg:hidden">
        <div className="fixed top-[80px] left-0 w-full  bg-white z-[1000] flex justify-center items-start p-4 lg:hidden transform-gpu shadow-xl"
         style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
  >
          <div className=" w-[90%] h-[90%] rounded-2xl p-4 md:w-[80%] md:flex md:justify-center md:flex-col md:items-center">
            <ul className="w-full">
              {navbarData.items.map((item, index) => (
                <li key={item.id} className="border-b-[1px] rounded-b-xl  border-[#65758b] p-4 mt-2 card-shadow">

                  {/* MAIN MENU BUTTON */}
                  <div
                    className="flex justify-between items-center cursor-pointer px-2"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <span className="montserrat-font font-light text-[16px]">{item.label}</span>

                    {item.submenus?.length > 0 && (
                      <ChevronDown
                        className={`transition-transform ${activeIndex === index ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </div>

                  {/* SUB-MENUS */}
                  {activeIndex === index &&
                    item.submenus?.length > 0 && (
                      <ul className="mt-2 pl-4 space-y-2">
                        {item.submenus.map((submenu) => (
                          <li key={submenu.id}>
                            <Link
                              href={
                                item.label === "Insights Hub"
                                  ? `/blogs/${submenu.slug}`
                                  : `/services/${submenu.slug}`
                              }
                              className="block montserrat-font font-semibold hover:primary-color py-2 text-[14px] text-gray-600 hover:text-blue-500"
                              onClick={() => setOpenMobileMenu(false)}
                            >
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                </li>
              ))}
            </ul>


            <div className="w-full flex items-center justify-center py-4 mt-4">
              {/* <button className="bg-blue-500 w-full md:w-[80%] p-2 rounded-lg" onClick={() => setIsContactModalOpen(true)}>
                <a
                  href={navbarData?.buttonlink}
                  className="text-[14px] text-white p-3"
                >
                  {navbarData?.buttontext}
                </a>
              </button> */}
              <button
                className="bg-blue-500 w-full md:w-[80%] p-3 rounded-lg text-[14px] text-white"
                // onClick={() => setIsContactModalOpen(true)}
                >
              {navbarData?.buttontext}
              </button>

              {/* <ContactPopupModal
                isOpen={isContactModalOpen}
                setIsOpen={setIsContactModalOpen}
              /> */}
            </div>
          </div>
        </div>
      )}

  




    </>


  )
}

export default Header
