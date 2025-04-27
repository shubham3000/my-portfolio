"use client";
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="w-full font-sans md:px-10">
      <div className="flex flex-col">
        <div className="max-w-7xl py-10 px-4 md:px-8">
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
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-lg text-white"
          >
            Hey there! I&apos;m Shubham Sadhu, a passionate Software Developer
            based in Bengaluru. I specialize in crafting clean, efficient, and
            scalable web applications with a focus on frontend development and
            automation. Currently, I work at TCS, where I build dashboards and
            automate workflows using technologies like React.js, Azure,
            Selenium, and Python.
            <br />
            <br />
            I enjoy turning complex problems into elegant solutions. Whether
            it&apos;s improving load times, creating reusable UI components, or
            automating tedious tasks—I&apos;m always looking for ways to make
            systems more efficient and user-friendly.
            <br />
            <br />
            What excites me the most is building things that people actually
            use—from internal dashboards that streamline business operations to
            side projects like Your Planner, which combines event planning with
            social media features.
            <br />
            <br />
            I&apos;m a lifelong learner who thrives on feedback and
            collaboration. When I&apos;m not coding, you&apos;ll probably find
            me exploring new tech on GitHub, solving algorithm problems on
            LeetCode, or refining my design ideas on Figma.
            <br />
            <br />
            Let&apos;s build something awesome together! 🚀
          </motion.p>
        </div>
      </div>
    </div>
  );
}
