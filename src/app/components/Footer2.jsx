"use client";
import React from "react";

export default function Footer2() {
  return (
   <footer className="bg-gray-100 w-full">
  <div className="flex flex-row items-center justify-between h-16 px-8 md:px-14 2xl:mx-20">
    {/* Left: Logo */}
    <div className="flex items-center">
      <img src="/assets/logo2.svg" alt="Company Logo" className="h-10 w-auto" />
    </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row space-x-6 text-gray-600 text-base md:text-lg font-medium mt-4 md:mt-0">
          <a
            href="/terms"
            className="hover:text-gray-900 transition-colors"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="/privacy"
            className="hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
