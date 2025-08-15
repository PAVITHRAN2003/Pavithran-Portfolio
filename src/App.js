import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Research />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
