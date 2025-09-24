import React from "react";
import Image from "next/image";
 
const Thirdpage = () => {
  const cards = [
    {
      img: "/Union (1).svg",
      title: "LEXI Rating",
      text: "This is our personalized cyber insurability rating. A typical report assigns this rating to you, and typically includes:",
      bg: "bg-yellow-50",
    },
    {
      img: "/Layerx(2).svg",
      title: "Industry Benchmarking",
      text: "Find out how your insurability compares to others in your sector.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Union (2).svg",
      title: "Confidence Levels",
      text: "See how confident we are in your results, based on data quality and assessment depth.",
      bg: "bg-pink-50",
    },
    {
      img: "/Vector.svg",
      title: "Breach Likelihood",
      text: "Statistical probability of a material cyber attack based on your current posture.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Group.svg",
      title: "Financial Loss Estimate",
      text: "Projected costs if a breach occurs, including downtime and recovery.",
      bg: "bg-pink-50",
    },
    {
      img: "/Vector (1).svg",
      title: "Historical Trend Tracking",
      text: "As you participate over time, monitor how your insurability posture improves.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Outline.svg",
      title: "Insurance Coverage Gap",
      text: "Specific vulnerabilities and missing protections in your current setup.",
      bg: "bg-pink-50",
    },
    {
      img: "/Vector (2).svg",
      title: "Real Time Results",
      text: "Instant results all in a fast, frictionless process.",
      bg: "bg-yellow-50",
    },
    {
      img: "/Shield.svg",
      title: "Tailored Cyber Security Recommendations",
      text: "Actionable steps to improve your security posture and rating.",
      bg: "bg-yellow-50",
    },
  ];
 
  return (
    <div className="bg-gradient-to-tl from-[#d9d9ff] via-[#ffffff] to-[#d9d9ff] py-10 px-4 sm:px-8 md:px-12">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold pt-3 lg:text-[3rem]">
          Meet LEXI - The Cyber Insurability Rating designed for
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-2 lg:text-[3rem]">
          Small Businesses
        </h2>
        <p className="mt-4 lg:text-xl sm:text-base md:text-lg font-medium">
          LEXI Rating is the world's first cyber insurability rating built
          specifically for{" "}
          <strong className="text-blue-900">micro and small businesses</strong>.
          It's like a credit rating - but for cyber insurability. Your LEXI
          Rating Comes with:
        </p>
      </div>
 
      {/* Cards Grid */}
    <div className="flex justify-center mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`group flex flex-col items-center text-center p-5 border
             border-green-300 rounded-xl ${card.bg} shadow-sm hover:bg-green-400
              hover:text-white transform transition-transform duration-300 hover:scale-90 w-full max-w-sm`}
        >
          {/* Icon */}
          <div className="h-20 flex items-center justify-center">
            <Image
              src={card.img}
              alt={card.title}
              width={60}
              height={60}
              className="transition group-hover:brightness-0 group-hover:invert"
            />
          </div>
 
          {/* Title */}
          <h3 className="font-semibold text-base md:text-lg mt-3">{card.title}</h3>
 
          {/* Text */}
          <p className="text-sm md:text-base mt-2">{card.text}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};
 
export default Thirdpage;