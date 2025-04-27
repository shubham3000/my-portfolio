"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { IconChefHat, IconCricket, IconPencilBolt } from "@tabler/icons-react";
import Image from "next/image";
import Pic1 from "@/assests/hobbies/pic1.jpg";
import Pic2 from "@/assests/hobbies/pic2.jpg";
import Pic3 from "@/assests/hobbies/pic3.jpg";
import Pic4 from "@/assests/hobbies/pic4.jpg";
import Pic5 from "@/assests/hobbies/pic5.jpg";
import Pic6 from "@/assests/hobbies/pic6.jpg";
import Pic7 from "@/assests/hobbies/pic7.jpg";
import Pic8 from "@/assests/hobbies/pic8.jpg";
import Pic9 from "@/assests/hobbies/pic9.jpg";
import Pic10 from "@/assests/hobbies/pic10.jpg";
import Pic11 from "@/assests/hobbies/pic11.jpg";

export default function page() {
  const hobbies = [
    {
      title: "Cooking",
      icon: <IconChefHat />,
    },
    {
      title: "Cricket",
      icon: <IconCricket />,
    },
    {
      title: "Sketching",
      icon: <IconPencilBolt />,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="max-w-7xl py-10 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Ctrl + Me Time
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 py-5 px-4 md:px-8 w-full">
        {hobbies.map((hobbie, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Feature key={hobbie.title} {...hobbie} index={index} />
          </motion.div>
        ))}
      </div>
      <div className="px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-3xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {[
            Pic1,
            Pic8,
            Pic2,
            Pic9,
            Pic5,
            Pic7,
            Pic6,
            Pic3,
            Pic4,
            Pic10,
            Pic11,
          ].map((pic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`
        ${pic === Pic6 ? "w-full h-60 lg:h-96 lg:col-span-2" : "w-96 h-96"}
        rounded-2xl p-2 overflow-hidden bg-gray-950 border border-transparent relative z-20
      `}
            >
              <Image
                src={pic}
                alt="pic"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  icon,
  index,
}: {
  title: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div className={cn("flex flex-col w-64 py-8 relative group/feature ")}>
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-70 transition duration-200 absolute inset-0 h-full w-full border-l-2 border-b-2 rounded-lg border-slate-900 bg-gradient-to-t from-slate-700 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-70 transition duration-200 absolute inset-0 h-full w-full border-l-2 border-b-2 rounded-lg border-slate-900 bg-gradient-to-b from-slate-700 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white ">
          {title}
        </span>
      </div>
    </div>
  );
};
