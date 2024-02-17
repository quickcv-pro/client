import React, { useState, useEffect } from "react";
import "./assets/resumeinput.css";
import {
  DeleteOutline,
  Edit,
  ExpandMore,
  HomeRepairService,
  Remove,
  UnfoldMore,
} from "@mui/icons-material";

const Skills = ({ onSkillsChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [skillsList, setSkillsList] = useState([]); // Array to store skills and subskills
  const [editingIndex, setEditingIndex] = useState(null); // State to track which item is being edited

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
      if (editingIndex !== null) {
        // If editing an existing item, update it
        const updatedSkillsList = [...skillsList];
        updatedSkillsList[editingIndex] = skillData;
        setSkillsList(updatedSkillsList);
        setEditingIndex(null); // Reset editing index after updating
      } else {
        // If not editing, add a new item
        setSkillsList([...skillsList, skillData]);
      }
      setSkillData({ skill: "", subSkill: "" });
    }
  };

  const handleEditClick = (index) => {
    // Set the data of the item being edited to input fields
    const skillToEdit = skillsList[index];
    setSkillData(skillToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    // Remove the item from the skills list
    const updatedSkillsList = [...skillsList];
    updatedSkillsList.splice(index, 1);
    setSkillsList(updatedSkillsList);
  };

  useEffect(() => {
    onSkillsChange(skillsList);
  }, [skillsList, onSkillsChange]);

  const handleSkillsInputChange = (e) => {
    const { name, value } = e.target;
    setSkillData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData("index");
    const newSkillsList = [...skillsList];
    const skill = newSkillsList[dragIndex];
    newSkillsList.splice(dragIndex, 1);
    newSkillsList.splice(index, 0, skill);
    setSkillsList(newSkillsList);
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
          <div className="skillUpload">
            {skillsList.map((item, index) => (
              <div
                key={index}
                className="skillScroll"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <UnfoldMore sx={{ cursor: "grab" }} />
                <p className="skillHeadScroll">{item.skill}</p>
                {/* <p className="skillHeadScroll">{item.subSkill}</p> */}
                <div className="actionButtons">
                  <Edit
                    className="actionBtn"
                    onClick={() => handleEditClick(index)}
                  />
                  <DeleteOutline
                    className="actionBtn"
                    onClick={() => handleDeleteClick(index)}
                  />
                </div>
              </div>
            ))}
          </div>
          {showInputFields && (
            <div className="formContainer">
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
                {/* <label>Informations/Sub-Skills</label> */}
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
            </div>
          )}
          {!showInputFields && (
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
