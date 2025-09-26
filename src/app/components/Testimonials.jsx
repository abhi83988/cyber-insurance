import React from 'react';
import { UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Dental Practice Owner",
      quote:
        'LEXI helped me understand our vulnerabilities and get better insurance rates. The report was clear and actionable.',
      image: "/assets/sarah.png",
    },
    {
      name: "Mike Rodriguez",
      role: "Retail Store Manager",
      quote:
        'Finally, a cyber insurability assessment that speaks our language. No tech jargon, just practical advice.',
      image: "/assets/mike.png",
    },
    {
      name: "Lisa Thompson",
      role: "Accounting Firm Owner",
      quote:
        'The industry comparison was eye-opening. We improved our rating from B- to A in just 3 months.',
      image: "/assets/lisa.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
          Trusted by Small Businesses
        </h2>

        {/* Row of stats */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-10">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl">★★★★★</span>
            <p className="text-xs sm:text-sm md:text-lg text-gray-600">
              4.9/5 average rating
            </p>
          </div>

          {/* Used by 1000+ */}
          <div className="flex items-center gap-2">
            <UsersIcon className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-500" />
            <p className="text-xs sm:text-sm md:text-lg text-gray-600">
              Used by 1000+ SMBs
            </p>
          </div>

          {/* Backed by cybersecurity */}
          <div className="flex items-center gap-2 max-w-xs sm:max-w-none text-center sm:text-left">
            <ShieldCheckIcon className="shrink-0 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-green-600" />
            <p className="text-xs sm:text-sm md:text-lg text-gray-600">
              Backed by cybersecurity and insurance experts
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 sm:gap-8 lg:gap-10 
            mt-12 sm:mt-16 lg:mt-20
          "
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm sm:text-base">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
