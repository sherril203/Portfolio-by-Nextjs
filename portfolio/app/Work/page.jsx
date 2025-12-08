"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const workExperience = [
    {
      title: "MERN Stack Developer Intern | WHY Global Services",
      duration: "January 2025 - November 2025",
      description:
        "Developed responsive web interfaces using HTML, CSS, and Bootstrap; created interactive layouts using JavaScript, React.js for framework, TailwindCSS for responsive design, and Figma for UI/UX design. Also worked on backend development with Node.js, Express, and MongoDB during eight months of hands-on training.",
      tech_stack: ["Figma", "HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB","Express","Node","React","Tailwindcss"],
    },
    {
      title: "Web Designer Intern | Digit Info Solutions",
      duration: "July 2023 - August 2023",
      description:
        "Built interactive websites using WordPress, HTML, CSS, and JavaScript. Improved user navigation and optimized designs for mobile responsiveness.",
      tech_stack: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      title: "Full Stack Development Intern | Internezy (Virtual)",
      duration: "August 2022 - September 2022",
      description:
        "Enhanced web development skills by learning and implementing HTML, CSS, JavaScript, and frameworks like React.js in real-world projects.",
      tech_stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    },
  ];

  return (
    <div className="bg-linear-to-r from-orange-100 to-gray-50 p-20 md:px-12" id="work">
      <h1
        className="text-center font-extrabold text-3xl sm:text-4xl text-gray-800 mb-10"
        data-aos="fade-up"
      >
        Work <span className="text-orange-500">Experience</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {workExperience.map((work, idx) => (
          <div
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            className="w-full sm:w-[45%] md:w-[30%] bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {work.title}
            </h2>

            <p className="text-md text-gray-600 mb-3">
              <b className="text-gray-800">Duration:</b> {work.duration}
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              {work.description}
            </p>

            <p className="text-md font-semibold text-gray-800 mb-2">
              Tech Stack:
            </p>

            <div className="flex flex-wrap gap-2">
              {work.tech_stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-orange-100 text-orange-700 font-medium border border-orange-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
