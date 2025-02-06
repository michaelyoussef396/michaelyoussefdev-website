"use client";
import Divider from "@/components/Divider";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ShowcaseCollection from "@/components/ShowcaseCollection";
import ProjectCard from "@/components/ProjectCard";

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <section className="relative w-full h-fit flex flex-col items-start justify-center gap-60 bg-[#0E0E0E] z-5 overflow-visible">
      <div className="relative w-full h-fit flex flex-col items-center justify-center overflow-hidden">
        <Divider />

        {/* ✅ Portfolio Showcase */}
        <div className="relative w-full h-fit flex flex-col items-center justify-center gap-40 pr-10 pl-10 overflow-visible">
          <ShowcaseCollection />

          {/* ✅ Sticky Project Cards Section */}
          <div className="relative w-full h-[300vh] flex flex-col justify-center items-center overflow-hidden">
            {[
              {
                title: "Project One",
                image: "/projectshowcase-1.png",
                subheading: "Sole Media's First Portfolio",
                body: "A stunning, responsive website with powerful SEO and lead generation.",
                buttonText: "View Project",
              },
              {
                title: "Project Two",
                image: "/projectshowcase-2.png",
                subheading: "High-Performance Business Site",
                body: "A fast, sleek, and modern web presence built for conversion.",
                buttonText: "See More",
              },
              {
                title: "Project Three",
                image: "/projectshowcase-3.png",
                subheading: "E-commerce Revolution",
                body: "A feature-rich online store designed for seamless shopping experiences.",
                buttonText: "Explore Now",
              },
            ].map((project, index) => (
              <div key={index} className="sticky top-0 w-full h-screen flex flex-col justify-center items-center z-10">
                <ProjectCard {...project} link={`/project-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
