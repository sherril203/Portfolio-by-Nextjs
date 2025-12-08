"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const education = [
    {
      title: "Jeppiaar Institute of Technology",
      qualification: "B.Tech IT",
      Year: "2021 - 2025",
      Percentage: "7.935 (CGPA)",
      location: "Kunnam, Chennai",
    },
    {
      title: "Maria Rafols Higher Secondary School",
      qualification: "12th",
      Year: "2019 - 2021",
      Percentage: "82.9%",
      location: "Puttoor, Kannyakumari",
    },
    {
      title: "Joseph Matric Higher Secondary School",
      qualification: "10th",
      Year: "2018 - 2019",
      Percentage: "77.2%",
      location: "Sasthankarai, Kannyakumari",
    },
  ];

  return (
    <div className="bg-linear-to-r from-orange-100 to-gray-50 w-full py-10 " id="education">
      <h1
        className="text-center font-bold text-3xl sm:text-4xl mb-8 text-gray-800"
        data-aos="fade-up"
      >
        Education
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10">
        {education.map((data, idx) => (
          <div
            key={idx}
            data-aos="zoom-in-up"
            className="w-full sm:w-[45%] md:w-[30%] bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              {data.title}
            </h2>
            <h3 className="text-md sm:text-lg font-medium mb-2">
              {data.qualification}
            </h3>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Percentage:</span> {data.Percentage}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Year:</span> {data.Year}
            </p>
            <p className="text-gray-500">{data.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
