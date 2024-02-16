import React, { useState, useEffect } from "react";
import "./assets/resumeinput.css";
import {
  DeleteOutline,
  ExpandMore,
  HomeRepairService,
  Remove,
  UnfoldMore,
} from "@mui/icons-material";

const Skills = ({ onSkillsChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [skillsList, setSkillsList] = useState([]); // Array to store skills and subskills

  const [skillData, setSkillData] = useState({
    skill: "",
    subSkill: "",
  });

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddButtonClick = () => {
    setShowInputFields(true); // Show input fields when "Add" button is clicked
  };

  const handleApplyButtonClick = () => {
    if (skillData.skill && skillData.subSkill) {
      setSkillsList([...skillsList, skillData]); // Add current skill and subskill to the skillsList array
      setSkillData({ skill: "", subSkill: "" }); // Clear input fields
    }
  };

  useEffect(() => {
    // Notify the parent component about the changes whenever the skillsList changes
    onSkillsChange(skillsList);
  }, [skillsList, onSkillsChange]);

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
          {skillsList.map((item, index) => (
            <div key={index} className="skillScroll">
              <UnfoldMore sx={{ cursor: "grab" }} />
              <p className="skillHeadScroll">{item.skill}</p>
              {/* <p>{item.subSkill}</p> */}
              <DeleteOutline className="deleteBtn" />
            </div>
          ))}
          {showInputFields && ( // Show input fields only when showInputFields is true
            <>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Skill"
                  name="skill"
                  value={skillData.skill}
                  onChange={handleSkillsInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <label>Informations/Sub-Skills</label>
                <textarea
                  className="generalTextArea"
                  type="text"
                  placeholder="sub-skills eg. Communication, Reading"
                  name="subSkill"
                  value={skillData.subSkill}
                  onChange={handleSkillsInputChange}
                />
              </div>
              <button className="saveButton" onClick={handleApplyButtonClick}>
                Apply
              </button>
            </>
          )}
          {!showInputFields && ( // Show "Add" button when showInputFields is false
            <button className="addButton" onClick={handleAddButtonClick}>
              Add+
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;
