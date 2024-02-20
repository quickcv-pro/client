import React from "react";
import "./assets/resumeDesigns.css";
import { ArrowRightAlt } from "@mui/icons-material";

const ExperienceDesign = (props) => {
  return (
    <div className="expContainer">
      <div className="exptTop">
        <div className="expLeft">
          <p className="expPosition">
            <span className="exPositionSpan">{props.position}</span>,{" "}
            {props.company}
          </p>
          <div className="expInfo">
            <p className="expInfoText">{props.info}</p>
          </div>
        </div>
        <div className="expRight">
          <div className="expDate">
            <p>{props.startDate}</p> <ArrowRightAlt sx={{ fontSize: "1vw" }} />{" "}
            <p>{props.stopDate}</p>
          </div>
          <div className="expLocation">
            <p className="expLocationText">{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDesign;
