"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/Components/ui/card-hover-effect";
import Azure from "@/assests/certificate/Azure.png";
import RPA from "@/assests/certificate/RPA.jpg";
import Python from "@/assests/certificate/python.png";
import SQL from "@/assests/certificate/sql.png";
import Javascript from "@/assests/certificate/javascript.png";
import A360 from "@/assests/certificate/A360.png";

const projects = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    description:
      "Skills: Azure, Cloud Data, Cloud Networking, Cloud Security, Cloud Services, Cloud Storage, Virtualization",
    link: "https://www.credly.com/badges/783ad677-a366-4f85-8ba0-7be565b1c779/public_url",
    image: Azure,
  },
  {
    title: "Essentials Automation Professional",
    description:
      "Skills: Bot Development, Task Bots & Meta Bots, Control Room Operations, Variable and Logic Handling, Credential Vault, IQ Bot (Document Automation), API Integrations, Error Handling & Debugging ",
    link: "https://certificates.automationanywhere.com/4affe862-e5f5-4af6-a2e3-f0fe2dac8894#acc.dKxiFcEy",
    image: A360,
  },
  {
    title: "Automation Anywhere 360/A2019 - Complete RPA",
    description:
      "Skills: Bot Development, Task Bots & Meta Bots, Control Room Operations, Variable and Logic Handling, Credential Vault, IQ Bot (Document Automation), API Integrations, Error Handling & Debugging ",
    link: "https://www.udemy.com/certificate/UC-71ad3603-4e6b-46a1-bdaa-201a1cef63f5/",
    image: RPA,
  },
  {
    title: "Python (Basics)",
    description: "Skills: Python, Selenium, OOPs, Pandas, APIs, Database",
    link: "https://www.hackerrank.com/certificates/0ca9c283059a",
    image: Python,
  },
  {
    title: "SQL (Intermediate)",
    description:
      "Skills: SELECT, WHERE, ORDER BY, GROUP BY, HAVING, Aliases & expressions, Filtering and sorting data, COUNT(), SUM(), AVG(), MAX(), MIN(), DISTINCT, INSERT, UPDATE, DELETE, Joins",
    link: "https://www.hackerrank.com/certificates/4cbee30b85d8",
    image: SQL,
  },
  {
    title: "JavaScript (Intermediate)",
    description:
      "Skills: Data types and coercion, Arrow functions, Function expressions vs declarations, Callback functions, Object manipulation, Array methods, Event listeners, Async/Await & Promises",
    link: "https://www.hackerrank.com/certificates/3b0b3e566f72",
    image: Javascript,
  },
];

export default function page() {
  return (
    <div className="flex flex-col">
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Certified Excellence
        </motion.h2>
      </div>
      <div className="w-full lg:mx-auto lg:px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
