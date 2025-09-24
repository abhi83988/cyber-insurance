"use client";
import React from "react";

export default function Footer2() {
  return (
    // background spans entire width
    <footer className="bg-gray-100 border-t border-gray-200 w-full h-[20vh]">
      {/* content stays centered */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 h-[20vh]">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo.svg"
            alt="Company Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 text-gray-600 text-sm font-medium">
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
