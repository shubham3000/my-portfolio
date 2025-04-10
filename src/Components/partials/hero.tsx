
import React from "react";
import Shubham from "@/assests/shubham.jpg";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { FlipWords } from "../ui/flip-words";
import { kalnia } from "@/app/layout";

export default function hero() {
  const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Automation Developer",
  ];
  return (
    <>
      <div className="w-full h-full">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 xl:col-span-5 flex justify-center md:justify-end items- mt-8 md:mt-0">
          {/* <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden">
            <Image src={Shubham} alt="" className="w-64 md:w-96 h-64 md:h-96 " />
          </BackgroundGradient> */}
          </div>
        </div>
      </div>
    </>
  );
}
