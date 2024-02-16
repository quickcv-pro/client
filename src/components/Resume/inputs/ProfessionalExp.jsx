import { useState } from "react";
import "./assets/resumeinput.css";
import { ExpandMore, Business, Remove } from "@mui/icons-material";

const ProfessionalExp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
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
          <div className="skillsFormInput">
            <input
              className="generalLongInput"
              type="text"
              placeholder="Position"
            />
          </div>
          <div className="skillsFormInput">
            <input
              className="generalShortInput"
              type="text"
              placeholder="Company"
            />
          </div>
          <div className="skillsFormInput">
            <input
              className="generalShortInput"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="profExpDate">
            <div className="profExpDates">
              <label>Started</label>
              <input className="profExpDateInput" type="date" />
            </div>
            <div className="profExpDates">
              <label>Ended</label>
              <input className="profExpDateInput" type="date" />
            </div>
            <div className="profExpDatesCheck">
              <input className="profExpCheck" type="checkbox" id="currentJob" />
              <label>CurrentJob</label>
            </div>
          </div>
          <div className="skillsFormInput">
            <textarea
              className="generalTextArea"
              type="text"
              placeholder="Informations or Skills used in this position"
            />
          </div>
          <button>Add +</button>
        </div>
      )}
    </div>
  );
};

export default ProfessionalExp;
