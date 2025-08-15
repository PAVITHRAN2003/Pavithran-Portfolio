import React from "react";
import posterImg from "../assets/poster.jpeg"; // Import poster image

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      {/* Project 1 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">LLM-Based Text Summarization with BART</h3>
        <p className="text-gray-600 mb-2">Individual Project | Buffalo, New York | Mar 2025 – May 2025</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Designed a BART-based summarizer handling 4k words, generating concise 100-200 word outputs.</li>
          <li>Expedited training BART using mixed precision in PyTorch, reducing memory use and convergence time by 35%.</li>
          <li>Developed a FastAPI backend with &lt;200ms latency, capable of handling 100+ concurrent summarization requests.</li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">Pintos Operating System Project</h3>
        <p className="text-gray-600 mb-2">Team Member | Buffalo, New York | Feb 2025 – May 2025</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Built a fully functional Pintos OS in C, optimized for fast syscall handling, interrupt response, and thread scheduling.</li>
          <li>Implemented syscall handling and priority donation, passing 90% of evaluation tests in key scheduling scenarios.</li>
          <li>Debugged race conditions using GDB and syscall traces, improving scheduler reliability & performance by 15%.</li>
        </ul>
      </div>

      {/* Project 3 */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">Comprehensive Automotive Database for Enhanced Analytics</h3>
        <p className="text-gray-600 mb-2">Team Member | Buffalo, New York | Feb 2025 – Apr 2025</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Pioneered a PostgreSQL schema with ingestion pipeline and Streamlit frontend for 5K+ records on Azure.</li>
          <li>Automated telemetry, logging, and CI/CD using Docker and GitHub Actions, reducing operational cost by 60%.</li>
        </ul>
      </div>

      {/* Project 4 (Research) */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">Self-Supervised Learning for Cross Domain Specific Classification (IEEE CogMI 2025 – Paper 7461)</h3>
        <p className="text-gray-600 mb-2">Team Member | Buffalo, New York | Feb 2025 – May 2025</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Trained SimCLR, BYOL, and MoCo v3 using mixed precision, achieving 96% accuracy across 3 brain diseases.</li>
          <li>Implemented nonlinear optimization GPU training with efficient batching and augmented input pipelines for 40% faster runs.</li>
        </ul>
      </div>

      {/* Project 5 (Noetica Studio) */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-2">Noetica Studio - Web-based Image Editor</h3>
        <p className="text-gray-600 mb-2">Individual Project | Web-based | HTML5 Canvas & Vanilla JS</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Developed a lightweight, browser-based image editor with exposure, brightness, contrast, saturation, and sharpness controls.</li>
          <li>Implemented creative filters (Sepia, Vintage, Invert, High Contrast B/W, Blur) and interactive crop/rotate tools.</li>
          <li>Built a real-time rendering pipeline using HTML5 Canvas, optimized for performance and non-destructive edits.</li>
          <li>Export options for multiple formats (PNG, JPEG, WebP) with adjustable quality control.</li>
        </ul>
      </div>

      {/* Project 6 (Poster Project) */}
      <div className="mb-12 flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-6">
        <img
          src={posterImg}
          alt="Poster Project"
          className="w-64 h-auto rounded-lg mb-4 md:mb-0 md:mr-8 shadow"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">Reader-Collision Prevention using RL (Poster Project)</h3>
          <p className="text-gray-600 mb-2">Team Project | Buffalo, New York | Jan 2025 – Mar 2025</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Developed a reinforcement learning solution to prevent RFID reader collision in dense environments.</li>
            <li>Designed and presented a technical poster summarizing research, methodology, and results.</li>
            <li>Highlighted RL agent training, reward shaping, and simulation outcomes for academic audiences.</li>
            <li>Tech Stack: Python, PyTorch, OpenAI Gym, Matplotlib, RLlib, Jupyter Notebook.</li>
          </ul>
        </div>
      </div>
      </section>
  );
}