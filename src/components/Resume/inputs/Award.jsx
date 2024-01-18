import { useState } from "react";
import { ExpandMore, MilitaryTech, Remove } from "@mui/icons-material";

const Award = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <MilitaryTech sx={{ fontSize: "1.5vw" }} />
          Awards
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
              placeholder="Award"
            />
          </div>
          <div className="skillsFormInput">
            <input
              className="generalLongInput"
              type="text"
              placeholder="Organisation/Institution/Body"
            />
          </div>
          <div className="skillsFormInput">
            <input
              className="generalLongInput"
              type="text"
              placeholder="Link"
            />
          </div>
          <div className="skillsFormInput">
            <input
              className="generalLongInput"
              type="date"
              placeholder="Link"
            />
          </div>
          <div className="skillsFormInput">
            <label>Award Information</label>
            <textarea className="generalTextArea" type="text" placeholder="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Award;
