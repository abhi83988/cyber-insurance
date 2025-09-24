"use client";
import React from "react";

export default function Footer2() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 w-full">
      {/* 👇 use same wrapper as header */}
      <div className="w-full px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo2.svg"
            alt="Company Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 text-gray-600 text-lg font-medium">
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
