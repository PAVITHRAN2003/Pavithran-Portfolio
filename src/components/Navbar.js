import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">Pavithran Gnanasekaran</h1>
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
