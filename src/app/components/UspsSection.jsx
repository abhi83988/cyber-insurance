"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import ButtonSection from "./button";
import { CircleCheckBigIcon, BlendIcon, BoltIcon} from './icons/BringToFrontIcon'

gsap.registerPlugin(ScrollTrigger);

export default function UspsSection() {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024); // Only desktop (lg+)
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const [card1, card2, card3] = cardRefs.current;

    // Set initial state once without opacity conflict
    gsap.set([card1, card2, card3], {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0
    });

    // CARD 1 - Single timeline approach
    let card1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card1,
        start: "top 65%",
        end: "top 20%",
        scrub: 1,
      }
    });

    card1Timeline
      .fromTo(card1,
        { x: 400, opacity: 0, rotate: 0 },
        { x: 0, opacity: 1, rotate: 0, duration: 0.5 }
      )
      .to(card1,
        { x: 50, rotate: -10, scale: 0.9, duration: 0.5 }
      );

    // CARD 2 - Single timeline approach  
    let card2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card2,
        start: "top 60%",
        end: "top 15%",
        scrub: 1,
      }
    });

    card2Timeline
      .fromTo(card2,
        { x: 450, opacity: 0, scale: 0.8, rotate: 8 },
        { x: 300, opacity: 1, rotate: 0, scale: 0.85, duration: 0.5 }
      )
      .to(card2,
        { x: -100, rotate: 0, zIndex: 10, scale: 1, duration: 0.5 }
      );

    // CARD 3 - Single timeline approach
    let card3Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card3,
        start: "top 55%",
        end: "top 10%",
        scrub: 1,
      }
    });

    card3Timeline
      .fromTo(card3,
        { x: 480, opacity: 0, rotate: 0 },
        { x: 400, opacity: 1, scale: 0.9, rotate: 0, duration: 0.5 }
      )
      .to(card3,
        { x: -180, scale: 1.01, rotate: 10, zIndex: 30, duration: 0.5 }
      );

    // Cleanup function
    return () => {
      card1Timeline.kill();
      card2Timeline.kill();
      card3Timeline.kill();
    };

  }, [isDesktop]);


  return (
    <div className="relative mx-3 md:mx-6 lg:mx-7 2xl:mx-18 my-40 bg-[#DFC9C0] rounded-4xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-start lg:space-x-8">

      {/* Mobile/Tablet Layout (up to md) */}
      <div className="lg:hidden">
        {/* Header Section */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <h1 className="relative text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] leading-[1.1] tracking-[-0.02em] text-black">
            Tired of paying high{" "}
            <span className="relative inline-block">
              Card fees?
              <svg className="absolute left-0 -bottom-1 w-full h-3 sm:h-4 md:h-5" viewBox="0 0 448 26" fill="none">
                <motion.path
                  d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802"
                  stroke="#8247FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="301"
                  strokeDashoffset="301"
                  initial={{ strokeDashoffset: 301 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428"
                  stroke="#8247FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="446"
                  strokeDashoffset="446"
                  initial={{ strokeDashoffset: 446 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                />
              </svg>
            </span>
          </h1>

          <div className="mt-4 sm:mt-6">
            <ButtonSection text="Get started" />
          </div>
        </div>

        {/* Cards Grid - Mobile/Tablet */}
        <div className="grid grid-cols-1 md:hidden">
          {/* Card 1 */}
          <div className="relative aspect-square bg-[#F1D9D0] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between">
            <div className="relative flex flex-col justify-end items-start mb-3 flex-1">
              <CircleCheckBigIcon size={90} className="text-black" />
              {/* <div className="bg-deep rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 scale-[1.077]"></div>
              <div className="backdrop-blur-md bg-[#1f293333] rounded-b-[300px] w-[10em] sm:w-[12em] md:w-[14em] h-[5em] sm:h-[6em] md:h-[7em] -rotate-[23.65deg] relative scale-[0.88]"></div> */}
            </div>
            <div className="z-10 relative">
              <h3 className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] font-normal leading-[1.3] mb-1.5 sm:mb-2 text-black">Balance</h3>
              <p className="text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] opacity-60 text-black">
                are denied cyber insurance
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-square bg-[#F1D9D0] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between">
            <div className="flex flex-col justify-end items-start relative mb-3 flex-1">
                <BlendIcon size={90} className="text-black" />
              {/* <div className="bg-deep rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 scale-[1.13]"></div>
              <div className="bg-[#1f293333] rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative scale-[0.87] backdrop-blur-md"></div> */}
            </div>
            <div className="z-10 relative">
              <h3 className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] font-normal leading-[1.3] mb-1.5 sm:mb-2 text-black">Transactions</h3>
              <p className="text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] opacity-60 text-black">
                of cyberattacks target SMEs
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative aspect-square bg-[#F1D9D0] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between sm:col-span-2 md:col-span-1">
            <div className="relative flex flex-col justify-end items-start mb-3 flex-1">
               <BoltIcon size={90} className="text-black" />
              {/* <div className="absolute top-[20%] left-[8%] w-[6em] sm:w-[7em] md:w-[8em] h-[4.5em] sm:h-[5.25em] md:h-[6em] bg-[url('https://cdn.prod.website-files.com/63ce8fdfb773bb355dff79ca/63e60db5e8930fbe4b2eabab_bank-details.s… bg-cover z-20"></div>
              <div className="relative w-[6em] sm:w-[7em] md:w-[8em] h-[4.5em] sm:h-[5.25em] md:h-[6em] bg-[#1f293333] backdrop-blur-md z-10"></div> */}
            </div>
            <div className="z-10 relative">
              <h3 className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] font-normal leading-[1.3] mb-1.5 sm:mb-2 text-black">Bank account details</h3>
              <p className="text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] opacity-60 text-black">
               shut down within 6 months of a cyber incident
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg and above) - With Animations */}
      <div className="hidden md:flex md:flex-col lg:flex-row xl:flex-row xl:items-start xl:space-x-8">
        {/* Left Section */}
        <div className="flex flex-col items-start lg:w-full xl:w-1/3 mb-8 xl:mb-0">
          <h1 className="relative text-[2.8rem] lg:text-[3.2rem] xl:text-[3.7rem] 2xl:text-[4.6rem] font-normal leading-[1] tracking-[-0.03em] text-black whitespace-nowrap box-border">
            Tired of paying high <br />
            <span className="relative inline-block">
              Card fees?
              <svg className="absolute left-0 top-12 bottom--1 w-full h-6" viewBox="0 0 448 26" fill="none">
                <motion.path
                  d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="301"
                  strokeDashoffset="301"
                  initial={{ strokeDashoffset: 301 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="446"
                  strokeDashoffset="446"
                  initial={{ strokeDashoffset: 446 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                />
              </svg>
            </span>
          </h1>

          <div className="mt-4 lg:mt-5 xl:mt-5 2xl:mt-7">
            <ButtonSection text="Get started" />
          </div>
        </div>

        {/* Right Section: Cards with Animations */}
        <div className="flex flex-col md:flex md:flex-row xl:space-x-4 space-y-6 lg:space-y-0 xl:space-y-0 lg:w-full xl:w-2/3">
          {/* Card 1 */}
          <div
            ref={addToRefs}
            className="relative flex flex-col justify-between border-0 border-black bg-[#F1D9D0] rounded-2xl p-8 lg:p-6 xl:p-8 2xl:p-10 w-full transform origin-[100%] lg:aspect-square xl:aspect-auto xl:h-auto lg:-rotate-[6deg] lg:scale-[0.85] xl:scale-[1]"
          >
            <div className="relative flex flex-col justify-end items-start mb-4 lg:flex-1 xl:flex-none">
               <CircleCheckBigIcon className="text-black w-16 sm:w-20 md:w-24 lg:w-28" />
              {/* <div className="bg-deep rounded-full w-20 h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 relative top-10 lg:top-8 xl:top-12 left-10 lg:left-8 xl:left-12 scale-[1.077]"></div> */}
              {/* <div className="backdrop-blur-md bg-[#1f293333] rounded-b-[300px] w-[14em] lg:w-[12em] xl:w-[16.88em] h-[7em] lg:h-[6em] xl:h-[8.44em] -rotate-[23.65deg] relative scale-[0.88]"></div> */}
            </div>
            <div className="lg:z-10 lg:relative">
              <h3 className="text-[1.8em] lg:text-[1.4em] xl:text-[2em] 2xl:text-[2.63em] font-normal leading-[1.3] mb-2.5 text-black">33%</h3>
              <p className="text-[1em] lg:text-[0.8em] xl:text-[1em] 2xl:text-[1.25em] opacity-60 text-black">
                are denied cyber insurance
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={addToRefs}
            className="relative flex flex-col justify-between border-0 border-black bg-[#F1D9D0] rounded-2xl p-8 lg:p-6 xl:p-8 2xl:p-10 w-full transform origin-[50%] lg:aspect-square xl:aspect-auto xl:h-auto lg:rotate-[0deg] lg:scale-[0.9] xl:scale-[1]"
          >
            <div className="flex flex-col justify-end items-start relative mb-4 lg:flex-1 xl:flex-none">
              {/* <img src="/Group.png" alt="Group.png" className="text-black w-200"/> */}
              <BlendIcon className="text-black w-16 sm:w-20 md:w-24 lg:w-28"/>
              {/* <div className="bg-deep rounded-full w-20 h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 relative top-10 lg:top-8 xl:top-12 left-10 lg:left-8 xl:left-12 scale-[1.13]"></div>
              <div className="bg-[#1f293333] rounded-full w-20 h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 relative scale-[0.87] backdrop-blur-md"></div> */}
            </div>
            <div className="lg:z-10 lg:relative">
              <h3 className="text-[1.8em] lg:text-[1.4em] xl:text-[2em] 2xl:text-[2.63em] font-normal leading-[1.3] mb-2.5 text-black">43%</h3>
              <p className="text-[1em] lg:text-[0.8em] xl:text-[1em] 2xl:text-[1.25em] opacity-60 text-black">
                of cyberattacks target SMEs
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={addToRefs}
            className="relative flex flex-col justify-between border-0 border-black bg-[#F1D9D0] rounded-2xl p-8 lg:p-6 xl:p-8 2xl:p-10 w-full transform origin-[0%] lg:aspect-square xl:aspect-auto rotate-[5deg] lg:scale-[0.95] xl:scale-[1] xl:h-[28em] 2xl:h-[30em]"
          >
            <div className="relative flex flex-col justify-end items-start mb-4 lg:flex-1 xl:flex-none">
              <BoltIcon className="text-black w-16 sm:w-20 md:w-24 lg:w-28"/>
              {/* <div className="absolute top-[16%] left-[6%] w-[8em] lg:w-[7em] xl:w-[10em] h-[6em] lg:h-[5.25em] xl:h-[7.5em] bg-[url('https://cdn.prod.website-files.com/63ce8fdfb773bb355dff79ca/63e60db5e8930fbe4b2eabab_bank-details.s… bg-cover z-20"></div>
              <div className="relative w-[8em] lg:w-[7em] xl:w-[10em] h-[6em] lg:h-[5.25em] xl:h-[7.5em] bg-[#1f293333] backdrop-blur-md z-10"></div> */}
            </div>
            <div className="lg:z-10 lg:relative">
              <h3 className="text-[1.8em] lg:text-[1.4em] xl:text-[2em] 2xl:text-[2.63em] font-normal leading-[1.3] mb-2.5 text-black">60%</h3>
              <p className="text-[1em] lg:text-[0.8em] xl:text-[1em] 2xl:text-[1.25em] opacity-60 text-black">
                shut down within 6 months of a cyber incident
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}