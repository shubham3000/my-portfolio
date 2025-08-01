"use client";
import React, { useState } from "react";
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
import Pic12 from "@/assests/hobbies/pic12.jpg";
import Pic13 from "@/assests/hobbies/Pic13.jpg";
import Pic14 from "@/assests/hobbies/Pic14.jpg";

export default function Page() {
  const hobbies = [
    { title: "Cooking", icon: <IconChefHat /> },
    { title: "Cricket", icon: <IconCricket /> },
    { title: "Sketching", icon: <IconPencilBolt /> },
  ];

  const hobbyImages: Record<string, any[]> = {
    Cooking: [Pic1, Pic2, Pic4, Pic3, Pic5, Pic14],
    Cricket: [Pic7, Pic6],
    Sketching: [Pic8, Pic9, Pic12, Pic11, Pic13, Pic10],
  };

  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);

  const displayedImages =
    selectedHobby && hobbyImages[selectedHobby]
      ? hobbyImages[selectedHobby]
      : Object.values(hobbyImages).flat();

  return (
    <div className="flex flex-col">
      <div className="max-w-7xl pt-14 md:pt-0 pb-0 md:pb-10 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
        >
          Ctrl + Me Time
        </motion.h2>
      </div>

      {/* Hobbies Filter */}
      <div className="flex flex-wrap gap-4 relative z-10 py-5 px-4 md:px-8 w-full">
        {/* Hobbies */}
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
            onClick={() =>
              setSelectedHobby(
                selectedHobby === hobbie.title ? null : hobbie.title
              )
            }
            className={`cursor-pointer ${
              selectedHobby === hobbie.title ? "scale-105" : ""
            }`}
          >
            <Feature key={hobbie.title} {...hobbie} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      <div className="px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-3xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
          >
            {selectedHobby ? `${selectedHobby} Gallery` : "Gallery"}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => setSelectedHobby(null)}
            className={`cursor-pointer px-6 py-2 rounded-xl bg-gray-800 text-white font-semibold flex items-center justify-center 
          ${!selectedHobby ? "border border-blue-500 scale-105" : "border border-transparent hover:border-gray-600"} 
          transition duration-200`}
          >
            Show All
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {displayedImages.map((pic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`${
                pic === Pic6
                  ? "h-60 lg:h-96 md:col-span-2"
                  : "w-[22rem] md:w-96 h-[22rem] md:h-96"
              } rounded-2xl p-2 overflow-hidden bg-gray-950 border border-transparent relative z-20`}
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
    <div className={cn("flex flex-col w-64 py-8 relative group/feature")}>
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-70 transition duration-200 absolute inset-0 h-full w-full border-l-2 border-b-2 rounded-lg border-slate-900 bg-gradient-to-t from-slate-700 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-70 transition duration-200 absolute inset-0 h-full w-full border-l-2 border-b-2 rounded-lg border-slate-900 bg-gradient-to-b from-slate-700 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
    </div>
  );
};
