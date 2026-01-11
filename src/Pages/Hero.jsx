import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TypewriterText from "../Components/Typewriter";
import { NavLink } from "react-router-dom";
import resume from "../assets/resumeAniket.pdf";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm{" "}
        <span className="text-yellow-400">Aniket Tiwari</span>{" "}
        <img
          src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif"
          width="50"
          alt="waving hand"
          className="inline-block"
        />
      </h1>

      <TypewriterText />

      <p className="mt-4 text-gray-600 max-w-md">
        I build fast, modern, and scalable web apps with the MERN stack.
      </p>

      <div className="mt-6 flex gap-4">
        <NavLink to="/projects">
          <button className="px-4 py-2 rounded-2xl bg-blue-600 text-white shadow-md hover:bg-blue-700 transition">
            View Projects
          </button>
        </NavLink>

        <a href={resume} download="Aniket_Tiwari_Resume.pdf">
          <button className="px-4 py-2 rounded-2xl bg-gray-800 text-white shadow-md hover:bg-gray-900 transition">
            Download Resume
          </button>
        </a>
      </div>

      <div className="mt-8 flex gap-6 text-2xl text-gray-700">
        <a
          href="https://www.linkedin.com/in/aniket-tiwari-51040a294/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600 transition" />
        </a>

        <a
          href="https://github.com/Anikettiw-at"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-black transition" />
        </a>

        <a href="mailto:pt5602238@gmail.com">
          <FaEnvelope className="hover:text-red-500 transition" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
