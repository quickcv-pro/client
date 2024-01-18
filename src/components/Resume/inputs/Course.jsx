import { useState } from "react";
import { ExpandMore, ChromeReaderMode, Remove } from "@mui/icons-material";

const Course = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <ChromeReaderMode sx={{ fontSize: "1.5vw" }} />
          Course
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
                placeholder="Course Title"
              />
            </div>
            <div className="skillsFormInput">
              <input
                className="generalLongInput"
                type="text"
                placeholder="Institution|Bootcamp|Body"
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
              <label>Course Information</label>
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

export default Course;
