"use client"
import Aos from 'aos';
import React, { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight, } from 'lucide-react';


const HomeTestimonials = ({data}) => {

  const [testimonialData, setTestimonialData] = useState(null)
  const [current, setCurrent] = useState(0);
 

  useEffect(()=> {
    setTestimonialData(data);
  },[]);

  useEffect(() => {
      Aos.init({ 
        once: true,     
      });
  }, []);

  if(!testimonialData) return null

  const testimonials = testimonialData.testimonials || [];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  return (
    <div>
        <div className="text w-full h-auto flex flex-col items-center justify-center mt-40 lg:mt-60">

    <div  
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"
    className="quotes w-11/12 sm:w-4/5 xl:w-[80%] flex items-center justify-center text-center flex-col gap-5 p-4 -mt-7 ">
    
    {/* Heading */}
    <h1 className="text-xs flex items-center justify-center gap-2 sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#157de5] poppins-font">
        <div className="text-[#157de5]">
              <Quote size={18} />
          </div>
        {testimonialData.badge}
      </h1>
    
    {/* Title */}
    <p className=" w-full py-4  font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] montserrat-font"
       dangerouslySetInnerHTML={{ __html: testimonialData.title }}
    >
        {/* {testimonialData.title} */}
    </p>
    
    {/* Description */}
    <p className="px-4 sm:px-8 text-base sm:text-lg md:text-xl text-[#65758B] poppins-font">
        {/* See what our clients say about working with Carelabs for their electrical safety and compliance needs. */}
        {testimonialData.description}
    </p>

    </div>

        </div>

     <div className="w-full flex justify-center py-16">
      <div 
       data-aos="fade-up"
     data-aos-anchor-placement="top-center"
      //className="bg-white rounded-[24px] card-shadow  w-[90%] md:w-[80%] 2xl:w-[65%] p-20 lg:p-10 2xl:p-20 text-center relative"
      className="
      bg-white rounded-[24px] 
      w-[90%]          
      sm:w-[85%]      
      md:w-[75%]       
      lg:w-[70%]       
      2xl:w-[60%]      
      p-20 lg:p-10 2xl:p-20 
      text-center relative
      border border-[#0F172A]/10
      shadow-[0_24px_60px_rgba(15,23,42,0.08)]
    "

      >
        
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#E9EDF5] flex items-center justify-center">
            <span className="text-3xl text-[#307FE2]">
             <Quote size={32} strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* Testimonial Text */}

        {/* <div className="min-h-[140px] md:min-h-[170px] flex items-center justify-center">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed poppins-font">
        {testimonials[current]?.feedback}
        </p>
       </div> */}

<div className="min-h-[140px] md:min-h-[170px] flex items-center justify-center">
  <div
    key={current} 
    className="opacity-0 animate-feedbackFade md:max-w-[700px] text-center px-4 md:px-0"
  >
    <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed poppins-font ">
      {testimonials[current]?.feedback}
    </p>
  </div>

  <style>{`
    @keyframes feedbackFade {
      0%   { opacity: 0; transform: translateY(10px); }
      80%  { opacity: 1; transform: translateY(0px); }
      100% { opacity: 1; transform: translateY(0px); }
    }
    .animate-feedbackFade {
      animation: feedbackFade 0.5s ease-out forwards;
    }
  `}</style>
</div>


        {/* Name + Position */}

        
        <div className="mt-6">
            <p className="font-bold text-lg poppins-font">{testimonials[current]?.name}</p>
            <p className="text-[14px] text-gray-500 poppins-font">
              {testimonials[current]?.position}
            </p>
            <p className="text-[12px] text-blue-600 poppins-font">
              {testimonials[current]?.company}
            </p>
          </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition cursor-pointer"
            onClick={prevSlide}

            style={{
            borderColor: "#307FE2",
            color: "#307FE2"
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          
          </button>

          {/* Dot Indicators */}

          <div className="flex gap-2">
  {testimonials.map((_, index) => {
    const isActive = current === index;

    return (
      <span
        key={index}
        className={`
          rounded-full transition-all duration-300
          ${isActive ? "active-pill" : "inactive-dot"}
        `}
      ></span>
    );
  })}
</div>

<style>{`
  .inactive-dot {
    width: 8px;
    height: 8px;
    background-color: #d1d5db;
  }

  .active-pill {
    width: 24px;  
    height: 8px;
    background-color: #307FE2; 
  }
`}</style>


          <button
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 transition cursor-pointer"
            onClick={nextSlide}
            style={{
            borderColor: "#307FE2",
            color: "#307FE2"
            }}
            aria-label="Next slide"
          >
              <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default HomeTestimonials
