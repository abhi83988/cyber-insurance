"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
 
const heroImages = [
  { id: "hero-1", src: "/hero-img/hero-1-main.png", width: 200.7, height: 200, top:-2.20, left: 0.15 },
  { id: "hero-1-1", src: "/hero-img/hero-1-logo.png", width:130, height: 50, top: -1.40, left: 0.13, extraClass: "ds-hero" },
  { id: "hero-2", src: "/hero-img/hero-2-main.png", width:200.7, height: 200, top: -2.60, left: 0.43 },
  { id: "hero-2-1", src: "/hero-img/hero-2-logo.png", width: 120, height: 60, top: -1.3, left: 0.45, extraClass: "ds-hero" },
  { id: "hero-3", src: "/hero-img/hero-3-main.png", width: 200.7, height: 200, top: -1.45, left: 0.70 },
  { id: "hero-3-1", src: "/hero-img/hero-3-logo.png", width: 59, height: 62, top: -0.10, left: 0.70, extraClass: "ds-hero" },
  { id: "hero-4", src: "/hero-img/hero-4-main.png", width: 220.7, height: 200, top: 0.25, left: 0.25 },
  // { id: "hero-4-1", src: "/hero-img/hero-4-logo.png", width: 59, height: 62, top: 0.87, left: 0.47, extraClass: "ds-hero" },
  { id: "hero-5", src: "/hero-img/hero-5-main.png", width: 200.7, height: 200, top: 0.65, left: 0.65 },
];
 
