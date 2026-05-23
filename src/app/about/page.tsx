"use client";
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="w-full font-sans md:px-10">
      <div className="flex flex-col">
        <div className="max-w-7xl pt-14 md:pt-0 py-10 px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
          >
            My Story
          </motion.h2>
        </div>
        <div className="w-full px-8">
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-lg text-white"
          >
            Hey there! I&apos;m Shubham Sadhu, a passionate Software Developer
            based in Bengaluru.
            <br />
            Previously, I worked at TCS from July 2022, where I contributed to
            major projects across Dashboard Development and Automation. Using
            React.js, I built modular and responsive user interfaces that
            improved usability and application performance. I integrated
            real-time data using Azure services, implemented secure
            authentication with MSAL, and optimized applications through Redux
            and MVC architecture to create scalable and high-performing
            solutions.
            <br />
            <br />
            On the automation side at TCS, I automated access management bots,
            helath check monitoring bots, report generation bots using Selenium
            and Automation Anywhere, significantly reducing manual effort and
            improving efficiency. I also developed Python scripts for data
            processing and optimized database queries to accelerate reporting
            workflows.
            <br />
            <br />
            Before TCS, I interned as a Frontend Developer at , where I
            developed responsive landing pages, improved website performance,
            built admin panels, and collaborated closely with backend teams to
            deliver user-focused digital experiences.
            <br />
            <br />
            I believe every project is an opportunity to create not just
            code, but real value through innovation, automation, and technology.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
