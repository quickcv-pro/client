import { useState } from "react";
import { ExpandMore, Token, Remove } from "@mui/icons-material"; // Import Remove icon for the dash

const Project = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <Token sx={{ fontSize: "1.5vw" }} />
          Project
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div>
          <div className="skillsForm">
            <div className="skillsFormInput">
              <input
                className="generalLongInput"
                type="text"
                placeholder="Project Title"
              />
            </div>
            <div className="skillsFormInput">
              <input
                className="generalLongInput"
                type="text"
                placeholder="Project Subtitle"
              />
            </div>
            <div className="profileInputs">
              <input
                className="generalShortInput"
                type="date"
                placeholder="Start Date"
                name="startDate"
              />
              <input
                className="generalShortInput"
                type="date"
                placeholder="End Date"
                name="endDate"
              />
              <input
                className="generalShortInput"
                type="text"
                placeholder="City or State"
                name="city"
              />
              <input
                className="generalShortInput"
                type="text"
                placeholder="Country"
                name="country"
              />
            </div>
            <div className="skillsFormInput">
              <label>Project Information</label>
              <textarea
                className="generalTextArea"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
