import { useEffect, useState } from "react";
import {
  ExpandMore,
  Token,
  Remove,
  Edit,
  DeleteOutline,
  UnfoldMore,
} from "@mui/icons-material"; // Import Remove icon for the dash


const Project = ({ onProjectChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [projectList, setProjectList] = useState([]); // Array to store Edus and subskills
  const [editingIndex, setEditingIndex] = useState(null);

  const [projectData, setProjectData] = useState({
    title: "",
    subTitle: "",
    startDate: "",
    endDate: "",
    city: "",
    country: "",
    info: "",
  });

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddButtonClick = () => {
    setShowInputFields(true);
  };

  const handleApplyButtonClick = () => {
    // Check if at least one input field is not empty
    if (
      projectData.title ||
      projectData.subTitle ||
      projectData.startDate ||
      projectData.endDate ||
      projectData.city ||
      projectData.country ||
      projectData.info
    ) {
      // Format dates if present
      let formattedProjectData = { ...projectData };
      if (projectData.startDate) {
        const startDate = new Date(projectData.startDate);
        formattedProjectData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (projectData.endDate) {
        const endDate = new Date(projectData.endDate);
        formattedProjectData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedProjectList = [...projectList];
        updatedProjectList[editingIndex] = formattedProjectData;
        setProjectList(updatedProjectList);
        setEditingIndex(null);
      } else {
        setProjectList([...projectList, formattedProjectData]);
      }
      setProjectData({
        title: "",
        subTitle: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        info: "",
      });
    }
  };

  const handleEditClick = (index) => {
    // Set the data of the item being edited to input fields
    const projectToEdit = projectList[index];
    setProjectData(projectToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    // Remove the item from the Projects list
    const updatedProjectList = [...projectList];
    updatedProjectList.splice(index, 1);
    setProjectList(updatedProjectList);
  };

  useEffect(() => {
    onProjectChange(projectList);
  }, [projectList, onProjectChange]);

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData("index");
    const newProjectList = [...projectList];
    const project = newProjectList[dragIndex];
    newProjectList.splice(dragIndex, 1);
    newProjectList.splice(index, 0, project);
    setProjectList(newProjectList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <Token sx={{ fontSize: "1.5vw" }} />
          Project
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div>
          <div className="skillsForm">
            <div>
              {projectList.map((item, index) => (
                <div
                  key={index}
                  className="skillScroll"
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <UnfoldMore sx={{ cursor: "grab" }} />
                  <p className="skillHeadScroll">{item.title}</p>
                  <div className="actionButtons">
                    <Edit
                      className="actionBtn"
                      onClick={() => handleEditClick(index)}
                    />
                    <DeleteOutline
                      className="actionBtn"
                      onClick={() => handleDeleteClick(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            {showInputFields && (
              <>
                <div className="skillsFormInput">
                  <input
                    className="generalLongInput"
                    type="text"
                    placeholder="Project Title"
                    name="title"
                    value={projectData.title}
                    onChange={handleProjectInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <input
                    className="generalLongInput"
                    type="text"
                    placeholder="Project Subtitle"
                    name="subTitle"
                    value={projectData.subTitle}
                    onChange={handleProjectInputChange}
                  />
                </div>
                <div className="profileInputs">
                  <input
                    className="generalShortInput"
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={projectData.startDate}
                    onChange={handleProjectInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    value={projectData.endDate}
                    onChange={handleProjectInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="City or State"
                    name="city"
                    value={projectData.city}
                    onChange={handleProjectInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={projectData.country}
                    onChange={handleProjectInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <label>Project Information</label>
                  <textarea
                    className="generalTextArea"
                    type="text"
                    placeholder="info"
                    name="info"
                    value={projectData.info}
                    onChange={handleProjectInputChange}
                  />
                </div>
                <button className="saveButton" onClick={handleApplyButtonClick}>
                  Apply
                </button>
              </>
            )}
            {!showInputFields && (
              <button className="addButton" onClick={handleAddButtonClick}>
                Add+
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
