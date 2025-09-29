'use client';

import { cn } from "@/lib/utils";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const BringToFrontIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () =>
        reduced ? controls.start("normal") : controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleEnter = useCallback((e) => {
    if (reduced) return;
    if (!isControlled.current) controls.start("animate");
    else onMouseEnter?.(e);
  }, [controls, onMouseEnter, reduced]);

  const handleLeave = useCallback((e) => {
    if (!isControlled.current) controls.start("normal");
    else onMouseLeave?.(e);
  }, [controls, onMouseLeave]);

  const svgVariants = reduced
    ? { normal: { scale: 1, rotate: 0 }, animate: { scale: 1, rotate: 0 } }
    : {
        normal: { scale: 1, rotate: 0 },
        animate: {
          rotate: [0, -3, 3, 0],
          scale: [1, 1.05, 0.95, 1],
          transition: { duration: 1.4, ease: [0.42, 0, 0.58, 1], repeat: 0 },
        },
      };

  const pathVariants = reduced
    ? { normal: { pathLength: 1, opacity: 1 }, animate: { pathLength: 1, opacity: 1 } }
    : {
        normal: { pathLength: 1, opacity: 1 },
        animate: {
          pathLength: [0, 1],
          opacity: [0.5, 1],
          transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1], repeat: 0 },
        },
      };

  const rectVariants = reduced
    ? { normal: { scale: 1 }, animate: { scale: 1 } }
    : {
        normal: { scale: 1 },
        animate: {
          scale: [1, 1.2, 0.9, 1],
          transition: { duration: 1, ease: [0.42, 0, 0.58, 1], repeat: 0 },
        },
      };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        initial="normal"
        variants={svgVariants}
      >
        <motion.rect x="8" y="8" width="8" height="8" rx="2" variants={rectVariants} />
        <motion.path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" variants={pathVariants} />
        <motion.path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" variants={pathVariants} />
      </motion.svg>
    </motion.div>
  );
});

BringToFrontIcon.displayName = "BringToFrontIcon";

export { BringToFrontIcon };



//CircleCheckBigIcon 


const CircleCheckBigIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const tickControls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () => {
        if (reduced) {
          controls.start("normal");
          tickControls.start("normal");
        } else {
          controls.start("animate");
          tickControls.start("animate");
        }
      },
      stopAnimation: () => {
        controls.start("normal");
        tickControls.start("normal");
      },
    };
  });

  const handleEnter = useCallback(
    (e) => {
      if (reduced) return;
      if (!isControlled.current) {
        controls.start("animate");
        tickControls.start("animate");
      } else {
        onMouseEnter?.(e);
      }
    },
    [controls, tickControls, reduced, onMouseEnter]
  );

  const handleLeave = useCallback(
    (e) => {
      if (!isControlled.current) {
        controls.start("normal");
        tickControls.start("normal");
      } else {
        onMouseLeave?.(e);
      }
    },
    [controls, tickControls, onMouseLeave]
  );

  const svgVariants = {
    normal: { scale: 1 },
    animate: {
      scale: [1, 1.05, 0.98, 1],
      transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const circleVariants = {
    normal: { pathLength: 1, opacity: 1 },
    animate: { pathLength: 1, opacity: 1 },
  };

  const tickVariants = {
    normal: { pathLength: 1, opacity: 1 },
    animate: {
      pathLength: [0, 1],
      opacity: 1,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        initial="normal"
        variants={svgVariants}
      >
        <motion.path
          d="M21.801 10A10 10 0 1 1 17 3.335"
          variants={circleVariants}
          initial="normal"
        />
        <motion.path
          d="m9 11 3 3L22 4"
          animate={tickControls}
          initial="normal"
          variants={tickVariants}
        />
      </motion.svg>
    </motion.div>
  );
});

CircleCheckBigIcon.displayName = "CircleCheckBigIcon";
export { CircleCheckBigIcon };



//BlendIcon

const BlendIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () => reduced ? controls.start("normal") : controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleEnter = useCallback(
    (e) => {
      if (reduced) return;
      if (!isControlled.current) controls.start("animate");
      else onMouseEnter?.(e);
    },
    [controls, reduced, onMouseEnter]
  );

  const handleLeave = useCallback(
    (e) => {
      if (!isControlled.current) controls.start("normal");
      else onMouseLeave?.(e);
    },
    [controls, onMouseLeave]
  );

  const groupVariants = {
    normal: { rotate: 0, scale: 1 },
    animate: {
      rotate: [0, -1.5, 1.5, 0],
      scale: [1, 1.02, 1],
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const leftCircle = {
    normal: { strokeDashoffset: 0, opacity: 1, x: 0 },
    animate: {
      strokeDashoffset: [48, 0],
      opacity: [0.45, 1],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const rightCircle = {
    normal: { strokeDashoffset: 0, opacity: 1, x: 0 },
    animate: {
      strokeDashoffset: [48, 0],
      opacity: [0.45, 1],
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.09 },
    },
  };

  const overlapPulse = {
    normal: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.06, 1],
      opacity: [0.9, 1, 1],
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.25 },
    },
  };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-blend-icon lucide-blend"
      >
        <motion.g variants={groupVariants} initial="normal" animate={controls}>
          <motion.circle
            cx="9"
            cy="9"
            r="7"
            strokeDasharray="48"
            strokeDashoffset="48"
            variants={leftCircle}
            initial="normal"
            animate={controls}
          />
          <motion.g variants={overlapPulse} initial="normal" animate={controls}>
            <motion.circle
              cx="15"
              cy="15"
              r="7"
              strokeDasharray="48"
              strokeDashoffset="48"
              variants={rightCircle}
              initial="normal"
              animate={controls}
            />
          </motion.g>
        </motion.g>
      </motion.svg>
    </motion.div>
  );
});

