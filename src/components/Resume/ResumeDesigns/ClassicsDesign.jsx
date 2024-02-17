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

const ClassicsDesign = ({ profileData, skillData, expData }) => {
  console.log(expData);
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
    </div>
  );
};

export default ClassicsDesign;
