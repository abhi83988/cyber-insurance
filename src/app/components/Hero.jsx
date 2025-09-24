"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonSection from "./wrapping/AnimateButton";
import HeroRightImages from "./RightAnimate";
import "react-multi-carousel/lib/styles.css"
import HeroRightSection from "./HeroRightSection";
 
const Hero = () => {
 
 
 
  // const texts = [
  //   "Instant payments",
  //   "No chargebacks",
   
  //   "Lower transaction fees",
  //   "Seamless experience",
  //   "Increase conversions",
  // ];
 
const texts = [
  "Boost Cyber Score",
  "Negotiate Premiums",
  "Benchmark Your SME",
  "Reduce Coverage Risk",
  "Understand Insurability"
];
 
 
const transactionCards = [
  { title: "Instant Report" },
  { title: "No Credit Card Info Required" },
  { title: "Get Actionable Steps to Improve Your Security" },
  { title: "Discover How Much Cyber Coverage You May Need" },
  { title: "Qualify For Cheaper Insurance" },
];
const cardColors = [
  "bg-pink-100",   // light pink
  "bg-blue-100",   // light blue
  "bg-orange-100", // light orange
  "bg-green-100",  // light green
];
 
 
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 4 },
  desktop: { breakpoint: { max: 1400, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};
 
 
 
 
 
  const [index, setIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);
 
  return (
    <div className="block">
 
 
    <section className="w-full py-[12rem] bg-white flex items-center justify-center px-2 sm:px-6 lg:px-4 overflow-x-hidden">
 
 
        <div className="max-w-12xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">
       
        {/* LEFT TEXT */}
        <div className="flex-1 lg:flex-[0_0_50%] space-y-4 sm:space-y-5 md:space-y-6
                    pr-2 sm:pr-4 md:pr-4 lg:pr-10 pl-2 sm:pl-4 md:pl-6 lg:pl-10 max-w-full">
 
 
 
               
         
          {/* Animated headline */}
<div className="relative max-w-[1380px] mb-4">
  <AnimatePresence mode="wait">
    <motion.h1
      key={index}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="
        hero-heading  
        w-full
        text-[3rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[3.8rem] xl:text-[4.2rem]
        font-normal
        leading-[1.1] md:leading-[1.1] lg:leading-[1.03]
        tracking-[-0.02em]
        text-[#2d1f6b]
        whitespace-normal break-words
      "
    >
      {texts[index]}
    </motion.h1>
  </AnimatePresence>
</div>
 
 
 
          {/* Highlight heading */}
        <h1
  className=" hero-heading relative text-[2.8rem] md:text-[3.5rem] xl:text-[4.4rem]
             
             font-normal leading-[1] tracking-[-0.03em] text-gray-900 whitespace-nowrap max-[480px]:whitespace-normal break-words "
>
       with{" "}
            <span   className="relative inline-block text-[2.8rem] md:text-[3.5rem] xl:text-[4.9rem]
             ">
           Lexi Rating™
              <svg
                className="absolute left-0 bottom--1 w-full h-6"
                viewBox="0 0 448 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802C356.34 14.6774 368.152 14.4647 374.62 13.754"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="butt"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
                <motion.path
                  d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428C262.309 8.17355 340.509 5.23404 418.755 4.25167C427.273 4.14472 452.789 3.54451 444.281 3.07897"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="butt"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                />
              </svg>
            </span>
          </h1>
 
          {/* Description */}
         <div className="w-full md:w-[70%]">
  <p className="text-[#52606d] text-[1.1rem] sm:text-[1.15rem] md:text-[1.2rem] lg:text-[1.25rem]
                leading-[1.5]">
SMEs without a Lexi Rating™ may face higher premiums or outright denials.Before you apply for cyber insurance, know exactly how you’ll be judged. Get your Lexi Rating now - See what insurers see, before they do!
  </p>
</div>
 
          <ButtonSection />
        </div>
 
        {/* RIGHT VISUALS */}
 
<div className="w-full lg:flex-[0_0_50%] relative mt-6 lg:mt-0 flex-grow lg:mr-8">
 
    {/* <HeroRightSection /> */}
    <HeroRightImages />
 
</div>
 
 
         
         
 
 
 
       
       
 
      </div>
    </section>
 
 
    <section className="w-full bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
 
      {/* LEFT HEADING */}
      <div className="w-full md:w-[30%] mb-4 md:mb-0">
        <h2 className="text-[1rem] sm:text-[1rem] font-semibold text-[#2d1f6b]">
          Trusted by 2000+ Banks<br />in 50 Countries and counting...
        </h2>
      </div>
 
      {/* RIGHT MARQUEE */}
      <div className="w-full md:w-[70%] relative overflow-hidden">
        <div className="flex animate-marquee gap-4 w-max">
          {[...transactionCards, ...transactionCards].map((card, idx) => {
            const colorClass = cardColors[idx % cardColors.length];
            return (
              <div
                key={idx}
                className={`${colorClass} shadow-md rounded-lg px-4 py-6 w-[400px] h-[90px] flex-none flex items-center justify-center`}
              >
                <h3 className="text-[0.9rem] sm:text-[1rem] text-[#2d1f6b] text-center">
                  {card.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
 
  {/* Keyframes for marquee */}
  <style jsx>{`
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      animation: marquee 20s linear infinite;
    }
  `}</style>
</section>
 
 
    </div>
  );
};
 
export default Hero;
 