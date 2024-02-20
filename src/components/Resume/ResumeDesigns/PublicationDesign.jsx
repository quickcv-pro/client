import React from "react";

const PublicationDesign = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.publisher}</p>
      <p>{props.endDate}</p>
      <p>{props.link}</p>
      <p>{props.info}</p>
    </div>
  );
};

export default PublicationDesign;
