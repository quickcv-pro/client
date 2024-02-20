import { useEffect, useState } from "react";
import {
  DeleteOutline,
  Edit,
  ExpandMore,
  Interests,
  Remove,
  UnfoldMore,
} from "@mui/icons-material";

const Interest = ({ onInterestChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [interestList, setInterestList] = useState([]); // Array to store skills and subskills
  const [editingIndex, setEditingIndex] = useState(null); // State to track which item is being edited

  const [interestData, setInterestData] = useState({
    interest: "",
  });

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddButtonClick = () => {
    setShowInputFields(true); // Show input fields when "Add" button is clicked
  };

  const handleApplyButtonClick = () => {
    // Check if at least one input field is not empty
    if (interestData.interest) {
      if (editingIndex !== null) {
        const updatedInterestList = [...interestList];
        updatedInterestList[editingIndex] = interestData;
        setInterestList(updatedInterestList);
        setEditingIndex(null);
      } else {
        setInterestList([...interestList, interestData]);
      }
      setInterestData({ interest: "" });
    }
  };
  const handleEditClick = (index) => {
    // Set the data of the item being edited to input fields
    const interestToEdit = interestList[index];
    setInterestData(interestToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    // Remove the item from the Interests list
    const updatedInterestList = [...interestList];
    updatedInterestList.splice(index, 1);
    setInterestList(updatedInterestList);
  };

  useEffect(() => {
    onInterestChange(interestList);
  }, [interestList, onInterestChange]);

  const handleInterestInputChange = (e) => {
    const { name, value } = e.target;
    setInterestData((prevData) => ({
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
    const newInterestList = [...interestList];
    const interest = newInterestList[dragIndex];
    newInterestList.splice(dragIndex, 1);
    newInterestList.splice(index, 0, interest);
    setInterestList(newInterestList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <Interests sx={{ fontSize: "1.5vw" }} />
          Interests | Hobby
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>

      {isExpanded && (
        <div className="skillsForm">
          <div>
            {interestList.map((item, index) => (
              <div
                key={index}
                className="skillScroll"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <UnfoldMore sx={{ cursor: "grab" }} />
                <p className="skillHeadScroll">{item.interest}</p>
                {/* <p className="skillHeadScroll">{item.subSkill}</p> */}
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
                  placeholder="eg. Reading, writing"
                  name="interest"
                  value={interestData.interest}
                  onChange={handleInterestInputChange}
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

export default Interest;
