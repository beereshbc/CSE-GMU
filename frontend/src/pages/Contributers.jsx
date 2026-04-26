import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import {
  Users,
  Mail,
  GraduationCap,
  Code,
  Video,
  Zap,
  Crown,
  Camera,
  Linkedin,
  Github,
  ArrowDown,
  Rocket,
} from "lucide-react";
import { assets } from "../assets/assets";

const Contributers = () => {
  // Enhanced team color mapping with gradients
  const teamStyles = {
    "Development Lead": {
      gradient: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/50",
      icon: "text-purple-300",
    },
    "Supporting Developers": {
      gradient: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/50",
      icon: "text-blue-300",
    },
    "AI Content & Multimedia Generation": {
      gradient: "from-orange-500 to-red-500",
      glow: "shadow-orange-500/50",
      icon: "text-orange-300",
    },
    "Video Shooting, Editing & Deployment": {
      gradient: "from-green-500 to-emerald-500",
      glow: "shadow-green-500/50",
      icon: "text-green-300",
    },
  };

  const teamIcons = {
    "Development Lead": Code,
    "Supporting Developers": Code,
    "AI Content & Multimedia Generation": Zap,
    "Video Shooting, Editing & Deployment": Camera,
  };

  const contributors = [
    {
      name: "Beeresh kumar B C",
      usn: "4GM23CS017",
      email: "bcbeereshkumar@gmail.com",
      role: "Development Lead",
      linkedin: "https://www.linkedin.com/in/beereshkumar-b-c-004397341/",
      github: "https://github.com/beereshbc",
      image: assets.Beeresh,
    },
    {
      name: "Yashwanth M",
      usn: "4GM24CS098",
      email: "yy6996843@gmail.com",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/yashwanth-m-74034230b/",
      github: "#",
      image: assets.yashwanth, 
    },
    {
      name: "Sachin M Poojar",
      usn: "U23E01CS060",
      email: "sachinmpoojarya@gmail.com",
      role: "Supporting Developers",
      linkedin: "https://linkedin.com/in/sachinpoojar",
      github: "https://github.com/Sachinmpoojarya",
      image: assets.sachin,
    },
    {
      name: "Soujanya Jain Brahmaraj",
      usn: "U23E01CS071",
      email: "janyajain7722@gmail.com",
      role: "Supporting Developers",
      linkedin: "https://linkedin.com/in/soujanyajain",
      github: "https://github.com/soujanyajain",
      image:assets.soujanya,
    },
    {
      name: "Shashidhar Bhattad",
      usn: "U23E01CS164",
      email: "shashidharbattad9535@gmail.com",
      role: "Supporting Developers",
      linkedin: "https://linkedin.com/in/shashidharbhattad",
      github: "https://github.com/shashidharbhattad",
      image: assets.shashidhar,
    },
    {
      name: "Arjun M Kerodi",
      usn: "U24E01CS021",
      email: "arjunkerodi06@gmail.com",
      role: "Supporting Developers",
      linkedin: "https://linkedin.com/in/arjunkerodi",
      github: "https://github.com/arjunkerodi",
      image: assets.Arjun_Kerodi,
    },
    {
      name: "Bindu C Patil",
      usn: "U24E01CS008",
      email: "bcpatilblr@gmail.com",
      role: "Supporting Developers",
      linkedin: "https://linkedin.com/in/bindupatil",
      github: "https://github.com/bindupatil",
      image: assets.binduPatil,
    },

    {
      name: "Jeevan Hosamani",
      usn: "U23E01CS016",
      email: "jeevanhosamani07@gmail.com",
      role: "Video Shooting, Editing & Deployment",
      linkedin: "https://www.linkedin.com/in/jeevan-hosamani/",
      github: "https://github.com/jeevanhosamani07",
      image:assets.jeevan,
    },
    {
      name: "Sujan M N",
      usn: "U23E01CS075",
      email: "sujanneelgund@gmail.com",
      role: "Video Shooting, Editing & Deployment",
      linkedin: "https://www.linkedin.com/in/sujan-n-m/",
      github: "https://github.com/SujanNeelgund",
      image:assets.sujan,
    },
    {
      name: "Raveena Choudhary",
      usn: "GMU25UG1",
      email: "raveenachoudhary.work@gmail.com",
      role: "Video Shooting, Editing & Deployment",
      linkedin: "https://linkedin.com/in/raveenachoudhary",
      github: "https://github.com/raveenachoudhary",
      image:assets.raveena,
    },
  ];

  // Add team role to each contributor
  contributors.forEach((contributor) => {
    if (
      contributor.name === "Bindu C Patil" ||
      contributor.name === "Arjun M Kerodi" ||
      contributor.name === "Shashidhar Bhattad"
    ) {
      contributor.role = "AI Content & Multimedia Generation";
    }
  });

  const teamRoles = [
    {
      title: "Development Lead",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      members: ["Beereshkumar B C","Yashwanth M", "Sachin M Poojar"],
    },
    {
      title: "Supporting Developers",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      members: [
        "Bindu C Patil",
        "Arjun Kerodi",
        "Shashidhar B",
        "Soujanya Jain Brahmaraj",
      ],
    },
    {
      title: "AI Content & Multimedia Generation",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      members: ["Bindu C Patil", "Arjun M Kerodi", "Shashidhar Bhattad"],
    },
    {
      title: "Video Shooting, Editing & Deployment",
      icon: Video,
      color: "from-green-500 to-teal-500",
      members: ["Jeevan Hosamani", "Sujan M N", "Raveena Choudhary"],
    },
  ];

  // 3D Card Component
  const Card3D = ({ contributor, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateY = useTransform(mouseX, [-300, 300], [15, -15]);
    const rotateX = useTransform(mouseY, [-300, 300], [-15, 15]);

    const dampedRotateY = useSpring(rotateY, { damping: 20, stiffness: 200 });
    const dampedRotateX = useSpring(rotateX, { damping: 20, stiffness: 200 });

    const backgroundX = useTransform(mouseX, [-300, 300], [20, -20]);
    const backgroundY = useTransform(mouseY, [-300, 300], [20, -20]);

    const TeamIcon = teamIcons[contributor.role];
    const style =
    contributor.name === "Soujanya Jain Brahmaraj"
      ? teamStyles["Development Lead"]
        : teamStyles[contributor.role];

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX.set(x - rect.width / 2);
      mouseY.set(y - rect.height / 2);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      animate(mouseX, 0, { duration: 0.5 });
      animate(mouseY, 0, { duration: 0.5 });
    };

    return (
      <motion.div
        ref={cardRef}
        className="card-wrap cursor-pointer w-full flex justify-center"
        style={{
          perspective: 800,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="card relative w-60 h-80 bg-gray-900 rounded-xl overflow-hidden"
          style={{
            rotateY: dampedRotateY,
            rotateX: dampedRotateX,
            transformStyle: "preserve-3d",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 0 40px 5px rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 1), 0 30px 60px 0 rgba(0, 0, 0, 0.66), inset #333 0 0 0 5px, inset white 0 0 0 6px"
              : "rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px",
          }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={contributor.image}
            alt={contributor.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <motion.div
            className="card-info absolute bottom-0 left-0 right-0 p-6 text-white z-10"
            animate={{
              y: isHovered ? 0 : 100,
            }}
            transition={{
              duration: 0.6,
              delay: isHovered ? 0 : 0.5,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />

            <div className="relative z-10">
             <motion.h1
                className="text-2xl font-bold mb-2 text-white font-serif italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ delay: isHovered ? 0.3 : 0 }}
              >
                {contributor.name}
              </motion.h1>

              <motion.div
                className="flex items-center gap-2 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ delay: isHovered ? 0.4 : 0 }}
              >
                <TeamIcon className={`w-4 h-4 ${style.icon}`} />
              <span className="text-sm font-medium text-gray-200">
              {contributor.name === "Sachin M Poojar"||
              contributor.name === "Soujanya Jain Brahmaraj"
                ? "Developer"
                : contributor.role}
                </span>
             </motion.div>

              <motion.div
                className="flex items-center gap-2 mb-4 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ delay: isHovered ? 0.5 : 0 }}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm">{contributor.usn}</span>
              </motion.div>

              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ delay: isHovered ? 0.6 : 0 }}
              >
                <motion.a
                  href={contributor.linkedin}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </motion.a>
                <motion.a
                  href={contributor.github}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                >
                  <Github className="w-4 h-4 text-white" />
                </motion.a>
                <motion.a
                  href={`mailto:${contributor.email}`}
                  whileHover={{ scale: 1.1 }}
                  className={`w-8 h-8 bg-gradient-to-r ${style.gradient} rounded-lg flex items-center justify-center ${style.glow}`}
                >
                  <Mail className="w-4 h-4 text-white" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Team badge */}
          <motion.div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm border ${style.glow}`}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
          >
            <span
              className={`bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}
            >
          {contributor.role === "Supporting Developers"
          ? "Development"
          : contributor.role.split(" ")[0]}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  // Compact Blue & White Hero Section
  const HeroSection = () => (
    <div className="  relative overflow-hidden pt-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-200 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            The brilliant minds behind our success. Each team member brings
            unique expertise and passion to create extraordinary digital
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          ></motion.div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Compact Hero Section */}
      <HeroSection />

      {/* Contributors Section */}
      <section className="py-16 px-4 ">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Creative Crew
              </span>
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who make innovation happen. Each
              member plays a vital role in our collective success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           {contributors.map((contributor, index) => (
              <Card3D key={index} contributor={contributor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Contributions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Team{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Contributions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our specialized teams collaborate to deliver
              exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {teamRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center shadow-md`}
                  >
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {role.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {role.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: memberIndex * 0.1 }}
                      whileHover={{
                        x: 8,
                        backgroundColor: "#f8fafc",
                      }}
                      className="flex items-center gap-3 py-2 px-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        {member}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributers;
