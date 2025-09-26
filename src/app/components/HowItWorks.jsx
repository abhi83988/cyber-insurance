"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const steps = [
  {
    title: "Answer a Few Questions",
    desc: "Complete a short questionnaire about your business and current security practices",
    color: "bg-[#5371bb]",
  },
  {
    title: "(Optional) Upload an existing security assessment",
    desc: "Upload either a Pen Test, CIS Assessment or a Sig Lite Assessment",
    color: "bg-[#49b3c6]",
  },
  {
    title: "See Your Report",
    desc: "Receive your LEXI Rating, Coverage gap analysis & a comprehensive cyber Insurability Report",
    color: "bg-[#885fa2]",
  },
  {
    title: "Review & Take Action",
    desc: "Follow clear next steps to strengthen your posture - and see your LEXI Rating update as you improve.",
    color: "bg-[#d34a99]",
  },
];
 
// Custom Arrow SVG Component
const ArrowSVG = ({ direction = "right" }) => {
  let transform = "";
  if (direction === "down") transform = "rotate(90 24 19)";
  if (direction === "left") transform = "rotate(180 24 19)";
  if (direction === "up") transform = "rotate(-90 24 19)";
 
  return (
    <svg
      width="40"
      height="38"
      viewBox="0 0 48 38"
      fill="#a5acb7"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-400"
    >
      <g transform={transform}>
        <path
          d="M27.751 37.0778L46.0654 19.0651M46.0654 19.0651C41.4718 14.56 32.3442 5.55719 27.7514 1.05205M46.0654 19.0651L0.0656746 19.0654"
          stroke="#a5acb7"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};
 
export default function HowItWorks() {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
 
  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
 
    // Animate cards
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
 
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power3.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power3.out" });
      });
    });
  }, []);
 
  return (
    <div className="w-full flex flex-col items-center py-12 bg-[#f5f7fa]">
      <h2 ref={headingRef} className="text-5xl mb-20 sm:mb-10 lg:text-[4rem] md:text-[2rem]">
        How It Works
      </h2>
 
      {/* Container */}
      <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-x-28 gap-y-35 md:grid md:grid-cols-2 md:gap-x-28 md:gap-y-24 lg:flex-row lg:gap-x-28 lg:gap-y-24  xl:flex xl:flex-row xl:gap-22 2xl:gap-x-28 2xl:gap-y-24">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative group w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] xl:w-[250px] xl:h-[320px] 2xl:w-[300px] 2xl:h-[300px] flex-shrink-0 flex flex-col items-center justify-center"
          >
            {/* Card */}
            <div className="bg-white w-70 h-80 rounded-3xl p-6 flex flex-col items-center text-center sm:w-full sm:h-full ">
              <div className="bg-black p-5 rounded-4xl h-31">
                <div className="mb-4 bg-white p-4 rounded-full">
                  <img src="/Union.svg" alt="question" className="w-12 h-12" />
                </div>
 
              </div>
              <h3 className="font-semibold text-base mb-2 mt-6">{step.title}</h3>
              <p className="text-xs text-[#1f1f1f] mb-6 leading-5">{step.desc}</p>
            </div>
 
            {/* Arrows */}
            {index < steps.length - 1 && (
              <>
                {/* Desktop → */}
                <div className="hidden xl:block absolute top-1/2 -right-[80px] transform -translate-y-1/2">
                  <ArrowSVG direction="right" />
                </div>
                {/* Laptop  → */}
                {/* {index % 2 === 0 && (
                  <div className="hidden xl:block absolute top-1/2 -right-[80px] transform -translate-y-1/2">
                    <ArrowSVG direction="right" />
                  </div>
                )} */}
 
                {/* Tablet → */}
                {index % 2 === 0 && (
                  <div className="hidden sm:block xl:hidden absolute top-1/2 -right-[80px] transform -translate-y-1/2">
                    <ArrowSVG direction="right" />
                  </div>
                )}
 
                {/* Mobile ↓ */}
                <div className="block sm:hidden absolute -bottom-[90px] left-1/2 transform -translate-x-1/2">
                  <ArrowSVG direction="down" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
 
    </div>
  );
}
