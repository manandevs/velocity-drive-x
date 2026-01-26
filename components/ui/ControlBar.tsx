"use client";

import Link from "next/link";
import { Trophy, Headset, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface ControlBarProps {
  rotation: number;
  setRotation: (val: number) => void;
}

const stats = [
  {
    Icon: Trophy,
    value: (
      <>
        100<span className="text-[#FFD600] text-sm align-top ml-0.5">%</span>
      </>
    ),
  },
  {
    Icon: Headset,
    value: (
      <>
        24
        <span className="text-[#FFD600] text-sm align-top tracking-widest ml-0.5">
          /7
        </span>
      </>
    ),
  },
];

const socials = [
  { Icon: Linkedin, href: "https://www.linkedin.com/in/manan-devs" },
  { Icon: Github, href: "https://github.com/manandevs" },
];

export default function ControlBar({ rotation, setRotation }: ControlBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-auto -mb-5 pointer-events-auto w-full max-w-7xl mx-auto px-6 md:px-12 z-30"
    >
      <div className="relative w-full bg-[#080808]/80 backdrop-blur-xl border border-white/10 overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD600]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD600]/50 to-transparent" />

        <div className="flex justify-between items-center gap-4 md:gap-6 p-2 md:p-4">

          {/* Stats Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="flex gap-4 md:gap-8"
          >
            {stats.map(({ Icon, value }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 text-[#FFD600]">
                  <Icon size={18} />
                </div>
                <span className="font-asah text-2xl text-white">{value}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Slider Control */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
            className="hidden md:flex flex-col justify-center gap-2 w-full"
          >
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500">
              <span>Rotation</span>
              <span>{Math.round(rotation)}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={rotation}
              onChange={(e) => setRotation(parseFloat(e.target.value))}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FFD600] hover:accent-white transition-all"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="flex justify-end gap-3"
          >
            {socials.map(({ Icon, href }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group p-1.5 md:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#FFD600] hover:bg-[#FFD600] hover:text-black transition-all"
              >
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                >
                  <Icon className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-black" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
