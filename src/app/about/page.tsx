import React from "react";
import ShubhamProfile from "@/assests/ShubhamImage.jpg";
import Image from "next/image";
import { BackgroundLines } from "@/Components/ui/background-lines";
import {
  IconBrandGit,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconFileCv,
  IconMail,
  IconPhone,
  IconBrandVue,
} from "@tabler/icons-react";
import Link from "next/link";

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
    href: "mailto:shubhamsadhu02@gmail.com",
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
    title: "NodeJs",
    icon: IconBrandNodejs,
  },
  {
    title: "NextJs",
    icon: IconBrandNextjs,
  },
  {
    title: "Vue",
    icon: IconBrandVue,
  },
  {
    title: "Python",
    icon: IconBrandPython,
  },
  {
    title: "Git",
    icon: IconBrandGit,
  },
];

export default function page() {
  return (
    <BackgroundLines>
      <div className=" w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          <div className="flex justify-center">
            <Image
              src={ShubhamProfile}
              className="w-1/2 h-1/2 rounded-lg"
              alt="Avatar"
            />
          </div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Shubham Sadhu
          </h1>
          <div className="text-neutral-500 max-w-lg mx-auto my-2 relative z-10 flex justify-center space-x-6">
            {socials.map((item, key) => (
              <div key={key}>
                <Link
                  href={item.href}
                  rel="noopener noreferrer"
                  target="__blank"
                  className="relative group flex items-center justify-center"
                >
                  <item.icon
                    className="text-white h-8 w-8 flex-shrink-0 hover:text-purple-500"
                  />
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex px-2 py-1 text-lg rounded-lg bg-gray-600 text-white whitespace-nowrap shadow-md transition-opacity duration-300 z-50">
                    {item.title}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-gray-600 rotate-45"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <p className="text-neutral-500 my-2 text-lg">Tech Stacks:</p>
            <div className="flex items-center justify-center">
              {techStacks.map((item, key) => (
                <div
                  key={key}
                  className="relative group flex items-center justify-center mr-4"
                >
                  <item.icon className="text-white h-8 w-8 flex-shrink-0 hover:text-purple-500" />
                  <div className="absolute bottom-full mb-2 hidden group-hover:flex px-2 py-1 text-lg rounded-lg bg-gray-600 text-white whitespace-nowrap shadow-md transition-opacity duration-300 z-50">
                    {item.title}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-gray-600 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Creative and detail-oriented frontend developer with strong design
            and integration skills paired with intuitive problem-solving
            abilities. Proficient in ReactJS and experienced in leveraging
            modern web technologies to create engaging user interfaces.
            Passionate about building and launching innovative projects, with a
            proven ability to translate business requirements into effective
            technical solutions. Seeking opportunities to contribute expertise
            to a forward-thinking technology-driven organization.
          </p> */}
        </div>
      </div>
    </BackgroundLines>
  );
}
