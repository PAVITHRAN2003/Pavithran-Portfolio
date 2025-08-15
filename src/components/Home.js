import React from "react";
import profileImg from "../assets/profile.jpeg"; // Import your profile image

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-200"
    >
      <div className="flex flex-col items-center bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 mt-16 mb-8 w-full max-w-2xl">
        <img
          src={profileImg}
          alt="Pavithran Gnanasekaran"
          className="w-72 h-72 rounded-full mb-8 shadow-xl object-contain border-8 border-pink-300"
        />
        <h2 className="text-5xl font-extrabold mb-4 text-indigo-700 text-center drop-shadow">
          Hi, I'm Pavithran Gnanasekaran
        </h2>
        <p className="text-2xl mb-6 text-gray-700 text-center">
          M.S. Computer Science <span className="text-pink-500">|</span> Full-Stack Developer - AI & ML
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-pink-500 transition"
          >
            View Projects
          </a>
          <a
            href="mailto:pavithrangnanasekaran@gmail.com"
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold shadow hover:bg-indigo-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-lg text-gray-600">
        <span className="inline-block px-4 py-2 bg-pink-50 rounded-full shadow">
          Welcome to my portfolio! Explore my work, experience, and research.
        </span>
      </div>
    </section>
  );
}

export default Home;