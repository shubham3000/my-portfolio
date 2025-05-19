import Image from "next/image";
import React from "react";
import { Timeline } from "@/Components/ui/timeline";
import { LinkPreview } from "@/Components/ui/link-preview";

export default function page() {
  const data = [
    {
      title: "2022-Present",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Software Developer | Tata Consultancy Services, Bangalore
          </p>
          <div>
            <p className="text-white text-lg font-semibold mb-4">
              Project - Dashboard
            </p>
            <ul className="list-disc ml-6">
              <li className="text-white text-sm font-normal mb-4">
                Built <b>ReactJs</b> interfaces, enhancing usability by 25% and
                accelerating development by 30% using modular components.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Leveraged <b>Azure services</b> for real-time data, increasing
                user interactions by 40%.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Improved cross-platform performance, achieving a 35% reduction
                in load times and ensuring seamless functionality across
                devices.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Implemented secure authentication for users with <b>MSAL</b>.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Optimized maintainability through <b>Redux</b> and{" "}
                <b>MVC architecture</b>, reducing debugging time by 30% and
                facilitating easier updates.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Created search filters and reusable components to streamline
                data navigation and enhance the user experience.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Refined the overall UI design for better accessibility,
                improving navigation ease by 20%.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Conducted user feedback sessions to identify pain points and
                proposed solutions to improve workflows.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-lg font-semibold mb-4">
              Project – Automation
            </p>
            <ul className="list-disc ml-6">
              <li className="text-white text-sm font-normal mb-4">
                Automated regression testing using <b>Selenium</b> and{" "}
                <b>A360</b>, reducing manual effort by 80% and improving test
                coverage.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Scripted <b>Python</b>-based solutions for data processing,
                reducing repetitive tasks by 60%.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Refined database queries, improving reporting efficiency by 60%
                and ensuring better handling of large datasets
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Configured <b>Azure Logic Apps</b> to minimize workflow delays
                by 50%, ensuring smooth and timely operations.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Designed <b>CI/CD pipelines</b> in Azure DevOps, reducing
                release cycles by 30% and enhancing deployment reliability.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Introduced robust error-handling mechanisms, cutting disruptions
                by 25% and increasing system stability.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Mentored team members on automation practices, boosting
                productivity by 15% and fostering knowledge-sharing sessions.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "May 2021 – Nov 2021",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Frontend Developer Intern | Atorvis Pvt. Ltd., Kolkata &nbsp;
            <LinkPreview
              url="https://drive.google.com/file/d/1rkZYNuaacYzJgiIB3W-7SUHkwDVG5GE-/view"
              className=" text-white hover:text-blue-500 underline" 
            >
              [ Certificate ]
            </LinkPreview>
          </p>
          <div>
            <ul className="list-disc ml-6">
              <li className="text-white text-sm font-normal mb-4">
                Developed responsive landing pages, increasing user engagement
                by 20%.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Improved website performance, reducing rendering time by 40% and
                ensuring compatibility across browsers.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Built an admin panel for data management, improving task
                efficiency by 25%.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Proposed innovative design ideas, raising client satisfaction by
                15%.
              </li>
              <li className="text-white text-sm font-normal mb-4">
                Collaborated with backend developers to seamlessly integrate
                APIs into the frontend.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} headerTitle={"Career Commits"} />
    </div>
  );
}
