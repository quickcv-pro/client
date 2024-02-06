import React from "react";
import "./assets/resumeDesigns.css";

const SkillsDesign = (props) => {
  return (
    <div className="skillDesignContainer">
      <div className="skillDesingCards">
        <div className="skillDesingMain">{props.skill || "Programming"}</div>
        <div className="skillDesingSub">
          {props.subSkill ||
            "Python, Javascript, golang,creamnmcv, fJavascript, golang, icecreamnmcv, fJavascript, golang, icecreamnmcv, fJavascript, golang, ice creamnmcv, fJavascript, golang, ice-cream, creamoij, food,  errands, Javascript, golang, ice-cr09, cream,Javascript"}
        </div>
      </div>
    </div>
  );
};

export default SkillsDesign;
