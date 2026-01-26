"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Box, Triangle, Hexagon, Circle, Gem, Activity } from "lucide-react";

const logos = [
  { name: "Apex", Icon: Triangle },
  { name: "Orbit", Icon: Circle },
  { name: "Flux", Icon: Activity },
  { name: "Prism", Icon: Hexagon },
  { name: "Core", Icon: Box },
  { name: "Spark", Icon: Gem },
  { name: "Apex", Icon: Triangle },
  { name: "Orbit", Icon: Circle },
  { name: "Flux", Icon: Activity },
  { name: "Prism", Icon: Hexagon },
  { name: "Core", Icon: Box },
  { name: "Spark", Icon: Gem },
];

export default function TrustedBy() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * 3 * (delta / 1000);

    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full bg-[#FFD600] h-20 md:h-[120px] flex items-center overflow-hidden">
      <div className="relative w-full">
        <motion.div
          className="flex items-center gap-x-12 md:gap-x-24 whitespace-nowrap"
          style={{ x }}
        >
          {[...Array(4)].map((_, setIndex) => (
            <React.Fragment key={setIndex}>
              {logos.map(({ name, Icon }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-pointer group"
                >
                  <Icon className="w-8 h-8 text-black group-hover:text-[#1a1a1a] transition-colors" />
                  <span className="font-asah text-black text-xl tracking-widest uppercase">
                    {name}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFD600] to-transparent pointer-events-none z-10" />

        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFD600] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
