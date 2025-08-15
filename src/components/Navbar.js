import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">Pavithran Gnanasekaran</h1>
      <ul className="flex space-x-6">
        {["Home", "About", "Projects", "Experience", "Research", "Skills", "Contact"].map(section => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`} className="hover:text-blue-500">{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