// Positions + width/height per breakpoint
const responsiveSettings = {
  1500: {
    "hero-1": { width: 250.7, height: 200, top:-2.20, left: 0.15},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: 0.13 },
    "hero-2": {  width:250.7, height: 200, top: -2.60, left: 0.43 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.45},
    "hero-3": { width: 250.7, height: 200, top: -1.45, left: 0.70   },
    "hero-3-1": { width: 59, height: 62, top: -0.10, left: 0.70, },
    "hero-4": { width: 250.7, height: 200, top: 0.25, left: 0.25 },
    "hero-4-1": {   width: 59, height: 62, top: 0.87, left: 0.52 },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.65 },
  },
  1450: {
    "hero-1": { width: 250.7, height: 200, top:-2.20, left: 0.10},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: 0.08 },
    "hero-2": {  width:250.7, height: 200, top: -2.60, left: 0.40 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.42},
    "hero-3": { width: 250.7, height: 200, top: -1.45, left: 0.70   },
    "hero-3-1": { width: 59, height: 62, top: -0.10, left: 0.70, },
    "hero-4": { width: 250.7, height: 200, top: 0.25, left: 0.25 },
    "hero-4-1": {   width: 59, height: 62, top: 0.87, left: 0.52 },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.65 },
  },
  1400: {
    "hero-1": { width: 250.7, height: 200, top:-2.20, left: 0.03},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: 0.01 },
    "hero-2": {  width:250.7, height: 200, top: -2.60, left: 0.35 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.38},
    "hero-3": { width: 250.7, height: 200, top: -1.45, left: 0.67   },
    "hero-3-1": { width: 59, height: 62, top: -0.10, left: 0.67, },
    "hero-4": { width: 250.7, height: 200, top: 0.25, left: 0.10 },
    "hero-4-1": { width: 59, height: 62, top: 0.87, left: 0.38   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.60 },
  },
  1300: {
   "hero-1": { width: 220.7, height: 200, top:-2.20, left: -0.02},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.05 },
    "hero-2": {  width:220.7, height: 200, top: -2.60, left: 0.32 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.35},
    "hero-3": { width: 220.7, height: 200, top: -1.45, left: 0.65   },
    "hero-3-1": { width: 59, height: 62, top: -0.10, left: 0.65, },
    "hero-4": { width: 220.7, height: 200, top: 0.15, left: 0.07 },
    "hero-4-1": {   width: 59, height: 62, top: 0.83, left: 0.37   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.60 },
  },
  1240: {
   "hero-1": { width: 220.7, height: 200, top:-2.20, left: -0.02},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.05 },
    "hero-2": {  width:220.7, height: 200, top: -2.60, left: 0.32 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.35},
    "hero-3": { width: 210.7, height: 200, top: -1.45, left: 0.65   },
    "hero-3-1": { width: 59, height: 62, top: -0.10, left: 0.65, },
    "hero-4": { width: 220.7, height: 200, top: 0.15, left: 0.07 },
    "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.38   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.60 },
  },
  1180: {
   "hero-1": { width: 210.7, height: 200, top:-2.20, left: -0.07},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.10 },
    "hero-2": {  width:210.7, height: 200, top: -2.60, left: 0.28 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.31},
    "hero-3": { width: 210.7, height: 200, top: -1.45, left: 0.63   },
    "hero-3-1": { width: 59, height: 62, top: -0.10, left: 0.63, },
    "hero-4": { width: 220.7, height: 200, top: 0.15, left: 0.02 },
    "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.35   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.55 },
  },
  1140: {
  "hero-1": { width: 210.7, height: 200, top:-2.20, left: -0.07},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.10 },
    "hero-2": {  width:210.7, height: 200, top: -2.60, left: 0.28 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.31},
    "hero-3": { width: 210.7, height: 200, top: -1.45, left: 0.63   },
    "hero-3-1": { width: 59, height: 62, top: -0.10, left: 0.63, },
    "hero-4": { width: 220.7, height: 200, top: 0.15, left: 0.02 },
    "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.35   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.55 },
  },
  1096: {
     "hero-1": { width: 210.7, height: 200, top:-2.20, left: -0.10},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.13 },
    "hero-2": {  width:210.7, height: 200, top: -2.60, left: 0.26 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.29},
    "hero-3": { width: 210.7, height: 200, top: -1.45, left: 0.61   },
    "hero-3-1": { width: 59, height: 62, top: -0.12, left: 0.61, },
    "hero-4": { width: 220.7, height: 200, top: 0.15, left: -0.02 },
    "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.32   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.50 },
  },
  1070: {
      "hero-1": { width: 210.7, height: 200, top:-2.20, left: -0.10},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.13 },
    "hero-2": {  width:210.7, height: 200, top: -2.60, left: 0.26 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.29},
    "hero-3": { width: 210.7, height: 200, top: -1.45, left: 0.61   },
    "hero-3-1": { width: 59, height: 62, top: -0.12, left: 0.61, },
    "hero-4": { width: 220.7, height: 200, top: 0.15, left: -0.02 },
    "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.32   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.50 },
  },
  1045: {
     "hero-1": { width: 200.7, height: 200, top:-2.20, left: -0.10},
    "hero-1-1": { width:130, height: 50, top: -1.40, left: -0.13 },
    "hero-2": {  width:200.7, height: 200, top: -2.60, left: 0.26 },
    "hero-2-1": { width: 120, height: 60, top: -1.19, left: 0.29},
    "hero-3": { width: 200.7, height: 200, top: -1.45, left: 0.61   },
    "hero-3-1": { width: 59, height: 62, top: -0.12, left: 0.61, },
    "hero-4": { width: 200.7, height: 200, top: 0.15, left: -0.02 },
    "hero-4-1": {   width: 59, height: 62, top: 0.75, left: 0.32   },
    "hero-5": { width: 195.7, height: 200, top: 0.65, left: 0.50 },
  },
   1023: {
     "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.15},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.13 },
    "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.38 },
    "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.40},
    "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.64, },
    "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.25 },
    "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.43 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.65 },
  },
 
  992: {
   "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.15},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.13 },
    "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.38 },
    "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.40},
    "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.64, },
    "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.25 },
    "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.45 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.65 },
  },
  941: {
     "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.15},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.13 },
    "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.38 },
    "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.40},
    "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.64, },
    "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.25 },
    "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.45 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.65 },
  },
  860: {
    "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.07},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.05 },
    "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.35 },
    "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.37},
    "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.61   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.61, },
    "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.15 },
    "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.37 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.56 },
  },
 
  820: {
     "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.05},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.03 },
    "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.33 },
    "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.35},
    "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.63   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.63, },
    "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.15 },
    "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.39 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.56 },
  },
 
  767: {
     "hero-1": { width: 250.7, height: 200, top:0.40, left: 0.03},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.01 },
    "hero-2": {  width:250.7, height: 200, top: -0.10, left: 0.34 },
    "hero-2-1": { width: 120, height: 60, top: 1.35, left: 0.36},
    "hero-3": { width: 250.7, height: 200, top: 0.70, left: 0.65   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.65, },
    "hero-4": { width: 250.7, height: 200, top: 2.90, left: 0.15 },
    "hero-4-1": {   width: 59, height: 62, top: 3.50, left: 0.41 },
    "hero-5": { width: 250.7, height: 200, top: 3.20, left: 0.56 },
  },
  720: {
     "hero-1": { width: 220.7, height: 200, top:0.40, left: 0.03},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.01 },
    "hero-2": {  width:220.7, height: 200, top: -0.10, left: 0.34 },
    "hero-2-1": { width: 120, height: 60, top: 1.31, left: 0.36},
    "hero-3": { width: 220.7, height: 200, top: 0.70, left: 0.66   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.66, },
    "hero-4": { width: 220.7, height: 200, top: 2.90, left: 0.15 },
    "hero-4-1": {   width: 55, height: 62, top: 3.50, left: 0.41 },
    "hero-5": { width: 220.7, height: 200, top: 3.20, left: 0.56 },
  },
  639: {
     "hero-1": { width: 210.7, height: 200, top:0.40, left: 0.03},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: 0.01 },
    "hero-2": {  width:210.7, height: 200, top: -0.10, left: 0.34 },
    "hero-2-1": { width: 120, height: 60, top: 1.31, left: 0.36},
    "hero-3": { width: 210.7, height: 200, top: 0.70, left: 0.66   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.66, },
    "hero-4": { width: 210.7, height: 200, top: 2.90, left: 0.15 },
    "hero-4-1": {   width: 59, height: 50, top: 3.50, left: 0.43 },
    "hero-5": { width: 210.7, height: 200, top: 3.20, left: 0.56 },
  },
  590: {
     "hero-1": { width: 210.7, height: 200, top:0.40, left: -0.01},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: -0.03},
    "hero-2": {  width:210.7, height: 200, top: -0.10, left: 0.32 },
    "hero-2-1": { width: 120, height: 60, top: 1.31, left: 0.34},
    "hero-3": { width: 210.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 59, height: 62, top: 2.00, left: 0.64, },
    "hero-4": { width: 210.7, height: 200, top: 2.90, left: 0.05 },
    "hero-4-1": {   width: 59, height: 50, top: 3.50, left: 0.35 },
    "hero-5": { width: 210.7, height: 200, top: 3.20, left: 0.56 },
  },
  540: {
      "hero-1": { width: 190, height: 200, top:0.40, left: -0.04},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: -0.10},
    "hero-2": {  width:190, height: 200, top: -0.04, left: 0.30 },
    "hero-2-1": { width: 120, height: 60, top: 1.31, left: 0.32},
    "hero-3": { width: 160.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 59, height: 62, top: 1.90, left: 0.64, },
    "hero-4": { width: 200.7, height: 200, top: 2.50, left: 0.05 },
    "hero-4-1": {   width: 49, height: 40, top: 3.12, left: 0.39 },
    "hero-5": { width: 200.7, height: 200, top: 3.10, left: 0.50 },
  },
  480: {
    "hero-1": { width: 160, height: 200, top:0.40, left: -0.04},
    "hero-1-1": { width:130, height: 50, top: 1.20, left: -0.10},
    "hero-2": {  width:160, height: 200, top: -0.04, left: 0.30 },
    "hero-2-1": { width: 120, height: 60, top: 1.23, left: 0.32},
    "hero-3": { width: 160.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 59, height: 62, top: 1.90, left: 0.64, },
    "hero-4": { width: 200.7, height: 200, top: 2.50, left: 0.05 },
    "hero-4-1": {   width: 49, height: 40, top: 3.12, left: 0.41 },
    "hero-5": { width: 200.7, height: 200, top: 3.10, left: 0.50 },
  },
  420: {
   "hero-1": { width: 130, height: 200, top:0.40, left: -0.01},
    "hero-1-1": { width:90, height: 50, top: 1.20, left: -0.08},
    "hero-2": {  width:130, height: 200, top: -0.04, left: 0.29 },
    "hero-2-1": { width: 90, height: 60, top: 1.10, left: 0.32},
    "hero-3": { width: 130.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 49, height: 40, top: 1.90, left: 0.64, },
    "hero-4": { width: 160.7, height: 200, top: 2.50, left: 0.05 },
    "hero-4-1": {   width: 49, height: 40, top: 3.12, left: 0.46 },
    "hero-5": { width: 160.7, height: 200, top: 3.10, left: 0.50 },
  },
  380: {
     "hero-1": { width: 130, height: 200, top:0.40, left: -0.01},
    "hero-1-1": { width:90, height: 50, top: 1.20, left: -0.08},
    "hero-2": {  width:130, height: 200, top: -0.04, left: 0.31 },
    "hero-2-1": { width: 90, height: 60, top: 1.10, left: 0.32},
    "hero-3": { width: 130.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 49, height: 40, top: 1.90, left: 0.64, },
    "hero-4": { width: 160.7, height: 200, top: 2.50, left: 0.05 },
    "hero-4-1": {   width: 39, height: 30, top: 3.20, left: 0.42 },
    "hero-5": { width: 160.7, height: 200, top: 3.10, left: 0.50 },
  },
  340: {
     "hero-1": { width: 110, height: 200, top:0.48, left: -0.01},
    "hero-1-1": { width:90, height: 50, top: 1.24, left: -0.08},
    "hero-2": {  width:110, height: 200, top: -0.04, left: 0.31 },
    "hero-2-1": { width: 90, height: 60, top: 1.05, left: 0.32},
    "hero-3": { width: 110.7, height: 200, top: 0.70, left: 0.64   },
    "hero-3-1": { width: 49, height: 40, top: 1.90, left: 0.64, },
    "hero-4": { width: 110.7, height: 200, top: 1.90, left: 0.05 },
    "hero-4-1": {   width: 39, height: 30, top: 2.60, left: 0.34 },
    "hero-5": { width: 110.7, height: 200, top: 1.90, left: 0.50 },
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
  const container = containerRef.current;
  if (!container) return;
 
  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
 
    const xPercent = (offsetX / rect.width - 0.5) * 2;
    const yPercent = (offsetY / rect.height - 0.5) * 2;
 
    Object.values(imgRefs.current).forEach((el) => {
      if (!el) return;
      const depth = el.classList.contains("ds-hero") ? 15 : 8; // stronger for logos
      gsap.to(el, {
        x: xPercent * depth,
        y: yPercent * depth,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  };
 
  const handleMouseLeave = () => {
    Object.values(imgRefs.current).forEach((el) => {
      if (!el) return;
      gsap.to(el, { x: 0, y: 0, duration: 1.2, ease: "power3.out" });
    });
  };
 
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
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
              left: `${s.left * 100}%`,
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
 