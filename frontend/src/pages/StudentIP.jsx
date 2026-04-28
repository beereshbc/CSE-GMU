import accentureLogo from "../assets/companyLogos/accenture.png";
import brigoshaLogo from "../assets/companyLogos/brigosha.png";
import ceiLogo from "../assets/companyLogos/cei.png";
import infosysLogo from "../assets/companyLogos/infosys.png";
import mindtreeLogo from "../assets/companyLogos/mindtree.png";
import tcsLogo from "../assets/companyLogos/tcs.png";
import wiproLogo from "../assets/companyLogos/wipro.png";
import googleLogo from "../assets/companyLogos/google.png";
import microsoftLogo from "../assets/companyLogos/microsoft.png";
import ibmLogo from "../assets/companyLogos/ibm.png";
import oracleLogo from "../assets/companyLogos/oracle.png";
import amazonLogo from "../assets/companyLogos/amazon.png";
import p6 from "../assets/PlacedStud/p6.jpg";
import p7 from "../assets/PlacedStud/p7.jpg";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import { assets, featuredStudents, recentPlacedStud } from "../assets/assets";
import {
  GraduationCap,
  User,
  Mail,
  Phone,
  Check,
  Brain,
  Users,
  Code,
  Book,
  FileText,
  Download,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const StudentIP = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStudent, setCurrentStudent] = useState(0);
  const [currentRecentIndex, setCurrentRecentIndex] = useState(0);
  const studentsPerView = 5; // Number of students to show at once

  // Hero section images
  const heroImages = [assets.ps1, assets.ps2, assets.ps3, assets.ps4];

  // Company logos for slideshow (working URLs)

