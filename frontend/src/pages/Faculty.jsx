import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  BookMarked,
} from "lucide-react";

export const faculties = [
  {
    name: "Dr. SHIVANAGOWDA G M",
    position: "Professor, Program Coordinator and Associate Director ERP",
    img: "/images/Dr. SHIVANAGOWDA G M.jpg",
    coverImg: "/images/Dr. SHIVANAGOWDA G M.jpg",
    about:
      "Expert in computer science with extensive academic and administrative experience. Currently serving as Program Coordinator and Associate Director ERP at GM University.",
    social: {
      linkedin: "https://www.linkedin.com/in/shivanagowda-g-m-0b54605/",
      Scholar: "https://scholar.google.com/citations?user=shivanagowda",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123456",
    },
    experience: [
      {
        year: "2015",
        title: "Program Coordinator",
        company: "GM University",
        description:
          "Oversaw academic programs and curriculum development for computer science department.",
      },
      {
        year: "2018",
        title: "Associate Director ERP",
        company: "GM University",
        description:
          "Managed enterprise resource planning systems and digital infrastructure.",
      },
      {
        year: "2020",
        title: "Professor",
        company: "GM University",
        description:
          "Teaching advanced computer science courses and mentoring graduate students.",
      },
    ],
    contact: {
      address: "Computer Science Building, GM University",
      phone: "(555) 123-4567",
      email: "shivanagowda@university.edu",
    },
  },
  {
    name: "Dr. CHETHAN CHANDRA S BASAVARADDI",
    position: "Associate Professor",
    img: "/images/Dr. CHETHAN CHANDRA S BASAVARADDI.jpg",
    coverImg: "/images/Dr. CHETHAN CHANDRA S BASAVARADDI.jpg",
    about:
      "Distinguished academic with multiple degrees including Ph.D. and D.Litt. Passionate about research and student development in computer science.",
    social: {
      linkedin:
        "https://www.linkedin.com/in/dr-chethan-chandra-s-basavaraddi-5b523750/",
      Scholar: "https://scholar.google.com/citations?user=chethan",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123457",
    },
    experience: [
      {
        year: "2017",
        title: "Associate Professor",
        company: "GM University",
        description:
          "Teaching undergraduate and graduate courses in computer science.",
      },
      {
        year: "2019",
        title: "Research Lead",
        company: "Tech Research Center",
        description:
          "Led interdisciplinary research projects in emerging technologies.",
      },
    ],
    contact: {
      address: "Computer Science Building, GM University",
      phone: "(555) 123-4568",
      email: "chethan@university.edu",
    },
  },
  {
    name: "SANTOSHKUMAR M",
    position: "Assistant Professor, Deputy Director Student Affairs",
    img: "/images/SANTOSHKUMAR M.jpg",
    coverImg: "/images/SANTOSHKUMAR M.jpg",
    about:
      "Dedicated educator pursuing Ph.D. while serving as Deputy Director of Student Affairs. Committed to student success and academic excellence.",
    social: {
      linkedin: "https://www.linkedin.com/in/santosh-mahendrakar-6908a299/",
      Scholar: "https://scholar.google.com/citations?user=santosh",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123458",
    },
    experience: [
      {
        year: "2018",
        title: "Assistant Professor",
        company: "GM University",
        description:
          "Teaching computer science courses and supervising student projects.",
      },
      {
        year: "2020",
        title: "Deputy Director Student Affairs",
        company: "GM University",
        description:
          "Managed student activities, welfare programs and extracurricular initiatives.",
      },
    ],
    contact: {
      address: "Student Affairs Office, GM University",
      phone: "(555) 123-4569",
      email: "santosh@university.edu",
    },
  },
  {
    name: "NAYANA K",
    position: "Assistant Professor, Program Director of M.Tech - DL",
    img: "/images/NAYANA K.jpg",
    coverImg: "/images/NAYANA K.jpg",
    about:
      "Specialized in deep learning and artificial intelligence. Currently directing M.Tech program in Deep Learning while pursuing Ph.D.",
    social: {
      linkedin: "https://www.linkedin.com/in/nayana-k-921205371",
      Scholar: "https://scholar.google.com/citations?user=nayana",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123459",
    },
    experience: [
      {
        year: "2019",
        title: "Assistant Professor",
        company: "GM University",
        description:
          "Teaching courses in machine learning and artificial intelligence.",
      },
      {
        year: "2021",
        title: "Program Director M.Tech - DL",
        company: "GM University",
        description:
          "Oversaw curriculum development and program administration for Deep Learning specialization.",
      },
    ],
    contact: {
      address: "AI Research Center, GM University",
      phone: "(555) 123-4570",
      email: "nayana@university.edu",
    },
  },
  {
    name: "KAVYASHREE P N",
    position: "Assistant Professor",
    img: "/images/KAVYASHREE P N.jpg",
    coverImg: "/images/KAVYASHREE P N.jpg",
    about:
      "Enthusiastic educator and researcher pursuing Ph.D. Focused on innovative teaching methods and student mentorship.",
    social: {
      linkedin: "https://www.linkedin.com/in/kavyashree-p-n-954b791b9",
      Scholar: "https://scholar.google.com/citations?user=kavyashree",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123460",
    },
    experience: [
      {
        year: "2020",
        title: "Assistant Professor",
        company: "GM University",
        description:
          "Teaching computer science fundamentals and advanced topics.",
      },
    ],
    contact: {
      address: "Computer Science Building, GM University",
      phone: "(555) 123-4571",
      email: "kavyashree@university.edu",
    },
  },
  {
    name: "RANJITHA D S",
    position: "Assistant Professor",
    img: "/images/RANJITHA D S.jpg",
    coverImg: "/images/RANJITHA D S.jpg",
    about:
      "Computer science educator with expertise in software engineering and database systems. Committed to practical learning approaches.",
    social: {
      linkedin: "https://www.linkedin.com/in/ranjitha-ds-9127a716a",
      Scholar: "https://scholar.google.com/citations?user=ranjitha",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123461",
    },
    experience: [
      {
        year: "2019",
        title: "Assistant Professor",
        company: "GM University",
        description:
          "Teaching software engineering and database management systems.",
      },
    ],
    contact: {
      address: "Computer Science Building, GM University",
      phone: "(555) 123-4572",
      email: "ranjitha@university.edu",
    },
  },
  {
    name: "NANDITHA G",
    position: "Assistant Professor",
    img: "/images/NANDITHA G.jpg",
    coverImg: "/images/NANDITHA G.jpg",
    about:
      "Computer science educator focused on web technologies and programming fundamentals.",
    social: {
      linkedin: "https://www.linkedin.com/in/nanditha-g-b490321b3",
      Scholar: "https://scholar.google.com/citations?user=nanditha",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123462",
    },
    experience: [
      {
        year: "2020",
        title: "Assistant Professor",
        company: "GM University",
        description: "Teaching web development and programming courses.",
      },
    ],
    contact: {
      address: "Computer Science Building, GM University",
      phone: "(555) 123-4573",
      email: "nanditha@university.edu",
    },
  },
  {
    name: "RAVINANDAN JANNU",
    position: "Assistant Professor",
    img: "/images/RAVINANDAN JANNU.jpg",
    coverImg: "/images/RAVINANDAN JANNU.jpg",
    about:
      "Computer applications expert with strong background in programming and software development.",
    social: {
      linkedin:
        "https://www.linkedin.com/in/ravinandan-jannu-assistant-professor-151168384",
      Scholar: "https://scholar.google.com/citations?user=ravinandan",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123463",
    },
    experience: [
      {
        year: "2018",
        title: "Assistant Professor",
        company: "GM University",
        description: "Teaching computer applications and programming courses.",
      },
    ],
    contact: {
      address: "Computer Applications Department, GM University",
      phone: "(555) 123-4574",
      email: "ravinandan@university.edu",
    },
  },
  {
    name: "Miss Niveditha T Naik",
    position: "Assistant Professor",
    img: "/images/Niveditha.jpeg",
    coverImg: "/images/Niveditha.jpeg",
    about:
      "Computer science educator with focus on practical applications and student skill development.",
    social: {
      linkedin: "https://www.linkedin.com/in/niveditha-t-naik-88b993213",
      Scholar: "https://scholar.google.com/citations?user=niveditha",
      Vidwan: "https://vidwan.inflibnet.ac.in/profile/123464",
    },
    experience: [
      {
        year: "2021",
        title: "Assistant Professor",
        company: "GM University",
        description:
          "Teaching computer science courses and mentoring students.",
      },
    ],
    contact: {
      address: "Computer Science Building, GM University",
      phone: "(555) 123-4575",
      email: "niveditha@university.edu",
    },
  },
];

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const openDetailView = (faculty) => {
    setSelectedFaculty(faculty);
  };

  const closeDetailView = () => {
    setSelectedFaculty(null);
  };

  // Stats for hero section
  const stats = [
    { number: faculties.length, label: "Faculty Members", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Publications", icon: BookMarked },
    { number: "10+", label: "Research Areas", icon: GraduationCap },
  ];

  // University social links for hero section
  const universitySocialLinks = {
    linkedin: "https://www.linkedin.com/school/gm-university",
    Scholar: "https://scholar.google.com/citations?user=university",
    Vidwan: "https://vidwan.inflibnet.ac.in/profile/university",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Distinguished
                </span>{" "}
                Faculty
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
              >
                World-class educators and researchers committed to excellence in
                computer science education and innovation.
              </motion.p>

              {/* Social Links - University Level */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
              >
                <span className="text-blue-200 font-semibold">
                  Connect with us:
                </span>
                <div className="flex space-x-4">
                  <a
                    href={universitySocialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={universitySocialLinks.Scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="Google Scholar"
                  >
                    <GraduationCap className="w-5 h-5" />
                  </a>
                  <a
                    href={universitySocialLinks.Vidwan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="Vidwan"
                  >
                    <BookOpen className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 text-blue-50 fill-current"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Academic Team
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Dedicated faculty members with extensive experience in teaching,
              research, and innovation.
            </p>
          </motion.div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculties.map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100"
                onClick={() => openDetailView(faculty)}
              >
                <div className="p-6">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                        <img
                          src={faculty.img}
                          alt={faculty.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name and Position */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-blue-900 mb-1 line-clamp-2">
                      {faculty.name}
                    </h3>
                    <p className="text-sm text-blue-600 mb-4 line-clamp-2">
                      {faculty.position}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex justify-between items-center text-center border-t border-blue-50 pt-4">
                    <div>
                      <div className="text-blue-900 font-semibold">
                        {faculty.experience.length}
                      </div>
                      <div className="text-xs text-blue-600">Experience</div>
                    </div>
                    <div className="h-8 w-px bg-blue-100"></div>
                    <div>
                      <div className="text-blue-900 font-semibold">PhD</div>
                      <div className="text-xs text-blue-600">Qualification</div>
                    </div>
                    <div className="h-8 w-px bg-blue-100"></div>
                    <div>
                      <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail View Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeDetailView}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Cover Image */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600">
                  <img
                    src={selectedFaculty.coverImg}
                    alt="Cover"
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={closeDetailView}
                  className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Profile Image */}
                <div className="absolute -bottom-12 left-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                    <img
                      src={selectedFaculty.img}
                      alt={selectedFaculty.name}
                      className="w-full h-full rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 pb-8 px-8 max-h-[calc(90vh-12rem)] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      {selectedFaculty.name}
                    </h2>
                    <p className="text-lg text-blue-600 mb-6">
                      {selectedFaculty.position}
                    </p>

                    {/* About Section */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        About
                      </h3>
                      <p className="text-blue-700 leading-relaxed">
                        {selectedFaculty.about}
                      </p>
                    </div>

                    {/* Experience Section */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Experience
                      </h3>
                      <div className="space-y-4">
                        {selectedFaculty.experience.map((exp, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-blue-900">
                                {exp.title}
                              </h4>
                              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                {exp.year}
                              </span>
                            </div>
                            <p className="text-sm text-blue-600 mb-1">
                              {exp.company}
                            </p>
                            <p className="text-blue-700 text-sm">
                              {exp.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">
                        Contact Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center text-blue-700">
                          <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                          <span className="text-sm">
                            {selectedFaculty.contact.address}
                          </span>
                        </div>
                        <div className="flex items-center text-blue-700">
                          <Phone className="w-4 h-4 mr-3 text-blue-500" />
                          <span className="text-sm">
                            {selectedFaculty.contact.phone}
                          </span>
                        </div>
                        <div className="flex items-center text-blue-700">
                          <Mail className="w-4 h-4 mr-3 text-blue-500" />
                          <span className="text-sm">
                            {selectedFaculty.contact.email}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Social Links - Individual Faculty */}
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4">
                        Connect with {selectedFaculty.name.split(" ")[0]}
                      </h3>
                      <div className="flex space-x-3">
                        {selectedFaculty.social.linkedin &&
                          selectedFaculty.social.linkedin !== "#" && (
                            <a
                              href={selectedFaculty.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors transform hover:scale-110 flex items-center justify-center"
                              title="LinkedIn Profile"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                        {selectedFaculty.social.Scholar &&
                          selectedFaculty.social.Scholar !== "#" && (
                            <a
                              href={selectedFaculty.social.Scholar}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors transform hover:scale-110 flex items-center justify-center"
                              title="Google Scholar Profile"
                            >
                              <GraduationCap className="w-4 h-4" />
                            </a>
                          )}
                        {selectedFaculty.social.Vidwan &&
                          selectedFaculty.social.Vidwan !== "#" && (
                            <a
                              href={selectedFaculty.social.Vidwan}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors transform hover:scale-110 flex items-center justify-center"
                              title="Vidwan Profile"
                            >
                              <BookOpen className="w-4 h-4" />
                            </a>
                          )}
                      </div>
                      <p className="text-xs text-blue-600 mt-3 text-center">
                        Click to visit their professional profiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faculty;
