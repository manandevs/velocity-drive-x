"use client";

import Image from "next/image";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 py-3 pointer-events-auto"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 overflow-hidden bg-white/5 group-hover:border-[#FFD600]/50 transition-colors">
            <Image
              src="/vdx.png"
              alt="logo"
              width={100}
              height={100}
              className="object-cover w-full h-full opacity-90 filter sepia saturate-200 hue-rotate-[30deg] brightness-110 contrast-110"
            />
          </div>
          <span className="text-2xl md:text-3xl text-white font-asah tracking-widest pt-1 group-hover:text-[#FFD600] transition-colors">
            VDX
          </span>
        </motion.div>

        {/* Branding Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="col-span-2 md:col-span-3 flex flex-col items-center md:items-end md:pr-4"
        >
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 mb-1"
          >
            <Zap className="w-3 h-3 text-[#FFD600] fill-[#FFD600]" />
            <h4 className="font-asah text-2xl md:text-4xl text-white tracking-widest italic">
              UDX-GT
            </h4>
          </motion.div>

          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-end gap-2 px-2 py-1 bg-[#FFD600] rounded-sm skew-x-[-10deg]"
          >
            <span className="text-black text-[12px] tracking-[0.3em] font-black skew-x-[10deg] font-asah leading-2.5">
              velocity-dxrive-x
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
