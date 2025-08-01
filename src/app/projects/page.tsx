import Image from "next/image";
import React from "react";
import { Timeline } from "@/Components/ui/timeline";
import { LinkPreview } from "@/Components/ui/link-preview";

export default function page() {
  const data = [
    {
      title: "June 2022",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Your Planner (Event management social media) | &nbsp;
            <LinkPreview
              url="https://your-planners.vercel.app/"
              className=" text-white hover:text-blue-500 underline"
            >
              [ URL ]
            </LinkPreview>
          </p>
          <div>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                <b>Developed a user-friendly booking system:</b> Streamlined the
                event-planning process by enabling seamless selection,
                reservation, and confirmation of planners, increasing user
                engagement by 25%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Implemented advanced search and filtering features:</b>{" "}
                Enhanced user experience by allowing clients to find planners
                based on location, budget, and preferences, reducing search time
                by 40%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Leveraged Firebase for scalable backend solutions:</b>{" "}
                Managed real-time data storage, authentication, and hosting,
                ensuring 99.9% uptime and secure handling of sensitive user
                information.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Built a functional admin panel:</b> Improved administrative
                efficiency by 30% through a robust interface for viewing,
                uploading, and submitting event-related data.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Utilized modern frontend technologies:</b> Designed and
                developed responsive and feature-rich user interfaces with React
                JS, Tailwind CSS, and React Hooks, improving page load times by
                20%.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Integrated Google Authentication (GAuth):</b> Enhanced
                platform security and simplified login processes, reducing
                account-related issues by 15%.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2022",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Mukh | &nbsp;
            <LinkPreview
              url="https://www.figma.com/design/Hedfb6v3C2BpMmSq0dZmPE/Mukh"
              className=" text-white hover:text-blue-500 underline"
            >
              [ URL ]
            </LinkPreview>
          </p>
          <div>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                <b>User Research & Analysis:</b> Conducted in-depth research to
                identify key pain points in the doctor-to-doctor patient
                referral process.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Problem Solving:</b> Mapped out inefficiencies in existing workflows
                and translated findings into actionable product requirements.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Innovative Solution Design:</b> Contributed to the creation of an
                innovative application that streamlined referrals and improved
                process efficiency.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Wireframing in Figma:</b> Designed low to high-fidelity wireframes
                to visualize core features and user flows.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Interactive Prototyping:</b> Built clickable prototypes in Figma to
                simulate user interactions and gather feedback.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Team Collaboration:</b> Shared prototypes with stakeholders,
                facilitating discussions, rapid iterations, and design
                validation.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Impact:</b> Helped deliver a more intuitive and time-saving solution
                for healthcare professionals handling patient referrals.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2022",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Snake game | &nbsp;
            <LinkPreview
              url="https://shubham3000.github.io/snake/"
              className=" text-white hover:text-blue-500 underline"
            >
              [ URL ]
            </LinkPreview>
          </p>
          <div>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                <b>Built with Core Web Technologies:</b> Developed using HTML,
                CSS, and JavaScript.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Real-time Gameplay:</b> Snake controlled via arrow keys, with
                dynamic movement and grid-based logic.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Score Tracking:</b> Displays real-time score and updates as
                the snake consumes food.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Game Over Logic:</b> Game ends when the snake collides with
                itself or the walls.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Responsive Design:</b> Clean, mobile-friendly interface
                adaptable to different screen sizes.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Smooth Animation:</b> Utilized CSS and JavaScript to create
                fluid snake movement and transitions.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Hands-on Learning:</b> Strengthened skills in DOM
                manipulation, event handling, and game loop logic.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2021",
      content: (
        <div>
          <p className="text-white text-2xl font-semibold mb-4">
            Random Password Generator | &nbsp;
            <LinkPreview
              url="https://shubham3000.github.io/Random_password_generator/"
              className=" text-white hover:text-blue-500 underline"
            >
              [ URL ]
            </LinkPreview>
          </p>
          <div>
            <ul className="list-disc ml-6">
              <li className="text-white text-base font-normal mb-4">
                <b>Customizable Parameters:</b> Allows users to choose password
                length and inclusion of special characters, numbers, and
                uppercase/lowercase letters.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Strong Password Generation:</b> Generates secure, random
                passwords with high entropy to ensure security and
                unpredictability.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>User-Friendly Interface:</b> Simple, intuitive design with
                clear options and an easy-to-use button to generate passwords.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Real-Time Updates:</b> Displays the generated password
                instantly, with copy-to-clipboard functionality for convenience.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>JavaScript Logic:</b> Utilized JavaScript to handle password
                generation, randomization, and conditional logic for character
                types.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Responsive Design:</b> Ensures the password generator is
                accessible and functional on both desktop and mobile devices.
              </li>
              <li className="text-white text-base font-normal mb-4">
                <b>Practical Application:</b> Demonstrates understanding of
                randomization algorithms, string manipulation, and security
                practices.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} headerTitle={"Passion Commits"} />
    </div>
  );
}
