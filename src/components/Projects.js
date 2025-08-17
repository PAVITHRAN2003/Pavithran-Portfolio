import React from "react";
import posterImg from "../assets/poster.jpeg"; // Import poster image

const projects = [
  {
    title: "LLM-Based Text Summarization with BART",
    role: "Individual Project | Buffalo, New York | Mar 2025 – May 2025",
    bullets: [
      "Designed a BART-based summarizer handling 4k words, generating concise 100-200 word outputs.",
      "Expedited training BART using mixed precision in PyTorch, reducing memory use and convergence time by 35%.",
      "Developed a FastAPI backend with <200ms latency, capable of handling 100+ concurrent summarization requests."
    ]
  },
  {
    title: "Pintos Operating System Project",
    role: "Team Member | Buffalo, New York | Feb 2025 – May 2025",
    bullets: [
      "Built a fully functional Pintos OS in C, optimized for fast syscall handling, interrupt response, and thread scheduling.",
      "Implemented syscall handling and priority donation, passing 90% of evaluation tests in key scheduling scenarios.",
      "Debugged race conditions using GDB and syscall traces, improving scheduler reliability & performance by 15%."
    ]
  },
  {
    title: "Comprehensive Automotive Database for Enhanced Analytics",
    role: "Team Member | Buffalo, New York | Feb 2025 – Apr 2025",
    bullets: [
      "Pioneered a PostgreSQL schema with ingestion pipeline and Streamlit frontend for 5K+ records on Azure.",
      "Automated telemetry, logging, and CI/CD using Docker and GitHub Actions, reducing operational cost by 60%."
    ]
  },
  {
    title: "Self-Supervised Learning for Cross Domain Specific Classification (IEEE CogMI 2025 – Paper 7461)",
    role: "Team Member | Buffalo, New York | Feb 2025 – May 2025",
    bullets: [
      "Trained SimCLR, BYOL, and MoCo v3 using mixed precision, achieving 96% accuracy across 3 brain diseases.",
      "Implemented nonlinear optimization GPU training with efficient batching and augmented input pipelines for 40% faster runs."
    ]
  },
  {
    title: "Noetica Studio - Web-based Image Editor",
    role: "Individual Project | Web-based | HTML5 Canvas & Vanilla JS",
    bullets: [
      "Developed a lightweight, browser-based image editor with exposure, brightness, contrast, saturation, and sharpness controls.",
      "Implemented creative filters (Sepia, Vintage, Invert, High Contrast B/W, Blur) and interactive crop/rotate tools.",
      "Built a real-time rendering pipeline using HTML5 Canvas, optimized for performance and non-destructive edits.",
      "Export options for multiple formats (PNG, JPEG, WebP) with adjustable quality control."
    ]
  },
  {
    title: "Reader-Collision Prevention using RL (Poster Project)",
    role: "Team Project | Buffalo, New York | Jan 2025 – Mar 2025",
    bullets: [
      "Developed a reinforcement learning solution to prevent RFID reader collision in dense environments.",
      "Designed and presented a technical poster summarizing research, methodology, and results.",
      "Highlighted RL agent training, reward shaping, and simulation outcomes for academic audiences.",
      "Tech Stack: Python, PyTorch, OpenAI Gym, Matplotlib, RLlib, Jupyter Notebook."
    ],
    image: posterImg
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen bg-pink-50 py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-black">Projects</h2>

        {projects.map((proj, i) => (
          <div 
            key={i} 
            className={`mb-8 p-6 bg-pink-200 text-black rounded-2xl shadow-md hover:shadow-lg transition ${proj.image ? "flex flex-col md:flex-row items-center" : ""}`}
          >
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="w-64 h-auto rounded-lg mb-4 md:mb-0 md:mr-8 shadow"
              />
            )}
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="mb-2 italic">{proj.role}</p>
              <ul className="list-disc list-inside space-y-1">
                {proj.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
