"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderButton from "@/components/HeaderButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.44, 0, 0.56, 1],
        duration: 0.4,
      }}
      className="fixed top-0 left-0 w-full h-20 z-[20] bg-black/20 backdrop-blur-md"
      aria-label="Primary Navigation"
    >
      {/* Main Container */}
      <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center py-2.5 px-6 sm:px-10">
        {/* Brand Name */}
        <motion.a
          href="/"
          className="text-white text-lg font-bold italic uppercase transition-all duration-300 ease-[0.44,0,0.56,1] hover:text-[#F52A03]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.4,
            bounce: 0.2,
          }}
        >
          michaelyoussefdev
        </motion.a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          {["Home", "About", "Services", "Contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white font-medium uppercase text-[14px] leading-[1.4em] tracking-[0.15em] hover:text-[#F52A03] transition-all duration-300 ease-[0.44,0,0.56,1]"
              whileHover={{ scale: 1.1 }}
              transition={{
                ease: [0.44, 0, 0.56, 1],
                duration: 0.3,
              }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Header Button (Desktop Only) */}
        <div className="hidden md:flex">
          <HeaderButton text="Get In Touch" link='/'  />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[42px] h-[20px] flex flex-col justify-center items-center gap-2"
          >
            <motion.div
              className="w-full h-[2px] bg-white"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.div
              className="w-full h-[2px] bg-white"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-[#0e0e0e] flex flex-col justify-center items-center gap-10 z-[50]"
          >
            {/* Close Menu on Background Click */}
            <div
              className="absolute inset-0"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Links */}
            <div className="relative flex flex-col gap-8 z-[2]">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white font-medium uppercase text-2xl tracking-wide hover:text-[#F52A03] transition-all duration-300 ease-[0.44,0,0.56,1]"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Mobile Header Button */}
            <div className="relative z-[2]">
              <HeaderButton text="Get In Touch" link='/' />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
