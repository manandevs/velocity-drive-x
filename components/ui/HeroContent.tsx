"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between rounded-2xl gap-0 md:gap-6 z-20 pointer-events-none">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4 pointer-events-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="font-asah backdrop-blur-[2px] text-5xl md:text-6xl text-white tracking-tight leading-[0.9]"
        >
          The Legend of
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] via-[#FFE55C] to-white px-2.5 py-0.5 md:py-1 lg:py-2">
            Longtail
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="bg-[#FFD600] p-2 inset-0 z-0 rounded-2xl backdrop-blur-[2px] text-gray-900 text-sm font-light leading-relaxed border-l border-[#FFD600]/50 pl-4 max-w-xs text-right md:text-left"
        >
          Stop stressing about logistics. We align your business engine with the
          right experts to launch campaigns at race pace.
        </motion.p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
        className="space-y-4 pointer-events-auto pt-3 md:pt-0"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="bg-[#FFD600] p-2 inset-0 z-0 rounded-2xl backdrop-blur-[2px] text-gray-900 text-sm font-light leading-relaxed border-l border-[#FFD600]/50 pl-4 max-w-xs text-right md:text-left"
        >
          The ultimate evolution of the F1 GTR. Featuring the iconic yellow and
          green livery, the #11 represents the pinnacle of naturally aspirated
          V12 dominance.
        </motion.p>
      </motion.div>
    </div>
  );
}
