import {
  AddLink,
  ColorLens,
  Email,
  GitHub,
  Home,
  Language,
  Phone,
} from "@mui/icons-material";
import "./assets/resumeDesigns.css";
import SkillsDesign from "./SkillsDesign";
import ProfileDesign from "./ProfileDesign";
import ExperienceDesign from "./ExperienceDesign";
import EducationDesign from "./EducationDesign";
import CertificationDesign from "./CertificationDesign";
import InterestDesign from "./InterestDesign";
import ProjectDesign from "./ProjectDesign";

const ClassicsDesign = ({
  profileData,
  skillData,
  expData,
  eduData,
  certData,
  interestData,
  projectData,
}) => {
  // console.log(expData);
  return (
    <div className="resGeneralContainer">
      <ProfileDesign
        fullName={profileData.fullName}
        jobTitle={profileData.jobTitle}
        email={profileData.email}
        website={profileData.website}
        phone={profileData.phone}
        address={profileData.address}
        github={profileData.github}
        benance={profileData.benance}
        link1={profileData.link1}
        link2={profileData.link2}
        bio={profileData.bio}
      />
      <div className="classicLine"></div>
      {skillData.map((skill, index) => (
        <SkillsDesign
          key={index}
          skill={skill.skill}
          subSkill={skill.subSkill}
        />
      ))}
      <div className="classicLine"></div>
      {/* Iterate over expData and render ExperienceDesign component */}
      {expData.map((exp, index) => (
        <ExperienceDesign
          key={index}
          position={exp.position}
          company={exp.company}
          location={exp.location}
          startDate={exp.startDate}
          stopDate={exp.stopDate}
          info={exp.info}
        />
      ))}
      <div className="classicLine"></div>
      {/* Iterate over expData and render ExperienceDesign component */}
      {eduData.map((edu, index) => (
        <EducationDesign
          key={index}
          school={edu.school}
          field={edu.field}
          city={edu.city}
          country={edu.country}
          startDate={edu.startDate}
          endDate={edu.endDate}
          info={edu.info}
        />
      ))}

      <div className="classicLine"></div>
      {/* Iterate over expData and render ExperienceDesign component */}
      <p className="mainHeader">CERTIFICATIONS</p>
      <div className="mainRowContainer">
        {certData.map((cert, index) => (
          <CertificationDesign
            key={index}
            certification={cert.certification}
            organization={cert.organization}
            link={cert.link}
            dDate={cert.dDate}
          />
        ))}
      </div>

      <div className="classicLine"></div>
      {/* Iterate over expData and render ExperienceDesign component */}
      <p className="mainHeader">INTEREST | HOBBY</p>
      <div className="mainInterestContainer">
        {interestData.map((interest, index) => (
          <InterestDesign key={index} interest={interest.interest} />
        ))}
      </div>

      <div className="classicLine"></div>
      {/* Iterate over expData and render ExperienceDesign component */}
      <p className="mainHeader">PROJECT</p>
      <div className="mainColumnContainer">
        {projectData.map((project, index) => (
          <ProjectDesign
            key={index}
            title={project.title}
            subTitle={project.subTitle}
            startDate={project.startDate}
            endDate={project.endDate}
            city={project.city}
            country={project.country}
            info={project.info}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassicsDesign;
