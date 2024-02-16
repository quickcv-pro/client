import {
  AddLink,
  ColorLens,
  Email,
  GitHub,
  Home,
  Language,
  Phone,
} from "@mui/icons-material";
import "./assets/resumeDesigns.css";


const ProfileDesign = (props) => {
  return (
    <div className="">
      <div className="classicHeader">
        <div className="classicHeaderBio">
          <h1>{props.fullName || "John Doe"}</h1>
          <p>{props.jobTitle || "Job Title"}</p>

          <div className="classicHeaderLinks">
            {props.email && (
              <p>
                <Email sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.email}
              </p>
            )}
            {props.website && (
              <p>
                <Language sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.website}
              </p>
            )}
            {props.phone && (
              <p>
                <Phone sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.phone}
              </p>
            )}
            {props.address && (
              <p>
                <Home sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.address}
              </p>
            )}
            {props.github && (
              <p>
                <GitHub sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.github}
              </p>
            )}
            {props.benance && (
              <p>
                <ColorLens sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.benance}
              </p>
            )}
            {props.link1 && (
              <p>
                <AddLink sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.link1}
              </p>
            )}
            {props.link2 && (
              <p>
                <AddLink sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {props.link2}
              </p>
            )}
          </div>
        </div>
        <div className="classicLine"></div>
        <div className="classicHeaderProfile">
          <p>
            {props.bio ||
              `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolorem
          tempore nisi sed numquam soluta quod. laudantium laborum dolore tempora eius. Ducimus cupiditate magni dolorum nostrum accusantium quas
          placeat beatae reprehenderit veritatis, culpa ullam. A libero esse non
          laudantium laborum dolore tempora eius. Ducimus cupiditate magni
          veritatis veniam.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDesign;
