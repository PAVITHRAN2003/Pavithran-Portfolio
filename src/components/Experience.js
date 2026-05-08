import React from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Alvora AI",
    duration: "Aug 2025 – Present",
    description: "Built a RAG-based chatbot using LLMs with a retrieval pipeline, validated on 200+ test queries, improving response relevance by 40%. Engineered a mentor-matching system using cosine similarity and Elasticsearch, reducing matching latency from 8s to 2.8s. Optimized prompt engineering pipelines and containerized Django services with Docker and Kubernetes, cutting environment setup time to under 2 minutes. Developed a Django-based frontend for user onboarding, validation, and data storage, securely managing 250+ mentor and user records."
  },
  {
    role: "Research Assistant",
    company: "University at Buffalo - Computer Systems and AI Research Lab, Buffalo, NY",
    duration: "May 2025 – Present",
    description: "Built a 16-node multi-agent pipeline on HPC infrastructure for explainable medical AI, achieving 90% accuracy in automated report generation. Deployed a real-time RAG application via REST APIs and Hugging Face, containerized with Docker and Kubernetes, reducing inference latency by 30%. Designed a GraphRAG reasoning engine using LangChain, LangGraph, and Neo4j, improving retrieval precision by 40%."
  },
  {
    role: "Software Analyst - Data",
    company: "UB - Office of Academic Affairs, Buffalo, NY",
    duration: "Jan 2025 – May 2025",
    description: "Engineered an n8n-based agentic workflow to query databases, enrich leads, and automate 2,700+ LinkedIn and email outreach operations. Designed and implemented data pipelines using Apache Spark, Kafka, and Airflow, reducing ingestion latency from 6 hours to 90 minutes. Refactored 12 high-latency PostgreSQL queries, improving average execution time from 4.2s to 0.8s. Monitored and optimized three microservices on Kubernetes with Docker and AWS EKS, ensuring 99% system uptime under peak load."
  },
  {
    role: "Software Engineer Intern",
    company: "Rail Wheel Factory, Indian Railways, Bangalore, India",
    duration: "Aug 2023 – Sept 2023",
    description: "Developed a secure Flask-based portal with MySQL backend managing 1,000+ records, reducing data errors by 25%. Integrated user-role based authentication to enforce secure access and meet compliance protocols. Monitored uptime and validated logs using custom telemetry scripts, improving fault detection and recovery by 20%, ensuring robust and reliable operations."
  },
  {
    role: "Team Engineer",
    company: "Team Inferno, SMVIT, Bangalore, India",
    duration: "Feb 2023 – Sept 2023",
    description: "Engineered Arduino firmware in C to optimize battery management and reduce energy loss across telemetry nodes. Resolved sensor data dropouts and CAN bus failures, cutting subsystem errors by nearly 40%. Mentored junior engineers and led hardware-firmware integration for next-gen electric vehicle pods, showcasing leadership and technical problem-solving in embedded systems."
  }
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="min-h-screen bg-pink-50 py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-black text-center">
          Experience
        </h2>

        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className="mb-12 p-8 bg-pink-200 text-black rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.role}</h3>
            <p className="mb-4 italic text-gray-800">{exp.company} | {exp.duration}</p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
