"use client";
import { motion } from "framer-motion";
import React from "react";

const Divider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 1000, rotate: 0, skew: 0 }}
      animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, skew: 0 }}
      transition={{ ease: [0.44, 0, 0.56, 1], duration: 0.6 }}
      className="relative w-full h-[1px] bg-white/10 overflow-visible"
    />
  );
};

export default Divider;