const companyLogos = [
  {
    name: "TCS",
    logo: tcsLogo,
  },
  {
    name: "Infosys",
    logo: infosysLogo,
  },
  {
    name: "Accenture",
    logo: accentureLogo,
  },
  {
    name: "Wipro",
    logo: wiproLogo,
  },
  {
    name: "Mindtree",
    logo: mindtreeLogo,
  },
  {
    name: "CEI India",
    logo: ceiLogo,
  },
  {
    name: "Brigosha",
    logo: brigoshaLogo,
  },
  {
    name: "Google",
    logo: googleLogo,
  },
  {
    name: "Microsoft",
    logo: microsoftLogo,
  },
  {
    name: "Amazon",
    logo: amazonLogo,
  },

  {
  name: "IBM",
  logo: ibmLogo,
  },
 {
  name: "Oracle",
  logo: oracleLogo,
 },

];

  // Student data from the document - 2020-21 placements
  const allStudentsData = [
    { name: "ANANDACHARI M M", usn: "4GM17CS004", company: "TCS" },
    { name: "ANUSHA E M", usn: "4GM17CS005", company: "Robosoft Technologies" },
    {
      name: "APOORVA M R",
      usn: "4GM17CS006",
      company: "CEI India Private Ltd",
    },
    { name: "BHOOMIKA BHAT", usn: "4GM17CS009", company: "TCS" },
    { name: "KAVANA D K", usn: "4GM17CS014", company: "Mindtree Technologies" },
    { name: "NIKSHITHA S", usn: "4GM17CS017", company: "MindeTree" },
    {
      name: "NIRMALA ANANTH HEGDE",
      usn: "4GM17CS018",
      company: "Tata Consultancy Service",
    },
    {
      name: "POOJA WALISHETTAR",
      usn: "4GM17CS019",
      company: "Tata Consultancy Service",
    },
    {
      name: "PRERANA L S",
      usn: "4GM17CS022",
      company: "Thasmai Automation Private Ltd",
    },
    { name: "RASHMI M C", usn: "4GM17CS025", company: "RCS Tech LLP Pvt Ltd" },
    {
      name: "RITHIIKA REDDY V B",
      usn: "4GM17CS027",
      company: "Accenture solutions Pvt ltd",
    },
    {
      name: "ROHAN K H",
      usn: "4GM17CS028",
      company: "Accenture solutions Pvt ltd",
    },
    {
      name: "ROOPA K J",
      usn: "4GM17CS029",
      company: "Accenture solutions Pvt ltd",
    },
    { name: "SAHANA G N", usn: "4GM17CS031", company: "Infosys Pvt. Ltd" },
    {
      name: "SHARATH M S",
      usn: "4GM17CS034",
      company: "Accenture solutions Pvt ltd",
    },
    {
      name: "SHRIJAN M HIREMATH",
      usn: "4GM17CS035",
      company: "Thasmai Automation Private Ltd",
    },
    {
      name: "TEJASWINI B U",
      usn: "4GM17CS041",
      company: "Tata Consultancy Service",
    },
    { name: "AKSHATA C K", usn: "4GM18CS400", company: "Brigosha Technology" },
    { name: "BHAVYA S", usn: "4GM18CS401", company: "FISE" },
    { name: "SHRUTHI T", usn: "4GM18CS405", company: "SLK" },
  ];

  // Enhanced placement stats with average package
  const placementStats = [
  {
    year: "2024-25",
    intake: 120,
    placed: 50,
    highest: "34.4 LPA",
    average: "8.5 LPA",
    lowest: "4.5 LPA",
    higherStudies: 3,
    percentage: "74%",
  },
  {
    year: "2023-24",
    intake: 120,
    placed: 80,
    highest: "14.5 LPA",
    average: "4.5 LPA",
    lowest: "3.5 LPA",
    higherStudies: 4,
    percentage: "66%",
  },
  {
    year: "2022-23",
    intake: 110,
    placed: 70,
    highest: "12 LPA",
    average: "6 LPA",
    lowest: "3.2 LPA",
    higherStudies: 5,
    percentage: "63%",
  },
  {
    year: "2021-22",
    intake: 100,
    placed: 65,
    highest: "12 LPA",
    average: "6.5 LPA",
    lowest: "3.5 LPA",
    higherStudies: 5,
    percentage: "65%",
  },
  {
    year: "2020-21",
    intake: 90,
    placed: 55,
    highest: "10 LPA",
    average: "5.8 LPA",
    lowest: "3.0 LPA",
    higherStudies: 2,
    percentage: "61%",
  },
];

  // Enhanced Chart Data with Blue-White Theme
  const enhancedChartData = {
    labels: placementStats.map((stat) => stat.year),
    datasets: [
      {
        label: "Placed Students",
        data: placementStats.map((stat) => parseInt(stat.placed)),
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: "Intake",
        data: placementStats.map((stat) => parseInt(stat.intake)),
        backgroundColor: "rgba(199, 210, 254, 0.6)",
        borderColor: "rgba(165, 180, 252, 1)",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const enhancedChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#1e40af",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        text: "Placement Trends Over Years",
        color: "#1e3a8a",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#1e3a8a",
        bodyColor: "#374151",
        borderColor: "#3b82f6",
        borderWidth: 1,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(59, 130, 246, 0.1)",
        },
        ticks: {
          color: "#374151",
          font: {
            weight: "500",
          },
        },
        title: {
          display: true,
          text: "Number of Students",
          color: "#1e40af",
          font: {
            weight: "bold",
          },
        },
      },
      x: {
        grid: {
          color: "rgba(59, 130, 246, 0.1)",
        },
        ticks: {
          color: "#374151",
          font: {
            weight: "500",
          },
        },
      },
    },
  };

  const openPdf = (year) => {
    const pdfUrls = {
      "2024-25": "https://drive.google.com/drive/folders/1kEKm9AzUNrUeCi9oacwOr4fRN_uL5tEq",
      "2023-24": "https://drive.google.com/drive/folders/1Z82crBw8ZAlhNbLemwxdBU_FU64vjVr9",
      "2022-23": assets.AY2021,
      "2021-22": assets.AY2122,
      "2020-21": assets.AY2223,
    };
    window.open(pdfUrls[year], "_blank");
  };

  // Calculate total pages for recent students carousel
  const totalRecentPages = Math.ceil(recentPlacedStud.length / studentsPerView);

  // Navigation functions for recent students carousel
  const nextRecentStudents = () => {
    setCurrentRecentIndex((prev) => (prev + 1) % totalRecentPages);
  };

  const prevRecentStudents = () => {
    setCurrentRecentIndex(
      (prev) => (prev - 1 + totalRecentPages) % totalRecentPages
    );
  };

  // Get current chunk of recent students
  const getCurrentRecentStudents = () => {
    const start = currentRecentIndex * studentsPerView;
    return recentPlacedStud.slice(start, start + studentsPerView);
  };

  // Auto slide change for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto slide change for students
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudent((prev) => (prev + 1) % allStudentsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allStudentsData.length]);

  // Auto slide change for recent students (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextRecentStudents();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentRecentIndex]);

  return (
    <div className="min-h-screen  sm:mx-[10%] mx-4">
      {/* Our Belief Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <GraduationCap className="text-white text-3xl" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-8 font-serif"
            >
              Our Belief
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200"
            >
              <p className="text-md md:text-lg leading-relaxed mb-3 italic text-blue-800">
                "As a department, we firmly believe in classical, time-tested
                methods of learning. We may not promise shortcuts, but we
                promise sincere mentorship to guide motivated students. With
                persistence, passion, and consistent practice, success becomes a
                natural outcome."
              </p>
           </motion.div>
            </div>
          </div>
        </section>

      {/* Placement Coordinators Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 font-serif"
          >
            Placement Coordinators
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
            {/* Coordinator 2 - Santhoshkumar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-200"
            >
              <div className="flex flex-col items-center text-center space-y-6 pt-4">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
                    <User className="text-white text-2xl" />
                    <img
                      src={assets.SANTOSHKUMAR_M}
                      className="shadow-xl rounded-full scale-150"
                      alt="Mrs. Kavyashree P N"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <Check className="text-white w-4 h-4" />
                  </div>
                </div>

                {/* Coordinator Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-900">
                    Dr. SantoshKumar Mahendrakar
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Placement Coordinator
                  </p>
                  <p className="text-sm text-gray-500">
                    Department of Computer Science & Engineering
                  </p>

                  {/* Contact Info */}
                  <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-blue-700">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-sm">
                        santoshkumarm@gmit.ac.in
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Coordinator 1 - Kavyashree */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-2xl border border-blue-200"
            >
              <div className="flex flex-col items-center text-center space-y-6 pt-4">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
                    <User className="text-white text-2xl" />
                    <img
                      src={assets.KAVYASHREE_p_N}
                      className="shadow-xl rounded-full scale-150"
                      alt="Mrs. Kavyashree P N"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <Check className="text-white w-4 h-4" />
                  </div>
                </div>

                {/* Coordinator Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-blue-900">
                    Mrs. Kavyashree P N
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Placement Coordinator
                  </p>
                  <p className="text-sm text-gray-500">
                    Department of Computer Science & Engineering
                  </p>

                  {/* Contact Info */}
                  <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-blue-700">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-sm">
                        kavyashreepn@gmit.ac.in
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Light Themed Hero Section */}
      <section className="relative  overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8 py-12">
            {/* University Header */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 font-serif tracking-tight"
              >
                G M University
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-700 mb-6"
              >
                Department of Computer Science & Engineering
              </motion.p>
            </div>

            {/* Image Slider */}
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Placement ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Light overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-indigo-100/40"></div>
                </div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-blue-600 scale-125"
                        : "bg-blue-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </section>

      {/* What Companies Expect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 font-serif"
            >
              What Companies Expect From Fresh Graduates
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Foundational Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-blue-50 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="text-blue-600 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Foundational Skills
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">
                      Problem-Solving Ability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">Verbal Communication</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">Logical Reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">Learnability</span>
                  </li>
                </ul>
              </motion.div>

              {/* Professional Qualities */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-purple-50 rounded-2xl p-8 shadow-lg border-l-4 border-purple-500"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-purple-600 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Professional Qualities
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Award className="text-purple-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">
                      Ability to articulate and convince
                    </span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="text-purple-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">Leadership potential</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="text-purple-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">Team orientation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-purple-500 mt-1 mr-3 w-5 h-5" />
                    <span className="font-semibold">Active listening</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Technical Competency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Technical Competency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <Code className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Core Programming</h4>
                  <p className="text-sm opacity-90">
                    Strong fundamentals in programming concepts
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <Code className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">
                    Engineering Concepts
                  </h4>
                  <p className="text-sm opacity-90">
                    Fundamental engineering principles
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <Book className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Branch Knowledge</h4>
                  <p className="text-sm opacity-90">
                    Depth in computer science concepts
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Logos Slideshow */}
      <section className="py-12  overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-blue-900 mb-8 font-serif"
          >
            Our Recruiting Partners 
          </motion.h2>
          <div className="relative">
            <div className="flex space-x-8 animate-marquee whitespace-nowrap">
              {companyLogos.concat(companyLogos).map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-md p-4 flex items-center justify-center border border-blue-200"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Recent Placements 2025-26 Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-serif"
            >
              Recent Placements 2025-26
            </motion.h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-8">
              Our students have secured placements in top companies with
              excellent packages
            </p>
          </div>

          {/* Recent Students Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevRecentStudents}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors border border-blue-200"
            >
              <ChevronLeft className="w-6 h-6 text-blue-700" />
            </button>

            <button
              onClick={nextRecentStudents}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors border border-blue-200"
            >
              <ChevronRight className="w-6 h-6 text-blue-700" />
            </button>

            {/* Students Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {getCurrentRecentStudents().map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200 group cursor-pointer"
                >
                  {/* Student Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Student Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-blue-900 mb-1 truncate">
                      {student.name}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex flex-wrap gap-2">
  {student.company.split(",").map((comp, index) => (
    <span
      key={index}
      className="text-[10px] text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded-full"
    >
      {comp.trim()}
    </span>
  ))}
</div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {student.passedOutYear}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalRecentPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRecentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentRecentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-blue-300 hover:bg-blue-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Statistics Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Placement Highlights 2025-26
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm opacity-90">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">34.4 LPA</div>
                <div className="text-sm opacity-90">Highest Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8.5 LPA</div>
                <div className="text-sm opacity-90">Average Package</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Linear Placement Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-serif"
            >
              Placement Statistics
            </motion.h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Comprehensive overview of our students' outstanding achievements
              in campus placements
            </p>
          </div>

          {/* PDF Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg mb-12"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
              <FileText className="text-red-500 w-6 h-6" />
              Download Placement Reports
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {[
                { year: "2024-25", label: "2024-25 Report" },
                { year: "2023-24", label: "2023-24 Report" },
                { year: "2022-23", label: "2022-23 Report" },
                { year: "2021-22", label: "2021-22 Report" },
                { year: "2020-21", label: "2020-21 Report" },
              ].map((pdf, index) => (
                <motion.button
                  key={pdf.year}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openPdf(pdf.year)}
                  className="bg-white border-2 border-blue-500 text-blue-700 py-3 px-6 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md flex items-center justify-center gap-3 min-w-[160px]"
                >
                  <Download className="w-4 h-4" />
                  <span>{pdf.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Chart and Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Enhanced Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-200"
            >
              <div className="h-80 md:h-96">
                <Bar data={enhancedChartData} options={enhancedChartOptions} />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
                <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Placement Highlights
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-700">85%</div>
                    <div className="text-sm text-blue-600">
                      Current Placement Rate
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-700">
                      34.4 LPA
                    </div>
                    <div className="text-sm text-green-600">
                      Highest Package
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-700">
                      8.5 LPA
                    </div>
                    <div className="text-sm text-purple-600">
                      Average Package
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-2xl font-bold text-orange-700">
                      50+
                    </div>
                    <div className="text-sm text-orange-600">
                      Recruiting Companies
                    </div>
                  </div>
                </div>
              </div>

              {/* Placement Growth */}
<div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
  <h4 className="text-xl font-bold mb-3 text-center">
    Growth Trend
  </h4>

  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <span>2024-25</span>
      <span className="font-bold text-green-200">74% ↗</span>
    </div>

    <div className="flex justify-between items-center">
      <span>2023-24</span>
      <span className="font-bold">66% ↗</span>
    </div>

    <div className="flex justify-between items-center">
      <span>2022-23</span>
      <span className="font-bold">63% →</span>
    </div>

    <div className="flex justify-between items-center">
      <span>2021-22</span>
      <span className="font-bold">65% ↗</span>
    </div>

    <div className="flex justify-between items-center">
      <span>2020-21</span>
      <span className="font-bold">61% →</span>
    </div>
  </div>
</div>
            </motion.div>
          </div>

          {/* Statistics Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <th className="py-4 px-4 text-left font-semibold">
                      Academic Year
                    </th>
                    <th className="py-4 px-4 text-center font-semibold">
                      Intake
                    </th>
                    <th className="py-4 px-4 text-center font-semibold">
                      Placed
                    </th>
                    <th className="py-4 px-4 text-center font-semibold">
                      Highest Package
                    </th>
                    <th className="py-4 px-4 text-center font-semibold">
                      Average Package
                    </th>
                    <th className="py-4 px-4 text-center font-semibold">
                      Higher Studies
                    </th>
                    <th className="py-4 px-4 text-center font-semibold">
                      Placement %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {placementStats.map((stat, index) => (
                    <tr
                      key={index}
                      className={`transition-all duration-200 hover:bg-blue-50 ${
                        index % 2 === 0 ? "bg-blue-25" : "bg-white"
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold text-blue-900 border border-blue-100">
                        {stat.year}
                      </td>
                      <td className="py-4 px-4 text-center border border-blue-100">
                        {stat.intake}
                      </td>
                      <td className="py-4 px-4 text-center font-bold text-green-700 border border-blue-100">
                        {stat.placed}
                      </td>
                      <td className="py-4 px-4 text-center font-semibold text-blue-800 border border-blue-100">
                        {stat.highest}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-700 border border-blue-100">
                        {stat.average}
                      </td>
                      <td className="py-4 px-4 text-center text-purple-700 border border-blue-100">
                        {stat.higherStudies}
                      </td>
                      <td
                        className={`py-4 px-4 text-center font-bold border border-blue-100 ${
                          parseFloat(stat.percentage) > 80
                            ? "text-green-600 bg-green-50"
                            : parseFloat(stat.percentage) > 70
                            ? "text-blue-600 bg-blue-50"
                            : "text-orange-600 bg-orange-50"
                        }`}
                      >
                        {stat.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Placements Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-serif"
            >
              Top Placements
            </motion.h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Our top performers who secured excellent packages in leading
              companies
            </p>
          </div>

          {/* Featured Students Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {featuredStudents.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative  rounded-2xl shadow-lg overflow-hidden border border-blue-200 group cursor-pointer aspect-square"
              >
                {/* Student Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Hover Overlay - Slides from bottom */}
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-to-b from-blue-600/95 to-blue-800/95 p-4 text-white flex flex-col justify-end"
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-1">{student.name}</h3>
                    <p className="text-xs opacity-90 mb-2">{student.usn}</p>

                    <div className="space-y-1 mb-3">
                      <p className="font-semibold text-sm">{student.company}</p>
                      <p className="text-xl font-bold text-yellow-300">
                        {student.package}
                      </p>
                      <p className="text-xs opacity-90">{student.role}</p>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-blue-600 py-1 px-3 rounded-full text-xs font-semibold inline-block"
                    >
                      View Profile
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* Placement Posters */}
{/* Placement Posters */}
<div className="mt-12">
  <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
    Latest Placement Highlights
  </h3>

  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">

    <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-200 aspect-square">
      <img
        src={p6}
        alt="Placement Poster 1"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-200 aspect-square">
      <img
        src={p7}
        alt="Placement Poster 2"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>        </div>
      </section>
    </div>
  );
};

export default StudentIP;
