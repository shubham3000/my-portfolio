'use client';
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ShubhamProfile from "@/assests/ShubhamImage.jpg";
import Image from "next/image";
import { BackgroundLines } from "@/Components/ui/background-lines";
import {
  IconBrandGit,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandPython,
  IconFileCv,
  IconMail,
  IconPhone,
  IconBrandAzure,
  IconBrandReact,
} from "@tabler/icons-react";
import Link from "next/link";
import ChatBotIcon from "@/Components/chatToolTip/chattooltip";

const socials = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/shubham-sadhu-9a0493201",
    icon: IconBrandLinkedin,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/designxd_55/",
    icon: IconBrandInstagram,
  },
  {
    title: "Github",
    href: "https://github.com/shubham3000",
    icon: IconBrandGithub,
  },
  {
    title: "Shubhamsadhu02@gmail.com",
    href: "/contactme",
    icon: IconMail,
  },
  {
    title: "Resume",
    href: "/resume/Shubham Sadhu_Resume.pdf",
    icon: IconFileCv,
  },
  {
    title: "+91-80024 90015",
    href: "https://wa.me/918002490015",
    icon: IconPhone,
  },
];

const techStacks = [
  {
    title: "ReactJs",
    icon: IconBrandReact,
  },
  {
    title: "NextJs",
    icon: IconBrandNextjs,
  },
  {
    title: "Python",
    icon: IconBrandPython,
  },
  {
    title: "Git",
    icon: IconBrandGit,
  },
  {
    title: "Azure",
    icon: IconBrandAzure,
  },
];

export default function Page() {
  useEffect(() => {
      const audio = new Audio("/sounds/mixkit-sci-fi-confirmation.wav");
      audio.play().catch(() => {
        console.log("Autoplay blocked, will require user interaction.");
      });
  });

  return (
    <div>
      <BackgroundLines>
        <div className="w-full rounded-md relative antialiased">
          <div className="max-w-2xl mx-auto pt-4 md:pt-20 p-4 space-y-4">
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-80 h-80 lg:h-1/2 rounded-lg shadow-[0_0_20px_5px_rgb(89,103,126,0.5)]"
              >
                <Image
                  src={ShubhamProfile}
                  className="w-full h-full object-cover rounded-lg"
                  alt="Avatar"
                />
              </motion.div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold"
            >
              Shubham Sadhu
            </motion.h1>
            <div className="text-neutral-500 max-w-lg mx-auto my-2 relative z-10 flex justify-center space-x-6">
              {socials.map((item, key) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: key * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    rel="noopener noreferrer"
                    target="__blank"
                    className="relative group flex items-center justify-center"
                  >
                    <item.icon className="text-white h-6 lg:h-8 w-6 lg:w-8 flex-shrink-0 hover:text-purple-500" />
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex px-2 py-1 text-sm lg:text-lg rounded-lg bg-gray-600 text-white whitespace-nowrap shadow-md transition-opacity duration-300 z-50">
                      {item.title}
                      <div className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-gray-600 rotate-45"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-neutral-500 my-2 text-sm lg:text-lg"
              >
                Tech Stacks:
              </motion.p>
              <div className="flex items-center justify-center">
                {techStacks.map((item, key) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: key * 0.2,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="relative group flex items-center justify-center mr-4"
                  >
                    <item.icon className="text-white h-6 lg:h-8 w-6 lg:w-8 flex-shrink-0 hover:text-purple-500" />
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex px-2 py-1 text-sm lg:text-lg rounded-lg bg-gray-600 text-white whitespace-nowrap shadow-md transition-opacity duration-300 z-50">
                      {item.title}
                      <div className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-gray-600 rotate-45"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundLines>

      {/* Floating Chatbot Icon */}
      <ChatBotIcon/>
    </div>
  );
}
