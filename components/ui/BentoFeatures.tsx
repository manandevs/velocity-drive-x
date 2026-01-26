"use client";

import { Gauge, BarChart3, ArrowUpRight, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  {
    title: "Velocity Deployment",
    desc: "Ship campaigns faster than the competition. Our CI/CD pipelines are tuned for race-pace execution.",
    icon: Zap,
    stat: "0.02s",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-white/5 to-transparent",
  },
  {
    title: "Precision Targeting",
    desc: "Laser-focused audience segmentation using telemetry data.",
    icon: Target,
    stat: "99.9%",
    colSpan: "md:col-span-1",
    bg: "bg-[#0A0A0A]",
  },
  {
    title: "Engine Diagnostics",
    desc: "Real-time analytics dashboard to monitor your business RPM and torque.",
    icon: Gauge,
    stat: "Live",
    colSpan: "md:col-span-1",
    bg: "bg-[#0A0A0A]",
  },
  {
    title: "Aerodynamic Scale",
    desc: "Infrastructure that handles drag. Scale up without losing stability or performance.",
    icon: BarChart3,
    stat: "10x",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-bl from-white/5 to-transparent",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ← FIXED
    },
  },
};


export default function BentoFeatures() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#050505] z-30">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mb-16 flex justify-between items-start"
      >
        <div>
          <h2 className="font-asah text-4xl md:text-6xl text-white leading-tight">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] to-white/50">
              Dominance.
            </span>
          </h2>

          <p className="max-w-md backdrop-blur-[2px] text-gray-400 text-sm font-light leading-relaxed border-l border-[#FFD600]/50 pl-4 mt-6">
            Lorem ipsum dolor sit amet adipisicing elit. Accusantium explicabo, libero eum quas laudantium adipisci et sed dolorem unde, commodi nam?.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className={`group relative ${item.colSpan} ${item.bg} border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-[#FFD600]/50 transition-all duration-500`}
          >
            {/* Hover Glow */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#FFD600] blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

            <div className="flex justify-between items-start mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#FFD600]"
              >
                <item.icon size={24} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-1 text-xs font-mono text-gray-500"
              >
                <span>METRIC</span>
                <span className="text-white">{item.stat}</span>
              </motion.div>
            </div>

            <h3 className="font-asah text-2xl text-white mb-3 group-hover:text-[#FFD600] transition-colors">
              {item.title}
            </h3>

            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
              {item.desc}
            </p>

            <ArrowUpRight className="absolute bottom-6 right-6 text-white/20 group-hover:text-[#FFD600] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
