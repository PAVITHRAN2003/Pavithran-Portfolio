import React from "react";

function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center items-center bg-pink-50 py-20 px-6"
    >
      <div className="max-w-4xl w-full bg-pink-200 bg-opacity-90 rounded-3xl shadow-lg p-10">
        <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
        <p className="mb-4 text-black">
          I am pursuing my M.S. in Computer Science at SUNY Buffalo, focusing on Artificial Intelligence and Machine Learning. 
          I have hands-on experience in data pipelines, AI/ML modeling, software engineering, and full-stack development.
        </p>
        <p className="text-black">
          My goal is to leverage AI and software engineering skills to build efficient, scalable systems and impactful ML solutions. 
          I enjoy exploring deep learning, reinforcement learning, and data-driven optimization techniques.
        </p>
      </div>
    </section>
  );
}

export default About;
