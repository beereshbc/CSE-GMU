import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const StudentAchievements = () => {
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeLightbox = () => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  // ✅ FULL UPDATED DATA
  const studentAchievements = [
    {
      id: 1,
      image: assets.bindu,
      title: "Paper Presentation on Climate Change",
      students: "Bindu C Patil, Shraddha Hiremath",
      department: "Computer Science",
      description:
        "Presented paper at KLE Institute of Technology on climate change awareness.",
    },
    {
      id: 2,
      image: assets.Arjun,
      title: "Jain Institute Ideathon",
      students: "Innovators",
      description:
        "Participated in Ideathon 2025 focusing on stock prediction and analysis.",
    },
    {
      id: 3,
      image: assets.Sachin,
      title: "NeuroCalm – National Hackathon",
      students: "Sachin, Abhiram, Prajwal, Sudharshan",
      description:
        "Innovative mental well-being solution presented at Presidency University.",
    },
    {
      id: 4,
      image: assets.Shreya,
      title: "AI Investment Strategy Predictor",
      students:
        "Likitha C Y, Harshitha H M, Shreya B Yadav, Lakshmi B C",
      description:
        "AI-based tool for smart investment exit decisions.",
    },
    {
      id: 5,
      image: assets.Sinchana,
      title: "Code Quality Visualizer",
      students:
        "Sinchana M, Rohini KG, Pragathi S P, Prakruthi KN",
      description:
        "Static code analysis tool developed during Hackmitten 2.0.",
    },

    // 🔥 NEW ACHIEVEMENTS

    {
      id: 6,
      image: assets.Anveshana,
      title: "Anveshana National Level Finalist",
      students:
        "Yashwanth M, Puneet C Negalur, Vinayaka K, Prateeksha D G",
      department: "Innovation",
      description:
        "Top 7 among 200+ teams at national level event by Agastya Foundation, Bengaluru.",
    },
    {
      id: 7,
      image: assets.Techzone,
      title: "TechZone Nationals – 1st Place",
      students: "Mohammad Shoaib, R. Umme Saniya",
      department: "UI/UX Design",
      description:
        "Won 1st place and ₹7,000 prize at JNNCE Shivamogga.",
    },
    {
      id: 8,
      image: assets.AgriHack,
      title: "AgriTech Hackathon – 3rd Place",
      students:
        "Sachin M Poojar, Prajwal Jana, Sudharshan, Gurushankar",
      department: "Hackathon",
      description:
        "Secured 3rd place at Somaiya Vidyavihar University, Mumbai and won ₹30,000 prize.",
    },
    {
      id: 9,
      image: assets.Tanzila,
      title: "Research Publication – IIT Goa",
      students: "Tanzila B",
      department: "IEEE",
      description:
        "Published in IEEE Xplore, presented at EduHiPC 2025 (IIT Goa).",
    },
    {
      id: 10,
      image: assets.HackHire,
      title: "Hack For Hire 2026 – 1st Place",
      students:
        "Prajwal Jana, Sachin M P, Sudarshana V D, Gurushankar",
      department: "Startup Hackathon",
      description:
        "Won startup hackathon at PES Campus with internship opportunities.",
    },
     {
  id: 11,
  image: assets.samved, // add image in assets
  title: "Samved Hackathon 2026 – National Finalist",
  students:
    "Shreya B Yadav, Likitha C Y, Nisha V Pawar, Rakshita R, Priya Manohar C",
  department: "Smart Governance",
  description:
    "Ranked among Top 25 out of 546 teams nationwide at MIT Vishwaprayag University. Developed a Smart Water Pressure Management System addressing urban water challenges.",
},
{
  id: 12,
  image: assets.hackclashcompetition, // add image in assets
  title: "Hack Clash 2026 – Winners",
  students:
    "Team Gamma : Chandrashekar Karabasappa Talawar,Jagadeesh S Bentoor",
  department: "Hackathon",
  description:
    "Won the prestigious Hack Clash 2026 organized by GM  University, Davangere with a Prize Money of rs.2000.",
},
];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white text-center">
        <h1 className="text-5xl font-bold">Student Achievements</h1>
        <p className="text-lg mt-2 italic">
          Our students' remarkable accomplishments 🚀
        </p>
      </div>

      {/* GRID */}
      <div className="py-16 mx-[6%]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {studentAchievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-blue-600 text-sm mt-1 font-medium">
                  {item.students}
                </p>

                <p className="text-gray-500 text-xs mb-2">
                  {item.department}
                </p>

                <p className="text-gray-600 text-sm flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      <div
        id="lightbox"
        className="hidden fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
        onClick={closeLightbox}
      >
        <img
          id="lightbox-img"
          className="max-w-[90%] max-h-[90%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default StudentAchievements;