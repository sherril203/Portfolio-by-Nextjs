"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
     {
      title: "FitMyHealth",
      tech_stack: ["NextJS", "NodeJS", "Express", "MongoDB", "TailwindCSS"],
      description:
        "Developed a full-stack health and fitness web application using NextJS, Node.js, Express, and  MongoDB.Implemented user authentication using JWT and bcrypt.Added CSV and Excel export functionality for easy data sharing and reporting.Worked on both frontend and backend features to provide a responsive user experience",
      Role: "Frontend & Backend Developer",
      link: "https://github.com/sherril203/fitmyhealth",
      live_link:"https://fitmyhealth-6iah.vercel.app/"
    },
    {
      title: "Artsworld",
      tech_stack: ["ReactJS", "NodeJS", "Express", "MongoDB", "TailwindCSS"],
      description:
        "Developed a full-stack e-commerce platform for art supplies using the MERN Stack and TailwindCSS. Implemented core functionalities including RESTful API integration and a fully responsive frontend. ",
      Role: "Frontend & Backend Developer",
      link: "https://github.com/sherril203/DIY-website-React",
      live_link:"https://artsworld.vercel.app/"
    },
    {
      title: "Spawell",
      tech_stack: ["ReactJS", "NodeJS", "Express", "MongoDB", "TailwindCSS"],
      description:
        "Collaborated in a team to build a web application for Spa. Contributed to both frontend UI (React JS) and backend development (Node.js, Express, MongoDB).",
      Role: "Full Stack Developer",
      link: "https://github.com/sherril203/spa",
      live_link:"https://spawell.vercel.app/"
    },
    {
      title: "Food Hub",
      tech_stack: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB"],
      description:
        "Collaborated on a team project for a cooking and grocery shopping application. Engineered features for recipe displays, user input management, and dynamic product listings ",
      Role: "Frontend & Backend Developer",
      link: "https://github.com/sherril203/food",
    },
    {
      title: "Trip My Day",
      tech_stack: ["Figma"],
      description:
       "Designed a responsive ticket booking website in Figma, enhancing features for easier and smoother booking. Focused on intuitive navigation and a clean layout to improve overall user experience ",
      Role: "UI/UX Designer",
      live_link:
        "https://www.figma.com/proto/XEpfS7yvic09fWZlNmL2NI/Train?node-id=1-2",
    },
  ];

  return (
    <div className="bg-linear-to-r from-orange-100 to-gray-50 p-20 md:px-12" id="projects">
      <h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10"
        data-aos="fade-up"
      >
        Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 p-6 flex flex-col justify-between"
          >

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech_stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-700 border border-orange-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              {project.description}
            </p>

            <p className="text-md font-semibold text-gray-800 mb-5">
              Role: <span className="font-normal">{project.Role}</span>
            </p>

            <div className="flex gap-4 flex-wrap">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all"
                >
                  <FaGithub size={20} /> GitHub
                </Link>
              )}
              {project.live_link && (
                <Link
                  href={project.live_link}
                  target="_blank"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all"
                >
                  View Project
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
