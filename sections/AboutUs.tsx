import React from "react";
import { motion } from "framer-motion";
import LineAnimation from "@/components/LineAnimation";

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] flex justify-center items-center py-[100px] sm:py-[120px] md:py-[130px] overflow-hidden bg-main-dark">
      {/* Base Container */}
      <div className="z-[2] overflow-hidden opacity-100 px-4 sm:px-[30px] md:px-[50px] gap-8 sm:gap-10 md:gap-[40px] flex flex-col justify-center items-center w-full h-auto max-w-[1660px]">
        
        {/* Line Animation Wrapper */}
        <motion.div
          className="relative w-[1px] h-[30px] sm:h-[35px] md:h-[40px] z-[1] opacity-100"
          initial="hidden"
          whileInView="start"
          viewport={{ once: true }}
        >
          <LineAnimation />
        </motion.div>

        {/* Animated About Section Container */}
        <motion.div 
          className="relative w-full h-auto max-w-[1350px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 text-center px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, scale: 1.2, rotate: 0, skewX: 0, x: 0, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, skewX: 0, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.44, 0, 0.56, 1], duration: 0.7, delay: 0 }}
        >
          <h2 className="heading-2 text-center max-w-[900px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Welcome to MichaelYoussefDev
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-[800px] leading-relaxed sm:leading-normal">
            This isn't just another portfolio—it's a digital playground where creativity and code collide.
            I don’t just build; I craft experiences that break boundaries and redefine expectations.
            Every project is a fusion of innovation, strategy, and technical mastery.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <motion.a 
              href="/about"
              className="mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-white text-main-dark font-semibold text-md sm:text-lg rounded-full shadow-md transition-all duration-300 hover:bg-gray-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me
            </motion.a>

            <motion.a 
              href="/about"
              className="mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-main-dark text-white font-semibold text-md sm:text-lg rounded-full shadow-md transition-all duration-300 hover:bg-black-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
          
          <LineAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
