"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function ButtonSection() {
  const btnRef = useRef(null);
  const textRef = useRef(null);
  const altTextRef = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const text = textRef.current;
    const altText = altTextRef.current;
    const arrow1 = arrow1Ref.current;
    const arrow2 = arrow2Ref.current;

    if (!btn || !text || !altText || !arrow1 || !arrow2) return;

    gsap.set(altText, {
      y: -20,
      opacity: 0,
      position: "absolute",
      left: 0,
      right: 0,
      textAlign: "center",
    });
    gsap.set(arrow1, {
      x: 0,
      opacity: 1,
      position: "absolute",
      right: "1.5rem",
    });
    gsap.set(arrow2, {
      x: -15,
      opacity: 0,
      position: "absolute",
      right: "1.5rem",
    });

    const tl = gsap.timeline({ paused: true });
    tl.to(btn, { scale: 0.95, duration: 0.3, ease: "power2.out" }, 0)
      .to(text, { y: 20, opacity: 0, duration: 0.3, ease: "power2.out" }, 0)
      .to(altText, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0)
      .to(arrow1, { x: 15, opacity: 0, duration: 0.3, ease: "power2.out" }, 0)
      .to(arrow2, { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0);

    const hoverIn = () => tl.play();
    const hoverOut = () => tl.reverse();

    btn.addEventListener("mouseenter", hoverIn);
    btn.addEventListener("mouseleave", hoverOut);

    return () => {
      btn.removeEventListener("mouseenter", hoverIn);
      btn.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
     <div className="h-16 w-full flex items-start justify-start sm: h-2">
      <button
        ref={btnRef}
        className="relative overflow-hidden bg-[#854bfa] text-white font-medium px-12 py-5 rounded-full h-20 flex items-center justify-center"
      >
      
        <span ref={textRef} className="inline-block relative text-lg ">
          Get started
        </span>
        <span ref={altTextRef} className="inline-block relative text-lg">
          Get started
        </span>

     
        <span ref={arrow1Ref} className="inline-block ml-2">
          <ArrowRight className="w-6 h-6" />
        </span>

      
        <span ref={arrow2Ref} className="inline-block ml-2">
          <ArrowRight className="w-6 h-6" />
        </span>
      </button>
    </div>
  );
}
