import { useState } from "react";
import { ExpandMore, SupervisorAccount, Remove } from "@mui/icons-material"; // Import Remove icon for the dash

const Reference = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <SupervisorAccount sx={{ fontSize: "1.5vw" }} />
          Reference
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
                placeholder="Reference Name"
              />
            </div>
            <div className="skillsFormInput">
              <input
                className="generalLongInput"
                type="text"
                placeholder="Reference Poisition|Job Title"
              />
            </div>
            <div className="skillsFormInput">
              <input
                className="generalLongInput"
                type="text"
                placeholder="Organization"
              />
            </div>
            <div className="profileInputs">
              <input
                className="generalShortInput"
                type="text"
                placeholder="City or State"
                name="Phone"
              />
              <input
                className="generalShortInput"
                type="text"
                placeholder="Country"
                name="Email"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reference;
