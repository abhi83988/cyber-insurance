"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
 
const HeroRightImages = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
 
  useEffect(() => {
    if (imageRef.current) {
      gsap.set(imageRef.current, { opacity: 0, y: 50 });
 
      gsap.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);
 
  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;
 
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
 
      const xPercent = (offsetX / rect.width - 0.5) * 2;
      const yPercent = (offsetY / rect.height - 0.5) * 2;
 
      gsap.to(image, {
        rotateX: yPercent * 3, // reduced tilt
        rotateY: xPercent * -3, // reduced tilt
        duration: 1.6, // slower transition
        ease: "power2.out", // smoother easing
        transformPerspective: 1000,
        transformOrigin: "center",
      });
    };
 
    const handleMouseLeave = () => {
      gsap.to(image, {
        rotateX: 0,
        rotateY: 0,
        duration: 1.6,
        ease: "power2.out",
      });
    };
 
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
 
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
 
  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex justify-center items-center perspective-[1000px] max-[1390px]:min-[1280px]:-translate-x-[4rem]"
    >
      <div
        ref={imageRef}
        className="w-[90%] transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/hero-image.png"
          alt="Cyber Insurability"
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};
 
export default HeroRightImages;
 