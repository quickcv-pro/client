import { RememberMe, ExpandMore, Remove } from "@mui/icons-material";
import "./assets/resumeinput.css";
import { useEffect, useState } from "react";

const ProfileInput = ({ onInputChange }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const [profileData, setProfileData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    website: "",
    phone: "",
    address: "",
    benance: "",
    github: "",
    link1: "",
    link2: "",
    bio: "",
  });

  // For Expand/Collapse Icon
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Notify the parent component about the changes whenever the profileData changes
    onInputChange(profileData);
  }, [profileData, onInputChange]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="profileInputContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <RememberMe sx={{ fontSize: "1.5vw" }} />
          Profile
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div className="profileForm">
          <div className="profileInputs">
            <input
              className="generalShortInput"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={profileData.fullName}
              onChange={handleInputChange}
            />
            <input
              className="generalShortInput"
              type="text"
              placeholder="Job Title"
              name="jobTitle"
              value={profileData.jobTitle}
              onChange={handleInputChange}
            />
            <input
              className="generalShortInput"
              type="text"
              placeholder="Email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
            <input
              className="generalShortInput"
              type="text"
              placeholder="Your Address"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
            />

            <input
              className="generalShortInput"
              type="text"
              placeholder="Phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />
            <input
              className="generalShortInput"
              type="text"
              placeholder="Web Site"
              name="website"
              value={profileData.website}
              onChange={handleInputChange}
            />

            <input
              className="generalShortInput"
              type="text"
              placeholder="benance"
              name="benance"
              value={profileData.benance}
              onChange={handleInputChange}
            />

            <input
              className="generalShortInput"
              type="text"
              placeholder="github"
              name="github"
              value={profileData.github}
              onChange={handleInputChange}
            />
            <input
              className="generalShortInput"
              type="text"
              placeholder="Link 1"
              name="link1"
              value={profileData.link1}
              onChange={handleInputChange}
            />
            <input
              className="generalShortInput"
              type="text"
              placeholder="Link 2"
              name="link2"
              value={profileData.link2}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            className="generalTextArea"
            placeholder="Profile Bio"
            name="bio"
            value={profileData.bios}
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileInput;
