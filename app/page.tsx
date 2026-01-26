"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Background from "@/components/ui/Background";
import Scene from "@/components/canvas/Scene";
import HeroContent from "@/components/ui/HeroContent";
import ControlBar from "@/components/ui/ControlBar";
import TrustedBy from "@/components/ui/TrustedBy";
import BentoFeatures from "@/components/ui/BentoFeatures";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const [rotation, setRotation] = useState(0);

  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-[#FFD600] selection:text-black overflow-hidden font-urbanist">
      <div className="relative w-full  mx-auto h-screen flex flex-col pt-24 md:pt-28 pb-8 px-6 md:px-12">
        <Background />
        <Navbar />
        <Scene rotationDegree={rotation} />
        <HeroContent />
        <ControlBar rotation={rotation} setRotation={setRotation} />
      </div>
      <div className="relative z-30 bg-[#050505] shadow-[0_-50px_100px_#050505]">
         <TrustedBy />
         <BentoFeatures />
         <Footer />
      </div>
    </main>
  );
}