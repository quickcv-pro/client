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
      <div className="skillDesingCards">
        <div className="skillDesingMain">{props.skill || "Javascript"}</div>
        <div className="skillDesingSub">
          {props.subSkill ||
            "Python, Java, Javascript, golang, ice-cream, cream, fJavascript, golang, ice-cream, cream, food,  errands, Javascript, golang, ice-creaonb, cream, food, errands"}
        </div>
      </div>
      <div className="skillDesingCards">
        <div className="skillDesingMain">{props.skill || "Sodang"}</div>
        <div className="skillDesingSub">
          {props.subSkill ||
            "Python, Java, Javascript avascript, golang, ice-cream, cream, fJavascript, golang, ice-cream, cream, food,  errands, Javascript, golang, ice-cream, cream,"}
        </div>
      </div>
      <div className="skillDesingCards">
        <div className="skillDesingMain">{props.skill || "Motocycles"}</div>
        <div className="skillDesingSub">
          {props.subSkill || "Python, Java, Javascript"}
        </div>
      </div>
    </div>
  );
};

export default SkillsDesign;
