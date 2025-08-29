import React from "react";

const experiences = [
  {
    role: "Software Analyst - Data",
    company: "UB - Office of Academic Affairs, Buffalo, NY",
    duration: "Mar 2025 – Present",
    description: "Built efficient PyTorch data pipelines to process large-scale logs, boosting observability and runtime efficiency by 40%. Automated context dataset collection and labeling across teams, enhancing data quality and ML pipeline performance. Designed telemetry APIs and dashboards that reduced mean-time-to-detect and debug latency by over 30%. Improved test infrastructure and deployment monitoring, cutting regression bugs and drift issues by 15%, ensuring smooth and reliable operations."
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
