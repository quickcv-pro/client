import React from "react";
import "./assets/resumeDesigns.css";
import { OpenInBrowser, OpenInNew } from "@mui/icons-material";

const AwardDesign = (props) => {
  return (
    <div className="awardContainer">
      <a className="hrefLink" href={props.link}>
        <p className="awardTitle">{props.title}</p>
        <p className="awardDate">,{" "}{props.endDate}</p>
        <OpenInNew sx={{ fontSize: "0.8vw" }} />
      </a>
      <p className="awardBody">{props.body}</p>
      {/* <p className="awardLink">{props.link}</p> */}

      <p className="awardInfo">{props.info}</p>
    </div>
  );
};

export default AwardDesign;
