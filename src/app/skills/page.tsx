"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import {
  IconBrandPython,
  IconBrandJavascript,
  IconSql,
  IconFileTypeHtml,
  IconFileTypeCss,
  IconBrandBootstrap,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandVite,
  IconBrandNodejs,
  IconBrandGithub,
  IconCircleLetterPFilled,
  IconCircle,
  IconDatabase,
  IconBrandAzure,
  IconLetterSSmall,
  IconLetterASmall,
  IconBrandFigma,
  IconBrandFramer,
} from "@tabler/icons-react";

export default function page() {
  const languages = [
    {
      title: "Python",
      description:
        "Versatile scripting language used for automation, web development, and data analysis.",
      icon: <IconBrandPython />,
    },
    {
      title: "JavaScript",
      description:
        "Core web language used to build interactive front-end and back-end functionality.",
      icon: <IconBrandJavascript />,
    },
    {
      title: "SQL",
      description:
        "Used to query and manage structured data in relational databases.",
      icon: <IconSql />,
    },
  ];

  const frontends = [
    {
      title: "HTML",
      description: "Markup language for structuring web content.",
      icon: <IconFileTypeHtml />,
    },
    {
      title: "CSS",
      description: "Used to style and layout web pages with custom designs.",
      icon: <IconFileTypeCss />,
    },
    {
      title: "Bootstrap",
      description:
        "CSS framework for quickly designing responsive and mobile-first websites.",
      icon: <IconBrandBootstrap />,
    },
    {
      title: "Tailwind CSS",
      description:
        "Utility-first CSS framework for building modern and highly customizable UIs.",
      icon: <IconBrandTailwind />,
    },
    {
      title: "ReactJS",
      description:
        "JavaScript library for building fast, reusable, and reactive user interfaces.",
      icon: <IconBrandReact />,
    },
    {
      title: "Vite",
      description:
        "Lightning-fast front-end build tool and dev server optimized for modern frameworks.",
      icon: <IconBrandVite />,
    },
    {
      title: "Framer (Framer Motion)",
      description:
        "Framer Motion is a popular JavaScript animation library for React that enables smooth, interactive animations and transitions with minimal effort.",
      icon: <IconBrandFramer />,
    },
  ];

  const backends = [
    {
      title: "NodeJS",
      description:
        "JavaScript runtime for building scalable and efficient server-side applications.",
      icon: <IconBrandNodejs />,
    },
    {
      title: "Git",
      description:
        "Version control system for tracking changes and collaborating on codebases.",
      icon: <IconBrandGithub />,
    },
    {
      title: "Postman",
      description:
        "API testing tool for sending, inspecting, and automating HTTP requests.",
      icon: <IconCircleLetterPFilled />,
    },
  ];

  const datbases = [
    {
      title: "Oracle",
      description:
        "Enterprise-level relational database system used for handling large-scale data",
      icon: <IconCircle />,
    },
    {
      title: "DBMS",
      description:
        "Understanding of database concepts like normalization, relationships, and schema design.",
      icon: <IconDatabase />,
    },
  ];

  const clouds = [
    {
      title: "Azure",
      description:
        "Microsoft’s cloud computing platform used for hosting, deploying, and managing applications.",
      icon: <IconBrandAzure />,
    },
  ];

  const automations = [
    {
      title: "Selenium",
      description:
        "Tool for automating web browser interactions and UI testing.",
      icon: <IconLetterSSmall />,
    },
    {
      title: "Automation Anywhere (A360)",
      description:
        "RPA tool for automating repetitive business processes without coding.",
      icon: <IconLetterASmall />,
    },
  ];

  const designs = [
    {
      title: "Figma",
      description:
        "Collaborative design tool used for UI/UX wireframes, prototypes, and mockups.",
      icon: <IconBrandFigma />,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="max-w-7xl pt-14 md:pt-0 pb-0 md:pb-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Programming Languages
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {languages.map((language, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Feature key={language.title} {...language} index={index} />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl pt-10 pb-0 md:pb-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Frontend Technologies
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {frontends.map((frontend, index) => (
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
            <Feature key={frontend.title} {...frontend} index={index} />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl pt-10 pb-0 md:pb-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Backend &amp; Dev Tools
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {backends.map((backend, index) => (
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
            <Feature key={backend.title} {...backend} index={index} />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl pt-10 pb-0 md:pb-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Databases &amp; DB Tools
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {datbases.map((datbase, index) => (
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
            <Feature key={datbase.title} {...datbase} index={index} />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl pt-10 pb-0 md:pb-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Cloud &amp; Deployment
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {clouds.map((cloud, index) => (
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
            <Feature key={cloud.title} {...cloud} index={index} />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl pt-10 pb-0 md:pb-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Automation &amp; Testing
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {automations.map((automation, index) => (
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
            <Feature key={automation.title} {...automation} index={index} />
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl pt-10 pb-0 md:pb-10 px-4 md:px-8 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Design Tools
        </motion.h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {designs.map((design, index) => (
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
            <Feature key={design.title} {...design} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div className={cn("flex flex-col py-5 lg:py-10 relative group/feature ")}>
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
      <p className="text-sm text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
