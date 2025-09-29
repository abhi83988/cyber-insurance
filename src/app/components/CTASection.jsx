"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonSection from "./wrapping/AnimateButton";

export default function CtaSection() {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
            setMousePos({ x, y });
        };

        const container = containerRef.current;
        container.addEventListener("mousemove", handleMouseMove);

        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#1F2933] h-110 py-24 overflow-hidden mx-2 lg:mx-7 2xl:mx-25 rounded-3xl"
        >
            {/* Container */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    {/* Heading */}
                    <h1 className="relative text-[2.1rem] sm:text-[2.5rem] md:text-[2.7rem] lg:text-[2.8rem] xl:text-[3.5rem] 2xl:text-[3.8rem]
         leading-[1] tracking-[-0.03em] text-white box-border">
                        <span className="relative inline-block mx-2">
                            Get your LEXI Rating
                            <svg className="absolute left-7 sm:left-20 bottom-0 top-5 sm:top-7 xl:top-9 2xl:top-10 w-full h-6" viewBox="0 0 448 26" fill="none">
                                <motion.path
                                    d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802"
                                    stroke="#8247FF"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeDasharray="301"
                                    strokeDashoffset="301"
                                    initial={{ strokeDashoffset: 301 }}
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                />
                                <motion.path
                                    d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428"
                                    stroke="#8247FF"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeDasharray="446"
                                    strokeDashoffset="446"
                                    initial={{ strokeDashoffset: 446 }}
                                    animate={{ strokeDashoffset: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                                />
                            </svg>
                        </span>

                        <span className="relative inline-block mt-1 sm:mt-0">
                            today
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="mt-6  mx-7 text-base sm:text-xl sm:mx-12 md:mx-25 md:text-2xl lg:text-lg lg:mx-35 xl:text-xl xl:mx-30 text-[#99a1ae]">
                        Join over 1,000 small businesses who have improved their cyber insurability with Lexi Ratings
                    </p>

                    {/* Button */}
                    <div className="flex flex-col justify-self-center gap-3 whitespace-nowrap sm:flex-row justify-center mt-5  lg:mt-5 2xl:mt-7">
                        <ButtonSection text="Get your LEXI Rating" />
                        <ButtonSection text="Continue where i left"/>

                    </div>
                </div>
            </div>

            {/* Circles with mouse movement */}
            {/* 1st circle */}
            <img
                src="https://cdn.prod.website-files.com/63ce8fdfb773bb355dff79ca/63e282a253c54c13a6ec8fb3_circle-01.svg"
                alt="circle1"
                className="absolute top-1/2 left-1/2 w-[60%] max-w-[350px] opacity-100 pointer-events-none"
                style={{
                    transform: `translate(-50%, -50%) translateX(${mousePos.x * 55}px) translateY(${mousePos.y * 50}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            />
            {/* 2nd circle */}
            <img
                src="https://cdn.prod.website-files.com/63ce8fdfb773bb355dff79ca/63e282a26102e58730e4f3aa_circle-02.svg"
                alt="circle2"
                className="absolute top-1/2 left-1/2 w-[120%] max-w-[700px] opacity-90 pointer-events-none"
                style={{
                    transform: `translate(-50%, -50%) translateX(${mousePos.x * 55}px) translateY(${mousePos.y * 50}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            />
            {/* 3rd circle - adjusted size */}
            <img
                src="https://cdn.prod.website-files.com/63ce8fdfb773bb355dff79ca/63e282a36102e57408e4f3c4_circle-03.svg"
                alt="circle3"
                className="absolute top-1/2 left-1/2 w-[150%] max-w-[1050px] opacity-90 pointer-events-none"
                style={{
                    transform: `translate(-50%, -50%) translateX(${mousePos.x * 55}px) translateY(${mousePos.y * 50}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            />
        </section>
    );
}
