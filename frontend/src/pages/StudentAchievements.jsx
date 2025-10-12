import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const StudentAchievements = () => {
  useEffect(() => {
    // Lightbox functionality
    const openLightbox = (src) => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
      if (lightbox && lightboxImg) {
        lightbox.classList.add("active");
        lightboxImg.src = src;
        document.body.style.overflow = "hidden";
      }
    };

    const closeLightbox = () => {
      const lightbox = document.getElementById("lightbox");
      if (lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    };

    // Close lightbox on escape key
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    // Initialize animations on load
    const initializeAnimations = () => {
      // Add hover effects for achievement cards
      const achievementCards = document.querySelectorAll(".achievement-card");
      achievementCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          card.style.transform = "translateY(-10px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
          card.style.transform = "translateY(0) scale(1)";
        });
      });

      // Add smooth scrolling for read more links
      const readMoreLinks = document.querySelectorAll(".read-more-btn");
      readMoreLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          link.style.transform = "scale(0.95)";
          setTimeout(() => {
            link.style.transform = "scale(1)";
          }, 150);
          console.log("Navigating to:", link.textContent);
        });
      });
    };

    // Add accessibility improvements
    const handleGalleryKeydown = (e) => {
      if (
        e.target.classList.contains("gallery-item") &&
        (e.key === "Enter" || e.key === " ")
      ) {
        e.target.click();
        e.preventDefault();
      }
    };

    // Add focus indicators for accessibility
    const focusableElements = document.querySelectorAll(
      ".achievement-card, .gallery-item, .read-more-btn"
    );
    focusableElements.forEach((element) => {
      element.setAttribute("tabindex", "0");

      element.addEventListener("focus", () => {
        element.style.outline = "3px solid #f6ad55";
        element.style.outlineOffset = "2px";
      });

      element.addEventListener("blur", () => {
        element.style.outline = "none";
      });
    });

    // Add event listeners
    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("keydown", handleGalleryKeydown);

    initializeAnimations();

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("keydown", handleGalleryKeydown);
    };
  }, []);

  const openLightbox = (src) => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightbox && lightboxImg) {
      lightbox.classList.add("active");
      lightboxImg.src = src;
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  // Student achievements data with proper images
  const studentAchievements = [
    {
      id: 1,
      image: assets.Abhiram,
      title: "National-level Vyoma Hackathon",
      students: "Rahul, Abhiram, Yashaswini, Yashwanth",
      department: "Computer Science",
      description:
        "Under the leadership of DS Yashaswini, our team created an impactful Generative AI solution aimed at enhancing health and well-being during an intense 24-hour challenge in Hyderabad.",
      hasLink: true,
    },
    {
      id: 2,
      image: assets.bindu,
      title: "Paper Presentation on Climate Change",
      students: "Bindu C Patil, Shraddha Hiremath",
      department: "Computer Science",
      description:
        "Took part in a paper presentation at KLE Institute of Technology, Hubli, on 'The Role of Individuals in Combating Climate Change'.",
      hasLink: false,
    },
    {
      id: 3,
      image: assets.Arjun,
      title: "Jain Institute of Technology",
      students: "Innovators",
      department: "",
      description:
        "Ideathon 2025 was held at Jain College Davangere on 23rd of April for analysis of future stocks and prediction of stocks.",
      hasLink: true,
    },

    {
      id: 5,
      image: assets.Sachin,
      title: "NeuroCalm Project – National Hackathon",
      students: "Sachin, Abhiram, Prajwal, Sudharshan",
      department: "",
      description:
        "Our students participated in the National Hackathon at Presidency University with their project NeuroCalm, an innovative solution for mental well-being.",
      hasLink: false,
    },
    {
      id: 6,
      image: assets.Shreya,
      title: "AI Investment Strategy Predictor",
      students: "Likitha C Y, Harshitha H M, Shreya B Yadav, Lakshmi B C",
      department: "",
      description:
        "The AI-Powered Investment Exit Strategy Predictor helps investors make smarter, data-driven exit decisions.",
      hasLink: false,
    },
    {
      id: 7,
      image: assets.Sinchana,
      title: "Code Quality Visualizer Project",
      students: "Sinchana M, Rohini KG, Pragathi S P, Prakruthi KN",
      department: "",
      description:
        "At Hackmitten 2.0, our team developed Code Quality Visualizer—a tool for static analysis of code repositories.",
      hasLink: false,
    },
  ];

  const galleryImages = [
    {
      src: assets.Abhiram,
      largeSrc:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      title: "National-level Vyoma Hackathon",
      description:
        "Under the leadership of DS Yashaswini, our team created an impactful Generative AI solution aimed at enhancing health and well-being during an intense 24-hour challenge in Hyderabad.",
    },
    {
      src: assets.Shreya,
      largeSrc: "AI Investment Strategy Predictor",
      title: "National Hackathon Victory",
      description:
        "The AI-Powered Investment Exit Strategy Predictor helps investors make smarter, data-driven exit decisions.",
    },
    {
      src: assets.Sachin,
      largeSrc:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      title: "NeuroCalm Project – National Hackathon",
      description: "Students presenting groundbreaking research",
    },
    {
      src: assets.Sinchana,
      largeSrc:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      title: "Code Quality Visualizer Project",
      description: "Student entrepreneurs securing funding",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Custom Styles for animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 80px 80px;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .achievement-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.6s ease;
          z-index: 1;
        }
        .achievement-card:hover::before {
          left: 100%;
        }
        .gallery-overlay {
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }
      `}</style>

      {/* Header Section */}
      <div className="relative bg-gradient-to-br   from-blue-900 via-blue-800 to-blue-700 py-24 text-white text-center overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><rect width='80' height='80' fill='none'/><g opacity='0.1'><line x1='0' y1='0' x2='80' y2='0' stroke='white' stroke-width='0.5'/><line x1='0' y1='10' x2='80' y2='10' stroke='white' stroke-width='0.5'/><line x1='0' y1='20' x2='80' y2='20' stroke='white' stroke-width='0.5'/><line x1='0' y1='30' x2='80' y2='30' stroke='white' stroke-width='0.5'/><line x1='0' y1='40' x2='80' y2='40' stroke='white' stroke-width='0.5'/><line x1='0' y1='50' x2='80' y2='50' stroke='white' stroke-width='0.5'/><line x1='0' y1='60' x2='80' y2='60' stroke='white' stroke-width='0.5'/><line x1='0' y1='70' x2='80' y2='70' stroke='white' stroke-width='0.5'/><line x1='0' y1='80' x2='80' y2='80' stroke='white' stroke-width='0.5'/><line x1='0' y1='0' x2='0' y2='80' stroke='white' stroke-width='0.5'/><line x1='10' y1='0' x2='10' y2='80' stroke='white' stroke-width='0.5'/><line x1='20' y1='0' x2='20' y2='80' stroke='white' stroke-width='0.5'/><line x1='30' y1='0' x2='30' y2='80' stroke='white' stroke-width='0.5'/><line x1='40' y1='0' x2='40' y2='80' stroke='white' stroke-width='0.5'/><line x1='50' y1='0' x2='50' y2='80' stroke='white' stroke-width='0.5'/><line x1='60' y1='0' x2='60' y2='80' stroke='white' stroke-width='0.5'/><line x1='70' y1='0' x2='70' y2='80' stroke='white' stroke-width='0.5'/><line x1='80' y1='0' x2='80' y2='80' stroke='white' stroke-width='0.5'/></g></svg>")`,
            backgroundSize: "80px 80px",
            animation: "gridMove 20s linear infinite",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <a
            href="https://www.gmu.ac.in/quarterly_magazine"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?w=100&h=100&fit=crop&crop=center"
              alt="GMU Logo"
              className="h-16 w-auto rounded-xl shadow-lg bg-white p-1 transition-transform hover:scale-105 cursor-pointer"
            />
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg animate-[slideDown_1.2s_ease-out]">
            Achievements
          </h1>
          <p className="text-xl md:text-2xl opacity-95 italic animate-[slideUp_1.2s_ease-out_0.3s_both]">
            KnoW us KnoW World...
          </p>
        </div>
      </div>

      {/* Student Achievements Section */}
      <div className="py-16 bg-gray-50 mx-4 sm:mx-[6%]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              Student Achievements
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mt-2"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our students' remarkable accomplishments across academics,
              innovation, and entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {studentAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="achievement-card bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-400 hover:shadow-2xl min-h-[500px] flex flex-col"
              >
                <div className="card-image relative overflow-hidden h-64">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-400"
                  />
                </div>
                <div className="card-content p-6 flex-1 flex flex-col">
                  <h3 className="card-title text-xl font-semibold text-gray-800 mb-3">
                    {achievement.title}
                  </h3>
                  <div className="card-meta flex items-center gap-2 text-sm text-gray-600 mb-3">
                    {achievement.students && (
                      <>
                        <span className="student-name font-semibold text-blue-700">
                          {achievement.students}
                        </span>
                        {achievement.department && <span>•</span>}
                      </>
                    )}
                    {achievement.department && (
                      <span>{achievement.department}</span>
                    )}
                  </div>
                  <p className="card-description text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {achievement.description}
                  </p>
                  {achievement.hasLink && (
                    <a
                      href="#"
                      className="read-more-btn inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500 mt-auto"
                    >
                      {achievement.id === 3 ? (
                        <i className="fas fa-arrow-right"></i>
                      ) : (
                        <>
                          Learn More <i className="fas fa-arrow-right"></i>
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-white mx-4 sm:mx-[6%]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              Achievement Moments
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mt-2"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing the memorable moments of success and recognition
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="gallery-item relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 h-64"
                onClick={() => openLightbox(item.largeSrc)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="gallery-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                  <div className="gallery-title font-semibold text-lg mb-1">
                    {item.title}
                  </div>
                  <div className="gallery-description text-sm opacity-90">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className="lightbox hidden fixed inset-0 z-50 bg-black bg-opacity-90 items-center justify-center animate-[fadeIn_0.3s_ease-out]"
        id="lightbox"
        onClick={closeLightbox}
      >
        <span
          className="lightbox-close absolute top-8 right-10 text-white text-4xl cursor-pointer transition-transform hover:scale-125 hover:rotate-90"
          onClick={closeLightbox}
        >
          &times;
        </span>
        <img
          id="lightbox-img"
          src=""
          alt="Gallery Image"
          className="max-w-[90%] max-h-[90%] rounded-lg animate-[zoomIn_0.3s_ease-out]"
        />
      </div>
    </div>
  );
};

export default StudentAchievements;
