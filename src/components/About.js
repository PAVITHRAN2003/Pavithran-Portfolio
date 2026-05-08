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
          Full-stack software engineer with over a year of experience building end-to-end applications across startups, research labs, and university platforms, with an M.S. in Computer Science (AI/ML) from the University at Buffalo.
        </p>
        <p className="mb-6 text-black text-lg md:text-xl leading-relaxed">
          I’m deeply passionate about mathematics and its role in shaping modern AI systems, and I enjoy solving real-world problems through scalable software, intelligent data pipelines, and production-ready ML systems.
        </p>
        <p className="mb-6 text-black text-lg md:text-xl leading-relaxed">
          At my core, I thrive on innovation, fast iteration, and continuous learning. My interests span Generative AI, LLMs, deep learning, and reinforcement learning - building systems that are technically rigorous, practical, and impactful in production.
        </p>
        <p className="mb-6text-black text-lg md:text-xl leading-relaxed">
          Actively seeking full-time Software Engineer roles and always open to connecting about technology, projects, and opportunities
        </p>
      </div>
    </section>
  );
}

export default About;
