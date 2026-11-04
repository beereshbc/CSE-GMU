import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Phone,
  User,
  ExternalLink,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Menu,
  X,
  Building,
  Users,
  BookOpen,
  Briefcase,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white text-slate-700"
    >
      {/* Admission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-blue-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-blue-500 to-blue-600"
              >
                <GraduationCap className="text-white w-7 h-7" />
              </motion.div>

              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                Admission Enquiries
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For all admission-related queries, please visit the official GMU
                admissions contact page.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.gmu.ac.in/contact"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Visit GMU Admissions
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors duration-300"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Contact Section */}
      <main id="contact" className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Connect with our department for academic inquiries, administrative
              support, and professional collaboration
            </p>
          </motion.header>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 max-w-4xl mx-auto"
          >
            {/* Contact Items */}
            {[
              {
                icon: Mail,
                title: "Department Office",
                description:
                  "General inquiries, student services, and administrative support for all departmental matters",
                link: "mailto:hod.cse@gmail.com",
                linkText: "hod.cse@gmail.com",
                gradient: "from-blue-500 to-blue-600",
                delay: 0,
              },
              {
                icon: Phone,
                title: "Phone Number",
                description:
                  "Direct telephone line for immediate assistance and urgent communications",
                link: "tel:+911234567890",
                linkText: "+91-123-456-7890",
                gradient: "from-blue-600 to-blue-700",
                delay: 0.2,
                hours: "Available Monday through Friday, 9:00 AM - 5:00 PM",
              },
              {
                icon: User,
                title: "Head of Department",
                description:
                  "Academic leadership, strategic partnerships, and high-level institutional communications",
                link: "mailto:hod@gmu.edu",
                linkText: "hod@gmu.edu",
                gradient: "from-blue-400 to-blue-500",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                custom={item.delay}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl border border-blue-100 group-hover:border-blue-200 group-hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 bg-gradient-to-br ${item.gradient} shadow-lg`}
                    >
                      <item.icon className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                    </motion.div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <motion.a
                        whileHover={{ x: 5 }}
                        href={item.link}
                        className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold text-lg group/link"
                      >
                        {item.linkText}
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </motion.a>

                      {item.hours && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="mt-4 text-blue-500 flex items-center justify-center sm:justify-start gap-2"
                        >
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {item.hours}
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Admission Item */}
            <AnimatePresence>
              {!isModalOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl border border-blue-100 group-hover:border-blue-200 group-hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
                      >
                        <GraduationCap className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                      </motion.div>

                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                          Admission Enquiries
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                          For all admission-related queries, please visit the
                          official GMU admissions contact page.
                        </p>

                        <motion.a
                          whileHover={{ x: 5 }}
                          href="https://www.gmu.ac.in/contact"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold text-lg group/link"
                        >
                          Visit GMU Admission Portal
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
