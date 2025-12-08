"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-linear-to-r from-orange-100 to-gray-50 py-12 px-6 md:px-12"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h1
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6"
          data-aos="fade-up"
        >
          Contact <span  className="text-orange-500">Me</span>
        </h1>


        <p
          className="text-lg text-gray-600 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let’s connect! Whether you want to discuss a project, collaborate, or
          just say hello, I’d love to hear from you.
        </p>


        <div
          className="flex flex-col gap-6 items-start md:items-center text-left md:text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-3 text-xl text-gray-700 hover:text-orange-500 transition-all">
            <IoIosMailUnread size={28} className="text-orange-500" />
            <p>
              <b>Email:</b>{" "}
              <Link
                href="mailto:sherriljameskumar@gmail.com"
                className="hover:underline"
              >
                sherriljameskumar@gmail.com
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-3 text-xl text-gray-700 hover:text-orange-500 transition-all">
            <IoCall size={28} className="text-orange-500" />
            <p>
              <b>Mobile:</b>{" "}
              <Link href="tel:9486907680" className="hover:underline">
                +91 9486907680
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-3 text-xl text-gray-700 hover:text-orange-500 transition-all">
            <FaLinkedin size={28} className="text-orange-500" />
            <Link
              href="https://www.linkedin.com/in/sherril-james-kumar"
              target="_blank"
              className="hover:underline"
            >
              M Sherril James Kumar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
