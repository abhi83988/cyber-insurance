"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PaymentEvolution = () => {
  const cards = [
    {
      img: "/Union (1).svg",
      title: "LEXI Rating",
      text: "This is our personalized cyber insurability rating. A typical report assigns this rating to you, and typically includes:",
    },
    {
      img: "/Layerx(2).svg",
      title: "Industry Benchmarking",
      text: "Find out how your insurability compares to others in your sector.",
    },
    {
      img: "/Union (2).svg",
      title: "Confidence Levels",
      text: "See how confident we are in your results, based on data quality and assessment depth.",
    },
    {
      img: "/Vector.svg",
      title: "Breach Likelihood",
      text: "Statistical probability of a material cyber attack based on your current posture.",
    },
    {
      img: "/Group.svg",
      title: "Financial Loss Estimate",
      text: "Projected costs if a breach occurs, including downtime and recovery.",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const cardElements = containerRef.current.children;

    // Animate each card individually
    Array.from(cardElements).forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // card enters view
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-tl py-10 px-4 sm:px-8 md:px-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl pt-3 lg:text-6xl">
          Payment evolution for
        </h1>
        <h1 className="text-4xl sm:text-4xl md:text-5xl mt-2 lg:text-6xl">
          every industry
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="flex justify-center mt-10 items-center">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1500px] w-full place-items-center"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group flex flex-col items-start text-left p-5 rounded-xl w-full gap-2 sm:gap-4`}
            >
              {/* Icon */}
              <div className="h-20 flex items-center justify-center">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="bg-[#e8eff1] rounded-full p-4"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-3xl mt-3">{card.title}</h3>

              {/* Text */}
              <p className="text-[#737e89] leading-[1.2] text-lg md:text-base mt-2">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentEvolution;
