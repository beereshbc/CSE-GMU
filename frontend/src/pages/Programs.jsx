import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  GraduationCap,
  Users,
  Award,
  Brain,
  Target,
  Settings,
  Cpu,
  Zap,
  FileText,
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
    // B.Tech specific table
    curriculumTable: (
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          B.Tech Curriculum Resources
        </h3>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold text-lg">
                  Degree
                </th>
                <th className="py-4 px-6 text-center font-semibold text-lg">
                  23-Scheme Program
                </th>
                <th className="py-4 px-6 text-center font-semibold text-lg">
                  24-Scheme Course
                </th>
                <th className="py-4 px-6 text-center font-semibold text-lg">
                  25-Scheme Program
                </th>
                <th className="py-4 px-6 text-center font-semibold text-lg">
                  Program Brochure
                </th>
                <th className="py-4 px-6 text-center font-semibold text-lg">
                  Lab Recordings
                </th>
                <th className="py-4 px-6 text-center font-semibold text-lg">
                  Department Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors duration-200">
                <td className="py-4 px-6 font-semibold text-gray-800">
                  B.Tech
                </td>
                <td className="py-4 px-6 text-center">
                  <a
                    href="/pdfs/btech-23-program.pdf"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View
                  </a>
                </td>
                <td className="py-4 px-6 text-center">
                  <a
                    href="/pdfs/btech-24-course.pdf"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View
                  </a>
                </td>
                <td className="py-4 px-6 text-center">
                  <a
                    href="/pdfs/btech-25-program.pdf"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View
                  </a>
                </td>
                <td className="py-4 px-6 text-center">
                  <a
                    href="/pdfs/btech-brochure.pdf"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View
                  </a>
                </td>
                <td className="py-4 px-6 text-center">
                  <a
                    href="/recordings/btech-labs"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View
                  </a>
                </td>
                <td className="py-4 px-6 text-center">
                  <a
                    href="/department/cse"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Click on "View" to access detailed curriculum resources for B.Tech
          program
        </p>
      </div>
    ),
  },
  mtech: {
    title: "M.Tech in Deep Learning",
    icon: <Users className="w-6 h-6" />,
    accordions: [
      {
        title: "Program Overview",
        icon: <BookOpen className="w-5 h-5" />,
        content: (
          <>
            <div className="mb-4">
              <h4 className="font-bold text-blue-800 mb-2">
                Faculty of Engineering and Technology
              </h4>
              <h4 className="font-bold text-blue-800 mb-3">
                GM School of Advanced Studies (GMSAS)
              </h4>
            </div>
            <p className="mb-4">
              The M.Tech in Deep Learning under the Faculty of Engineering and
              Technology at GM School of Advanced Studies (GMSAS) is a
              specialized program designed to provide in-depth knowledge and
              research skills in the field of deep learning. The program covers
              advanced neural network architectures, optimization techniques,
              and their applications in areas such as computer vision, natural
              language processing, and reinforcement learning.
            </p>
            <p className="mb-4">
              Students engage in rigorous research projects, industry
              collaborations, and hands-on implementation of deep learning
              models. The curriculum emphasizes both theoretical foundations and
              practical applications, preparing graduates for leadership roles
              in AI research, development, and ethical implementation.
            </p>
            <p>
              Graduates are equipped to drive innovation in artificial
              intelligence, contribute to cutting-edge research, and lead AI
              initiatives with a strong ethical foundation in various industries
              and research organizations.
            </p>
          </>
        ),
      },
      {
        title: "Program Educational Objectives (PEOs)",
        icon: <Target className="w-5 h-5" />,
        content: (
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 py-3">
              <strong className="text-blue-800 block mb-2">
                PEO-1: Expertise in Advanced Deep Learning Concepts
              </strong>
              <p className="text-gray-700">
                Upon completion of the Master's program in Deep Learning,
                graduates will demonstrate expertise in advanced deep learning
                concepts, including neural network architectures, optimization
                algorithms, and specialized applications such as computer
                vision, natural language processing, and reinforcement learning.
                They will possess a deep understanding of theoretical
                foundations and practical implementation, enabling them to
                address complex challenges in the field.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 bg-green-50 py-3">
              <strong className="text-green-800 block mb-2">
                PEO-2: Innovation and Research Contribution
              </strong>
              <p className="text-gray-700">
                Graduates will be equipped to contribute to the innovation and
                advancement of deep learning through meaningful research and
                development. They will have the skills to identify, analyse, and
                propose solutions to emerging challenges in the field, fostering
                a commitment to continuous learning and staying at the forefront
                of evolving technologies.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 py-3">
              <strong className="text-purple-800 block mb-2">
                PEO-3: Leadership in Ethical AI Practices
              </strong>
              <p className="text-gray-700">
                The program aims to cultivate leadership qualities in graduates,
                emphasizing ethical considerations in AI and deep learning.
                Graduates will demonstrate a commitment to responsible AI
                practices, considering the societal impact of their work. They
                will be prepared to lead AI initiatives with a focus on ethical
                decision-making, ensuring the responsible and sustainable
                application of deep learning technologies.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "Program Outcomes (POs)",
        icon: <Award className="w-5 h-5" />,
        content: (
          <div className="grid gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-1: Mastery of Deep Learning Fundamentals
              </strong>
              <p className="text-gray-700 text-sm">
                Graduates will demonstrate a comprehensive understanding of deep
                learning principles, including neural network architectures,
                optimization algorithms, and advanced techniques. They will
                apply this knowledge to analyse and solve complex problems in
                various domains, showcasing mastery in the foundational aspects
                of deep learning.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-2: Advanced Skillset in Specialized Applications
              </strong>
              <p className="text-gray-700 text-sm">
                Upon completion, students will possess advanced skills in
                applying deep learning to specialized areas such as computer
                vision, natural language processing, and reinforcement learning.
                They will design and implement solutions for real-world
                challenges, showcasing expertise in adapting deep learning
                techniques to diverse applications.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-3: Research Proficiency and Contribution
              </strong>
              <p className="text-gray-700 text-sm">
                Graduates will exhibit the ability to conduct original research
                in deep learning, contributing to the academic and industrial
                knowledge base. They will be proficient in literature review,
                experimental design, and research methodologies, fostering a
                culture of innovation and making meaningful contributions to the
                field.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-4: Effective Communication of Complex Concepts
              </strong>
              <p className="text-gray-700 text-sm">
                The program aims to enhance graduate's communication skills,
                enabling them to articulate complex deep learning concepts
                effectively. Graduates will be adept at presenting their
                findings, collaborating with interdisciplinary teams, and
                conveying technical information to both technical and
                non-technical stakeholders.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-5: Ethical Considerations in AI
              </strong>
              <p className="text-gray-700 text-sm">
                The curriculum emphasizes ethical considerations in AI and deep
                learning. Graduates will demonstrate an understanding of the
                ethical implications of AI technologies, including privacy,
                bias, and societal impact. They will integrate ethical
                considerations into their work, promoting responsible AI
                practices.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-6: Adaptability to Emerging Technologies
              </strong>
              <p className="text-gray-700 text-sm">
                Graduates will showcase adaptability to emerging technologies
                and methodologies in the rapidly evolving field of deep
                learning. They will actively seek opportunities for continuous
                learning, staying abreast of the latest research, industry
                trends, and technological advancements.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-7: Collaboration and Interdisciplinary Engagement
              </strong>
              <p className="text-gray-700 text-sm">
                The program fosters collaboration and interdisciplinary
                engagement. Graduates will excel in working collaboratively
                within diverse teams, leveraging their deep learning expertise
                to contribute effectively to projects and initiatives that
                require a multidisciplinary approach.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-8: Leadership in AI Initiatives
              </strong>
              <p className="text-gray-700 text-sm">
                Graduates will be prepared for leadership roles in AI
                initiatives, demonstrating the ability to lead and manage
                projects related to deep learning applications. They will
                exhibit strategic thinking, project management skills, and the
                capacity to drive innovation in AI technologies.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-100">
              <strong className="text-blue-800 block mb-2">
                PO-9: Continuous Professional Development
              </strong>
              <p className="text-gray-700 text-sm">
                The program instils a commitment to continuous professional
                development. Graduates will recognize the importance of lifelong
                learning, actively seeking opportunities for skill enhancement,
                and contributing to the advancement of deep learning and AI as
                lifelong learners and professionals in the field.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "Program Specific Outcomes (PSOs)",
        icon: <Brain className="w-5 h-5" />,
        content: (
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-white p-5 rounded-lg border border-green-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-green-600 mr-3" />
                <strong className="text-green-800 text-lg">
                  PSO-1: Advanced Understanding of Neural Network Architectures
                </strong>
              </div>
              <p className="text-gray-700">
                Graduates will demonstrate an advanced understanding of various
                neural network architectures, enabling them to select, design,
                and implement effective models for diverse deep learning
                applications.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white p-5 rounded-lg border border-purple-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-purple-600 mr-3" />
                <strong className="text-purple-800 text-lg">
                  PSO-2: Expertise in Optimizing Deep Learning Models
                </strong>
              </div>
              <p className="text-gray-700">
                Students will acquire expertise in optimizing deep learning
                models, encompassing the implementation of optimization
                algorithms, regularization techniques, and hyperparameter tuning
                to enhance model performance and efficiency.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-lg border border-blue-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Cpu className="w-6 h-6 text-blue-600 mr-3" />
                <strong className="text-blue-800 text-lg">
                  PSO-3: Application of Deep Learning in Specialized Domains
                </strong>
              </div>
              <p className="text-gray-700">
                Upon completion of the program, students will develop
                specialized skills in applying deep learning techniques to
                specific domains such as computer vision, natural language
                processing, reinforcement learning, and demonstrating practical
                expertise in tailored applications.
              </p>
            </div>
          </div>
        ),
      },
    ],
    // M.Tech specific table
    curriculumTable: (
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          <a href="https://gmu.ac.in/GMBSdeptprog">
            {" "}
            M.Tech Curriculum Resources
          </a>
        </h3>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Click on "View" to access detailed curriculum resources for M.Tech
          program
        </p>
      </div>
    ),
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
            Degree Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-2xl text-xl opacity-95 font-light"
          >
            Explore our comprehensive Computer Science degrees designed to build
            future-ready innovators, researchers, and leaders.
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
      <div className="max-w-6xl mx-auto px-4 py-12">
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

        {/* Curriculum Resources Table - Program Specific */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {currentProgram.curriculumTable}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
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
