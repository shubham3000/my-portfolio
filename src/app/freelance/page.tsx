"use client";
import { Timeline } from "@/Components/ui/timeline";
import Link from "next/link";
import React, { useState } from "react";
import { Hearts } from "react-loader-spinner";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const data = [
    {
      title: "z21Ventures",
      content: (
        <div>
          <div className="relative w-72 lg:w-96 h-[26rem]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <Hearts
                  height="80"
                  width="80"
                  color="#da696e"
                  ariaLabel="hearts-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
            <iframe
              src="https://z21.ventures"
              className={`w-full h-full overflow-hidden ${
                isLoading ? "invisible" : "visible"
              }`}
              title="Live site preview"
              scrolling="no"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div>
            <p className="text-white text-lg lg:text-2xl font-semibold mt-2 mb-4">
              z21 Ventures is an early-stage VC firm backing innovative startups
              in AI, enterprise software, and healthcare with a community-driven
              approach. &nbsp; <br />
              <Link
                href={"https://z21.ventures"}
                className=" text-white hover:text-blue-500 underline"
                target="__blank"
                title="https://z21.ventures"
              >
                [ URL ]
              </Link>
            </p>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                Developed the official website for <strong>Z21 Ventures</strong>
                , a San Francisco-based venture capital firm focused on
                early-stage tech investments.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Built a modern, responsive, and high-performance website using
                ReactJs, TailwindCSS, React Hooks, APIs.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Designed and implemented a custom admin panel to allow the team
                to:
                <ul className="list-disc ml-6">
                  <li className="text-white text-base font-normal mb-3">
                    Post and manage blogs.
                  </li>
                  <li className="text-white text-base font-normal mb-3">
                    Upload and showcase new portfolio companies.
                  </li>
                  <li className="text-white text-base font-normal mb-3">
                    Highlight community members and operator networks.
                  </li>
                </ul>
              </li>
              <li className="text-white text-base font-normal mb-4">
                Created a dynamic and scalable frontend to reflect Z21&apos;s
                brand identity and mission.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Collaborated with the founding team to ensure content structure
                and user flow aligned with business goals.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Optimized for SEO, mobile responsiveness, and fast page load
                times across all devices.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Ensured a secure backend with role-based access control for the
                admin panel.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Delivered post-launch support and iterations based on user and
                investor feedback.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Dgtg",
      content: (
        <div>
          <div className="relative w-72 lg:w-96 h-[26rem]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <Hearts
                  height="80"
                  width="80"
                  color="#da696e"
                  ariaLabel="hearts-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
            <iframe
              src="https://dgtg.in/"
              className={`w-full h-full overflow-hidden ${
                isLoading ? "invisible" : "visible"
              }`}
              title="Live site preview"
              scrolling="no"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div>
            <p className="text-white text-lg lg:text-2xl font-semibold mt-2 mb-4">
              DGTG Marketing & Retail Private Limited is a Bengaluru-based
              digital marketing agency founded in 2015, offering services such
              as performance marketing, SEO, social media management, and web
              development to clients across various industries.&nbsp; <br />
              <Link
                href={"https://dgtg.in/"}
                className=" text-white hover:text-blue-500 underline"
                target="__blank"
                title="https://dgtg.in/"
              >
                [ URL ]
              </Link>
            </p>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                Designed and developed the DGTG Marketing & Retail Pvt. Ltd.
                website as a freelancer using React.js, delivering a dynamic and
                high-performance user interface.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Utilized React Hooks for efficient state management and
                component lifecycle handling.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Integrated Bootstrap for responsive design and consistent
                styling across devices and screen sizes.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Collaborated closely with the client to implement a clean,
                modern layout that highlights their digital marketing services.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Ensured SEO optimization, fast loading times, and cross-browser
                compatibility for improved user experience.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Developed reusable and modular components to streamline future
                updates and scalability.
              </li>
              <li className="text-white text-base font-normal mb-4">
                Designed and implemented a custom admin panel to allow the team
                to:
                <ul className="list-disc ml-6">
                  <li className="text-white text-base font-normal mb-3">
                    Post and manage blogs.
                  </li>
                </ul>
              </li>
              <li className="text-white text-base font-normal mb-4">
                Implemented analytics tracking and performance monitoring tools
                to help the client measure engagement.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} headerTitle={"CodeLance"} />
    </div>
  );
}
