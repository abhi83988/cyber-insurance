"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const loginBtnRef = useRef(null);
  const loginTextRef = useRef(null);
  const loginAltTextRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Login button hover animation
  useEffect(() => {
    const btn = loginBtnRef.current;
    const text = loginTextRef.current;
    const altText = loginAltTextRef.current;

    gsap.set(altText, {
      y: -20,
      opacity: 0,
      position: "absolute",
      left: 0,
      right: 0,
      textAlign: "center",
    });

    const hoverTimeline = gsap.timeline({ paused: true });
    hoverTimeline
      .to(btn, { scale: 0.95, duration: 0.3, ease: "power2.out" }, 0)
      .to(text, { y: 20, opacity: 0, duration: 0.3, ease: "power2.out" }, 0)
      .to(altText, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0);

    const hoverIn = () => hoverTimeline.play();
    const hoverOut = () => hoverTimeline.reverse();

    btn.addEventListener("mouseenter", hoverIn);
    btn.addEventListener("mouseleave", hoverOut);

    return () => {
      btn.removeEventListener("mouseenter", hoverIn);
      btn.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  // Mobile drawer animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.to(mobileMenuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    }
  }, [menuOpen]);

  return (
   <header className="fixed top-0 left-0 w-full bg-white z-100">
  <div className="h-18 flex items-center justify-between px-8 md:px-14 2xl:mx-20">
    {/* Logo */}
    <div className="flex items-center">
      <img src="/assets/logo.jpg" alt="Logo" className="h-14 w-auto" />
    </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-7">
          <a
            href="#products"
            className="relative text-gray-700  whitespace-nowrap font-medium hover:text-violet-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
           For Insurers
          </a>
          <a
            href="#products"
            className="relative text-gray-700  whitespace-nowrap font-medium hover:text-violet-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
             Become a Security Partner
          </a>
          <a
            href="#products"
            className="relative text-gray-700  whitespace-nowrap font-medium hover:text-violet-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
              About Us
          </a>
          <a
            href="#products"
            className="relative text-gray-700  whitespace-nowrap font-medium hover:text-violet-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Our Vision
          </a>
          <a
            href="#products"
            className="relative text-gray-700  whitespace-nowrap font-medium hover:text-violet-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact us
          </a>
          {/* <a
            href="#products"
            className="relative text-gray-700 font-medium hover:text-violet-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </a>
          <a
            href="#developers"
            className="relative text-gray-700 font-medium hover:text-violet-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Developers
          </a> */}
          <button
            ref={loginBtnRef}
            className="relative overflow-hidden bg-black text-white font-medium px-6 py-2 rounded-full h-12 flex items-center justify-center"
          >
            <span ref={loginTextRef} className="inline-block relative">
              Login
            </span>
            <span ref={loginAltTextRef} className="inline-block relative">
              Sign In
            </span>
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center space-y-1.5 w-8 h-8 focus:outline-none"
        >
          <span
            className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden fixed top-16 left-0 w-full bg-white flex flex-col items-start space-y-4 py-6 px-6 opacity-0 -translate-y-full pointer-events-none"
      >
<a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 font-medium text-base w-full hover:text-violet-600 transition-colors duration-300"
        >
          For Insurers
        </a>
        
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 font-medium text-base w-full hover:text-violet-600 transition-colors duration-300"
        >
          Become a Security Partner
        </a>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 font-medium text-base w-full hover:text-violet-600 transition-colors duration-300"
        >
           About Us
        </a>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 font-medium text-base w-full hover:text-violet-600 transition-colors duration-300"
        >
          Our Vision
        </a>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 font-medium text-base w-full hover:text-violet-600 transition-colors duration-300"
        >
          Contact us
        </a>


        {/* <a
          href="#products"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 font-medium text-lg w-full hover:text-violet-600 transition-colors duration-300"
        >
          Products
        </a>
        <a
          href="#developers"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 font-medium text-lg w-full hover:text-violet-600 transition-colors duration-300"
        >
          Developers
        </a> */}
        <button
          onClick={() => setMenuOpen(false)}
          className="bg-black text-white font-medium px-6 py-2 rounded-full w-full flex items-center justify-center"
        >
          Login
        </button>
      </div>
    </header>
  );
}
