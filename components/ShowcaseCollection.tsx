"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Splitting images into 5 unique sets for each row
const imageSets = [
  ["projectshowcase-1.png", "projectshowcase-2.png", "projectshowcase-3.png", "projectshowcase-4.png", "projectshowcase-5.png", "projectshowcase-6.png"],
  ["projectshowcase-7.png", "projectshowcase-8.png", "projectshowcase-9.png", "projectshowcase-10.png", "projectshowcase1.png", "projectshowcase2.png"],
  ["projectshowcase3.png", "projectshowcase4.png", "projectshowcase5.png", "projectshowcase-1.png", "projectshowcase-2.png", "projectshowcase-3.png"],
  ["projectshowcase-4.png", "projectshowcase-5.png", "projectshowcase-6.png", "projectshowcase-7.png", "projectshowcase-8.png", "projectshowcase-9.png"],
  ["projectshowcase-10.png", "projectshowcase1.png", "projectshowcase2.png", "projectshowcase3.png", "projectshowcase4.png", "projectshowcase5.png"]
];

const ShowcaseCollection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="w-[1260px] h-fit flex flex-row justify-center items-center overflow-hidden bg-[#0E0E0E] rounded-[30px]">
      
      {/* ✅ Taller Showcase Container */}
      <div
        ref={containerRef}
        className="w-full h-[800px] max-h-[1200px] flex flex-row justify-between items-center gap-16 border border-white/10 overflow-hidden relative"
      >
        {/* ✅ Clickable Overlay */}
        <Link href="/">
          <div className="absolute inset-0 w-full h-full bg-[#0E0E0E]/10 z-1" />
        </Link>

        {/* ✅ Rotated Background Layer */}
        <div
          className="absolute top-[-357px] left-[-63px] bottom-[-358px] right-[-63px] w-[110%] h-[230%] flex flex-row justify-center items-center gap-16 overflow-hidden"
          style={{ transform: "rotate(25deg)" }}
        >
          {/* ✅ Content Wrapper */}
          <div className="relative w-full h-full flex flex-row justify-center items-center gap-12 overflow-hidden">
            
            {/* ✅ Render 5 Portfolio Collection Dynamic Lists */}
            {imageSets.map((imageSet, listIndex) => {
              const yOffset = useTransform(scrollYProgress, [0, 1], [0, (listIndex + 1) * -200]); // Adjusted scroll effect
              
              return (
                <motion.div
                  key={listIndex}
                  style={{ y: yOffset }}
                  className="relative w-[18%] h-full flex flex-col justify-end items-start flex-nowrap overflow-hidden"
                >
                  {/* ✅ Portfolio Items from Unique Image Set */}
                  {imageSet.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative w-full h-[calc(100%/6)] flex flex-col justify-start items-center gap-[10px] overflow-hidden"
                    >
                      {/* ✅ Image Container */}
                      <div className="relative w-full h-full overflow-hidden rounded-[6px]">
                        <img
                          src={image}
                          alt={`Portfolio Item ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCollection;
