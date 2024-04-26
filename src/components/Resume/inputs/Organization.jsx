import { useEffect, useState } from "react";
import "./assets/resumeinput.css";
import {
  ExpandMore,
  CorporateFare,
  Remove,
  UnfoldMore,
  Edit,
  DeleteOutline,
} from "@mui/icons-material";

const Organization = ({ onOrgChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false);
  const [orgList, setOrgList] = useState([]);
  const [orgData, setOrgData] = useState({
    title: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    info: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddButtonClick = () => {
    setShowInputFields(true);
  };

  const handleApplyButtonClick = () => {
    // Check if at least one input field is not empty
    if (
      orgData.position ||
      orgData.company ||
      orgData.location ||
      orgData.startDate ||
      orgData.endDate ||
      orgData.info
    ) {
      // Format dates if present
      let formattedOrgData = { ...orgData };
      if (orgData.startDate) {
        const startDate = new Date(orgData.startDate);
        formattedOrgData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (orgData.endDate) {
        const endDate = new Date(orgData.endDate);
        formattedOrgData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedOrgList = [...orgList];
        updatedOrgList[editingIndex] = formattedOrgData;
        setOrgList(updatedOrgList);
        setEditingIndex(null);
      } else {
        setOrgList([...orgList, formattedOrgData]);
      }
      setOrgData({
        position: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        info: "",
      });
    }
  };

  useEffect(() => {
    onOrgChange(orgList);
  }, [orgList, onOrgChange]);

  const handleOrgInputChange = (e) => {
    const { name, value } = e.target;
    setOrgData((prevData) => ({
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
    const newOrgList = [...orgList];
    const org = newOrgList[dragIndex];
    newOrgList.splice(dragIndex, 1);
    newOrgList.splice(index, 0, org);
    setOrgList(newOrgList);
  };

  const handleEditClick = (index) => {
    const orgToEdit = orgList[index];
    setOrgData(orgToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    const updatedOrgList = [...orgList];
    updatedOrgList.splice(index, 1);
    setOrgList(updatedOrgList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <CorporateFare sx={{ fontSize: "1.5vw" }} />
          Organization
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div className="skillsForm">
          <div className="skillUpload">
            {orgList.map((item, index) => (
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
                {/* <p className="skillHeadScroll">{item.endDate}</p> */}
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
                  placeholder="Organization Name"
                  name="title"
                  value={orgData.title}
                  onChange={handleOrgInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Position"
                  name="position"
                  value={orgData.position}
                  onChange={handleOrgInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={orgData.location}
                  onChange={handleOrgInputChange}
                />
              </div>
              <div className="profExpDate">
                <div className="profExpDates">
                  <label>Started</label>
                  <input
                    className="generalShortInput"
                    type="date"
                    name="startDate"
                    value={orgData.startDate}
                    onChange={handleOrgInputChange}
                  />
                </div>
                <div className="profExpDates">
                  <label>Ended</label>
                  <input
                    className="generalShortInput"
                    type="date"
                    name="endDate"
                    value={orgData.endDate}
                    onChange={handleOrgInputChange}
                  />
                </div>
                {/* <div className="profExpDatesCheck">
              <input className="profExpCheck" type="checkbox" id="currentJob" />
              <label>CurrentJob</label>
            </div> */}
              </div>
              <div className="skillsFormInput">
                <textarea
                  className="generalTextArea"
                  type="text"
                  placeholder="Information"
                  name="Info"
                  value={orgData.Info}
                  onChange={handleOrgInputChange}
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
      )}
    </div>
  );
};

export default Organization;
