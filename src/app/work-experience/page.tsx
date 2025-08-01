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
            <p className="text-white text-xl font-semibold mb-4">
              Project - Dashboard
            </p>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                Developed RESTful APIs using Flask, reducing API response times
                by 30% and integrating seamlessly with ReactJS.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Optimized database queries, improving data retrieval speed by
                25%.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Collaborated with frontend teams to fix UI consistency issues,
                reducing UI-related bugs by 30%.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Managed code repositories with Git, achieving 100% pull request
                coverage and reducing merge conflicts by 20%.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Implemented Azure Functions for asynchronous processing,
                improving fault tolerance by 40% and reducing downtime by 30%.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Built ReactJS components, improving usability by 25% and
                speeding up development by 30%.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Used Azure services for real-time data updates, increasing user
                interactions by 40%.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Reduced load times by 35% to ensure smooth performance across
                devices.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Added secure authentication for users with MSAL.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Applied Redux and MVC structure, cutting debugging time by 30%
                and simplifying updates.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Created search filters and reusable components to improve data
                navigation.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Improved UI accessibility, making navigation 20% easier for
                users.
              </li>

              <li className="text-white text-base font-normal mb-4">
                Collected user feedback and implemented changes to remove
                workflow bottlenecks.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white text-xl font-semibold mb-4">
              Project – Automation
            </p>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                Automated regression testing with Selenium and A360, reducing
                manual effort by 80% and improving accuracy.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Developed Python scripts with Pandas and Openpyxl, streamlining
                data processing and report generation by 60%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Optimized database queries for large datasets, improving data
                retrieval and reporting efficiency by 60%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Implemented Azure Logic Apps and Function Apps to automate
                workflows, reducing operational delays by 50%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Built CI/CD pipelines in Azure DevOps, cutting release cycles by
                30% and improving deployment reliability.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Designed robust error-handling mechanisms, reducing process
                disruptions by 25% and enhancing system stability.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Configured secure authentication and role-based access,
                improving platform security and compliance.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Mentored team members on automation best practices, boosting
                team productivity by 15%.
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
              <li className="text-white text-base font-normal mb-4">
                Developed responsive landing pages, increasing user engagement
                by 20%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Improved website performance, reducing rendering time by 40% and
                ensuring compatibility across browsers.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Built an admin panel for data management, improving task
                efficiency by 25%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Proposed innovative design ideas, raising client satisfaction by
                15%.
              </li>
              <li className="text-white text-base font-normal mb-4">
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
