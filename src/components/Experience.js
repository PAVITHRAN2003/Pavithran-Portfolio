import React from "react";

const experiences = [
  {
    role: "Software Analyst - Data",
    company: "UB - Office of Academic Affairs, Buffalo, NY",
    duration: "Mar 2025 – Present",
    bullets: [
      "Built PyTorch data pipelines to process large-scale logs, improving observability and runtime efficiency by 40%.",
      "Automated context dataset collection and labeling across teams to improve data quality & ML pipeline performance.",
      "Designed telemetry APIs and dashboards to reduce mean-time-to-detect and debug latency by over 30%.",
      "Improved test infrastructure and deployment monitoring, cutting regression bugs and drift issues by 15%."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Rail Wheel Factory, Indian Railways, Bangalore, India",
    duration: "Aug 2023 – Sept 2023",
    bullets: [
      "Developed secure Flask-based portal and MySQL backend to manage 1K+ records, reducing data errors by 25%.",
      "Integrated authentication with user roles to enforce secure access and meet compliance protocols.",
      "Monitored uptime and validated logs using custom telemetry scripts, improving fault detection and recovery by 20%."
    ]
  },
  {
    role: "Team Engineer",
    company: "Team Inferno, SMVIT, Bangalore, India",
    duration: "Feb 2023 – Sept 2023",
    bullets: [
      "Engineered Arduino firmware in C to optimize battery logic and reduce energy loss across telemetry nodes.",
      "Resolved sensor data dropouts and CAN bus failures, cutting subsystem errors by nearly 40%.",
      "Mentored junior engineers, leading hardware-firmware integration for next-gen electric vehicle pods."
    ]
  }
];

function Experience() {
  return (
    <section 
      id="experience" 
      className="min-h-screen bg-pink-50 py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-black">Experience</h2>
        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className="mb-8 p-6 bg-pink-200 text-black rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="italic">{exp.company} | {exp.duration}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {exp.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
