import React from "react";
import { motion } from "framer-motion";

const SubscribeSection = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center gap-20 overflow-hidden">
      <div className="relative w-full max-w-[1100px] h-fit flex flex-col justify-center items-center gap-10 overflow-visible z-5">
        
        {/* ✅ Animated Section Title */}
        <motion.div
          className="w-full h-fit flex flex-col justify-center items-center gap-10 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
        >
          {/* ✅ Company Label */}
          <div className="mb-4 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white uppercase text-sm font-semibold tracking-wide">
            Bold, Creative, & Unforgettable
          </div>

          {/* ✅ Hero Heading */}
          <h2 className="text-white font-[Raleway] italic font-bold text-[4vw] sm:text-[3.2vw] md:text-[2.8vw] leading-[1.2] uppercase text-center max-w-[900px]">
            Ready to Turn Your Vision Into Reality? Let's Craft Something Amazing Together
          </h2>
        </motion.div>

        {/* ✅ Email Subscription Box (Aligned with Max Width) */}
        <div className="relative w-full max-w-[800px] h-fit flex flex-col justify-start items-start gap-10 p-5 rounded-[50px] border border-white/10 backdrop-blur-[15px]">
          {/* ✅ Input Field Container */}
          <div className="relative w-full h-fit flex flex-row justify-between items-center gap-5">
            {/* ✅ Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              className="w-full h-[60px] text-white font-[Raleway] text-[16px] leading-[1.6] placeholder-[#8C8C8C] bg-white/10 bg-opacity-10 rounded-[50px] 
              px-5 border border-white/10 focus:border-white transition-all ease-[0.44,0,0.56,1] duration-400 outline-none"
            />

            {/* ✅ Send Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-white text-black transition-all ease-[0.44,0,0.56,1] duration-400"
            >
              {/* Paper Airplane Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 2L11 13M22 2l-7 20-4-9M22 2L2 7l9 4"
                />
              </svg>
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SubscribeSection;
