import { useState } from "react";
import { ExpandMore, WorkspacePremium, Remove } from "@mui/icons-material";

const Certificate = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <WorkspacePremium sx={{ fontSize: "1.5vw" }} />
          Certificate 
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
              placeholder="Certification"
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
        </div>
      )}
    </div>
  );
};

export default Certificate;
