"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="intro"
      className="bg-linear-to-r from-orange-100 to-gray-50 p-28"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        <div data-aos="fade-right" className="shrink-0 flex justify-center md:justify-start">
          <div className="w-80 h-80 md:w-80 md:h-80 rounded overflow-hidden shadow-lg border-4 border-orange-300">
            <Image
              src="/profile.jpg" // <-- use root-relative path
              alt="Profile photo of M Sherril James Kumar"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div data-aos="fade-left" className="max-w-2xl">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-3">
            I Am <span className="text-orange-500">M Sherril James Kumar</span>
          </h1>

          <h2
            data-aos-delay="200"
            className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold mb-6"
          >
            MERN Stack Developer
          </h2>

          <p
            data-aos-delay="400"
            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8"
          >
            Passionate about building dynamic and user-focused web applications
            using modern technologies like React, Node.js, Express, and MongoDB.
          </p>

          <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Contact Me
            </Link>
            <Link
              href="/Resume"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md transition-all"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
