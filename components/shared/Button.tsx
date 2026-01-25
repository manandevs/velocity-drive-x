import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { FaPlay } from "react-icons/fa";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  if (variant === "secondary") {
    return (
      <button
        className={cn(
          "flex items-center gap-2 py-1.5 px-4 md:py-2.5 md:px-7 cursor-pointer transition-all duration-300 ease-in-out font-normal rounded-xl md:rounded-2xl hover:scale-[0.975] hover:translate-y-0.5 active:shadow-none bg-[#111] border border-white/10 shadow-[0px_3px_0px_0px_#222]",
          className
        )}
        {...props}
      >
        <FaPlay className="mr-[-2.4px] mt-[0.5px]" />
        {children ?? "Book a call"}
      </button>
    );
  }

  if (variant === "tertiary") {
    return (
      <button
        className={cn(
          "bg-[#111] rounded-2xl text-[14px] font-medium flex justify-center items-center gap-1.5 py-1.75 px-4  border border-white/10 font-urbanist",
          className
        )}
        {...props}
      >
        <Image
          src="/icon/box.svg"
          alt="box"
          width={15}
          height={14}
          className="invert"
        />
        {children ?? "Premium Service with us"}
      </button>
    );
  }

  return (
    <button
      className={cn(
        "text-black py-1.5 px-4 md:py-2.5 md:px-7 cursor-pointer transition-all duration-300 ease-in-out font-normal rounded-xl md:rounded-2xl hover:scale-[0.975] hover:translate-y-0.5 active:shadow-none shadow-[0px_3px_0px_0px_#D4A200,0px_4px_2px_0px_#FFBF00] bg-linear-to-b from-[#FFD700] to-[#FFC700]",
        className
      )}
      {...props}
    >
      {children ?? "Book a call"}
    </button>
  );
};

export default Button;
