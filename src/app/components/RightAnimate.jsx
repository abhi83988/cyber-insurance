"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
 
const HeroRightImages = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
 
  // Initial fade-in animation
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
 
  // Mouse move 3D tilt
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
        rotateX: yPercent * 3,
        rotateY: xPercent * -3,
        duration: 1.6,
        ease: "power2.out",
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
     className="hero-image relative w-full flex justify-center items-center perspective-[1000px]"
 
// prevent shrinking too small
    >
      <div
        ref={imageRef}
        className="w-full max-w-[100%] lg:max-w-[2500px] transform-gpu" // responsive max width
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/hero-image1.png"
          alt="Cyber Insurability"
          className="w-full h-auto object-contain rounded-lg"
         
        />
      </div>
    </div>
  );
};
 
export default HeroRightImages;