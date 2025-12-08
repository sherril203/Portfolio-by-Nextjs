"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-orange-400 to-orange-500 text-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        <h1 className="text-2xl font-bold">
          <Link href="/">Portfolio</Link>
        </h1>

        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link
              href="/#about"
              className="hover:text-gray-100 transition-colors"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="hover:text-gray-100 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#work"
              className="hover:text-gray-100 transition-colors"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="hover:text-gray-100 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/Sherril-resume(updated).pdf"
              download
              className="bg-white text-orange-600 px-4 py-2 rounded-md font-semibold hover:bg-orange-200 transition"
            >
              Download CV
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-orange-500 text-white text-center py-4 space-y-4 animate-fadeIn">
          <Link
            href="/#about"
            className="block hover:bg-orange-400 py-2 transition"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="/#projects"
            className="block hover:bg-orange-400 py-2 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/#work"
            className="block hover:bg-orange-400 py-2 transition"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/#contact"
            className="block hover:bg-orange-400 py-2 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/Sherril-resume(updated).pdf"
           download
            className="block bg-white text-orange-600 px-4 py-2 rounded-md font-semibold mx-auto w-40 hover:bg-orange-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
