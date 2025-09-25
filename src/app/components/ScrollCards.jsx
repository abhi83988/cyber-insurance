'use client'
import { motion, AnimatePresence } from "framer-motion";
import ButtonSection from "./button";
export default function SimpleComponent() {
  return (
    <div className="relative min-h-100 bg-pink-50 py-20 flex justify-center">
        <div>
            <div>
     <h1
  className=" hero-heading relative text-[2.8rem] md:text-[3.5rem] xl:text-[4.4rem]
             
             font-normal leading-[1] tracking-[-0.03em] text-gray-900 whitespace-nowrap max-[480px]:whitespace-normal break-words "
>
       with{" "}
            <span   className="relative inline-block text-[2.8rem] md:text-[3.5rem] xl:text-[4.9rem]
             ">
           Lexi Rating™
              <svg
                className="absolute left-0 bottom--1 w-full h-6"
                viewBox="0 0 448 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802C356.34 14.6774 368.152 14.4647 374.62 13.754"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="butt"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
                <motion.path
                  d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428C262.309 8.17355 340.509 5.23404 418.755 4.25167C427.273 4.14472 452.789 3.54451 444.281 3.07897"
                  stroke="#8247FF"
                  strokeWidth="4"
                  strokeLinecap="butt"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                />
              </svg>
            </span>
          </h1>
 
          
</div>
 
          <ButtonSection />
        </div>
 
      </div>
    
  );
}
