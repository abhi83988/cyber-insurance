import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
 
const HeroRightSection = () => {
  return (
<div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden
  max-[1390px]:min-[1280px]:-translate-x-[6rem]">
 
 
 
      <div className="max-w-2xl w-full space-y-4">
        <motion.div
          initial={{ rotate: -1 }}
          whileHover={{ rotate: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Card className="border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <CardTitle className="text-sm sm:text-base font-extrabold">
                  Cyber Insurability Report
                </CardTitle>
                <CardDescription className="text-gray-600 text-xs sm:text-sm">
                  Comprehensive cyber insurability assessment for ekarigar
                </CardDescription>
                <p className="text-gray-500 text-xs mt-1">
                  Generated on August 1, 2025 | Valid Until February 1, 2026
                </p>
              </div>
              <CardAction>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium">
                  Download PDF
                </button>
              </CardAction>
            </CardHeader>
 
            <CardContent className="mt-0">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 text-sm">ekarigar</p>
                    <p className="text-gray-600 text-xs mt-6">Location</p>
                    <p className="font-semibold text-gray-900 text-sm">Haryana, India</p>
                    <p className="text-gray-600 text-xs">Employee Count</p>
                    <p className="font-semibold text-gray-900 text-sm">51 Employees</p>
                    <p className="text-gray-600 text-xs">Industry (NAICS)</p>
                    <p className="font-semibold text-gray-900 text-sm">Finance & Insurance (52)</p>
                  </div>
 
                  <div className="space-y-2 mt-10">
                    <p className="text-gray-600 text-xs">Annual Revenue</p>
                    <p className="font-semibold text-gray-900 text-sm">$20K</p>
                    <p className="text-gray-600 text-xs">Applicable Regulations</p>
                    <p className="font-semibold text-gray-900 text-sm">FTC, SEC</p>
                    <p className="text-gray-600 text-xs">Business Email Used</p>
                    <p className="font-semibold text-gray-900 text-sm">shivam.k@ekarigar.com</p>
                  </div>
 
                  <div className="flex flex-row gap-4 mt-[2rem] lg:mt-0">
                    <div>
                      <p className="text-black text-[0.7rem] font-bold max-[1090px]:text-[0.6rem]">LEXI Rating</p>
                      <p className="text-gray-500 text-xs">with confidence</p>
                      <p className="text-[3rem] font-bold text-gray-900 max-[1090px]:text-[2.8rem]">C+</p>
                    </div>
                    <div>
                      <p className="text-black text-[0.7rem] font-bold  max-[1090px]:text-[0.6rem] ">Industry Benchmark</p>
                      <p className="text-[3rem] mt-3 font-bold text-gray-900 max-[1090px]:text-[2.8rem]">B+</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
 
            <CardContent className="mt-0">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 shadow-sm">
                <h2 className="text-gray-900 font-semibold mb-4 text-center md:text-left">
                  Cyber Insurability Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-1">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      <p className="text-gray-900 text-sm font-medium">Current Breach</p>
                    </div>
                    <p className="text-gray-600 text-xs">Likelihood</p>
                    <p className="text-red-600 font-bold text-lg mt-1">75.4%</p>
                  </div>
 
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-gray-600 text-xs">Corresponding Estimated</p>
                    <p className="text-gray-600 text-xs">Financial Loss</p>
                    <p className="text-gray-900 font-bold text-lg mt-1">$117.8M</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
 
export default HeroRightSection;
 
 