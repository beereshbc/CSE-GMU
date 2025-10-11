import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Home,
  RotateCw,
  User,
  GraduationCap,
  BookOpen,
  Users,
  ClipboardList,
  FileText,
  Code,
  BarChart3,
  Award,
  Briefcase,
  Heart,
  UserPlus,
  Phone,
  X,
  Menu,
  MapPin,
  Compass,
  Zap,
  Sparkles,
} from "lucide-react";

const AssistiveBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [idleTime, setIdleTime] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activePage, setActivePage] = useState("");
  const [showPulse, setShowPulse] = useState(true);
  const widgetRef = useRef(null);
  const idleIntervalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationLinks = [
    {
      name: "About",
      path: "/about",
      icon: User,
      description: "Learn about our institution",
    },
    {
      name: "Programs",
      path: "/programs",
      icon: GraduationCap,
      description: "Explore academic programs",
    },
    {
      name: "Learning Resources",
      path: "/learning-resources",
      icon: BookOpen,
      description: "Access study materials",
    },
    {
      name: "Faculty",
      path: "/faculty",
      icon: Users,
      description: "Meet our faculty members",
    },
    {
      name: "BoS",
      path: "/bos",
      icon: ClipboardList,
      description: "Board of Studies information",
    },
    {
      name: "Research Publications",
      path: "/research-publications",
      icon: FileText,
      description: "Browse research papers",
    },
    {
      name: "Student Projects",
      path: "/student-projects",
      icon: Code,
      description: "View student work",
    },
    {
      name: "IQAC",
      path: "/iqac",
      icon: BarChart3,
      description: "Quality assurance cell",
    },
    {
      name: "Faculty Achievements",
      path: "/faculty-achievements",
      icon: Award,
      description: "Faculty accomplishments",
    },
    {
      name: "Student Internships & Placements",
      path: "/student-internships-placements",
      icon: Briefcase,
      description: "Career opportunities",
    },
    {
      name: "Student Achievements",
      path: "/student-achievements",
      icon: Award,
      description: "Student accomplishments",
    },
    {
      name: "Alumni",
      path: "/alumni",
      icon: Heart,
      description: "Alumni network",
    },
    {
      name: "Admissions",
      path: "/admissions",
      icon: UserPlus,
      description: "Admission process",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
      icon: Phone,
      description: "Get in touch with us",
    },
  ];

  const actionItems = [
    {
      id: 1,
      icon: ArrowLeft,
      label: "Back",
      action: "back",
      description: "Go back to previous page",
    },
    {
      id: 2,
      icon: Home,
      label: "Home",
      action: "home",
      description: "Return to homepage",
    },
    {
      id: 3,
      icon: RotateCw,
      label: "Refresh",
      action: "refresh",
      description: "Reload current page",
    },
  ];

  // Track active page
  useEffect(() => {
    const currentPage = navigationLinks.find(
      (link) => link.path === location.pathname
    );
    setActivePage(currentPage?.name || "");
  }, [location.pathname]);

  // Fixed bottom-right positioning
  useEffect(() => {
    const updatePosition = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      setPosition({
        x: windowWidth - 100, // 100px from right edge
        y: windowHeight - 120, // 120px from bottom edge
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  // Enhanced idle timer with smart behavior
  useEffect(() => {
    const startIdleTimer = () => {
      clearInterval(idleIntervalRef.current);
      setIdleTime(0);
      setIsIdle(false);

      idleIntervalRef.current = setInterval(() => {
        setIdleTime((prev) => {
          const newTime = prev + 1;

          // Progressive idle states
          if (newTime >= 15 && !isOpen) setIsIdle(true);
          if (newTime >= 30 && !isOpen) setShowPulse(false);

          return newTime;
        });
      }, 100);
    };

    startIdleTimer();

    const handleInteraction = () => {
      startIdleTimer();
      setShowPulse(true);
    };

    // More comprehensive interaction tracking
    const events = ["mousemove", "click", "keypress", "scroll", "touchstart"];
    events.forEach((event) =>
      document.addEventListener(event, handleInteraction)
    );

    return () => {
      clearInterval(idleIntervalRef.current);
      events.forEach((event) =>
        document.removeEventListener(event, handleInteraction)
      );
    };
  }, [isOpen]);

  // Calculate positions for inward-opening menu with larger gaps
  const getItemPosition = (index, totalItems, itemType) => {
    const baseDistance = 140; // Increased distance for larger gaps

    if (itemType === "action") {
      // Action items in a horizontal line above the main bubble
      const spacing = 80; // Increased spacing between action items
      const startX = -((actionItems.length - 1) * spacing) / 2;

      return {
        x: startX + index * spacing,
        y: -100, // Fixed position above
      };
    }

    // Navigation items in a grid-like pattern that opens inward (toward center of screen)
    const itemsPerRow = 4;
    const row = Math.floor(index / itemsPerRow);
    const col = index % itemsPerRow;

    const horizontalSpacing = 80; // Increased horizontal gap
    const verticalSpacing = 80; // Increased vertical gap

    // Calculate positions that open toward the center of the screen
    const startX = -((itemsPerRow - 1) * horizontalSpacing) / 2;
    const startY = 40; // Start below the action items

    return {
      x: startX + col * horizontalSpacing,
      y: startY + row * verticalSpacing,
    };
  };

  // Enhanced action handler with feedback
  const handleAction = (action) => {
    switch (action) {
      case "back":
        navigate(-1);
        break;
      case "home":
        navigate("/");
        break;
      case "refresh":
        window.location.reload();
        break;
      default:
        break;
    }
    // Close menu and provide visual feedback
    setIsOpen(false);
    setHoveredItem(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setHoveredItem(null);
  };

  // Limited drag functionality - only small adjustments allowed
  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const { point } = info;

    // Allow only limited movement around bottom-right area
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Constrain to bottom-right quadrant with some flexibility
    const minX = windowWidth - 200; // Can move left up to 200px
    const maxX = windowWidth - 60; // Can move right up to edge
    const minY = windowHeight - 200; // Can move up up to 200px
    const maxY = windowHeight - 60; // Can move down up to edge

    const boundedX = Math.max(minX, Math.min(maxX, point.x));
    const boundedY = Math.max(minY, Math.min(maxY, point.y));

    setPosition({ x: boundedX, y: boundedY });

    // Reset idle state
    setIdleTime(0);
    setIsIdle(false);
    setShowPulse(true);
  };

  // Enhanced toggle with haptic feedback simulation
  const toggleMenu = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
      setIdleTime(0);
      setIsIdle(false);
      setShowPulse(true);

      // Visual feedback
      if (!isOpen) {
        setHoveredItem(null);
      }
    }
  };

  // Animation variants
  const bubbleVariants = {
    idle: {
      scale: isIdle ? 0.9 : 1,
      opacity: isIdle ? 0.8 : 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.5,
      },
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    closed: {
      x: 0,
      y: 0,
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        staggerDirection: -1,
      },
    },
    open: (custom) => {
      const { x, y } = getItemPosition(
        custom.index,
        custom.totalItems,
        custom.itemType
      );
      return {
        x,
        y,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: custom.index * 0.02, // Staggered opening
        },
      };
    },
  };

  const mainIconVariants = {
    normal: { scale: 1, rotate: 0 },
    tap: { scale: 0.92, rotate: isOpen ? -5 : 5 },
    hover: { scale: 1.1 },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Gooey Effect SVG Filter */}
      <svg
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Main Assistive Bubble - Fixed Bottom Right */}
      <motion.div
        ref={widgetRef}
        className="fixed z-50"
        style={{
          left: position.x,
          top: position.y,
          filter: "url(#goo)",
          transform: "translateZ(0)",
        }}
        animate={isIdle ? "idle" : "active"}
        variants={bubbleVariants}
      >
        {/* Pulsing Effect */}
        <AnimatePresence>
          {showPulse && !isOpen && (
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 opacity-70"
            />
          )}
        </AnimatePresence>

        {/* Action Items - Horizontal Line Above */}
        <div className="absolute inset-0 pointer-events-none">
          {actionItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute left-0 top-0 pointer-events-auto"
              variants={itemVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              custom={{
                index,
                totalItems: actionItems.length,
                itemType: "action",
              }}
            >
              <motion.button
                className={`
                  w-14 h-14 rounded-xl 
                  bg-gradient-to-br from-cyan-400 to-blue-500
                  shadow-lg hover:shadow-2xl border border-white/40
                  flex items-center justify-center relative group
                  transition-all duration-200 backdrop-blur-md
                  hover:from-cyan-300 hover:to-blue-400
                  active:scale-95
                `}
                onClick={() => handleAction(item.action)}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <item.icon size={20} className="text-white drop-shadow-sm" />

                {/* Enhanced Tooltip */}
                <AnimatePresence>
                  {hoveredItem === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white p-3 rounded-xl text-sm font-medium whitespace-nowrap z-50 shadow-2xl max-w-xs"
                    >
                      <div className="text-center">
                        <div className="font-semibold text-cyan-100">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-300 mt-1">
                          {item.description}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-slate-800 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Navigation Links - Grid Pattern Opening Inward */}
        <div className="absolute inset-0 pointer-events-none">
          {navigationLinks.map((item, index) => (
            <motion.div
              key={item.path}
              className="absolute left-0 top-0 pointer-events-auto"
              variants={itemVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              custom={{
                index,
                totalItems: navigationLinks.length,
                itemType: "navigation",
              }}
            >
              <motion.button
                className={`
                  w-14 h-14 rounded-xl 
                  bg-gradient-to-br from-blue-400 to-purple-500
                  shadow-lg hover:shadow-2xl border border-white/40
                  flex items-center justify-center relative group
                  transition-all duration-200 backdrop-blur-md
                  hover:from-blue-300 hover:to-purple-400
                  active:scale-95
                  ${
                    activePage === item.name
                      ? "ring-2 ring-yellow-400 ring-opacity-80"
                      : ""
                  }
                `}
                onClick={() => handleNavigation(item.path)}
                whileHover={{
                  scale: 1.12,
                  y: activePage === item.name ? -4 : -2,
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <item.icon size={20} className="text-white drop-shadow-sm" />

                {activePage === item.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full ring-2 ring-white"
                  />
                )}

                {/* Enhanced Tooltip */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white p-3 rounded-xl text-sm font-medium whitespace-nowrap z-50 shadow-2xl max-w-xs"
                    >
                      <div className="text-center">
                        <div className="font-semibold text-blue-100 flex items-center justify-center gap-1">
                          {item.name}
                          {activePage === item.name && (
                            <Sparkles size={12} className="text-yellow-400" />
                          )}
                        </div>
                        <div className="text-xs text-slate-300 mt-1">
                          {item.description}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-slate-800 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Main Bubble */}
        <motion.button
          className={`
            w-16 h-16 rounded-xl 
            bg-gradient-to-br from-blue-500 to-purple-600
            shadow-2xl hover:shadow-3xl border border-white/40
            flex items-center justify-center cursor-grab active:cursor-grabbing
            backdrop-blur-md relative
            transition-all duration-200
            ${isOpen ? "from-blue-400 to-purple-500" : ""}
          `}
          variants={mainIconVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={toggleMenu}
          drag
          dragMomentum={false}
          dragElastic={0.1}
          dragConstraints={{
            left: typeof window !== "undefined" ? window.innerWidth - 200 : 0,
            right: typeof window !== "undefined" ? window.innerWidth - 60 : 0,
            top: typeof window !== "undefined" ? window.innerHeight - 200 : 0,
            bottom: typeof window !== "undefined" ? window.innerHeight - 60 : 0,
          }}
          onDragStart={() => {
            setIsDragging(true);
            setShowPulse(false);
          }}
          onDragEnd={handleDragEnd}
        >
          <motion.div
            animate={{
              rotate: isOpen ? 90 : 0,
              scale: isDragging ? 1.1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {isOpen ? (
              <X size={22} className="text-white drop-shadow-sm" />
            ) : isDragging ? (
              <Compass size={22} className="text-white drop-shadow-sm" />
            ) : (
              <Zap size={22} className="text-white drop-shadow-sm" />
            )}
          </motion.div>

          {/* Drag indicator */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-3 h-3 bg-white/60 rounded-full"
            animate={{ scale: isDragging ? 1.2 : 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </motion.div>

      {/* Enhanced Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900 z-40 backdrop-blur-sm"
            onClick={() => {
              setIsOpen(false);
              setHoveredItem(null);
            }}
          />
        )}
      </AnimatePresence>

      {/* Active Page Indicator */}
      <AnimatePresence>
        {activePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium z-30 shadow-lg"
          >
            📍 Currently viewing: {activePage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AssistiveBubble;
