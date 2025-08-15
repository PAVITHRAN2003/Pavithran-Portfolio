import React from "react";

const skills = [
  "Python, C/C++, Java, JavaScript, C#, Bash, Linux, HTML/CSS",
  "AWS, Azure, GCP, Docker, Kubernetes, GitHub Actions, Github Pages",
  "FastAPI, Flask, ReactJS, Node.js, Django",
  "Operating Systems, Memory Management, Debugging, Networking, Hardware Integration",
  "PyTorch, TensorFlow, Hugging Face, OpenAI, LangChain, Vertex, Bedrock",
  "GDB, Tableau, Telemetry Logs, VS Code, Jira, Git"
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;
