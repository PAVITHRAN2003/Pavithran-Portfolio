import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-white">Pavithran Gnanasekaran</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="text-white hover:text-pink-400 transition">Home</Link></li>
        <li><Link to="/About" className="text-white hover:text-pink-400 transition">About</Link></li>
        <li><Link to="/Education" className="text-white hover:text-pink-400 transition">Education</Link></li>
        <li><Link to="Projects" className="text-white hover:text-pink-400 transition">Projects</Link></li>
        <li><Link to="/Experience" className="text-white hover:text-pink-400 transition">Experience</Link></li>
        <li><Link to="/Research" className="text-white hover:text-pink-400 transition">Research</Link></li>
        <li><Link to="/Skills" className="text-white hover:text-pink-400 transition">Skills</Link></li>
        <li><Link to="/Contact" className="text-white hover:text-pink-400 transition">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
