import React, { useState } from "react";
import { faculties } from "../assets/assets";

const FacultyCard = ({ faculty }) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className={`max-w-xs mx-auto overflow-y-auto relative z-10 overflow-x-hidden bg-white flex transition-all duration-300 flex-col rounded-xl shadow-2xl ${
        activeSection === "about"
          ? "h-[450px]"
          : activeSection === "contact"
          ? "h-[430px]"
          : "h-[550px]"
      }`}
      data-state={`#${activeSection}`}
    >
      {/* Card Header */}
      <div
        className={`relative flex flex-shrink-0 w-full transition-all duration-300 ${
          activeSection !== "about" ? "h-20" : "h-48"
        }`}
      >
        {/* Card Cover */}
        <div className="absolute w-full h-40 -top-5 left-0 bg-cover bg-blue-300 bg-center filter blur-xl scale-125 transition-all duration-500"></div>

        {/* Card Avatar */}
        <img
          className={`absolute object-cover object-center rounded-full shadow-lg transition-all duration-300 ${
            activeSection !== "about"
              ? "w-12 h-12 left-5 -bottom-1 transform-none"
              : "w-24 h-24 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-16"
          }`}
          src={faculty.img}
          alt={faculty.name}
        />

        {/* Full Name */}
        <h1
          className={`absolute font-bold whitespace-nowrap transition-all duration-300 ${
            activeSection !== "about"
              ? "text-lg left-20 bottom-4 transform-none"
              : "text-xl bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2"
          }`}
        >
          {faculty.name}
        </h1>

        {/* Job Title */}
        <h2
          className={`absolute font-medium opacity-70 uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
            activeSection !== "about"
              ? "text-xs left-20 bottom-7 transform-none"
              : "text-xs bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3"
          }`}
        >
          {faculty.position}
        </h2>
      </div>

      {/* Card Main Content */}
      <div className="relative flex flex-col flex-1 pt-2">
        {/* About Section */}
        <div
          className={`card-section ${
            activeSection === "about" ? "block animate-fadeIn" : "hidden"
          }`}
        >
          <div className="p-5">
            <div className="font-bold text-sm mb-2 text-gray-700">ABOUT</div>
            <p className="leading-relaxed text-gray-600 text-sm font-sans">
              {faculty.about}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center px-5 mb-8">
            {faculty.social?.facebook && (
              <a
                href={faculty.social.facebook}
                className="text-gray-500 w-8 h-8 rounded-full inline-flex items-center justify-center transition-colors bg-blue-50 hover:bg-blue-100 mr-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                </svg>
              </a>
            )}

            {faculty.social?.twitter && (
              <a
                href={faculty.social.twitter}
                className="text-gray-500 w-8 h-8 rounded-full inline-flex items-center justify-center transition-colors bg-blue-50 hover:bg-blue-100 mr-2"
              >
                <svg
                  className="w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                </svg>
              </a>
            )}

            {faculty.social?.instagram && (
              <a
                href={faculty.social.instagram}
                className="text-gray-500 w-8 h-8 rounded-full inline-flex items-center justify-center transition-colors bg-blue-50 hover:bg-blue-100 mr-2"
              >
                <svg
                  className="w-4 fill-current"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                </svg>
              </a>
            )}

            {faculty.social?.linkedin && (
              <a
                href={faculty.social.linkedin}
                className="text-gray-500 w-8 h-8 rounded-full inline-flex items-center justify-center transition-colors bg-blue-50 hover:bg-blue-100"
              >
                <svg
                  className="w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Experience Section */}
        <div
          className={`card-section ${
            activeSection === "experience" ? "block animate-fadeIn" : "hidden"
          }`}
        >
          <div className="p-5">
            <div className="font-bold text-sm mb-2 text-gray-700">
              WORK EXPERIENCE
            </div>
            <div className="mt-8 relative">
              {/* Timeline line */}
              <div className="absolute left-10 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-blue-600"></div>

              <div className="space-y-8">
                {faculty.experience?.map((exp, index) => (
                  <div key={index} className="relative pl-16 pr-5">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-8 top-0 w-3 h-3 rounded-full border-2 border-white bg-gradient-to-b from-blue-300 to-blue-600 shadow-md"
                      data-year={exp.year}
                    ></div>
                    <div className="text-xs text-gray-500 absolute -left-2 top-0">
                      {exp.year}
                    </div>
                    <div className="font-medium text-sm">
                      {exp.title} at{" "}
                      <span className="text-blue-600">{exp.company}</span>
                    </div>
                    <div className="text-gray-600 text-sm font-sans leading-relaxed mt-1">
                      {exp.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`card-section ${
            activeSection === "contact" ? "block animate-fadeIn" : "hidden"
          }`}
        >
          <div className="p-5">
            <div className="font-bold text-sm mb-2 text-gray-700">CONTACT</div>
            <div className="mt-5 space-y-4">
              <div className="flex items-center text-gray-600 text-sm font-sans leading-relaxed cursor-pointer">
                <svg
                  className="w-6 h-6 mr-3 text-gray-400 border-r border-gray-200 pr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {faculty.contact?.address}
              </div>

              <div className="flex items-center text-gray-600 text-sm font-sans leading-relaxed cursor-pointer">
                <svg
                  className="w-6 h-6 mr-3 text-gray-400 border-r border-gray-200 pr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                {faculty.contact?.phone}
              </div>

              <div className="flex items-center text-gray-600 text-sm font-sans leading-relaxed cursor-pointer">
                <svg
                  className="w-6 h-6 mr-3 text-gray-400 border-r border-gray-200 pr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                {faculty.contact?.email}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-6 font-medium">
                WORK TOGETHER
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex bg-white mt-auto sticky bottom-0 left-0 border-t border-gray-100">
          <button
            onClick={() => handleButtonClick("about")}
            className={`flex-1 bg-transparent text-xs py-4 cursor-pointer text-gray-600 transition-all duration-300 font-medium outline-none border-b-2 ${
              activeSection === "about"
                ? "text-gray-800 border-blue-500 bg-gradient-to-b from-transparent via-blue-50 to-blue-100"
                : "border-transparent hover:text-gray-800"
            }`}
          >
            ABOUT
          </button>

          <button
            onClick={() => handleButtonClick("experience")}
            className={`flex-1 bg-transparent text-xs py-4 cursor-pointer text-gray-600 transition-all duration-300 font-medium outline-none border-b-2 ${
              activeSection === "experience"
                ? "text-gray-800 border-blue-500 bg-gradient-to-b from-transparent via-blue-50 to-blue-100"
                : "border-transparent hover:text-gray-800"
            }`}
          >
            EXPERIENCE
          </button>

          <button
            onClick={() => handleButtonClick("contact")}
            className={`flex-1 bg-transparent text-xs py-4 cursor-pointer text-gray-600 transition-all duration-300 font-medium outline-none border-b-2 ${
              activeSection === "contact"
                ? "text-gray-800 border-blue-500 bg-gradient-to-b from-transparent via-blue-50 to-blue-100"
                : "border-transparent hover:text-gray-800"
            }`}
          >
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample faculty data
const sampleFaculty = {
  name: "Dr. William Rocheald",
  position: "Professor of Computer Science",
  img: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  coverImg:
    "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  about:
    "Expert in artificial intelligence and machine learning with over 15 years of teaching experience. Passionate about innovative research and student mentorship.",
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },
  experience: [
    {
      year: "2014",
      title: "Senior Researcher",
      company: "Tech Institute",
      description:
        "Led research projects in neural networks and deep learning applications.",
    },
    {
      year: "2016",
      title: "Associate Professor",
      company: "State University",
      description:
        "Taught advanced algorithms and supervised graduate student research.",
    },
    {
      year: "2018",
      title: "Department Head",
      company: "GM University",
      description:
        "Oversaw curriculum development and faculty management for CS department.",
    },
    {
      year: "2020",
      title: "Research Director",
      company: "AI Research Center",
      description:
        "Directed interdisciplinary research in artificial intelligence applications.",
    },
  ],
  contact: {
    address: "Computer Science Building, GM University",
    phone: "(269) 756-9809",
    email: "william@university.edu",
  },
};

// Main Faculty Component with the new cards
const Faculty = () => {
  // You can map through your faculties array here
  return (
    <div
      className="min-h-screen bg-gray-50 py-12"
      style={{
        backgroundImage: ``,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-2 drop-shadow-lg">
          Our Esteemed Faculty
        </h2>
        <p className="text-lg text-center text-white opacity-90 max-w-2xl mx-auto mb-12">
          Meet our dedicated faculty members who are inspiring excellence and
          innovation in Computer Science.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* You can map through your faculties array here */}

          {faculties.map((facultie, index) => (
            <FacultyCard faculty={facultie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
