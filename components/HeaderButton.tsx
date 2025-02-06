"use client";
import React from "react";
import { motion } from "framer-motion";

const HeaderButton: React.FC = () => {
  return (
    <motion.a
      href="/contact-us"
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-row justify-center items-center w-[212px] h-[50px] border border-transparent rounded-full overflow-hidden 
      transition-all duration-300 ease-[0.44,0,0.56,1] hover:border-white hover:bg-[#F52A03]"
    >
      {/* Button Content */}
      <div className="relative flex flex-row justify-center items-center w-full h-full px-5">
        {/* CTA Text */}
        <p className="text-white font-raleway font-medium italic uppercase text-[14px] tracking-[0.15em] leading-[1.2] whitespace-nowrap">
          Get in Touch
        </p>

        {/* Arrow Wrapper (Integrated with text) */}
        <motion.div
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="ml-3 w-[20px] h-[20px] flex justify-center items-center"
        >
          {/* SVG Arrow */}
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M5 12L19 12M13 6L19 12L13 18" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default HeaderButton;
