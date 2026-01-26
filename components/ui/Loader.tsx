"use client";

import { motion } from "framer-motion";

export default function Loader({
  text = "Initializing Engine",
}: {
  text?: string;
}) {
  return (
    <div className="w-full flex items-center justify-center py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3"
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
          className="font-asah text-xl md:text-2xl tracking-widest text-[#FFD600]"
        >
          {text}
        </motion.span>

        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: 0.2,
          }}
          className="text-[#FFD600]"
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: 0.4,
          }}
          className="text-[#FFD600]"
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: 0.6,
          }}
          className="text-[#FFD600]"
        >
          .
        </motion.span>
      </motion.div>
    </div>
  );
}
