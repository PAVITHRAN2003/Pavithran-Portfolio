import React from "react";
import ExplainImage from "../assets/explain.jpeg";
import IEEEImage from "../assets/IEEE_pittssburgh.jpeg"; 

const research = [
  {
    title: "Self-Supervised Learning for Cross-Domain Brain Disease Classification",
    conference: "IEEE CogMI 2025 – Paper 7461",
    link: "https://ieeexplore.ieee.org/document/11417044/authors#authors",
    description: `Neurodegenerative disorders like Alzheimer’s Disease (AD) are a growing global challenge. While artificial intelligence can help in diagnosis, its progress is slowed by the high cost and scarcity of expert-labeled data. This is especially true for neurological disorders like Alzheimer’s Disease (AD), brain tumors, Parkinson’s Disease, and Multiple Sclerosis, where annotated datasets are often small and imbalanced. In this work, we present an end-to-end self-supervised learning (SSL) framework for MRI representation learning and low-label brain disease classification. Our framework uses unlabeled brain MRI slices from the OASIS dataset and compare three SSL algorithms: SimCLR, MoCo v3, and BYOL for pretraining. The resulting encoders are then fine-tuned with only 450 labeled images per class to classify AD into four stages: Non-Demented, Very Mild Dementia, Mild Dementia, and Moderate Dementia.We further extend our framework to additional brain disease classification tasks using the same pretrained models. The SSL-based representations yield over 90% test accuracy for brain tumors, Parkinson’s, and Multiple Sclerosis, validating the cross-domain generalization capability of our approach.To make our model interpretable, we integrate Grad-CAM to visualize attention maps and introduce explainability metrics including Activation Intensity, Area Percentage, and Class Confidence. The full system is deployed via a lightweight Flask based web application, providing real-time predictions and interpretability outputs. Our work demonstrates that SSL is a practical and effective strategy for building scalable, explainable, and data-efficient tools for medical imaging.`
  }
];

function Research() {
  return (
    <section 
      id="research" 
      className="min-h-screen bg-pink-50 py-20 px-6 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-black text-center">
          Research
        </h2>

        {research.map((r, i) => (
          <div 
            key={i} 
            className="mb-12 p-8 bg-pink-200 text-black rounded-2xl shadow-md hover:shadow-lg transition flex flex-col md:flex-row items-start"
          >
            {/* Images */}
            <div className="w-full md:w-2/5 mb-6 md:mb-0 space-y-4">
              <div className="bg-black p-2 rounded-lg">
                <img 
                  src={ExplainImage} 
                  alt="Research Visualization"
                  className="rounded-lg shadow-lg w-full h-auto object-contain"
                />
              </div>

              <div className="bg-black p-2 rounded-lg">
                <img 
                  src={IEEEImage} 
                  alt="IEEE Presentation"
                  className="rounded-lg shadow-lg w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-3/5 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{r.title}</h3>
              <p className="italic mb-2 text-gray-800">{r.conference}</p>

              <a 
                href={r.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 underline mb-4 inline-block"
              >
                View Paper
              </a>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {r.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;