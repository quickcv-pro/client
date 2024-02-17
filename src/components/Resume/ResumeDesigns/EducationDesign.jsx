import React from "react";

const EducationDesign = (props) => {
  return (
    <div>
      <p>{props.school}</p>
      <p>{props.field}</p>
      <p>{props.startDate}</p>
      <p>{props.stopDate}</p>
      <p>{props.city}</p>
      <p>{props.info}</p>
    </div>
  );
};

export default EducationDesign;
