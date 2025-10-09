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

const App = () => {
  return (
    <div className="mx-4 sm:mx-[6%] ">
      <AssistiveBubble />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/learning-resources" element={<LearningResources />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/bos" element={<BoS />} />
        <Route
          path="/research-publications "
          element={<ResearchPublications />}
        />
        <Route path="/student-projects" element={<StudentProjects />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/faculty-achievements" element={<FacultyAchievements />} />
        <Route
          path="/student-internships-placements "
          element={<StudentIP />}
        />
        <Route
          path="/student-achievements "
          element={<StudentAchievements />}
        />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
    </div>
  );
};

export default App;
