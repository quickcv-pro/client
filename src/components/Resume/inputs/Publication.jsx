import { useState } from "react";
import { ExpandMore, Newspaper, Remove } from "@mui/icons-material";

const Publication = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <Newspaper sx={{ fontSize: "1.5vw" }} />
          Publication
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
              placeholder="Publication"
            />
          </div>
          <div className="skillsFormInput">
            <input
              className="generalLongInput"
              type="text"
              placeholder="Publisher Name"
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
            <label>Publication Information</label>
            <textarea className="generalTextArea" type="text" placeholder="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Publication;
