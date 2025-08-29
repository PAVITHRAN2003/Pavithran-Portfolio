import React from "react";

function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col justify-center items-center bg-pink-50 py-20 px-6"
    >
      <div className="max-w-5xl w-full bg-pink-200 bg-opacity-90 rounded-3xl shadow-lg p-12">
        <h2 className="text-5xl font-extrabold mb-10 text-black text-center">
          About Me
        </h2>
        <p className="mb-6 text-black text-lg md:text-xl leading-relaxed">
          I am pursuing my M.S. in Computer Science at SUNY Buffalo with a focus on Artificial Intelligence and Machine Learning. 
          Beyond academics, I am deeply passionate about Mathematics and how it shapes the foundation of modern AI systems.
        </p>
        <p className="mb-6 text-black text-lg md:text-xl leading-relaxed">
          I love tackling real-world problems where technology can create meaningful impact whether through building 
          efficient data pipelines, designing scalable ML models, or developing full-stack applications.
        </p>
        <p className="text-black text-lg md:text-xl leading-relaxed">
          At my core, I am a tech-driven person who thrives on innovation, continuous learning, and solving complex challenges. 
          My interests span Generative AI, LLMs, Deep learning and Reinforcement learning optimization techniques that push the boundaries of what AI can achieve.
        </p>
      </div>
    </section>
  );
}

export default About;
