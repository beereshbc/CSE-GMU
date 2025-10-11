import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Programs from "./pages/Programs";
import LearningResources from "./pages/LearningResources";
import Faculty from "./pages/Faculty";
import BoS from "./pages/BoS";
import ResearchPublications from "./pages/ResearchPublications";
import StudentProjects from "./pages/StudentProjects";
import IQAC from "./pages/IQAC";
import FacultyAchievements from "./pages/FacultyAchievements";
import StudentIP from "./pages/StudentIP";
import StudentAchievements from "./pages/StudentAchievements";
import Alumni from "./pages/Alumni";
import Admissions from "./pages/Admissions";
import AssistiveBubble from "./components/AssistiveBubble";
import FalconAI from "./pages/FalconAI";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <AssistiveBubble />
      <FalconAI />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/learning-resources" element={<LearningResources />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/bos" element={<BoS />} />
        <Route
          path="/research-publications"
          element={<ResearchPublications />}
        />
        <Route path="/student-projects" element={<StudentProjects />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/faculty-achievements" element={<FacultyAchievements />} />
        <Route
          path="/student-internships-placements "
          element={<StudentIP />}
        />
        <Route path="/student-achievements" element={<StudentAchievements />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/falconai" element={<FalconAI />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
