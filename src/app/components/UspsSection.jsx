"use client";
 
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ButtonSection from "./button";
 
// icons from CardFees
import {
  BringToFrontIcon,
  CircleCheckBigIcon,
  BlendIcon,
} from "./icons/BringToFrontIcon";
 
gsap.registerPlugin(ScrollTrigger);
 
export default function UspsSection() {
  const cardRefs = useRef([]);
  cardRefs.current = [];
  const [isDesktop, setIsDesktop] = useState(false);
 
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
 
  // switch animation only on desktop
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  useEffect(() => {
    if (!isDesktop) return;
 
    const [card1, card2, card3] = cardRefs.current;
 
    // reset state
    gsap.set([card1, card2, card3], {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    });
 
    // CARD 1
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: card1,
        start: "top 65%",
        end: "top 20%",
        scrub: 1,
      },
    });
    t1.fromTo(
      card1,
      { x: 400, opacity: 0, rotate: 0 },
      { x: 0, opacity: 1, rotate: 0, duration: 0.5 }
    ).to(card1, { x: 100, rotate: -12, scale: 0.9, duration: 0.5 });
 
    // CARD 2
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: card2,
        start: "top 60%",
        end: "top 15%",
        scrub: 1,
      },
    });
    t2.fromTo(
      card2,
      { x: 450, opacity: 0, scale: 0.8, rotate: 8 },
      { x: 300, opacity: 1, rotate: 0, scale: 0.85, duration: 0.5 }
    ).to(card2, { x: 25, rotate: 0, zIndex: 10, scale: 1, duration: 0.5 });
 
    // CARD 3
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: card3,
        start: "top 55%",
        end: "top 10%",
        scrub: 1,
      },
    });
    t3.fromTo(
      card3,
      { x: 480, opacity: 0, rotate: 0 },
      { x: 400, opacity: 1, scale: 0.9, rotate: 0, duration: 0.5 }
    ).to(card3, { x: -20, scale: 1.01, rotate: 10, zIndex: 30, duration: 0.5 });
 
    return () => {
      t1.kill();
      t2.kill();
      t3.kill();
    };
  }, [isDesktop]);
 
  // CardFees style data
  const cardData = [
    {
      title: "33%",
      description:
        "are denied cyber insurance",
      icon: <BringToFrontIcon size={45} />,
    },
    {
      title: "43%",
      description:
        "of cyberattacks target SMEs",
      icon: <CircleCheckBigIcon size={45} />,
    },
    {
      title: "60%",
      description:
        "shut down within 6 months of a cyber incident",
      icon: <BlendIcon size={45} />,
    },
  ];
 
  return (
    <div className="relative mx-3 md:mx-6 lg:mx-7 2xl:mx-18 my-40 bg-[#DFC9C0] rounded-4xl p-8 sm:p-12 lg:p-16 xl:px-20 2xl:px-35 flex flex-col md:flex-row md:items-start md:space-x-8">
      {/* Header Section */}
      <div className="flex flex-col gap-5 md:gap-10 items-start ml-5 md:ml-0 lg:w-200 mb-8 lg:mb-0">
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[2.8rem] lg:text-[2.7rem] xl:text-[2.8rem] 2xl:text-[3.2rem] leading-tight text-black mb-4">
          Unlock the Power of Banking Data
        </h1>
        <div>
        <ButtonSection text="Get started" bgColor="black" />

        </div>
      </div>
 
      {/* Cards */}
      {/* Mobile grid (no GSAP) */}
      <div className="flex flex-col gap-7 sm:w-120 self-center md:hidden">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="bg-[#F1D9D0] text-[#1D2C3C] p-6 rounded-2xl shadow-xl relative"
          >
            <div className="absolute top-4 left-4">{card.icon}</div>
            <h3 className="text-[1.5rem] font-semibold mb-2 mt-10">{card.title}</h3>
            <p className="text-[1.1rem]">{card.description}</p>
          </div>
        ))}
      </div>
 
      {/* Desktop animated cards */}
      <div className="hidden md:flex md:flex-row md:space-x-6 md:w-200 md:-translate-x-30 lg:w-150 lg:-translate-x-0  xl:w-170 2xl:w-240 [@media(min-width:1536px)_and_(max-width:1815px)_and_(max-height:900px)_and_(min-height:900px)]:w-[700px]
      [@media(min-width:1536px)_and_(max-width:1615px)]:w-170  [@media(min-width:1615px)_and_(max-width:1750px)]:w-190  [@media(min-width:1750px)_and_(max-width:1800px)]:w-220  [@media(min-width:1800px)_and_(max-width:1850px)]:w-230  [@media(min-width:1850px)_and_(max-width:1900px)]:w-240  [@media(min-width:800px)_and_(max-width:850px)]:-translate-x-20 [@media(min-width:850px)_and_(max-width:900px)]:-translate-x-10 [@media(min-width:900px)_and_(max-width:1024px)]:-translate-x-0 [@media(min-width:1350px)_and_(max-width:1400px)]:w-180 [@media(min-width:1400px)_and_(max-width:1536px)]:w-200">
        {cardData.map((card, i) => (
          <div
            ref={addToRefs}
            key={i}
            className="bg-[#F1D9D0]  text-[#1D2C3C] p-6 rounded-2xl shadow-xl my-5 md:w-43 lg:w-80 xl:h-70 xl:w-150 2xl:h-60 2xl:w-80"
          >
            <div className="absolute top-7 left-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 mt-20 2xl:text-3xl">{card.title}</h3>
            <p className="text-lg 2xl:text-[1.1rem]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
 