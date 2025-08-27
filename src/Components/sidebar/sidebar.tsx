"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/Components/ui/sidebar";
import {
  IconCertificate,
  IconSchool,
  IconBriefcaseFilled,
  IconUserBolt,
  IconDeviceGamepad2,
  IconCodeCircle,
  IconFiles,
  IconCircleDottedLetterF,
  IconMail,
  IconRobot,
} from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import ShubhamAvatar from "@/assests/shubhamavatar.jpg";

export function PortfolioSidebar() {
  const links = [
    {
      label: "About Me",
      href: "/about",
      icon: <IconUserBolt className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Educations",
      href: "/education",
      icon: <IconSchool className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Work Experience",
      href: "work-experience",
      icon: (
        <IconBriefcaseFilled className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "/projects",
      icon: (
        <IconFiles className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Freelancing",
      href: "/freelance",
      icon: (
        <IconCircleDottedLetterF className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Skills",
      href: "/skills",
      icon: <IconCodeCircle className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Certifications",
      href: "/certifications",
      icon: <IconCertificate className="text-white h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Hobbies",
      href: "/hobbies",
      icon: (
        <IconDeviceGamepad2 className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact Me",
      href: "/contactme",
      icon: (
        <IconMail className="text-white h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Sam AI Chat Bot",
      href: "/chatbot",
      icon: <IconRobot className="text-white h-5 w-5 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row overflow-hidden lg:h-screen absolute lg:relative z-40 w-full md:w-fit"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 rounded-md ">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden z-20">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Shubham Sadhu",
                href: "/home",
                icon: (
                  <Image
                    src={ShubhamAvatar}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
// export const Logo = () => {
//   return (
//     <Link
//       href="#"
//       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//     >
//       <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="font-medium text-white whitespace-pre"
//       >
//         Portfolio
//       </motion.span>
//     </Link>
//   );
// };
// export const LogoIcon = () => {
//   return (
//     <Link
//       href="#"
//       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
//     >
//       <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
//     </Link>
//   );
// };
