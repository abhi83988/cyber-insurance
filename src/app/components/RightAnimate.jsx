"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
 
const heroImages = [
  { id: "hero-1", src: "/hero-img/hero-1-main.png", width: 220, height: 190, top:-2.25, left: 0.60 },
  { id: "hero-1-1", src: "/hero-img/hero-1-logo.png", width:130, height: 50, top: -1.44, left: 0.50, extraClass: "ds-hero", mainId: "hero-1" },
  { id: "hero-2", src: "/hero-img/hero-2-main.png", width:220.7, height: 180, top: -2.70, left: 2.50 },
  { id: "hero-2-1", src: "/hero-img/hero-2-logo.png", width: 120, height: 60, top: -1.43, left: 2.70, extraClass: "ds-hero", mainId: "hero-2" },
  { id: "hero-3", src: "/hero-img/hero-3-main.png", width: 220.7, height: 180, top: -1.45, left: 4.30 },
  { id: "hero-3-1", src: "/hero-img/hero-3-logo.png", width: 59, height: 62, top: -0.3, left: 4.30, extraClass: "ds-hero", mainId: "hero-3" },
  { id: "hero-4", src: "/hero-img/hero-4-main.png", width: 220.7, height: 180, top: 0.15, left: 1.25 },
  { id: "hero-4-1", src: "/hero-img/hero-4-logo.png", width: 49, height: 62, top: 0.15, left: 2.80, extraClass: "ds-hero", mainId: "hero-4" },
  { id: "hero-5", src: "/hero-img/hero-5-main.png", width: 220.7, height: 180, top: 0.65, left: 3.80,extraClass: "ds-hero", mainId: "hero-5"},
];
 
