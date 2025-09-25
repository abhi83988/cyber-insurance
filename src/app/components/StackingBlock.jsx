'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const StackingCardsSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    {
      img: "/assets/stack1.png",
      title: "LEXI Rating",
      text: "This is our personalized cyber insurability rating. A typical report assigns this rating to you, and typically includes:",
      bg: "bg-yellow-50",
    },
    {
      img: "/assets/stack2.png",
      title: "Industry Benchmarking",
      text: "Find out how your insurability compares to others in your sector.",
      bg: "bg-blue-50",
    },
    {
      img: "/assets/stack3.png",
      title: "Confidence Levels",
      text: "See how confident we are in your results, based on data quality and assessment depth.",
      bg: "bg-pink-50",
    },
    {
      img: "/assets/stack1.png",
      title: "Breach Likelihood",
      text: "Statistical probability of a material cyber attack based on your current posture.",
      bg: "bg-purple-50",
    },
    {
      img: "/assets/stack2.png",
      title: "Financial Loss Estimate",
      text: "Projected costs if a breach occurs, including downtime and recovery.",
      bg: "bg-indigo-50",
    },
    {
      img: "/assets/stack3.png",
      title: "Historical Trend Tracking",
      text: "As you participate over time, monitor how your insurability posture improves.",
      bg: "bg-red-50",
    },
    {
      img: "/assets/stack1.png",
      title: "Insurance Coverage Gap",
      text: "Specific vulnerabilities and missing protections in your current setup.",
      bg: "bg-yellow-50",
    },
    {
      img: "/assets/stack2.png",
      title: "Real Time Results",
      text: "Instant results all in a fast, frictionless process.",
      bg: "bg-blue-50",
    },
    {
      img: "/assets/stack3.png",
      title: "Tailored Cyber Security Recommendations",
      text: "Actionable steps to improve your security posture and rating.",
      bg: "bg-pink-50",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || cardRefs.current.length === 0) return;

    gsap.set(cardRefs.current, { scale: 1 });
    gsap.set(cardRefs.current.slice(1), { y: '100vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=800%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { duration: 1, ease: 'power1.out' },
    });

    cardRefs.current.slice(1).forEach((card, index) => {
      const prevCard = cardRefs.current[index];
      tl.to(card, { y: 0 }, index);
      tl.to(prevCard, { scale: 0.9 }, index);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {cards.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="absolute inset-0 w-full h-screen px-6 py-12"
          style={{
            zIndex: index + 1,
            transformOrigin: 'center center',
          }}
        >
          <div
            className={`${card.bg} rounded-3xl h-full flex flex-col lg:flex-row items-center justify-center gap-6 text-black text-center lg:text-left px-8 py-6 shadow-2xl will-change-transform`}
          >
            {/* Alternate image position */}
            {index % 2 === 0 ? (
              <>
                <div className="w-full lg:w-1/2">
                  <Image src={card.img} alt={card.title} width={800} height={900} />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-6xl  mb-2">{card.title}</h3>
                  <p className="text-2xl">{card.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-6xl  mb-2">{card.title}</h3>
                  <p className="text-2xl">{card.text}</p>
                </div>
                <div className="w-full lg:w-1/2">
                  <Image src={card.img} alt={card.title} width={800} height={900} />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default StackingCardsSection;
