import React from "react";

const ReferenceDesign = (props) => {
  return (
    <div className=" ml-[3rem]">
      <p>{props.name}</p>
      <p>{props.job}</p>
      <p>{props.company}</p>
      <p>{props.city}</p>
      <p>{props.country}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default ReferenceDesign;
