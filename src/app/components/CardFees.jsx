'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import ButtonSection from './button';
import Marquee from 'react-fast-marquee';

import { BringToFrontIcon, CircleCheckBigIcon, BlendIcon, AtomIcon, HandCoinsIcon, BoltIcon, ChartPieIcon} from './icons/BringToFrontIcon';

gsap.registerPlugin(ScrollTrigger);

export default function CardFees() {
  const cardWrapperRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // const wrapper = cardWrapperRef.current;

      // const cards = gsap.utils.toArray('.card');
      // const cardHeight = 240; // approx height of one card
      // const totalHeight = cards.length * cardHeight;

      // // Scroll up the whole card list smoothly
      // gsap.to(wrapper, {
      //   y: `-${totalHeight - 600}px`, // 600 is visible container height
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '.abhusection',
      //     start: 'top center',
      //     end: `+=${totalHeight}`,
      //     scrub: true,
      //   },
      // });

      // // Animate individual cards scaling in & fading
      // cards.forEach((card) => {
      //   gsap.fromTo(
      //     card,
      //     { scale: 0.5, opacity: 0 },
      //     {
      //       scale: 1,
      //       opacity: 1,
      //       duration: 1.5,
      //       ease: 'power2.out',
      //       scrollTrigger: {
      //         trigger: '.abhusection',
      //         start: 'top 85%',
      //         toggleActions: 'play reverse play reverse',
      //       },
      //     }
      //   );
      // });


      gsap.utils.toArray('.image').forEach((img) => {
        gsap.from(img, {
          y: 150,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);


  const cardData = [
    {
      title: 'A+ Exceptional',
      description: "You're extremely well-protected, with proactive controls and trained staff. Insurers see you as a top-tier candidate.",
      icon: <BringToFrontIcon size={35} className="text-black" />,
    },
    {
      title: 'A Excellent',
      description: 'Strong cybersecurity controls and low overall risk. A solid position in the eyes of underwriters.',
       icon: <CircleCheckBigIcon size={35} className="text-black" />,
    },
    {
      title: 'A- Very Good',
      description: "You're above average and nearly insurer-ready. A few improvements could unlock better pricing or coverage terms.",
       icon: <BlendIcon size={35} className="text-black" />,
    },
    {
      title: 'B+ Insurable',
      description: "You're generally in good shape, but minor vulnerabilities may increase costs or limit coverage options.",
       icon: <AtomIcon size={35} className="text-black" />,
    },
    {
      title: 'B. Acceptable',
      description: 'Coverage likely, but underwriters will have concerns. Your security foundation is sound but uneven.',
       icon: <HandCoinsIcon size={35} className="text-black" />,
    },
    {
      title: 'B- At Risk',
      description: 'such as You lack key controls insurers require -MFA, secure backups, or endpoint protection.',
       icon: <BoltIcon  size={35} className="text-black" />,
    },
    {
      title: 'Uninsurable. Critical Gaps',
      description: "You don't currently meet minimum standards for coverage but improvement is absolutely possible.",
       icon: <ChartPieIcon  size={35} className="text-black" />,
    },
  ];

  return (

    <div className="min-h-222 sm:min-h-220 md:min-h-200 bg-[#0C1B28] h-100 text-white flex items-evenly justify-center rounded-4xl px-8 py-16 abhusection overflow-hidden mx-2 md:mx-6 lg:mx-7 2xl:mx-20">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mobile Version */}
        <div className="flex flex-col block md:hidden justify-between h-full relative bg-amber-600align-self-start">

          <div>
            <h1
              className="relative text-[2rem] sm:text-[2.6rem] md:text-[3.5rem] lg:text-[4.6rem]
               max-[1254px]:text-[2.2rem] max-[1096px]:text-[2rem] max-[768px]:text-[1.8rem]
               font-normal leading-[1] tracking-[-0.03em] sm:tracking-[-0.04em] md:tracking-[-0.05em]
               text-white whitespace-nowrap box-border"
            >
              What Does LEXI Rating <br />
              <span className="relative inline-block">
                Mean?
                <svg
                  className="absolute left-0 bottom--1 top-5 w-full h-6"
                  viewBox="0 0 448 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802C356.34 14.6774 368.152 14.4647 374.62 13.754"
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
                    d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428C262.309 8.17355 340.509 5.23404 418.755 4.25167C427.273 4.14472 452.789 3.54451 444.281 3.07897"
                    stroke="#8247FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="446"
                    strokeDashoffset="446"
                    initial={{ strokeDashoffset: 446 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                      delay: 0.1,
                    }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-[1rem] text-white mb-8 mt-7">
              Lexi Rating™ evaluates cyber risk posture and translates it into a score that insurers understand. It benchmarks SMEs against industry norms, using data on security practices, controls, incident history, and resilience. You can use your Rating & Insurability report to negotiate better premiums, and minimize the risk of denial of coverage.
            </p>
            
            <div className='justify-self-start'>

            <ButtonSection />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-80 sm:top-65 flex flex-row justify-center space-x-0 z-10 ml-50 -translate-x-10">
            <img
              src="/cardfees.png"
              alt="Credit Card 1"
              className="image w-50 h-40 sm:w-35 sm:h-50 z-20 transform translate-y-0 -mr-16"
            />
            <img
              src="/cardfees.png"
              alt="Credit Card 2"
              className="image w-50 h-40 sm:w-35 sm:h-50 z-10 transform -translate-y-10"
            />
          </div>
        </div>
        <div className="flex-1 sm:h-[600px] h-[400px] overflow-hidden relative align-self-end w-200 top-25 -left-10 sm:top-40 md:w-95 md:top-50 lg:w-125 lg:top-50 xl:w-166 xl:top-55 2xl:w-230 2xl:-left-60">
          <Marquee
            gradient={false}
            speed={130}
            pauseOnHover={false}
            direction="right"
            className="absolute left-0"
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="card bg-[#B8E3E3] text-[#1D2C3C] p-6 rounded-2xl shadow-xl w-72 h-62 md:w-96 md:h-60 mx-3 flex-shrink-0 relative"
              >
                {/* Icon at top-left */}
                <div className="absolute top-4 left-4">{card.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2 mt-10">{card.title}</h3>

                {/* Description */}
                <p className="text-base">{card.description}</p>
              </div>
            ))}
          </Marquee>

        </div>
        <div className="flex flex-col hidden md:block justify-between h-150 md:h-180 relative sm:w-80 lg:w-100 lg:h-180 xl:w-150 2xl:w-168">

          <div className="sm:ml-0 lg:ml-0 xl:ml-10 ">
            <h1
              className="relative text-[2rem] sm:text-[2.8rem] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] 2xl:text-[3.3rem]
               max-[1254px]:text-[2.2rem] max-[1096px]:text-[2rem] max-[768px]:text-[1.8rem]
               font-normal leading-[1] tracking-[-0.03em] sm:tracking-[-0.04em] md:tracking-[-0.05em]
               text-white whitespace-nowrap box-border"
            >
              What Does LEXI Rating <br />
              <span className="relative inline-block">
                Mean?
                <svg
                  className="absolute left-0 bottom--1 md:top-5 lg:top-7 xl:top-8 2xl:top-10 w-full h-6"
                  viewBox="0 0 448 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M73.3804 22.8573C166.579 20.3422 259.873 18.2243 352.949 14.802C356.34 14.6774 368.152 14.4647 374.62 13.754"
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
                    d="M1.99989 20.173C62.4908 14.9745 123.484 13.4458 184.125 11.1428C262.309 8.17355 340.509 5.23404 418.755 4.25167C427.273 4.14472 452.789 3.54451 444.281 3.07897"
                    stroke="#8247FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="446"
                    strokeDashoffset="446"
                    initial={{ strokeDashoffset: 446 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                      delay: 0.1,
                    }}
                  />
                </svg>
              </span>
            </h1>

            <p className="md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem] md:mr-5 lg:mr-2 xl:mr-22 2xl:mr-8 text-white mb-8 mt-8">
              Lexi Rating™ evaluates cyber risk posture and translates it into a score that insurers understand. It benchmarks SMEs against industry norms, using data on security practices, controls, incident history, and resilience. You can use your Rating & Insurability report to negotiate better premiums, and minimize the risk of denial of coverage.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-end  sm:flex-col sm:gap-30 lg:flex-col lg:gap-10 xl:flex-col xl:justify-between xl:items-start 2xl:flex-row 2xl:justify-between 2xl:items-end md:flex p-4">

            <div className="flex flex-row relative sm:ml-0 md:mr-20 lg:ml-0 xl:ml-10">
              <img
                src="/cardfees.png"
                alt="Credit Card 1"
                className="image sm:w-55 sm:h-60 md:sm:w-35 md:h-50 lg:w-55 lg:h-70 xl:w-55 xl:h-80 z-20 transform translate-y-8 -mr-16"
              />
              <img
                src="/cardfees.png"
                alt="Credit Card 2"
                className="image sm:w-55 sm:h-60 md:sm:w-35 md:h-50 lg:w-55 lg:h-70 xl:w-55 xl:h-80 z-10 transform -translate-y-15"
              />
            </div>
            <div className='lg:mr-7 xl:ml-90 2xl:ml-0'>
              <ButtonSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}