"use client";
import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPostman } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import "aos/dist/aos.css";
import AOS from "aos";
const Page = () => {
  const [AOS, setAOS] = useState(null);

  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({ duration: 1000, once: true });
      setAOS(aos);
    });
  }, []);

  const skills = [
    { icon: FaHtml5, name: "HTML", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    { icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaReact, name: "ReactJS", color: "#61DAFB" },
    { icon: FaNodeJs, name: "NodeJS", color: "#68A063" },
    { icon: SiExpress, name: "Express", color: "#444" },
    { icon: BiLogoMongodb, name: "MongoDB", color: "#47A248" },
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "#38BDF8" },
    { icon: RiNextjsFill, name: "Next.js", color: "#000000" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: FaGitAlt, name: "Git", color: "#F1502F" },
    { icon: FaGithub, name: "GitHub", color: "#181717" },
    { icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { icon: FaFigma, name: "Figma", color: "#F24E1E" },
    { icon: TbApi, name: "API Integration", color: "red" },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-orange-100 to-gray-50 py-16 px-6 md:px-12"
    >
      <h1
        className="text-center font-extrabold text-3xl sm:text-4xl text-gray-800 mb-12"
        data-aos="fade-up"
      >
        My <span className="text-orange-500">Skills</span>
      </h1>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
        data-aos="fade-up"
      >
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          const delay = (i * 50).toString(); // ✅ always a string

          return (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={delay}
              className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md p-6 w-36 sm:w-40 md:w-44 
              hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            >
              <Icon
                size={60}
                style={{ color: skill.color }}
                className="mb-3 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-lg font-semibold text-gray-800">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
