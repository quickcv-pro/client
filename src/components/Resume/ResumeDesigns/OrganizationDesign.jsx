import React from 'react'

const OrganizationDesign = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.position}</p>
      <p>{props.startDate}</p>
      <p>{props.endDate}</p>
      <p>{props.location}</p>
      <p>{props.info}</p>
      {/* <p>{props.title}</p> */}
    </div>
  );
}

export default OrganizationDesign