// Positions + width/height per breakpoint
const responsiveSettings = {
  1500: {
    "hero-1": { width: 190, height: 190, top:-2.25, left: 0.60},
    "hero-1-1": { width:130, height: 50, top: -1.44, left: 0.50 },
    "hero-2": {  width:190.7, height: 180, top: -2.70, left: 2.30},
    "hero-2-1": {  width: 120, height: 60, top: -1.43, left: 2.50},
    "hero-3": {width: 190.7, height: 180, top: -1.45, left: 4.10},
    "hero-3-1": { width: 59, height: 62, top: -0.3, left: 4.10 },
    "hero-4": {  width: 190.7, height: 180, top: 0.15, left: 1.25 },
    "hero-4-1": { width: 49, height: 62, top: 0.24, left: 2.70 },
    "hero-5": { width: 190.7, height: 180, top: 0.65, left: 3.60 },
  },
  1450: {
    "hero-1": { width: 190, height: 190, top:-2.25, left: 0.60},
    "hero-1-1": { width:130, height: 50, top: -1.44, left: 0.50 },
    "hero-2": {  width:190.7, height: 180, top: -2.70, left: 2.30},
    "hero-2-1": {  width: 120, height: 60, top: -1.43, left: 2.50},
    "hero-3": {width: 190.7, height: 180, top: -1.45, left: 4.10},
    "hero-3-1": { width: 59, height: 62, top: -0.3, left: 4.10 },
    "hero-4": {  width: 190.7, height: 180, top: 0.05, left: 1.25 },
    "hero-4-1": { width: 49, height: 62, top: 0.14, left: 2.70 },
    "hero-5": { width: 190.7, height: 180, top: 0.20, left: 3.60 },
  },
  1400: {
   "hero-1": { width: 190, height: 190, top:-2.25, left: 0.60},
    "hero-1-1": { width:130, height: 50, top: -1.44, left: 0.50 },
    "hero-2": {  width:190.7, height: 180, top: -2.70, left: 2.30},
    "hero-2-1": {  width: 120, height: 60, top: -1.43, left: 2.50},
    "hero-3": {width: 190.7, height: 180, top: -1.45, left: 4.10},
    "hero-3-1": { width: 59, height: 62, top: -0.3, left: 4.10 },
    "hero-4": {  width: 190.7, height: 180, top: 0.05, left: 1.25 },
    "hero-4-1": { width: 49, height: 62, top: 0.14, left: 2.70 },
    "hero-5": { width: 190.7, height: 180, top: 0.20, left: 3.60 },
  },
 
  1270: {
  "hero-1": { width: 190, height: 190, top:-2.25, left: 0.20},
    "hero-1-1": { width:130, height: 50, top: -1.44, left: 0.10 },
    "hero-2": {  width:190.7, height: 180, top: -2.70, left: 2.00},
    "hero-2-1": {  width: 120, height: 60, top: -1.43, left: 2.20},
    "hero-3": {width: 190.7, height: 180, top: -1.45, left: 3.80},
    "hero-3-1": { width: 59, height: 62, top: -0.3, left:3.80},
    "hero-4": {  width: 190.7, height: 180, top: 0.05, left: 1.00 },
    "hero-4-1": { width: 49, height: 62, top: 0.14, left: 2.40 },
    "hero-5": { width: 190.7, height: 180, top: 0.20, left: 3.20 },
  },
  1180: {
  "hero-1": { width: 190, height: 190, top:-2.25, left: 0.10},
    "hero-1-1": { width:130, height: 50, top: -1.44, left: 0.00 },
    "hero-2": {  width:190.7, height: 180, top: -2.70, left: 1.80},
    "hero-2-1": {  width: 120, height: 60, top: -1.43, left: 2.00},
    "hero-3": {width: 190.7, height: 180, top: -1.45, left: 3.60},
    "hero-3-1": { width: 59, height: 62, top: -0.3, left:3.60},
    "hero-4": {  width: 190.7, height: 180, top: 0.05, left: 1.00 },
    "hero-4-1": { width: 49, height: 62, top: 0.14, left: 2.40 },
    "hero-5": { width: 190.7, height: 180, top: 0.20, left: 3.20 },
  },
  1140: {
  "hero-1": { width: 190, height: 190, top:-2.25, left: 0.10},
    "hero-1-1": { width:130, height: 50, top: -1.44, left: 0.00 },
    "hero-2": {  width:190.7, height: 180, top: -2.70, left: 1.80},
    "hero-2-1": {  width: 120, height: 60, top: -1.43, left: 2.00},
    "hero-3": {width: 180.7, height: 180, top: -1.45, left: 3.40},
    "hero-3-1": { width: 59, height: 62, top: -0.3, left:3.40},
    "hero-4": {  width: 190.7, height: 180, top: 0.05, left: 1.00 },
    "hero-4-1": { width: 49, height: 62, top: 0.14, left: 2.40 },
    "hero-5": { width: 190.7, height: 180, top: 0.20, left: 3.20 },
  },
  1096: {
     "hero-1": { width: 180, height: 180, top:-2.25, left: 0.10},
    "hero-1-1": { width:130, height: 50, top: -1.44, left: -0.05 },
    "hero-2": {  width:180.7, height: 180, top: -2.70, left: 1.70},
    "hero-2-1": {  width: 100, height: 60, top: -1.60, left: 1.80},
    "hero-3": {width: 170.7, height: 170, top: -1.45, left: 3.20},
    "hero-3-1": { width: 59, height: 62, top: -0.3, left:3.20},
    "hero-4": {  width: 180.7, height: 180, top: -0.15, left: 0.70 },
    "hero-4-1": { width: 49, height: 62, top: -0.03, left: 2.00 },
    "hero-5": { width: 180.7, height: 180, top: 0.20, left: 2.80 },
  },
  // 1070: {
  //     "hero-1": { width: 210.7, height: 200, top:-2.20, left: -0.10},
  //   "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.13 },
  //   "hero-2": {  width:210.7, height: 200, top: -2.60, left: 0.26 },
  //   "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.29},
  //   "hero-3": { width: 210.7, height: 200, top: -1.45, left: 0.61   },
  //   "hero-3-1": { width: 59, height: 62, top: -0.12, left: 0.61, },
  //   "hero-4": { width: 220.7, height: 200, top: 0.15, left: -0.02 },
  //   "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.32   },
  //   "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.50 },
  // },
  // 1045: {
  //    "hero-1": { width: 200.7, height: 200, top:-2.20, left: -0.10},
  //   "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.13 },
  //   "hero-2": {  width:200.7, height: 200, top: -2.60, left: 0.26 },
  //   "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.29},
  //   "hero-3": { width: 200.7, height: 200, top: -1.45, left: 0.61   },
  //   "hero-3-1": { width: 59, height: 62, top: -0.12, left: 0.61, },
  //   "hero-4": { width: 200.7, height: 200, top: 0.15, left: -0.02 },
  //   "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.32   },
  //   "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.50 },
  // },
   1023: {
     "hero-1": { width: 250.7, height: 200, top:0.90, left: 1.15},
    "hero-1-1": { width:130, height: 50, top: 1.70, left: 1.10 },
    "hero-2": {  width:250.7, height: 200, top: 0.10, left: 3.38 },
    "hero-2-1": { width: 120, height: 60, top: 1.55, left: 3.69},
    "hero-3": { width: 250.7, height: 200, top:1.10, left: 5.64   },
    "hero-3-1": { width: 59, height: 62, top: 2.40, left: 5.64, },
    "hero-4": { width: 250.7, height: 200, top: 3.00, left: 1.65 },
    "hero-4-1": {   width: 59, height: 62, top: 3.10, left: 3.45 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 4.65 },
  },
 
  // 992: {
  //  "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.15},
  //   "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.13 },
  //   "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.38 },
  //   "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.40},
  //   "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.64   },
  //   "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.64, },
  //   "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.25 },
  //   "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.45 },
  //   "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.65 },
  // },
  // 941: {
  //    "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.15},
  //   "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.13 },
  //   "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.38 },
  //   "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.40},
  //   "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.64   },
  //   "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.64, },
  //   "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.25 },
  //   "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.45 },
  //   "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.65 },
  // },
  // 860: {
  //   "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.07},
  //   "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.05 },
  //   "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.35 },
  //   "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.37},
  //   "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.61   },
  //   "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.61, },
  //   "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.15 },
  //   "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.37 },
  //   "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.56 },
  // },
 
  820: {
      "hero-1": { width: 250.7, height: 200, top:0.90, left: 0.75},
    "hero-1-1": { width:130, height: 50, top: 1.70, left: 0.50 },
    "hero-2": {  width:250.7, height: 200, top: 0.10, left: 3.00 },
    "hero-2-1": { width: 120, height: 60, top: 1.55, left: 3.30},
    "hero-3": { width: 250.7, height: 200, top:1.10, left: 5.10   },
    "hero-3-1": { width: 59, height: 62, top: 2.40, left: 5.14, },
    "hero-4": { width: 250.7, height: 200, top: 3.00, left: 1.65 },
    "hero-4-1": {   width: 59, height: 62, top: 3.10, left: 3.45 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 4.65 },
  },
 
  767: {
"hero-1": { width: 250.7, height: 200, top:0.90, left: 0.40},
    "hero-1-1": { width:130, height: 50, top: 1.70, left: 0.25 },
    "hero-2": {  width:250.7, height: 200, top: 0.10, left: 2.50 },
    "hero-2-1": { width: 120, height: 60, top: 1.55, left: 2.80},
    "hero-3": { width: 250.7, height: 200, top:1.10, left: 4.70   },
    "hero-3-1": { width: 59, height: 62, top: 2.40, left: 4.70, },
    "hero-4": { width: 250.7, height: 200, top: 3.20, left: 1.65 },
    "hero-4-1": {   width: 59, height: 62, top: 3.20, left: 3.45 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 4.30 },
  },
  720: {
 "hero-1": { width: 200.7, height: 200, top:0.90, left: 0.40},
    "hero-1-1": { width:130, height: 50, top: 1.70, left: 0.25 },
    "hero-2": {  width:200.7, height: 200, top: 0.10, left: 2.40 },
    "hero-2-1": { width: 120, height: 60, top: 1.45, left: 2.60},
    "hero-3": { width: 200.7, height: 200, top:1.10, left: 4.40   },
    "hero-3-1": { width: 59, height: 62, top: 2.40, left: 4.40, },
    "hero-4": { width: 200.7, height: 200, top: 3.20, left: 1.35 },
    "hero-4-1": {   width: 59, height: 62, top: 3.40, left: 2.90 },
    "hero-5": { width: 200.7, height: 200, top: 3.20, left: 4.0 },
  },
  639: {
 "hero-1": { width: 180.7, height: 180, top:0.90, left: 0.40},
    "hero-1-1": { width:130, height: 50, top: 1.70, left: 0.25 },
    "hero-2": {  width:180.7, height: 180, top: 0.10, left: 2.10 },
    "hero-2-1": { width: 120, height: 60, top: 1.30, left: 2.30},
    "hero-3": { width: 180.7, height: 180, top:1.10, left: 3.90   },
    "hero-3-1": { width: 59, height: 62, top: 2.28, left: 3.90, },
    "hero-4": { width: 180.7, height: 180, top: 3.00, left: 1.10 },
    "hero-4-1": {   width: 59, height: 62, top: 3.10, left: 2.30 },
    "hero-5": { width: 180.7, height: 180, top: 3.20, left: 3.50 },
  },
  590: {
 "hero-1": { width: 180.7, height: 180, top:0.90, left: 0.40},
    "hero-1-1": { width:130, height: 50, top: 1.70, left: 0.25 },
    "hero-2": {  width:180.7, height: 180, top: 0.10, left: 2.10 },
    "hero-2-1": { width: 120, height: 60, top: 1.30, left: 2.30},
    "hero-3": { width: 180.7, height: 180, top:1.10, left: 3.60   },
    "hero-3-1": { width: 59, height: 62, top: 2.28, left: 3.60, },
    "hero-4": { width: 180.7, height: 180, top: 3.00, left: 1.10 },
    "hero-4-1": {   width: 59, height: 62, top: 3.10, left: 2.30 },
    "hero-5": { width: 180.7, height: 180, top: 3.20, left: 3.50 },
  },
  540: {
   "hero-1": { width: 160.7, height: 160, top:0.70, left: 0.10},
    "hero-1-1": { width:100, height: 50, top: 1.30, left: -0.05 },
    "hero-2": {  width:160.7, height: 160, top: 0.10, left: 1.50 },
    "hero-2-1": { width: 100, height: 60, top: 1.10, left: 1.70},
    "hero-3": { width: 150.7, height: 150, top:1.10, left: 2.90   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 2.90, },
    "hero-4": { width: 160.7, height: 160, top: 2.50, left: 0.80 },
    "hero-4-1": {   width: 59, height: 62, top: 2.50, left: 2.00 },
    "hero-5": { width: 160.7, height: 160, top: 3.10, left: 2.40 },
  },
  480: {
  "hero-1": { width: 150.7, height: 150, top:0.70, left: 0.00},
    "hero-1-1": { width:100, height: 50, top: 1.30, left: -0.05 },
    "hero-2": {  width:150.7, height: 150, top: 0.10, left: 1.30 },
    "hero-2-1": { width: 100, height: 60, top: 1.10, left: 1.50},
    "hero-3": { width: 150.7, height: 150, top:1.10, left: 2.60   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 2.60, },
    "hero-4": { width: 150.7, height: 150, top: 2.50, left: 0.40 },
    "hero-4-1": {   width: 59, height: 62, top: 2.50, left: 1.40 },
    "hero-5": { width: 150.7, height: 150, top: 2.90, left: 2.00 },
  },
  420: {
  "hero-1": { width: 130.7, height: 130, top:0.70, left: 0.00},
    "hero-1-1": { width:80, height: 50, top: 1.15, left: -0.05 },
    "hero-2": {  width:130.7, height: 130, top: 0.30, left: 1.10 },
    "hero-2-1": { width: 80, height: 60, top: 1.05, left: 1.30},
    "hero-3": { width: 130.7, height: 130, top:1.10, left: 2.40   },
    "hero-3-1": { width: 39, height: 50, top: 1.85, left: 2.40, },
    "hero-4": { width: 130.7, height: 130, top: 2.20, left: 0.40 },
    "hero-4-1": {   width: 39, height: 50, top: 2.20, left: 1.40 },
    "hero-5": { width: 130.7, height: 130, top: 2.50, left: 2.00 },
 
  },
  380: {
"hero-1": { width: 130.7, height: 130, top:0.70, left: 0.00},
    "hero-1-1": { width:80, height: 50, top: 1.15, left: -0.05 },
    "hero-2": {  width:130.7, height: 130, top: 0.30, left: 1.10 },
    "hero-2-1": { width: 80, height: 60, top: 1.05, left: 1.30},
    "hero-3": { width: 100.7, height: 130, top:1.10, left: 2.20   },
    "hero-3-1": { width: 39, height: 50, top: 1.85, left: 2.20, },
    "hero-4": { width: 130.7, height: 130, top: 2.20, left: 0.40 },
    "hero-4-1": {   width: 39, height: 50, top: 2.20, left: 1.40 },
    "hero-5": { width: 130.7, height: 130, top: 2.50, left: 2.00 },
  },
  340: {
 "hero-1": { width: 110.7, height: 110, top:0.70, left: 0.00},
    "hero-1-1": { width:70, height: 50, top: 1.00, left: -0.05 },
    "hero-2": {  width:110.7, height: 110, top: 0.30, left: 0.98 },
    "hero-2-1": { width: 80, height: 60, top: 0.94, left: 1.10},
    "hero-3": { width: 110.7, height: 110, top:1.10, left: 2.00   },
    "hero-3-1": { width: 29, height: 40, top: 1.80, left: 2.00, },
    "hero-4": { width: 130.7, height: 130, top: 2.20, left: 0.20 },
    "hero-4-1": {   width: 39, height: 50, top: 2.20, left: 1.20 },
    "hero-5": { width: 130.7, height: 130, top: 2.50, left: 1.60 },
  },
};
 
 
 
 
const HeroRightImages = () => {
  const containerRef = useRef(null);
  const imgRefs = useRef({});
  const [settings, setSettings] = useState({});
 
  // Update responsive settings on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let matched = {};
      const keys = Object.keys(responsiveSettings).sort((a, b) => b - a); // largest to smallest
      for (let bp of keys) {
        if (width <= bp) matched = responsiveSettings[bp];
      }
      setSettings(matched);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
 
useEffect(() => {
  // Set initial state
  Object.values(imgRefs.current).forEach((el) => {
    if (el) gsap.set(el, { opacity: 0, y: 50 });
  });
 
  // Animate one by one
  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "power3.out" } });
 
  heroImages.forEach((img) => {
    const el = imgRefs.current[img.id];
    if (el) tl.to(el, { opacity: 1, y: 0 });
  });
}, [settings]);
 
 
  // GSAP parallax
