// components/FAQSection.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is a cyber insurability rating and why does it matter?",
    answer:
      "A cyber insurability rating assesses your organization's ability to obtain cyber insurance and highlights areas of improvement.",
  },
  {
    question: "How often should I check or update my rating?",
    answer: "You should review your rating at least once a year or after major changes.",
  },
  {
    question: "How do I know if my business is currently insurable?",
    answer: "Our platform gives you real-time insight into your insurability.",
  },
  {
    question: "How can I improve my rating to qualify for better coverage?",
    answer: "We provide recommendations tailored to your security posture.",
  },
  {
    question: "Can I still get a LEXI Rating if I've never had a security assessment before?",
    answer: "Yes, our process works even if you’re new to security assessments.",
  },
  {
    question: "What kinds of documents or reports can I upload to improve my rating?",
    answer: "Security policies, audit reports, and compliance certifications.",
  },
  {
    question: "Is this just for tech companies, or does it apply to any small business?",
    answer: "Any small business can use the LEXI Rating system.",
  },
  {
    question: "How does LEXI Rating help businesses that don't have a security team?",
    answer: "We guide you through improvements without needing an internal security team.",
  },
   {
    question: "What is a cyber insurability rating and why does it matter?",
    answer:
      "A cyber insurability rating assesses your organization's ability to obtain cyber insurance and highlights areas of improvement.",
  },
  {
    question: "How often should I check or update my rating?",
    answer: "You should review your rating at least once a year or after major changes.",
  },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);
  const contentRefs = useRef([]);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 8);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, visibleFaqs.length);
  }, [visibleFaqs.length]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl text-center mb-8 lg:text-[4rem]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {visibleFaqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-green-500 rounded overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen
                  ? "bg-gradient-to-r from-[#001a44] to-[#00b383] text-white shadow-lg"
                  : "bg-white text-black hover:bg-gradient-to-r hover:from-[#001a44] hover:to-[#00b383] hover:text-white hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center px-4 py-3 text-left font-medium transition-all duration-300"
              >
                {/* Triangle arrow at start */}
                <span
                  className={`mr-3 transform transition-all duration-500 ease-in-out ${
                    isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                  }`}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="transition-all duration-300">{item.question}</span>
              </button>

              {/* Answer content with smooth height transition */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  maxHeight: isOpen 
                    ? contentRefs.current[index]?.scrollHeight + 'px' 
                    : '0px'
                }}
              >
                <div className={`px-11 py-4 text-sm bg-white text-black transform transition-all duration-500 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}>
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && faqs.length > 5 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#001a44] text-white px-10 py-2 rounded transition-all duration-300 hover:bg-[#003366] hover:scale-105"
          >
            More ▼
          </button>
        </div>
      )}
    </div>
  );
}
