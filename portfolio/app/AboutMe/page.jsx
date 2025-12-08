"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-linear-to-r from-orange-100 to-gray-50  p-20 md:px-16 lg:px-30"
    id="about">
      <div
        className="max-w-4xl mx-auto text-center md:text-left"
        data-aos="fade-up"
      >

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 text-center">
          About <span  className="text-orange-500">Me</span>
        </h1>

        <h2
          className="text-2xl sm:text-3xl font-semibold text-orange-500 mb-4 text-center md:text-left"
          data-aos="fade-right"
        >
          MERN STACK DEVELOPER | B.TECH IT
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8"
          data-aos="fade-up"
        >
          I’m a <span className="font-semibold">B.Tech IT (2025)</span> graduate
          and a motivated <span className="font-semibold">MERN Stack Developer</span> with{" "}
          <span className="font-semibold">9 months of hands-on experience</span> in building scalable,
          user-focused web applications. Skilled in both front-end and back-end
          technologies including <span className="font-semibold">React.js</span>,{" "}
          <span className="font-semibold">Node.js</span>, and{" "}
          <span className="font-semibold">RESTful APIs</span>.
          <br />
          <br />
          I’m passionate about writing clean, maintainable code aligned with
          modern development standards. Eager to contribute to innovative
          projects and continue growing as a developer by solving real-world
          problems through efficient, high-quality software solutions.
        </p>

        <div className="flex justify-center md:justify-start" data-aos="zoom-in">
          <Link
            href="/Sherril-resume(updated).pdf"
            download
            className="bg-orange-500 hover:bg-orange-600 transition-all text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
