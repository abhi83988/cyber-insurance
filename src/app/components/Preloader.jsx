"use client";
 
import { useState, useEffect } from "react";
 
const colors = [
  "#FFDEE9", // pink
  "#C8FCEA", // green
  "#FFF9C4", // yellow
  "#D6EFFF", // blue
  "#FFE5B4", // orange
];
 
const Preloader = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === colors.length) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 700); // Notify RootLayout after last animation
          return prev;
        }
        return prev + 1;
      });
    }, 200); // speed per color
 
    return () => clearInterval(interval);
  }, [onFinish]);
 
  return (
    <div className="fixed inset-0 z-100 overflow-hidden bg-white">
      {colors.map((color, index) => {
        const height = index === 0 ? "100%" : "30%";
        return (
          <div
            key={index}
            className="absolute left-0 w-full transition-transform duration-700 ease-in"
            style={{
              backgroundColor: color,
              height,
              transform: `translateY(${(index - currentIndex) * 100}%)`,
              zIndex: colors.length - index,
            }}
          />
        );
      })}
    </div>
  );
};
 
export default Preloader;
 
 