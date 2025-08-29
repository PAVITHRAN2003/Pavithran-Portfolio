import React from "react";
import ExplainImage from "../assets/explain.jpeg";

const research = [
  {
    title: "Self-Supervised Learning for Cross-Domain Brain Disease Classification",
    conference: "IEEE CogMI 2025 – Paper 7461",
    description: `Neurodegenerative disorders like Alzheimer's Disease, brain tumors, Parkinson's, and Multiple Sclerosis pose growing challenges globally. 
To address the scarcity of annotated medical data, I collaborated on developing an end-to-end self-supervised learning (SSL) framework for MRI representation and low-label classification of brain diseases. 
We pre-trained encoders using SimCLR, MoCo v3, and BYOL on unlabeled brain MRI slices from the OASIS dataset, and fine-tuned the models using only 450 labeled images per class to classify Alzheimer's into four stages: Non-Demented, Very Mild Dementia, Mild Dementia, and Moderate Dementia. 
The framework was further extended to cross-domain brain disease classification, achieving over 90% test accuracy for tumors, Parkinson's, and Multiple Sclerosis. 
Grad-CAM was used for interpretable visualizations, with explainability metrics including Activation Intensity, Area Percentage, and Class Confidence. 
The full system was deployed via a lightweight Flask web app, delivering real-time predictions and interpretability outputs. This work demonstrates SSL as a practical, scalable, and explainable solution for medical imaging.`
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
            {/* Image */}
            <div className="w-full md:w-2/5 mb-6 md:mb-0">
              <div className="bg-black p-2 rounded-lg">
                <img 
                  src={ExplainImage} 
                  alt="Research Visualization" 
                  className="rounded-lg shadow-lg w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-3/5 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{r.title}</h3>
              <p className="italic mb-4 text-gray-800">{r.conference}</p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
