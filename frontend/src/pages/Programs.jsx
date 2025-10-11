import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  GraduationCap,
  Users,
  Target,
  Award,
  Brain,
  Code,
  Database,
  Network,
  Shield,
  Zap,
} from "lucide-react";

const programData = {
  btech: {
    title: "B.Tech Computer Science & Engineering",
    icon: <GraduationCap className="w-6 h-6" />,
    accordions: [
      {
        title: "Program Overview",
        icon: <BookOpen className="w-5 h-5" />,
        content: (
          <>
            <p className="mb-4">
              The B.Tech. in Computer Science & Engineering offers a balanced
              blend of theoretical foundations and practical applications,
              preparing students for the dynamic fields of software engineering,
              intelligent systems, and emerging technologies.
            </p>
            <p className="mb-4">
              Key areas include programming, algorithms, data structures, AI,
              machine learning, software development, and computer networks,
              with training in modern tools and platforms. Graduates are
              equipped for diverse careers in software development, IT, AI,
              smart technologies, research, and entrepreneurship.
            </p>
            <p>
              The interdisciplinary nature of CSE enables students to innovate
              across domains, contribute to technological advancements, and
              adapt to industry trends through lifelong learning.
            </p>
          </>
        ),
      },
      {
        title: "Program Educational Objectives (PEOs)",
        icon: <Target className="w-5 h-5" />,
        content: (
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>PEO-1: Knowledge and Technical Skills</strong>
              <br />
              Graduates will have a strong foundation in computer science and
              engineering principles with expertise in software development,
              algorithms, and system design.
            </li>
            <li>
              <strong>PEO-2: Professional Competence and Leadership</strong>
              <br />
              Graduates will possess technical competencies, practical skills,
              and leadership abilities to excel in diverse professional
              environments.
            </li>
            <li>
              <strong>PEO-3: Holistic Development and Adaptability</strong>
              <br />
              Graduates will demonstrate critical thinking, creativity,
              collaboration, and adaptability to evolving technological
              landscapes.
            </li>
          </ul>
        ),
      },
      {
        title: "Program Outcomes (POs)",
        icon: <Award className="w-5 h-5" />,
        content: (
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>PO-1: Engineering Knowledge</strong> — Apply knowledge of
              mathematics, science, and engineering fundamentals.
            </li>
            <li>
              <strong>PO-2: Problem Analysis</strong> — Identify and analyze
              complex engineering problems.
            </li>
            <li>
              <strong>PO-3: Design/Development of Solutions</strong> — Design
              system components or processes meeting specific needs.
            </li>
            <li>
              <strong>PO-4: Investigation</strong> — Conduct investigations of
              complex problems using research methods.
            </li>
            <li>
              <strong>PO-5: Modern Tool Usage</strong> — Apply appropriate
              techniques and IT tools for engineering practice.
            </li>
            <li>
              <strong>PO-6: Engineer and Society</strong> — Understand societal,
              health, safety, and legal responsibilities.
            </li>
            <li>
              <strong>PO-7: Environment and Sustainability</strong> — Understand
              environmental impacts and sustainable development.
            </li>
            <li>
              <strong>PO-8: Ethics</strong> — Apply ethical principles in
              professional practice.
            </li>
            <li>
              <strong>PO-9: Individual and Team Work</strong> — Function
              effectively as individual and team member.
            </li>
            <li>
              <strong>PO-10: Communication</strong> — Communicate effectively
              with engineering community and society.
            </li>
            <li>
              <strong>PO-11: Project Management and Finance</strong> —
              Demonstrate knowledge of engineering and management principles.
            </li>
            <li>
              <strong>PO-12: Lifelong Learning</strong> — Recognize need for and
              engage in lifelong learning.
            </li>
          </ul>
        ),
      },
      {
        title: "Program Specific Outcomes (PSOs)",
        icon: <Zap className="w-5 h-5" />,
        content: (
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>PSO-1:</strong> Analyze and address computational
              challenges using computer science fundamentals.
            </li>
            <li>
              <strong>PSO-2:</strong> Apply CS concepts in system development
              and software engineering.
            </li>
            <li>
              <strong>PSO-3:</strong> Conduct and lead experimental validation
              and research in computing domains.
            </li>
          </ul>
        ),
      },
    ],
  },
  mtech: {
    title: "M.Tech Computer Science & Engineering",
    icon: <Users className="w-6 h-6" />,
    accordions: [
      {
        title: "Program Overview",
        icon: <BookOpen className="w-5 h-5" />,
        content: (
          <>
            <p className="mb-4">
              The M.Tech. in Computer Science & Engineering provides advanced
              specialization in cutting-edge domains, fostering research
              excellence and technical leadership. The program emphasizes deep
              theoretical understanding and innovative applications in emerging
              technologies.
            </p>
            <p className="mb-4">
              Specializations include Artificial Intelligence, Machine Learning,
              Data Science, Cybersecurity, Cloud Computing, and Internet of
              Things. Students engage in rigorous research projects and industry
              collaborations.
            </p>
            <p>
              Graduates are prepared for leadership roles in R&D, academia, and
              specialized industry positions, contributing to technological
              innovation and knowledge creation.
            </p>
          </>
        ),
      },
      {
        title: "Program Educational Objectives (PEOs)",
        icon: <Target className="w-5 h-5" />,
        content: (
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>PEO-1: Advanced Technical Expertise</strong>
              <br />
              Graduates will demonstrate advanced knowledge and research
              capabilities in specialized computer science domains.
            </li>
            <li>
              <strong>PEO-2: Research and Innovation</strong>
              <br />
              Graduates will conduct original research, contribute to knowledge
              creation, and drive technological innovation.
            </li>
            <li>
              <strong>PEO-3: Academic and Industrial Leadership</strong>
              <br />
              Graduates will assume leadership positions in academia, research
              organizations, and technology industries.
            </li>
          </ul>
        ),
      },
      {
        title: "Program Outcomes (POs)",
        icon: <Award className="w-5 h-5" />,
        content: (
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>PO-1: Scholarly Knowledge</strong> — Demonstrate
              comprehensive understanding of advanced computing concepts.
            </li>
            <li>
              <strong>PO-2: Critical Analysis</strong> — Critically analyze
              complex computing problems and research literature.
            </li>
            <li>
              <strong>PO-3: Research Design</strong> — Design and conduct
              research investigations with scholarly rigor.
            </li>
            <li>
              <strong>PO-4: Innovation</strong> — Develop innovative solutions
              and contribute to original research.
            </li>
            <li>
              <strong>PO-5: Technical Leadership</strong> — Provide technical
              leadership in specialized computing domains.
            </li>
            <li>
              <strong>PO-6: Scholarly Communication</strong> — Communicate
              research findings effectively to scholarly community.
            </li>
            <li>
              <strong>PO-7: Ethical Research</strong> — Conduct research with
              integrity and ethical responsibility.
            </li>
            <li>
              <strong>PO-8: Collaborative Research</strong> — Collaborate
              effectively in multidisciplinary research teams.
            </li>
          </ul>
        ),
      },
      {
        title: "Specializations",
        icon: <Brain className="w-5 h-5" />,
        content: (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 text-blue-600 mr-2" />
                <strong className="text-blue-800">
                  Artificial Intelligence
                </strong>
              </div>
              <p className="text-sm text-gray-700">
                Machine Learning, Deep Learning, Natural Language Processing,
                Computer Vision
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <Database className="w-5 h-5 text-blue-600 mr-2" />
                <strong className="text-blue-800">Data Science</strong>
              </div>
              <p className="text-sm text-gray-700">
                Big Data Analytics, Data Mining, Statistical Modeling, Business
                Intelligence
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <strong className="text-blue-800">Cybersecurity</strong>
              </div>
              <p className="text-sm text-gray-700">
                Network Security, Cryptography, Cyber Forensics, Ethical Hacking
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <Network className="w-5 h-5 text-blue-600 mr-2" />
                <strong className="text-blue-800">Cloud Computing</strong>
              </div>
              <p className="text-sm text-gray-700">
                Distributed Systems, Cloud Architecture, Virtualization, DevOps
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
};

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState("btech");
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const currentProgram = programData[activeProgram];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full min-h-[400px] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-4 py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
          >
            Programs Offered
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-2xl text-xl opacity-95 font-light"
          >
            Explore our comprehensive Computer Science programs designed to
            build future-ready innovators, researchers, and leaders.
          </motion.p>
        </div>
      </motion.section>

      {/* Program Selection Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 -mt-8 relative z-20"
      >
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-2 flex">
          {Object.entries(programData).map(([key, program]) => (
            <button
              key={key}
              onClick={() => {
                setActiveProgram(key);
                setActiveIndex(0);
              }}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeProgram === key
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
              }`}
            >
              {program.icon}
              {program.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Program Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          key={activeProgram}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {currentProgram.title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {currentProgram.accordions.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-8 py-6 font-semibold text-lg flex justify-between items-center group"
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-500">{item.icon}</div>
                  <span className="text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 group-hover:text-blue-500"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4 },
                        opacity: { duration: 0.3, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-700 leading-relaxed border-t border-blue-50 pt-6">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Placement Rate</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Industry Partners</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-sm text-gray-600">Research Papers</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-blue-100 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">4.8/5</div>
            <div className="text-sm text-gray-600">Student Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;
