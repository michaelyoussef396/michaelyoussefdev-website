import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import HeaderButton from "./HeaderButton";

// ✅ Define props type
interface ProjectCardProps {
  title: string;
  link: string;
  image: string;
  body: string;
  subheading: string;
  buttonText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, image, body, subheading, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ ease: [0.44, 0, 0.56, 1], duration: 0.6 }}
      className="relative w-full h-screen flex flex-col items-center justify-center gap-12 p-6 overflow-hidden bg-cover bg-center rounded-[30px] border border-white/10"
      style={{ backgroundImage: "url('/bg.avif')" }}
    >
      {/* ✅ Clickable Overlay (Ensuring Button is not Blocked) */}
      <Link href={link} target="_blank" className="absolute inset-0 z-1 pointer-events-none" />

      {/* ✅ Title */}
      <h2 className="relative w-fit h-fit max-w-full text-white font-[Raleway] font-semibold italic uppercase text-center 
        text-[80px] leading-[1.2] 
        lg:text-[60px] md:text-[50px] sm:text-[40px] xs:text-[32px] z-10"
      >
        {title}
      </h2>

      {/* ✅ Motion Border Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="absolute inset-0 border border-white/10 rounded-[30px] pointer-events-none"
      />

      {/* ✅ Image & Content Section */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }} // 🔥 Image zooms in slightly on hover
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="relative w-full max-w-[1360px] flex flex-col md:flex-row items-center justify-center gap-10 p-6 bg-[#0E0E0E] overflow-hidden rounded-[30px] z-3"
      >
        {/* ✅ Image Section (Fixed Height for Small Screens) */}
        <div className="relative w-full h-[300px] md:h-auto flex justify-center items-center overflow-hidden rounded-[30px]">
          <Image
            src={image}
            width={552}
            height={304}
            alt="Project Showcase"
            className="w-full h-full object-cover transition-all ease-in-out duration-500 rounded-[30px]"
          />
        </div>

        {/* ✅ Project Info Section */}
        <div className="relative w-full flex flex-col justify-start items-start gap-6 p-4">
          
          {/* ✅ H6 Subtitle */}
          <h6 className="w-full text-white font-[Raleway] font-bold italic uppercase 
            lg:text-[16px] lg:tracking-[0.15em] lg:leading-[1.4em]
            md:text-[14px] sm:text-[14px] xs:text-[12px]"
          >
            {subheading}
          </h6>

          {/* ✅ Project Description */}
          <p className="w-full text-[#8C8C8C] font-[Raleway] font-light italic 
            text-[16px] leading-[1.6em] sm:text-[14px] xs:text-[12px]"
          >
            {body}
          </p>

          {/* ✅ Button (Ensuring Visibility in all screen sizes) */}
          <div className="relative w-full flex justify-start items-center mt-4">
            <HeaderButton text={buttonText} link={link} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
