import React, { useState } from "react";

const accordionData = [
  {
    title: "Program Overview",
    content: (
      <>
        <p>
          The B.Tech. in Computer Science & Engineering offers a balanced blend
          of theoretical foundations and practical applications, preparing
          students for the dynamic fields of software engineering, intelligent
          systems, and emerging technologies.
        </p>
        <p>
          Key areas include programming, algorithms, data structures, AI,
          machine learning, software development, and computer networks, with
          training in modern tools and platforms. Graduates are equipped for
          diverse careers in software development, IT, AI, smart technologies,
          research, and entrepreneurship.
        </p>
        <p>
          The interdisciplinary nature of CSE enables students to innovate
          across domains, contribute to technological advancements, and adapt to
          industry trends through lifelong learning.
        </p>
      </>
    ),
  },
  {
    title: "Program Educational Objectives (PEOs)",
    content: (
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <strong>PEO-1: Knowledge and Technical Skills</strong>
          <br />
          Graduates will have a strong foundation in computer science and
          engineering principles...
        </li>
        <li>
          <strong>PEO-2: Professional Competence and Leadership</strong>
          <br />
          Graduates will possess technical competencies, practical skills, and
          leadership abilities...
        </li>
        <li>
          <strong>PEO-3: Holistic Development and Adaptability</strong>
          <br />
          Graduates will demonstrate critical thinking, creativity,
          collaboration, and adaptability...
        </li>
      </ul>
    ),
  },
  {
    title: "Program Outcomes (POs)",
    content: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>PO-1: Engineering Knowledge</strong> — Apply knowledge of
          mathematics, science, and engineering fundamentals.
        </li>
        <li>
          <strong>PO-2: Problem Analysis</strong> — Identify and analyze complex
          engineering problems.
        </li>
        <li>
          <strong>PO-3: Design/Development of Solutions</strong> — Design system
          components or processes meeting specific needs.
        </li>
        <li>
          <strong>PO-4:</strong> Conduct investigations of complex problems.
        </li>
        <li>
          <strong>PO-5:</strong> Modern tool usage and understanding of
          limitations.
        </li>
        <li>
          <strong>PO-6:</strong> The Engineer and Society.
        </li>
        <li>
          <strong>PO-7:</strong> Environment and Sustainability.
        </li>
        <li>
          <strong>PO-8:</strong> Ethics.
        </li>
        <li>
          <strong>PO-9:</strong> Individual and Team Work.
        </li>
        <li>
          <strong>PO-10:</strong> Communication.
        </li>
        <li>
          <strong>PO-11:</strong> Project Management and Finance.
        </li>
        <li>
          <strong>PO-12:</strong> Lifelong Learning.
        </li>
      </ul>
    ),
  },
  {
    title: "Program Specific Outcomes (PSOs)",
    content: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>PSO-1:</strong> Analyze and address computational challenges.
        </li>
        <li>
          <strong>PSO-2:</strong> Apply CS concepts in system development.
        </li>
        <li>
          <strong>PSO-3:</strong> Conduct and lead experimental validation.
        </li>
      </ul>
    ),
  },
];

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="w-full min-h-[400px] flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-800 via-blue-700 to-purple-600 animate-gradient bg-[length:200%_200%] text-white px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Programs Offered – B.Tech. Computer Science & Engineering
        </h1>
        <p className="max-w-2xl text-lg opacity-90">
          Explore our comprehensive CSE curriculum designed to build
          future-ready innovators, leaders, and entrepreneurs.
        </p>
      </section>

      {/* Accordion Section */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center border-l-4 border-transparent hover:border-blue-500 transition-colors"
            >
              {item.title}
              <span className="text-2xl">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>
            <div
              className={`px-6 transition-all duration-500 overflow-hidden ${
                activeIndex === index
                  ? "max-h-[1000px] py-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
