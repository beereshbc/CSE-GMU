import React from "react";
import { motion } from "framer-motion";

const StudentProjects = () => {
  const projects = [
    {
      title: "AI Chatbot for Education",
      description:
        "An intelligent chatbot designed to assist students with course queries and scheduling using natural language processing.",
      image: "/images/project1.jpg",
      category: "AI & ML",
    },
    {
      title: "Smart Waste Management System",
      description:
        "An IoT-based solution for efficient waste collection and recycling using sensor data and real-time monitoring.",
      image: "/images/project2.jpg",
      category: "IoT",
    },
    {
      title: "Campus Navigation App",
      description:
        "A mobile application that helps new students easily navigate the campus using GPS and building recognition.",
      image: "/images/project3.jpg",
      category: "Mobile App",
    },
    {
      title: "E-Learning Platform",
      description:
        "A responsive web platform for online learning with integrated quizzes, video tutorials, and progress tracking.",
      image: "/images/project4.jpg",
      category: "Web Development",
    },
    {
      title: "Health Monitoring Wearable",
      description:
        "A smart wearable device that tracks real-time health metrics and syncs with mobile devices for instant insights.",
      image: "/images/project5.jpg",
      category: "Hardware",
    },
    {
      title: "Automated Attendance System",
      description:
        "A face-recognition based attendance system designed to simplify classroom management and record-keeping.",
      image: "/images/project6.jpg",
      category: "AI & Vision",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Innovative Minds: Showcasing Student Projects
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the creativity and innovation of our talented students
            through their inspiring projects.
          </p>
          <a
            href="#projects"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Student Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentProjects;
