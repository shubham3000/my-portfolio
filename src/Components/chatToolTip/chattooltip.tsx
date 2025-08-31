"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconRobot } from "@tabler/icons-react";

export default function ChatBotIcon() {
  const [showBot, setShowBot] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const botTimer = setTimeout(() => {
      setShowBot(true);
      setShowTooltip(true);

      const audio = new Audio("/sounds/mixkit-long-pop.wav");
      audio.play().catch(() => {
        console.log("Autoplay blocked, will require user interaction.");
      });

      setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    }, 3000);

    return () => clearTimeout(botTimer);
  }, []);

  if (!showBot) return null;

  return (
    <Link href="/chatbot">
      <motion.div
        className="fixed bottom-12 right-12 group bg-gray-900 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 flex items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <IconRobot className="h-6 lg:h-8 w-6 lg:w-8" />
        <div
          className={`absolute right-20 bottom-1/2 translate-y-1/2 px-4 py-2 rounded-lg bg-gray-800 text-white text-base shadow-lg transition-opacity duration-300 z-50 whitespace-nowrap
          ${showTooltip ? "flex" : "hidden group-hover:flex"}`}
        >
          <span className="text-sm lg:text-lg">
            Hi there! 👋 I’m <b>Sam AI.</b>
            <br /> Your chatbot assistant 🚀
          </span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      </motion.div>
    </Link>
  );
}
