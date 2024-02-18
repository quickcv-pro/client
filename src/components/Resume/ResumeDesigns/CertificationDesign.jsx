import React from "react";

const CertificationDesign = (props) => {
  return (
    <div>
      <p>{props.certification}</p>
      <p>{props.organization}</p>
      <p>{props.link}</p>
      <p>{props.dDate}</p>
    </div>
  );
};

export default CertificationDesign;
