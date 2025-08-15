import React from "react";
import ExplainImage from "../assets/explain.jpeg";


const research = [
  {
    title: "Self-Supervised Learning for Cross Domain Specific Classification",
    conference: "IEEE CogMI 2025 – Paper 7461",
    bullets: [
      "Trained SimCLR, BYOL, and MoCo v3 using mixed precision, achieving 96% accuracy across 3 brain diseases.",
      "Implemented nonlinear optimization GPU training with efficient batching and augmented input pipelines for 40% faster runs."
    ]
  }
];

function Research() {
  return (
    <section id="research" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Research</h2>
      {research.map((r, i) => (
        <div key={i} className="mb-8 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">{r.title}</h3>
          <p className="italic mb-2">{r.conference}</p>
          <ul className="list-disc list-inside">
            {r.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
          <img src={ExplainImage} alt="Research" className="rounded-lg shadow-lg" />
        </div>
      ))}
    </section>
  );
}

export default Research;
