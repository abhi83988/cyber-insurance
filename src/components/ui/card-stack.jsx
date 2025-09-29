"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function CardStack({ items }) {
  const [cards, setCards] = useState(items);

  // Auto rotate cards every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
    }, 2500); // 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-72 sm:h-80 md:h-96 flex items-center justify-center mx-auto px-4">
      <AnimatePresence>
        {cards.map((card, index) => {
          const isTop = index === 0;

          // Staggered x-offset and rotation for stacked effect
          const xOffset = (index - 1) * 20; // left/right shift
          const rotate = (index - 1) * 5;   // rotation for fanned look
          const scale = 1 - Math.abs(index - 1) * 0.05;

          return (
            <motion.div
              key={card.id}
              className={cn(
                "absolute w-full sm:w-64 md:w-72 lg:w-80 h-40 sm:h-44 md:h-48 lg:h-52 bg-white dark:bg-neutral-900 shadow-lg rounded-2xl p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between overflow-hidden break-words"
              )}
              style={{ zIndex: cards.length - index }}
              initial={{ x: xOffset, rotate, scale: 0.8, opacity: 0 }}
              animate={{ x: xOffset, rotate, scale, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-1 sm:mb-2 truncate">
                {card.designation}
              </div>
              <div className="text-sm sm:text-base md:text-base mb-2 overflow-hidden break-words">
                {card.content}
              </div>
              <div className="text-right font-semibold text-sm sm:text-base truncate">
                {card.name}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
