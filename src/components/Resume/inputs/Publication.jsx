import { useEffect, useState } from "react";
import {
  DeleteOutline,
  Edit,
  ExpandMore,
  Newspaper,
  Remove,
  UnfoldMore,
} from "@mui/icons-material";

const Publication = ({ onPubChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [pubList, setPubList] = useState([]); // Array to store Pubs and subskills
  const [editingIndex, setEditingIndex] = useState(null);

  const [pubData, setPubData] = useState({
    title: "",
    publisher: "",
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
      pubData.title ||
      pubData.publisher ||
      pubData.link ||
      pubData.endDate ||
      pubData.info
    ) {
      // Format dates if present
      let formattedPubData = { ...pubData };
      if (pubData.endDate) {
        const endDate = new Date(pubData.endDate);
        formattedPubData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (pubData.endDate) {
        const endDate = new Date(pubData.endDate);
        formattedPubData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedPubList = [...pubList];
        updatedPubList[editingIndex] = formattedPubData;
        setPubList(updatedPubList);
        setEditingIndex(null);
      } else {
        setPubList([...pubList, formattedPubData]);
      }
      setPubData({
        title: "",
        publisher: "",
        link: "",
        endDate: "",
        info: "",
      });
    }
  };

  const handleEditClick = (index) => {
    // Set the data of the item being edited to input fields
    const pubToEdit = pubList[index];
    setPubData(pubToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    // Remove the item from the Pubs list
    const updatedPubList = [...pubList];
    updatedPubList.splice(index, 1);
    setPubList(updatedPubList);
  };

  useEffect(() => {
    onPubChange(pubList);
  }, [pubList, onPubChange]);

  const handlePubInputChange = (e) => {
    const { name, value } = e.target;
    setPubData((prevData) => ({
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
    const newPubList = [...pubList];
    const pub = newPubList[dragIndex];
    newPubList.splice(dragIndex, 1);
    newPubList.splice(index, 0, pub);
    setPubList(newPubList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <Newspaper sx={{ fontSize: "1.5vw" }} />
          Publication
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div className="skillsForm">
          <div>
            {pubList.map((item, index) => (
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
                  placeholder="Publication"
                  name="title"
                  value={pubData.title}
                  onChange={handlePubInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Publisher"
                  name="publisher"
                  value={pubData.publisher}
                  onChange={handlePubInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Link"
                  name="link"
                  value={pubData.link}
                  onChange={handlePubInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="date"
                  name="endDate"
                  value={pubData.endDate}
                  onChange={handlePubInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <textarea
                  className="generalTextArea"
                  type="text"
                  placeholder="Publication Information"
                  name="info"
                  value={pubData.info}
                  onChange={handlePubInputChange}
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

export default Publication;
