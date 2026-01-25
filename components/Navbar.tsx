"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./shared/Button";
import Container from "./shared/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Models", href: "#models" },
  { label: "Performance", href: "#performance" },
  { label: "Technology", href: "#technology" },
  { label: "Reviews", href: "#reviews" },
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      setDropdownHeight(window.innerHeight - navRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navRef.current) {
        setDropdownHeight(window.innerHeight - navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav ref={navRef} className="relative z-50">
      <Container className="flex items-center justify-between py-3 md:py-3.5 lg:py-4">
        {/* Logo */}
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <Image
              src="/vdx.png"
              alt="logo"
              width={340}
              height={300}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full"
            />
            <span className="text-3xl md:text-5xl text-white font-asah tracking-[2px] leading-8 pt-1">
              VDX
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[#A1A1A1] cursor-pointer font-light transition-all duration-300 ease-in-out hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Button + Mobile Toggle */}
        <div className="flex justify-center items-center gap-4">
          {!isMenuOpen && <Button />}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-semibold md:hidden flex text-2xl text-white p-2"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          style={{ height: dropdownHeight }}
          className="absolute top-full left-0 w-full bg-black md:hidden flex flex-col justify-between z-50 overflow-y-auto overflow-x-auto  px-4 sm:px-6 lg:px-8 py-6"
        >
          <div className="">
            <Button />
          </div>
          <div className="text-end flex flex-col justify-end items-end gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:text-white text-[#A1A1A1] text-5xl font-semibold font-asah transition-all duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