useEffect(() => {
  const handleMouseMove = (e) => {
    const { innerHeight, innerWidth } = window;
    const moveY = (e.clientY / innerHeight - 0.5) * 20; // -10px to +10px
    const moveX = (e.clientX / innerWidth - 0.5) * 20;  // -10px to +10px
 
    // First, move all ds-hero images and calculate totals per main image
    const mainHeroMap = {}; // { mainId: { totalX, totalY, count } }
 
    heroImages.forEach((img) => {
      const el = imgRefs.current[img.id];
      if (!el) return;
 
      if (img.extraClass?.includes("ds-hero")) {
        // Move ds-hero images
        gsap.to(el, {
          x: moveX,
          y: moveY,
          duration: 0.6,
          ease: "power2.out",
        });
 
        // Determine which main image this ds-hero belongs to
        const mainId = img.mainId || "hero-1"; // default hero-1 if no mapping
        if (!mainHeroMap[mainId]) mainHeroMap[mainId] = { totalX: 0, totalY: 0, count: 0 };
 
        mainHeroMap[mainId].totalX += moveX;
        mainHeroMap[mainId].totalY += moveY;
        mainHeroMap[mainId].count++;
      }
    });
 
    // Move each main image relative to its ds-hero images
    Object.entries(mainHeroMap).forEach(([mainId, { totalX, totalY, count }]) => {
      const mainEl = imgRefs.current[mainId];
      if (!mainEl || count === 0) return;
 
      const avgX = totalX / count;
      const avgY = totalY / count;
 
      gsap.to(mainEl, {
        x: avgX * 0.6, // smaller factor for following effect
        y: avgY * 0.6,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  };
 
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);
 
 
 
 
  return (
    <div ref={containerRef} className="relative w-full hero__svg "
   
    >
 
 
      {heroImages.map((img) => {
        const s = settings[img.id] || img;
        return (
          <div
            key={img.id}
            ref={(el) => (imgRefs.current[img.id] = el)}
            className={img.extraClass || ""}
            style={{
              position: "absolute",
              width: `${s.width}px`,
              height: `${s.height}px`,
              top: `${s.top * 100}px`,
              left: `${s.left * 100}px`,
            }}
          >
            <img src={img.src} alt="" className="h-full object-contain" />
          </div>
        );
      })}
    </div>
  );
};
 
export default HeroRightImages;