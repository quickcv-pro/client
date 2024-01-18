import { useState, useEffect } from "react";
import "./assets/resumeinput.css";
import { ExpandMore, HomeRepairService, Remove } from "@mui/icons-material";

const Skills = ({ onSkillsChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [skillData, setSkillData] = useState({
    skill: "",
    subSkills: "",
  });

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Notify the parent component about the changes whenever the profileData changes
    onSkillsChange(skillData);
  }, [skillData, onSkillsChange]);

  const handleSkillsInputChange = (e) => {
    const { name, value } = e.target;
    setSkillData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <HomeRepairService sx={{ fontSize: "1.5vw" }} />
          Skills & Tools
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div className="skillsForm">
          <div className="skillsFormInput">
            <input
              className="generalLongInput"
              type="text"
              name="skill"
              placeholder="Skill"
              value={skillData.skill}
              onChange={handleSkillsInputChange}
            />
          </div>
          <div className="skillsFormInput">
            <label>Informations/Sub-Skills</label>
            <textarea
              className="generalTextArea"
              type="text"
              name="subSkills"
              placeholder="sub-skills eg. Communication, Reading"
              value={skillData.subSkills}
              onChange={handleSkillsInputChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
