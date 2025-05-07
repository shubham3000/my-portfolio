import React from "react";
import BGIMG from "@/assests/pexels.jpg";

export default function dashboard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-1">
      <div className="relative w-full h-screen">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div
          className={`p-2 md:p-10 rounded-tl-2xl lg:border border-neutral-200 flex flex-col gap-2 flex-1 w-full h-screen overflow-y-scroll`}
          style={{
            backgroundImage: `url(${BGIMG.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div> */}
          <div className="flex gap-2 justify-center items-center lg:items-start flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
