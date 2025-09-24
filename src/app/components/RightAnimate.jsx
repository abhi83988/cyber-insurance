"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
 
const HeroRightImages = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
 
  useEffect(() => {
    // Initial fade-in (no tilt)
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        opacity: 0,
        y: 50,
        // rotateX: -1,           // top-left corner forward
        // rotateY: 4,            // left side forward, right side back
        // transformPerspective: 1000,
        // transformOrigin: "center",
      });
 
      gsap.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
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
        rotateX: yPercent * 6,
        rotateY: xPercent * -6,
        duration: 1.2,
        ease: "power3.out",
        transformPerspective: 1000,
        transformOrigin: "center",
      });
    };
 
    const handleMouseLeave = () => {
      gsap.to(image, {
        // rotateX: -6,           // return to initial tilt
        // rotateY: 6,
        rotateX: 0,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
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
      className="relative w-full h-full flex justify-center items-center perspective-[1000px] max-[1390px]:min-[1280px]:-translate-x-[6rem]"
    >
      <div
        ref={imageRef}
        className="w-[90%] transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src="/hero-Image.jpg"
          alt="Cyber Insurability"
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};
 
export default HeroRightImages;