BlendIcon.displayName = "BlendIcon";
export { BlendIcon };


//AtomIcon


const AtomIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () =>
        reduced ? controls.start("normal") : controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleEnter = useCallback(
    (e) => {
      if (reduced) return;
      if (!isControlled.current) controls.start("animate");
      else onMouseEnter?.(e);
    },
    [controls, reduced, onMouseEnter]
  );

  const handleLeave = useCallback(
    (e) => {
      if (!isControlled.current) {
        controls.start("normal");
      } else {
        onMouseLeave?.(e);
      }
    },
    [controls, onMouseLeave]
  );

  const pathVariants = {
    normal: { rotate: 0, scale: 1, transition: { duration: 0.3 } },
    animate: {
      rotate: 360,
      scale: [1, 1.1, 1],
      transition: { duration: 2, ease: "linear", repeat: Infinity },
    },
  };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        animate={controls}
        initial="normal"
      >
        <circle cx="12" cy="12" r="1" />
        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
      </motion.svg>
    </motion.div>
  );
});

AtomIcon.displayName = "AtomIcon";
export { AtomIcon };


//HandCoinsIcon

const HandCoinsIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const groupControls = useAnimation();
  const coinsControls = useAnimation();
  const handControls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () => {
        if (reduced) {
          groupControls.start("normal");
          coinsControls.start("normal");
          handControls.start("normal");
        } else {
          groupControls.start("animate");
          coinsControls.start("animate");
          handControls.start("animate");
        }
      },
      stopAnimation: () => {
        groupControls.start("normal");
        coinsControls.start("normal");
        handControls.start("normal");
      },
    };
  });

  const handleEnter = useCallback(
    (e) => {
      if (reduced) return;
      if (!isControlled.current) {
        groupControls.start("animate");
        coinsControls.start("animate");
        handControls.start("animate");
      } else onMouseEnter?.(e);
    },
    [groupControls, coinsControls, handControls, reduced, onMouseEnter]
  );

  const handleLeave = useCallback(
    (e) => {
      if (!isControlled.current) {
        groupControls.start("normal");
        coinsControls.start("normal");
        handControls.start("normal");
      } else onMouseLeave?.(e);
    },
    [groupControls, coinsControls, handControls, onMouseLeave]
  );

  const groupVariants = {
    normal: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.05, 0.98, 1],
      rotate: [0, -1.5, 1.5, 0],
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  };

  const coinsVariants = {
    normal: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.2, 0.95, 1],
      opacity: [1, 0.9, 1],
      transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
    },
  };

  const handVariants = {
    normal: { pathLength: 1, opacity: 1 },
    animate: {
      pathLength: [0, 1],
      opacity: [0.6, 1],
      transition: { duration: 1.1, ease: "easeInOut", delay: 0.15 },
    },
  };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="normal"
        animate={groupControls}
        variants={groupVariants}
      >
        <motion.path
          d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"
          initial="normal"
          animate={handControls}
          variants={handVariants}
        />
        <motion.path
          d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
          initial="normal"
          animate={handControls}
          variants={handVariants}
        />
        <motion.path
          d="m2 16 6 6"
          initial="normal"
          animate={handControls}
          variants={handVariants}
        />
        <motion.circle
          cx="16"
          cy="9"
          r="2.9"
          initial="normal"
          animate={coinsControls}
          variants={coinsVariants}
        />
        <motion.circle
          cx="6"
          cy="5"
          r="3"
          initial="normal"
          animate={coinsControls}
          variants={coinsVariants}
        />
      </motion.svg>
    </motion.div>
  );
});

