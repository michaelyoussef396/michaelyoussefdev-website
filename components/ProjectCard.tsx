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
      className="relative w-full h-screen flex flex-col items-center justify-center gap-60 p-10 overflow-hidden bg-cover bg-center rounded-[30px] border border-white/10"
      style={{ backgroundImage: "url('/bg.avif')" }}
    >
      {/* ✅ Clickable Overlay (Ensuring Button is not Blocked) */}
      <Link href={link} target="_blank" className="absolute inset-0 z-1 pointer-events-none" />

      {/* ✅ Title */}
      <h2 className="relative w-fit h-fit max-w-full text-white font-[Raleway] font-semibold italic uppercase text-center text-[80px] leading-[1.2] 
        md:text-[60px] sm:text-[50px] xs:text-[40px] z-10"
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

      {/* ✅ Image Showcase with Animation */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }} // 🔥 Image zooms in slightly on hover
        transition={{ ease: "easeInOut", duration: 0.6 }}
        className="relative w-full h-fit max-w-[1360px] flex flex-row items-start justify-center gap-60 p-18 bg-[#0E0E0E] overflow-hidden rounded-[30px] z-3"
      >
        <div className="relative w-full h-full flex flex-row justify-center items-center rounded-[30px] overflow-hidden">
          <Image
            src={image}
            width={552}
            height={304}
            alt="Project Showcase"
            className="relative w-full h-full object-cover transition-all ease-in-out duration-500"
          />
        </div>

        {/* ✅ Project Info */}
        <div className="relative w-full h-fit flex flex-col justify-start items-start gap-10 p-10 z-10">
          
          {/* ✅ H6 Subtitle */}
          <h6 className="w-fit h-fit max-w-full text-white font-[Raleway] font-bold italic uppercase text-balance
            lg:text-[16px] lg:tracking-[0.15em] lg:leading-[1.4em]
            md:text-[14px]"
          >
            {subheading}
          </h6>

          {/* ✅ Project Description */}
          <p className="w-fit h-fit max-w-full text-[#8C8C8C] font-[Raleway] font-light italic text-[16px] leading-[1.6em]">
            {body}
          </p>

          {/* ✅ Button (Fixed Inside a Visible Container) */}
          <div className="relative w-fit h-fit flex justify-center items-center mt-6">
            <HeaderButton text={buttonText} link={link} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
