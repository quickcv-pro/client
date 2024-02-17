import { useState, useEffect } from "react";
import "./assets/resumeinput.css";
import { ExpandMore, Business, Remove, UnfoldMore, DeleteOutline } from "@mui/icons-material";

const ProfessionalExp = ({ onExpChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [expList, setExpList] = useState([]);

  const [expData, setExpData] = useState({
    position: "",
    company: "",
    location: "",
    startDate: "",
    stopDate: "",
    // current: "",
    info: "",
  });

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddButtonClick = () => {
    setShowInputFields(true); // Show input fields when "Add" button is clicked
  };

  const handleApplyButtonClick = () => {
    if (
      expData.position &&
      expData.company &&
      expData.location &&
      expData.startDate &&
      expData.stopDate &&
      expData.info
    ) {
      // Format start and stop dates
      const startDate = new Date(expData.startDate);
      const startMonthYear = startDate.toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      });

      const stopDate = new Date(expData.stopDate);
      const stopMonthYear = stopDate.toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      });

      const formattedExpData = {
        ...expData,
        startDate: startMonthYear,
        stopDate: stopMonthYear,
      };

      setExpList([...expList, formattedExpData]); // Add current skill and subskill to the skillsList array
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
    // Notify the parent component about the changes whenever the skillsList changes
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
                <p className="skillHeadScroll">{item.company}</p>{" "}
                <p className="skillHeadScroll">{item.stopDate}</p>
                <DeleteOutline className="deleteBtn" />
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
                  className="generalShortInput"
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={expData.company}
                  onChange={handleExpInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalShortInput"
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
                    className="profExpDateInput"
                    type="date"
                    name="startDate"
                    value={expData.startDate}
                    onChange={handleExpInputChange}
                  />
                </div>
                <div className="profExpDates">
                  <label>Ended</label>
                  <input
                    className="profExpDateInput"
                    type="date"
                    name="stopDate"
                    value={expData.stopDate}
                    onChange={handleExpInputChange}
                  />
                </div>
                {/* <div className="profExpDatesCheck">
                  <input
                    className="profExpCheck"
                    type="checkbox"
                    id="currentJob"
                    name="current"
                    value={expData.current}
                    onChange={handleExpInputChange}
                  />
                  <label>CurrentJob</label>
                </div> */}
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

export default ProfessionalExp;
