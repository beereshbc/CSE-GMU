import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Quote,
  CheckCircle,
  Briefcase,
  Code,
  Users,
  GraduationCap,
  ArrowRight,
  Calendar,
  Send,
} from "lucide-react";
import { assets } from "../assets/assets";

const Admissions = () => {
  const handleApplyNow = () => {
    window.open(
      "https://gmu.ac.in/public/admission-card/branch/cse.html",
      "_blank"
    );
  };
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px] animate-pulse" />
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
        <div
          className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/8 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">
                Admissions 2025 Now Open
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Computer Science
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 mt-2">
                & Engineering
              </span>
            </motion.h1>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full"
              variants={fadeInUp}
            />

            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed font-light"
              variants={fadeInUp}
            >
              Shape the future with cutting-edge technology and innovation. Join
              our prestigious Computer Science program and become part of the
              next generation of tech leaders.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <motion.button
                onClick={handleApplyNow}
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-2xl flex items-center gap-3 border-2 border-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Tour
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {[
                { number: "95%", label: "Placement Rate" },
                { number: "50+", label: "Tech Companies" },
                { number: "4.8/5", label: "Student Rating" },
                { number: "1000+", label: "Alumni Network" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-cyan-200">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-80 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Admissions Officer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Profile Column */}
            <motion.div className="lg:col-span-4 flex" variants={slideInLeft}>
              <div className="bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-2xl w-full flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="text-center flex-1">
                  {/* Enhanced Profile Picture */}
                  <motion.div
                    className="w-44 h-44 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center border-4 border-white shadow-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20" />
                    <User className="w-20 h-20 text-blue-600 " />
                    <img src={assets.Ravinandan_Jannu} alt="" />
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    variants={fadeInUp}
                  >
                    Prof. RAVINANDAN JANNU
                  </motion.h3>
                  <motion.p
                    className="text-blue-600 font-semibold text-lg mb-3 flex items-center justify-center gap-2"
                    variants={fadeInUp}
                  >
                    <Briefcase className="w-5 h-5" />
                    Admissions Co-ordinator
                  </motion.p>
                  <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
                    Department of Computer Science & Engineering
                  </motion.p>

                  {/* Enhanced Quote */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6 border-l-4 border-blue-500 relative overflow-hidden"
                    variants={fadeInUp}
                  >
                    <div className="absolute top-4 left-4 opacity-10">
                      <Quote className="w-12 h-12 text-blue-600" />
                    </div>
                    <Quote className="w-6 h-6 text-blue-400 mb-3 mx-auto relative z-10" />
                    <p className="text-gray-700 italic text-center text-sm leading-relaxed relative z-10">
                      "Your journey in computer science begins with a single
                      application. Let me guide you towards a future filled with
                      innovation and endless possibilities."
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  className="flex gap-3 pt-6 border-t border-gray-100"
                  variants={fadeInUp}
                >
                  <motion.button
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4" />
                    <a href="mailto:admissions.cse@gmu.edu">Send Email</a>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <div className="lg:col-span-8 flex flex-col space-y-8">
              {/* Enhanced Contact Information */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100 shadow-xl flex-1 flex flex-col"
                variants={slideInLeft}
              >
                <div className="flex-1">
                  <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-2"
                    variants={fadeInUp}
                  >
                    Admissions Office
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 mb-8 text-lg"
                    variants={fadeInUp}
                  >
                    We're here to help you navigate your journey to GMU
                  </motion.p>

                  <div className="bg-white rounded-2xl p-6 border-2 border-blue-100">
                    <motion.h3
                      className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-3"
                      variants={fadeInUp}
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      Get in Touch
                    </motion.h3>
                    <div className="space-y-4 text-gray-700">
                      {[
                        {
                          icon: Phone,
                          label: "Phone",
                          value: "+91-906-662-3203",
                        },
                        {
                          icon: Mail,
                          label: "Email",
                          value: "admissions.cse@gmu.edu",
                        },
                        {
                          icon: MapPin,
                          label: "Address",
                          value: "Department of CSE, GM University, Davangere",
                        },
                        {
                          icon: Clock,
                          label: "Office Hours",
                          value: "Monday - Friday, 9:00 AM - 5:00 PM",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          className="flex items-center p-4 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200 group cursor-pointer"
                          variants={fadeInUp}
                          whileHover={{ x: 5 }}
                        >
                          <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:bg-blue-200 transition-colors">
                            <item.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {item.label}
                            </p>
                            <p className="text-gray-600">{item.value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Why Choose CSE */}
              <motion.div
                className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-3xl p-8 text-white shadow-2xl flex-1 flex flex-col relative overflow-hidden"
                variants={slideInLeft}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-12 translate-y-12" />

                <div className="flex-1 relative z-10">
                  <motion.div className="text-center mb-8" variants={fadeInUp}>
                    <h3 className="text-2xl font-bold mb-3">
                      Why Choose CSE at GMU?
                    </h3>
                    <p className="text-blue-100 text-lg">
                      Discover what makes our program exceptional
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Code,
                        title: "Industry-Ready Curriculum",
                        description:
                          "Updated syllabus with latest technologies including AI, ML, and Cloud Computing",
                      },
                      {
                        icon: Briefcase,
                        title: "Excellent Placements",
                        description:
                          "Top recruiters including Google, Microsoft, Amazon with 95% placement rate",
                      },
                      {
                        icon: GraduationCap,
                        title: "Research Opportunities",
                        description:
                          "State-of-the-art labs and research facilities with industry collaborations",
                      },
                      {
                        icon: Users,
                        title: "Expert Faculty",
                        description:
                          "Learn from renowned professors and industry experts with global experience",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
                        variants={fadeInUp}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(255,255,255,0.15)",
                        }}
                      >
                        <div className="flex items-start">
                          <div className="bg-white/20 rounded-xl p-3 mr-4 group-hover:bg-white/30 transition-colors">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-white group-hover:text-cyan-100 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-blue-100 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Admissions;
