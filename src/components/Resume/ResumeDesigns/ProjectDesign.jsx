import React from "react";
import "./assets/resumeDesigns.css";
import { ArrowRightAlt } from "@mui/icons-material";

const ProjectDesign = (props) => {
  return (
    <div className="expContainer">
      <div className="exptTop">
        <div className="expLeft">
          <p className="expPosition">
            <span className="exPositionSpan">{props.title}</span>,{" "}
            {props.subTitle}
          </p>
          <div className="expInfo">
            <p className="expInfoText">{props.info}</p>
          </div>
        </div>
        <div className="expRight">
          <div className="expDate">
            <p>{props.startDate}</p> <ArrowRightAlt sx={{ fontSize: "1vw" }} />{" "}
            <p>{props.endDate}</p>
          </div>
          <div className="expLocation">
            <p className="expLocationText">
              {props.city}, {props.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesign;

