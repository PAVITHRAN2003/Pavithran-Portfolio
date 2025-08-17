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
    <section 
      id="research" 
      className="min-h-screen bg-pink-50 py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-black">Research</h2>
        {research.map((r, i) => (
          <div 
            key={i} 
            className="mb-8 p-6 bg-pink-200 text-black rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{r.title}</h3>
            <p className="italic mb-2">{r.conference}</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {r.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            {/* Black thick border wrapper */}
            <div className="bg-black p-[12px] rounded-lg inline-block">
              <img 
                src={ExplainImage} 
                alt="Research" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
