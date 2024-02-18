import { useEffect, useState } from "react";
import {
  ExpandMore,
  School,
  Remove,
  Edit,
  DeleteOutline,
  UnfoldMore,
} from "@mui/icons-material"; // Import Remove icon for the dash

const Education = ({ onEduChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [eduList, setEduList] = useState([]); // Array to store Edus and subskills
  const [editingIndex, setEditingIndex] = useState(null);

  const [eduData, setEduData] = useState({
    school: "",
    field: "",
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
      eduData.school ||
      eduData.field ||
      eduData.startDate ||
      eduData.endDate ||
      eduData.city ||
      eduData.country ||
      eduData.info
    ) {
      // Format dates if present
      let formattedEduData = { ...eduData };
      if (eduData.startDate) {
        const startDate = new Date(eduData.startDate);
        formattedEduData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (eduData.endDate) {
        const endDate = new Date(eduData.endDate);
        formattedEduData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedEduList = [...eduList];
        updatedEduList[editingIndex] = formattedEduData;
        setEduList(updatedEduList);
        setEditingIndex(null);
      } else {
        setEduList([...eduList, formattedEduData]);
      }
      setEduData({
        school: "",
        field: "",
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
     const eduToEdit = eduList[index];
     setEduData(eduToEdit);
     setEditingIndex(index);
     setShowInputFields(true);
   };

   const handleDeleteClick = (index) => {
     // Remove the item from the Edus list
     const updatedEduList = [...eduList];
     updatedEduList.splice(index, 1);
     setEduList(updatedEduList);
   };

  useEffect(() => {
    onEduChange(eduList);
  }, [eduList, onEduChange]);

  const handleEduInputChange = (e) => {
    const { name, value } = e.target;
    setEduData((prevData) => ({
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
    const newEduList = [...eduList];
    const edu = newEduList[dragIndex];
    newEduList.splice(dragIndex, 1);
    newEduList.splice(index, 0, edu);
    setEduList(newEduList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <School sx={{ fontSize: "1.5vw" }} />
          Education | Course
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div>
          <div className="skillsForm">
            <div>
              {eduList.map((item, index) => (
                <div
                  key={index}
                  className="skillScroll"
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <UnfoldMore sx={{ cursor: "grab" }} />
                  <p className="skillHeadScroll">{item.school}</p>
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
                    placeholder="School"
                    name="school"
                    value={eduData.school}
                    onChange={handleEduInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <input
                    className="generalLongInput"
                    type="text"
                    placeholder="Field"
                    name="field"
                    value={eduData.field}
                    onChange={handleEduInputChange}
                  />
                </div>
                <div className="profileInputs">
                  <input
                    className="generalShortInput"
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={eduData.startDate}
                    onChange={handleEduInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    value={eduData.endDate}
                    onChange={handleEduInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="City or State"
                    name="city"
                    value={eduData.city}
                    onChange={handleEduInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={eduData.country}
                    onChange={handleEduInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <label>Education Information</label>
                  <textarea
                    className="generalTextArea"
                    type="text"
                    placeholder="Education Information"
                    name="info"
                    value={eduData.info}
                    onChange={handleEduInputChange}
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

export default Education;
