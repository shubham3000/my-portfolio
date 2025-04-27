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
            At Tata Consultancy Services (TCS), I&apos;ve been shaping powerful
            digital experiences since July 2022. I work on major projects across
            Dashboard Development and Automation. Using React.js, I build
            modular, responsive user interfaces that boosted usability by 25%
            and reduced load times by 35%. I integrate real-time data using
            Azure services, implement secure user authentication with MSAL, and
            optimize app performance through Redux and MVC architecture. My
            focus is always on creating seamless, accessible, and
            high-performing applications.
            <br />
            <br />
            On the automation side, I streamlined regression testing by
            automating it with Selenium and Automation Anywhere (A360), cutting
            manual effort by 80%. I developed Python scripts to automate data
            processing, optimized database queries to speed up reporting by 60%,
            and built Azure Logic Apps and DevOps pipelines to make deployments
            faster and more reliable.
            <br />
            <br />
            Before TCS, I interned as a Frontend Developer at Atorvis Pvt. Ltd.,
            where I developed responsive landing pages, improved site
            performance by 40%, built an admin panel, and collaborated closely
            with backend teams. This experience taught me how to create
            user-first designs while maintaining technical excellence.
            <br />
            <br />
            Every project I work on, I aim to bring not just code — but real
            value, efficiency, and innovation.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
