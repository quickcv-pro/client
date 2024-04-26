import React, { useState, useEffect } from "react";
import "./assets/resumeinput.css";
import {
  ExpandMore,
  Business,
  Remove,
  UnfoldMore,
  DeleteOutline,
  Edit,
} from "@mui/icons-material";

const ProfessionalExp = ({ onExpChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false);
  const [expList, setExpList] = useState([]);
  const [expData, setExpData] = useState({
    position: "",
    company: "",
    location: "",
    startDate: "",
    stopDate: "",
    info: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddButtonClick = () => {
    setShowInputFields(true);
  };

  const handleApplyButtonClick = () => {
    // Check if at least one input field is not empty
    if (
      expData.position ||
      expData.company ||
      expData.location ||
      expData.startDate ||
      expData.stopDate ||
      expData.info
    ) {
      // Format dates if present
      let formattedExpData = { ...expData };
      if (expData.startDate) {
        const startDate = new Date(expData.startDate);
        formattedExpData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (expData.stopDate) {
        const stopDate = new Date(expData.stopDate);
        formattedExpData.stopDate = stopDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedExpList = [...expList];
        updatedExpList[editingIndex] = formattedExpData;
        setExpList(updatedExpList);
        setEditingIndex(null);
      } else {
        setExpList([...expList, formattedExpData]);
      }
      setExpData({
        position: "",
        company: "",
        location: "",
        startDate: "",
        stopDate: "",
        info: "",
      });
    }
  };

  useEffect(() => {
    onExpChange(expList);
  }, [expList, onExpChange]);

  const handleExpInputChange = (e) => {
    const { name, value } = e.target;
    setExpData((prevData) => ({
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
    const newExpList = [...expList];
    const exp = newExpList[dragIndex];
    newExpList.splice(dragIndex, 1);
    newExpList.splice(index, 0, exp);
    setExpList(newExpList);
  };

  const handleEditClick = (index) => {
    const expToEdit = expList[index];
    setExpData(expToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    const updatedExpList = [...expList];
    updatedExpList.splice(index, 1);
    setExpList(updatedExpList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <Business sx={{ fontSize: "1.5vw" }} />
          Professional Experience
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div className="skillsForm">
          <div className="skillUpload">
            {expList.map((item, index) => (
              <div
                key={index}
                className="skillScroll"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <UnfoldMore sx={{ cursor: "grab" }} />
                <p className="skillHeadScroll">{item.company}</p>
                <p className="skillHeadScroll">{item.stopDate}</p>
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
            <>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Position"
                  name="position"
                  value={expData.position}
                  onChange={handleExpInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={expData.company}
                  onChange={handleExpInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={expData.location}
                  onChange={handleExpInputChange}
                />
              </div>
              <div className="profExpDate">
                <div className="profExpDates">
                  <label>Started</label>
                  <input
                    className="generalShortInput"
                    type="date"
                    name="startDate"
                    value={expData.startDate}
                    onChange={handleExpInputChange}
                  />
                </div>
                <div className="profExpDates">
                  <label>Ended</label>
                  <input
                    className="generalShortInput"
                    type="date"
                    name="stopDate"
                    value={expData.stopDate}
                    onChange={handleExpInputChange}
                  />
                </div>
              </div>
              <div className="skillsFormInput">
                <textarea
                  className="generalTextArea"
                  type="text"
                  placeholder="Informations or Skills used in this position"
                  name="info"
                  value={expData.info}
                  onChange={handleExpInputChange}
                />
              </div>
              <button className="saveButton" onClick={handleApplyButtonClick}>
                Apply
              </button>
            </>
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

export default ProfessionalExp;
