import React from "react";

const skills = [
  "Python, C/C++, Java, JavaScript, C#, Bash, Linux, HTML/CSS",
  "AWS, Azure, GCP, Docker, Kubernetes, GitHub Actions, GitHub Pages",
  "FastAPI, Flask, ReactJS, Node.js, Django",
  "Operating Systems, Memory Management, Debugging, Networking, Hardware Integration",
  "PyTorch, TensorFlow, Hugging Face, OpenAI, LangChain, Vertex, Bedrock",
  "GDB, Tableau, Telemetry Logs, VS Code, Jira, Git"
];

function Skills() {
  return (
    <section 
      id="skills" 
      className="min-h-screen flex flex-col justify-center items-center bg-pink-50 py-20 px-6"
    >
      <div className="max-w-4xl w-full bg-pink-200 bg-opacity-90 rounded-3xl shadow-lg p-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-black">
          Skills
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-black text-lg md:text-xl">
          {skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
