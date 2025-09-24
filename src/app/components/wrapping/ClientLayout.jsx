"use client";
 
import { useState } from "react";
import Preloader from "../Preloader";
 
export default function ClientLayout({ children }) {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
 
  return (
    <>
      {!preloaderFinished && <Preloader onFinish={() => setPreloaderFinished(true)} />}
      {preloaderFinished && children}
    </>
  );
}