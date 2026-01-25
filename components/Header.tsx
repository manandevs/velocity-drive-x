import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";

// Navigation items
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Values", href: "#ourvalues" },
  { label: "Testimonials", href: "#testimonials" },
];

// Hero steps
const Hero = [
  { img: "/images/discoverycall.png", text: "Free Discovery Call" },
  { img: "/images/buildingidea.png", text: "Building your idea" },
  { img: "/images/launchgrowth.png", text: "Launch and Grow" },
];

const Header = () => {
  return (
    <div>
      

      {/* Hero section */}
      <header
        id="home"
        className="w-full h-auto my-12 md:mb-24  px-4 md:px-8 mx-auto"
      >
        {/* Text Content */}
        

        {/* Hero Steps */}
        <div className="w-full flex flex-col gap-4 lg:gap-5 mt-5 md:mt-7">
          <div className="flex justify-between gap-4 font-jetBrains text-[#868686] text-[16px] font-bold uppercase tracking-[0]">
            <p>3 Simple Step’s</p>
            <p className="md:flex hidden">To Success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 relative">
            {Hero.map((card, index) => (
              <div
                key={index}
                className="bg-[#0D0D0D] w-full sticky top-30 md:static border border-white/10 rounded-[20px] p-4 lg:p-6"
              >
                <Image
                  src={card.img}
                  alt={card.text}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="mt-4.5 lg:mt-6 flex items-center justify-center gap-2.5 text-white lg:px-4 font-caveat">
                  <div className="size-5 lg:size-6 rounded-full flex items-center justify-center text-center text-[16px] lg:text-[19px] border-0.5 border-white">
                    <span className="-ml-1 lg:-ml-1 font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-[20px] lg:text-[28px] font-bold leading-[1.3]">
                    {card.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        </header>
    </div>
  );
};

export default Header;
