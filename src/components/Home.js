import React from "react";
import profileImg from "../assets/profile.jpeg"; 
import resume from "../assets/Pavithran_Gnanasekaran_SDE_Resume.pdf";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-pink-50"
    >
      <div className="flex flex-col items-center bg-black rounded-3xl shadow-2xl p-10 mt-16 mb-8 w-full max-w-2xl">
        <img
          src={profileImg}
          alt="Pavithran Gnanasekaran"
          className="w-72 h-72 rounded-full mb-8 shadow-xl object-contain border-8 border-pink-300"
        />
        <h2 className="text-5xl font-extrabold mb-4 text-white text-center drop-shadow">
          Hi, I'm Pavithran Gnanasekaran
        </h2>
        <p className="text-2xl mb-6 text-gray-300 text-center">
          M.S. Computer Science <span className="text-pink-500">|</span> Full-Stack Developer - AI & ML
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a
            href="/Pavithran-Portfolio/about"
            className="px-8 py-3 bg-pink-500 text-white rounded-xl font-semibold shadow hover:bg-pink-600 transition"
          >
            About Me
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-pink-500 text-white rounded-xl font-semibold shadow hover:bg-pink-600 transition"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Contact Section with Emojis */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-lg font-semibold text-indigo-700">
        <a
          href="https://github.com/PAVITHRAN2003"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pavithran-gnanasekaran-6a84622a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          💼 LinkedIn
        </a>
        <a
          href="mailto:pavithrangnanasekaran@gmail.com"
          className="hover:text-pink-500 transition"
        >
          ✉️ Email
        </a>
        <a
          href="https://instagram.com/pavithran_gnanasekaran"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          📸 Instagram
        </a>
      </div>

      {/* Welcome Note */}
      <div className="mt-4 text-center text-lg text-gray-600">
        <span className="inline-block px-4 py-2 bg-pink-50 rounded-full shadow">
          Welcome to my portfolio! Explore my work, experience, and research.
        </span>
      </div>
    </section>
  );
}

export default Home;
