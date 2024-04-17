import React from "react";

const CertificationDesign = (props) => {
  return (
    <div className="mainCertContainer ml-[3rem] ">
      <div className="certContainer">
        <p className="certCert">{props.certification}</p>
        <p className="certOrg">{props.organization}</p>
        <a
          className="certLink"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
        <p className="certDate">{props.dDate}</p>
      </div>
    </div>
  );
};

export default CertificationDesign;
