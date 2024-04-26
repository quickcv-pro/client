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


// REACT SORTABLE FOR SORTING THE SECTIONS
import { ReactSortable } from "react-sortablejs";

// REACT PDF FOR FLEXIBLE LAYOUTS
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: 900, //the pdf viewer will take up all of the width and height
    height: 900,
  },
});





const Resume = () => {
  const [profileData, setProfileData] = useState({});
  const [skillData, setSkillData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [eduData, setEduData] = useState([]);
  const [certData, setCertData] = useState([]);
  const [interestData, setInterestData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [pubData, setPubData] = useState([]);
  const [refData, setRefData] = useState([]);

  const [sortSections, setSortSections] = useState([
    { id: 1, name: "ProfileInput" },
    { id: 2, name: "Skills" },
    { id: 3, name: "ProfessionalExp" },
    { id: 4, name: "Education" },
    { id: 5, name: "Certificate" },
    { id: 6, name: "Interest" },
    { id: 7, name: "Project" },
    { id: 8, name: "Course" },
    { id: 9, name: "Award" },
    { id: 10, name: "Organization" },
    { id: 11, name: "Publication" },
    { id: 12, name: "Reference" },
  ]);

  // Function to handle reordering of sections
  const handleSectionsChange = (newSections) => {
    setSortSections(newSections);
  };







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

  const handleCourseInputChange = (data) => {
    setCourseData(data);
  };

  const handleAwardInputChange = (data) => {
    setAwardData(data);
  };

  const handleOrgInputChange = (data) => {
    setOrgData(data);
  };

  const handlePubInputChange = (data) => {
    setPubData(data);
  };

  const handleRefInputChange = (data) => {
    setRefData(data);
  };

  return (
    <div className="resumeMainContainer">
      <ResumeTopbar />
      <div className="resumeComponent">
        <div className="resumeContainer">
          <ReactSortable list={sortSections} setList={handleSectionsChange}>
            {sortSections.map((section, index) => {
              switch (section.name) {
                case "ProfileInput":
                  return <ProfileInput onInputChange={setProfileData} key={section.id} />;
                case "Skills":
                  return <Skills onSkillsChange={setSkillData} key={section.id} />;
                case "ProfessionalExp":
                  return <ProfessionalExp onExpChange={setExpData} key={section.id} />;
                case "Education":
                  return <Education onEduChange={setEduData} key={section.id} />;
                case "Certificate":
                  return <Certificate onCertChange={setCertData} key={section.id} />;
                case "Interest":
                  return <Interest onInterestChange={setInterestData} key={section.id} />;
                case "Project":
                  return <Project onProjectChange={setProjectData} key={section.id} />;
                case "Course":
                  return <Course onCourseChange={setCourseData} key={section.id} />;
                case "Award":
                  return <Award onAwardChange={setAwardData} key={section.id} />;
                case "Organization":
                  return <Organization onOrgChange={setOrgData} key={section.id} />;
                case "Publication":
                  return <Publication onPubChange={setPubData} key={section.id} />;
                case "Reference":
                  return <Reference onRefChange={setRefData} key={section.id} />;
                default:
                  return null;
              }
            })}
          </ReactSortable>


        </div>
        <div className="  resumeDesigns">


          <ClassicDesigns
            handleSectionsChange={handleSectionsChange}
            sortSections={sortSections}
            profileData={profileData}
            skillData={skillData}
            expData={expData}
            eduData={eduData}
            certData={certData}
            interestData={interestData}
            projectData={projectData}
            courseData={courseData}
            awardData={awardData}
            orgData={orgData}
            pubData={pubData}
            refData={refData}
          />


        </div >
      </div >
    </div >
  );
};

export default Resume;
