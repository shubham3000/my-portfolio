import Image from "next/image";
import React from "react";
import { Timeline } from "@/Components/ui/timeline";
import Clg1 from "@/assests/college/clg1.jpg";
import Clg2 from "@/assests/college/clg2.jpg";
import Clg3 from "@/assests/college/clg3.jpg";

export default function page() {
  const data = [
    {
      title: "2018-2022",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Bachelors of Technology in Computer Science and Enginnering
          </p>
          <p className="text-white text-sm font-normal mb-4">
            RCC Institute of Information Technology, Kolkata, West Bengal
          </p>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            CGPA: 8.79
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Clg1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Clg2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Clg3}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              className="h-20 md:h-44 lg:h-60 w-full"
            >
              <source src="/assests/college/clg4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mt-4">
            <div>
              <p className="text-white text-lg font-semibold mb-4">
                Head of Robotics Club
              </p>
              <ul className="list-disc ml-6">
                <li className="text-white text-sm font-normal mb-4">
                  Guided a team in developing and programming robots to compete
                  in inter-college robotics events and exhibitions.
                </li>
                <li className="text-white text-sm font-normal mb-4">
                  Oversaw project planning, team coordination, and hands-on
                  development of robotic prototypes.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white text-lg font-semibold mb-4">
                Organized Annual Tech Fest, Techtrix
              </p>
              <ul className="list-disc ml-6">
                <li className="text-white text-sm font-normal mb-4">
                  Spearheaded the planning and execution of the college’s
                  flagship tech festival, attracting 1000+ participants and 10+
                  colleges.
                </li>
                <li className="text-white text-sm font-normal mb-4">
                  Managed event logistics, sponsorship outreach, and technical
                  events including hackathons, robot wars, and workshops.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white text-lg font-semibold mb-4">
                Participated in Inter-College Robotics Competitions
              </p>
              <ul className="list-disc ml-6">
                <li className="text-white text-sm font-normal mb-4">
                  Represented college in various robotics events and
                  competitions focused on innovation, problem-solving, and
                  engineering skills.
                </li>
                <li className="text-white text-sm font-normal mb-4">
                  Helped mentor junior members in basic robotics concepts and
                  competition preparation.
                </li>
                <li className="text-white text-sm font-normal mb-4">
                  Attended robotics workshops and training sessions to enhance
                  knowledge of microcontrollers and automation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2015-2017",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Senior Secondary School
          </p>
          <p className="text-white text-sm font-normal mb-4">
            Dav Public School, Bokaro, Jharkhand
          </p>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            Percentage: 79%
          </p>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Secondary School
          </p>
          <p className="text-white text-sm font-normal mb-4">
            Sido Kanhu High School, Dumka, Jharkhand
          </p>
          <p className="text-white text-xs md:text-sm font-normal mb-4">
            CGPA: 9.6
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} headerTitle={"Chapters of Growth"} />
    </div>
  );
}
