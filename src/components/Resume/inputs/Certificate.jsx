import { useEffect, useState } from "react";
import {
  ExpandMore,
  WorkspacePremium,
  Remove,
  UnfoldMore,
  Edit,
  DeleteOutline,
} from "@mui/icons-material";

const Certificate = ({ onCertChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [certList, setCertList] = useState([]);

  const [certData, setCertData] = useState({
    certification: "",
    organization: "",
    link: "",
    dDate: ""
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
      certData.certification ||
      certData.organization ||
      certData.link ||
      certData.dDate
    ) {
      // Format dates if present
      let formattedCertData = { ...certData };
      if (certData.startDate) {
        const startDate = new Date(certData.startDate);
        formattedCertData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (certData.endDate) {
        const endDate = new Date(certData.endDate);
        formattedCertData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedCertList = [...certList];
        updatedCertList[editingIndex] = formattedCertData;
        setCertList(updatedCertList);
        setEditingIndex(null);
      } else {
        setCertList([...certList, formattedCertData]);
      }
      setCertData({
        certification: "",
        organization: "",
        link: "",
        dDate: "",
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
    // Remove the item from the Certs list
    const updatedCertList = [...certList];
    updatedCertList.splice(index, 1);
    setCertList(updatedCertList);
  };

  useEffect(() => {
    onCertChange(certList);
  }, [certList, onCertChange]);

  const handleCertInputChange = (e) => {
    const { name, value } = e.target;
    setCertData((prevData) => ({
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
    const newCertList = [...certList];
    const cert = newCertList[dragIndex];
    newCertList.splice(dragIndex, 1);
    newCertList.splice(index, 0, cert);
    setCertList(newCertList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <WorkspacePremium sx={{ fontSize: "1.5vw" }} />
          Certificate
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div className="skillsForm">
          <div>
            {certList.map((item, index) => (
              <div
                key={index}
                className="skillScroll"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <UnfoldMore sx={{ cursor: "grab" }} />
                <p className="skillHeadScroll">{item.certification}</p>
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
                  placeholder="Certification"
                  name="certification"
                  value={certData.certification}
                  onChange={handleCertInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Organisation/Institution/Body"
                  name="organization"
                  value={certData.organization}
                  onChange={handleCertInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <input
                  className="generalLongInput"
                  type="text"
                  placeholder="Link"
                  name="link"
                  value={certData.link}
                  onChange={handleCertInputChange}
                />
              </div>
              <div className="skillsFormInput">
                <label>Date Issued</label>
                <input
                  className="generalLongInput"
                  type="date"
                  placeholder="Date"
                  name="dDate"
                  value={certData.dDate}
                  onChange={handleCertInputChange}
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

export default Certificate;
