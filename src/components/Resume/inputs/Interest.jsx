import { useState } from "react";
import { ExpandMore, Interests, Remove } from "@mui/icons-material";

const Interest = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <Interests sx={{ fontSize: "1.5vw" }} />
          Interests | Hobby
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
              placeholder="eg. Reading, writing"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Interest;
