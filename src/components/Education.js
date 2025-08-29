import React from "react";

function Education() {
  return (
    <section 
      id="education" 
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-50 to-pink-100 py-20 px-6"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Education
        </h2>

        <div className="relative border-l-4 border-pink-400 pl-8 space-y-14">
          
          {/* Master Degree */}
          <div>
            <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-pink-400 border-4 border-white shadow-md"></div>
            <h3 className="text-2xl font-bold text-gray-800">Master of Science in Computer Science</h3>
            <span className="text-md text-gray-600">University at Buffalo • Aug 2024 – Present</span>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Specializing in Artificial Intelligence and Machine Learning with deep dives into 
              algorithms, deep learning, reinforcement learning, and optimization. 
              This program strengthens both my research skills and my ability to build scalable, 
              impactful AI solutions for real-world challenges.
            </p>
          </div>

          {/* Bachelor Degree */}
          <div>
            <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-pink-400 border-4 border-white shadow-md"></div>
            <h3 className="text-2xl font-bold text-gray-800">Bachelor of Engineering in Electronics and Communication</h3>
            <span className="text-md text-gray-600">Visvesvaraya Technological University • Jul 2020 – May 2024</span>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Built a solid foundation in algorithms, data structures, signal processing, 
              cybersecurity, and computer networking. Beyond coursework, I gained 
              hands-on experience through projects and team collaborations, applying 
              theory to practical software and system challenges.
            </p>
          </div>

          {/* 12th Grade */}
          <div>
            <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-pink-400 border-4 border-white shadow-md"></div>
            <h3 className="text-2xl font-bold text-gray-800">Higher Secondary Education (12th Grade)</h3>
            <span className="text-md text-gray-600">Kendriya Vidyalaya RWF • May 2018 – Jun 2020</span>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Developed a strong mathematical mindset through differentiation, integral calculus, 
              trigonometry, binomial theorem, vector algebra, probability, and statistics. 
              This deep engagement with math laid the groundwork for my analytical and AI-driven 
              problem-solving approach today.
            </p>
          </div>

          {/* 10th Grade */}
          <div>
            <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-pink-400 border-4 border-white shadow-md"></div>
            <h3 className="text-2xl font-bold text-gray-800">Secondary Education (10th Grade)</h3>
            <span className="text-md text-gray-600">Kendriya Vidyalaya RWF • May 2018</span>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Learned the fundamentals of algebra and trigonometry, which sparked my 
              early interest in problem-solving and logical reasoning. 
              These subjects became the stepping stones for my journey into engineering 
              and eventually AI/ML.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
