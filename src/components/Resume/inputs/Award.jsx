import { useEffect, useState } from "react";
import { DeleteOutline, Edit, ExpandMore, MilitaryTech, Remove, UnfoldMore } from "@mui/icons-material";

const Award = ({ onAwardChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [awardList, setAwardList] = useState([]); // Array to store Edus and subskills
  const [editingIndex, setEditingIndex] = useState(null);

  const [awardData, setAwardData] = useState({
    title: "",
    body: "",
    link: "",
    endDate: "",
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
      awardData.title ||
      awardData.body ||
      awardData.link ||
      awardData.endDate ||
      awardData.info
    ) {
      // Format dates if present
      let formattedAwardData = { ...awardData };
      if (awardData.startDate) {
        const startDate = new Date(awardData.startDate);
        formattedAwardData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (awardData.endDate) {
        const endDate = new Date(awardData.endDate);
        formattedAwardData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedAwardList = [...awardList];
        updatedAwardList[editingIndex] = formattedAwardData;
        setAwardList(updatedAwardList);
        setEditingIndex(null);
      } else {
        setAwardList([...awardList, formattedAwardData]);
      }
      setAwardData({
        title: "",
        body: "",
        link: "",
        endDate: "",
        info: "",
      });
    }
  };

  const handleEditClick = (index) => {
    // Set the data of the item being edited to input fields
    const awardToEdit = awardList[index];
    setAwardData(awardToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    // Remove the item from the Awards list
    const updatedAwardList = [...awardList];
    updatedAwardList.splice(index, 1);
    setAwardList(updatedAwardList);
  };

  useEffect(() => {
    onAwardChange(awardList);
  }, [awardList, onAwardChange]);

  const handleAwardInputChange = (e) => {
    const { name, value } = e.target;
    setAwardData((prevData) => ({
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
    const newAwardList = [...awardList];
    const award = newAwardList[dragIndex];
    newAwardList.splice(dragIndex, 1);
    newAwardList.splice(index, 0, award);
    setAwardList(newAwardList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <MilitaryTech sx={{ fontSize: "1.5vw" }} />
          Awards
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div className="skillsForm">
          <div>
            {awardList.map((item, index) => (
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
                  placeholder="Award"
                  name="title"
                  value={awardData.title}
                  onChange={handleAwardInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Organisation/Institution/Body"
                  name="body"
                  value={awardData.body}
                  onChange={handleAwardInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Link"
                  name="link"
                  value={awardData.link}
                  onChange={handleAwardInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="date"
                  placeholder="Date"
                  name="endDate"
                  value={awardData.endDate}
                  onChange={handleAwardInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <label>Award Information</label>
                <textarea
                  className="generalTextArea"
                  type="text"
                  placeholder="Info"
                  name="info"
                  value={awardData.info}
                  onChange={handleAwardInputChange}
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

export default Award;
