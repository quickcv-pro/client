import ResumeTopbar from "./ResumeTopbar";
import ProfileInput from "./inputs/ProfileInput";
import "./assets/resume.css";
import Skills from "./inputs/Skills";
import ProfessionalExp from "./inputs/ProfessionalExp";
import ClassicDesigns from "./ResumeDesigns/ClassicsDesign";
import { useState } from "react";
import Education from "./inputs/Education";
import Certificate from "./inputs/Certificate";
import Interest from "./inputs/Interest";     
import Project from "./inputs/Project";
import Course from "./inputs/Course";
import Award from "./inputs/Award";
import Organization from "./inputs/Organization";
import Publication from "./inputs/Publication";
import Reference from "./inputs/Reference";

const Resume = () => {
  const [resumeData, setResumeData] = useState({});

  const handleInputChange = (data) => {
    setResumeData(data);
  };

  const handleSkillsInputChange = (data) => {
    setResumeData(data)
  }

  return (
    <div className="resumeMainContainer">
      <ResumeTopbar />
      <div className="resumeComponent">
        <div className="resumeContainer">
          <ProfileInput onInputChange={handleInputChange} />
          <Skills onSkillsChange={handleSkillsInputChange} />
          <ProfessionalExp />
          <Education />
          <Certificate />
          <Interest />
          <Project />
          <Course />
          <Award />
          <Organization />
          <Publication />
          <Reference />
        </div>
        <ClassicDesigns profileData={resumeData} skillData={resumeData} />
      </div>
    </div>
  );
};

export default Resume;
