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
import SkillsDesign from "./SkillsDesign";

const ClassicsDesign = ({ profileData, skillData }) => {
  return (
    <div className="resGeneralContainer">
      <div className="classicHeader">
        <div className="classicHeaderBio">
          <h1>{profileData.fullName || "John Doe"}</h1>
          <p>{profileData.jobTitle || "Job Title"}</p>

          <div className="classicHeaderLinks">
            {profileData.email && (
              <p>
                <Email sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.email}
              </p>
            )}
            {profileData.website && (
              <p>
                <Language sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.website}
              </p>
            )}
            {profileData.phone && (
              <p>
                <Phone sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.phone}
              </p>
            )}
            {profileData.address && (
              <p>
                <Home sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.address}
              </p>
            )}
            {profileData.github && (
              <p>
                <GitHub sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.github}
              </p>
            )}
            {profileData.benance && (
              <p>
                <ColorLens sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.benance}
              </p>
            )}
            {profileData.link1 && (
              <p>
                <AddLink sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.link1}
              </p>
            )}
            {profileData.link2 && (
              <p>
                <AddLink sx={{ fontSize: "1vw", marginRight: "0.1vw" }} />
                {profileData.link2}
              </p>
            )}
          </div>
        </div>
        <div className="classicLine"></div>
        <div className="classicHeaderProfile">
          <p>
            {profileData.bio ||
              `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolorem
          tempore nisi sed numquam soluta quod. laudantium laborum dolore tempora eius. Ducimus cupiditate magni dolorum nostrum accusantium quas
          placeat beatae reprehenderit veritatis, culpa ullam. A libero esse non
          laudantium laborum dolore tempora eius. Ducimus cupiditate magni
          veritatis veniam.`}
          </p>
        </div>
        <div className="classicLine"></div>
        <div>
          <SkillsDesign skill={skillData.skill} subSkill={skillData.subSkill} />
        </div>
        <div className="classicLine"></div>
      </div>
    </div>
  );
};

export default ClassicsDesign;
