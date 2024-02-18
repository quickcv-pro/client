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
  const [profileData, setProfileData] = useState({});
  const [skillData, setSkillData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [eduData, setEduData] = useState([]);
  const [certData, setCertData] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const handleInputChange = (data) => {
    setProfileData(data);
  };

  const handleSkillsInputChange = (data) => {
    setSkillData(data);
  };

  const handleExpInputChange = (data) => {
    setExpData(data);
  };

  const handleEduInputChange = (data) => {
    setEduData(data);
  };

  const handleCertInputChange = (data) => {
    setCertData(data);
  };

  const handleInteretInputChange = (data) => {
    setInterestData(data);
  };

  const handleProjectInputChange = (data) => {
    setProjectData(data);
  };

  return (
    <div className="resumeMainContainer">
      <ResumeTopbar />
      <div className="resumeComponent">
        <div className="resumeContainer">
          <ProfileInput onInputChange={handleInputChange} />
          <Skills onSkillsChange={handleSkillsInputChange} />
          <ProfessionalExp onExpChange={handleExpInputChange} />
          <Education onEduChange={handleEduInputChange} />
          <Certificate onCertChange={handleCertInputChange} />
          <Interest onInterestChange={handleInteretInputChange} />
          <Project onProjectChange={handleProjectInputChange} />
          <Course />
          <Award />
          <Organization />
          <Publication />
          <Reference />
        </div>
        <ClassicDesigns
          profileData={profileData}
          skillData={skillData}
          expData={expData}
          eduData={eduData}
          certData={certData}
          interestData={interestData}
          projectData={projectData}
        />
      </div>
    </div>
  );
};

export default Resume;
