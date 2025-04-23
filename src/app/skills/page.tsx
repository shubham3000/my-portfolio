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
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          Programming Languages
        </h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {languages.map((language, index) => (
          <Feature key={language.title} {...language} index={index} />
        ))}
      </div>
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          Frontend Technologies
        </h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {frontends.map((frontend, index) => (
          <Feature key={frontend.title} {...frontend} index={index} />
        ))}
      </div>
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          Backend &amp; Dev Tools
        </h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {backends.map((backend, index) => (
          <Feature key={backend.title} {...backend} index={index} />
        ))}
      </div>
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          Databases &amp; DB Tools
        </h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {datbases.map((datbase, index) => (
          <Feature key={datbase.title} {...datbase} index={index} />
        ))}
      </div>
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          Cloud &amp; Deployment
        </h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {clouds.map((cloud, index) => (
          <Feature key={cloud.title} {...cloud} index={index} />
        ))}
      </div>
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          Automation &amp; Testing
        </h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {automations.map((automation, index) => (
          <Feature key={automation.title} {...automation} index={index} />
        ))}
      </div>
      <div className="max-w-7xl py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold">
          Design Tools
        </h2>
      </div>
      <div className="flex flex-wrap relative z-10 px-4 md:px-8 w-full">
        {designs.map((design, index) => (
          <Feature key={design.title} {...design} index={index} />
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
