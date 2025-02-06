import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const LineAnimation: React.FC = () => {
  const controls = useAnimation(); // ✅ Control Animation
  const [scrollHeight, setScrollHeight] = useState(0); // ✅ Start from 0

  // ✅ Start Animation on Load (Plays Step by Step)
  useEffect(() => {
    async function startAnimation() {
      await controls.start("variant1");
      await controls.start("variant2");
      await controls.start("variant3");
      await controls.start("variant4");
      await controls.start("end");
    }
    startAnimation();
  }, [controls]);

  // ✅ Adjust Line Height on Scroll (Starts from the Top)
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / maxScroll; // Scroll % (0 - 1)
      const newHeight = Math.min(Math.max(scrollPercentage * 100, 0), 100); // Clamp between 0 - 100%
      setScrollHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="relative w-[1px] h-[40px] bg-white-10 z-[5] opacity-100 overflow-hidden"
      initial="hidden"
      animate={controls} // ✅ Controls Sequential Animation
    >
      <motion.div
        className="absolute top-0 w-[1px] bg-white"
        style={{ height: `${scrollHeight}%` }} // ✅ Starts from Top & Grows Down
        transition={{ duration: 0.3, ease: "easeInOut" }} // ✅ Smooth Effect
      />
    </motion.div>
  );
};

export default LineAnimation;
