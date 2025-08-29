import React from "react";
import posterImg from "../assets/poster.jpeg"; // Poster image

const projects = [
  {
    title: "LLM-Based Text Summarization with BART",
    role: "Individual Project | Buffalo, New York | Mar 2025 – May 2025",
    description: "Developed a BART-based text summarization system capable of handling long documents of up to 4,000 words, generating concise 100–200 word summaries. Leveraging mixed precision training in PyTorch, I reduced memory consumption and convergence time by 35%. Built a FastAPI backend that supports over 100 concurrent requests with latency under 200ms, enabling fast, scalable summarization for real-world applications."
  },
  {
    title: "Pintos Operating System Project",
    role: "Team Member | Buffalo, New York | Feb 2025 – May 2025",
    description: "Contributed to building a fully functional Pintos OS in C, optimizing syscall handling, interrupt response, and thread scheduling. Implemented priority donation and advanced syscall mechanisms, passing 90% of key scheduling tests. Debugged complex race conditions using GDB, improving the scheduler's reliability and performance by 15%, demonstrating strong systems programming and problem-solving skills."
  },
  {
    title: "Comprehensive Automotive Database for Enhanced Analytics",
    role: "Team Member | Buffalo, New York | Feb 2025 – Apr 2025",
    description: "Designed a robust PostgreSQL schema and ingestion pipeline for managing over 5,000 automotive records, coupled with a Streamlit frontend for interactive analytics. Automated telemetry, logging, and CI/CD with Docker and GitHub Actions, cutting operational costs by 60% while creating a maintainable and scalable data platform for automotive analytics."
  },
  {
    title: "Self-Supervised Learning for Cross-Domain Classification (IEEE CogMI 2025 – Paper 7461)",
    role: "Team Member | Buffalo, New York | Feb 2025 – May 2025",
    description: "Implemented self-supervised learning frameworks like SimCLR, BYOL, and MoCo v3 to classify cross-domain brain disease datasets, achieving 96% accuracy. Optimized GPU training with nonlinear batching and augmented pipelines, reducing runtime by 40%, demonstrating the ability to merge cutting-edge ML research with practical performance optimization."
  },
  {
    title: "Noetica Studio - Web-based Image Editor",
    role: "Individual Project | Web-based | HTML5 Canvas & Vanilla JS",
    description: "Built a lightweight, browser-based image editor offering real-time adjustments for exposure, brightness, contrast, saturation, and sharpness. Added creative filters including Sepia, Vintage, Invert, and Blur, with interactive crop and rotate tools. Designed a high-performance, non-destructive rendering pipeline and flexible export options (PNG, JPEG, WebP), showcasing strong front-end and client-side graphics skills."
  },
  {
    title: "Reader-Collision Prevention using Reinforcement Learning (Poster Project)",
    role: "Team Project | Buffalo, New York | Jan 2025 – Mar 2025",
    description: "Developed a reinforcement learning solution to prevent RFID reader collisions in dense environments. Trained RL agents with reward shaping in simulated environments and presented research methodology and results through a detailed poster. The project highlights expertise in RL, simulation, and data visualization, leveraging Python, PyTorch, OpenAI Gym, RLlib, and Jupyter Notebook.",
    image: posterImg // ✅ This project will show an image
  },
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen bg-pink-50 py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-black text-center">
          Projects
        </h2>

        {projects.map((proj, i) => (
          <div 
            key={i} 
            className={`mb-12 p-8 bg-pink-200 text-black rounded-2xl shadow-md hover:shadow-lg transition ${proj.image ? "flex flex-col md:flex-row items-center" : ""}`}
          >
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="w-64 h-auto rounded-lg mb-6 md:mb-0 md:mr-8 shadow"
              />
            )}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{proj.title}</h3>
              <p className="mb-4 italic text-gray-800">{proj.role}</p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