HandCoinsIcon.displayName = "HandCoinsIcon";
export { HandCoinsIcon };


//BoltIcon 

const BoltIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () => {
        if (reduced) controls.start("normal");
        else controls.start("animate");
      },
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleEnter = useCallback(
    (e) => {
      if (reduced) return;
      if (!isControlled.current) controls.start("animate");
      else onMouseEnter?.(e);
    },
    [controls, reduced, onMouseEnter]
  );

  const handleLeave = useCallback(
    (e) => {
      if (!isControlled.current) controls.start("normal");
      else onMouseLeave?.(e);
    },
    [controls, onMouseLeave]
  );

  const iconVariants = {
    normal: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.08, 0.95, 1],
      rotate: [0, -2, 2, 0],
      transition: { duration: 1.2, ease: "easeInOut", repeat: 0 },
    },
  };

  const pathVariants = {
    normal: { pathLength: 1 },
    animate: {
      pathLength: [0, 1],
      transition: { duration: 1.3, ease: "easeInOut", repeat: 0 },
    },
  };

  const circleVariants = {
    normal: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.3, 0.9, 1],
      opacity: [1, 0.6, 1],
      transition: { duration: 1.1, ease: "easeInOut", repeat: 0 },
    },
  };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        initial="normal"
        variants={iconVariants}
      >
        <motion.path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          variants={pathVariants}
        />
        <motion.circle cx="12" cy="12" r="4" variants={circleVariants} />
      </motion.svg>
    </motion.div>
  );
});

BoltIcon.displayName = "BoltIcon";
export { BoltIcon };


//ChartPieIcon 


const ChartPieIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const reduced = useReducedMotion();
  const isControlled = useRef(false);

  useImperativeHandle(ref, () => {
    isControlled.current = true;
    return {
      startAnimation: () => reduced ? controls.start("normal") : controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleEnter = useCallback(
    (e) => {
      if (reduced) return;
      if (!isControlled.current) controls.start("animate");
      else onMouseEnter?.(e);
    },
    [controls, reduced, onMouseEnter]
  );

  const handleLeave = useCallback(
    (e) => {
      if (!isControlled.current) {
        controls.start("normal");
      } else {
        onMouseLeave?.(e);
      }
    },
    [controls, onMouseLeave]
  );

  const pathVariants = {
    normal: { pathLength: 1, opacity: 1, transition: { duration: 0.2 } },
    animate: { pathLength: [0, 1], opacity: [0.7, 1], transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const chartVariants = {
    normal: { scale: 1, rotate: 0, transition: { duration: 0.2 } },
    animate: { scale: [1, 1.05, 1], rotate: [0, 5, -5, 0], transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={chartVariants}
        animate={controls}
        initial="normal"
      >
        <motion.path
          d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
          variants={pathVariants}
        />
        <motion.path
          d="M21.21 15.89A10 10 0 1 1 8 2.83"
          variants={pathVariants}
        />
      </motion.svg>
    </motion.div>
  );
});

ChartPieIcon.displayName = "ChartPieIcon";
export { ChartPieIcon };