import { useEffect, useState } from "react";
import { ExpandMore, SupervisorAccount, Remove, UnfoldMore, Edit, DeleteOutline } from "@mui/icons-material"; // Import Remove icon for the dash

const Reference = ({ onRefChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [refList, setRefList] = useState([]); // Array to store Refs and subskills
  const [editingIndex, setEditingIndex] = useState(null);

  const [refData, setRefData] = useState({
    name: "",
    job: "",
    company: "",
    phone: "",
    city: "",
    country: "",
    email: "",
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
      refData.name ||
      refData.job ||
      refData.company ||
      refData.phone ||
      refData.city ||
      refData.country ||
      refData.email
    ) {
      // Format dates if present
      let formattedRefData = { ...refData };
      if (refData.startDate) {
        const startDate = new Date(refData.startDate);
        formattedRefData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (refData.endDate) {
        const endDate = new Date(refData.endDate);
        formattedRefData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedRefList = [...refList];
        updatedRefList[editingIndex] = formattedRefData;
        setRefList(updatedRefList);
        setEditingIndex(null);
      } else {
        setRefList([...refList, formattedRefData]);
      }
      setRefData({
        name: "",
        job: "",
        company: "",
        phone: "",
        city: "",
        country: "",
        email: "",
      });
    }
  };

  const handleEditClick = (index) => {
    // Set the data of the item being edited to input fields
    const refToEdit = RefList[index];
    setRefData(refToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    // Remove the item from the Refs list
    const updatedRefList = [...refList];
    updatedRefList.splice(index, 1);
    setRefList(updatedRefList);
  };

  useEffect(() => {
    onRefChange(refList);
  }, [refList, onRefChange]);

  const handleRefInputChange = (e) => {
    const { name, value } = e.target;
    setRefData((prevData) => ({
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
    const newRefList = [...refList];
    const ref = newRefList[dragIndex];
    newRefList.splice(dragIndex, 1);
    newRefList.splice(index, 0, ref);
    setRefList(newRefList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <SupervisorAccount sx={{ fontSize: "1.5vw" }} />
          Reference
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div>
          <div className="skillsForm">
            <div>
              {refList.map((item, index) => (
                <div
                  key={index}
                  className="skillScroll"
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <UnfoldMore sx={{ cursor: "grab" }} />
                  <p className="skillHeadScroll">{item.name}</p>
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
                    placeholder="Reference Name"
                    name="name"
                    value={refData.name}
                    onChange={handleRefInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <input
                    className="generalLongInput"
                    type="text"
                    placeholder="Reference Poisition | Job Title"
                    name="job"
                    value={refData.job}
                    onChange={handleRefInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <input
                    className="generalLongInput"
                    type="text"
                    placeholder="Organization | Company"
                    name="company"
                    value={refData.company}
                    onChange={handleRefInputChange}
                  />
                </div>
                <div className="profileInputs">
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={refData.phone}
                    onChange={handleRefInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={refData.email}
                    onChange={handleRefInputChange}
                  />
                </div>
                <div className="profileInputs">
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="City or State"
                    name="city"
                    value={refData.city}
                    onChange={handleRefInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={refData.country}
                    onChange={handleRefInputChange}
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

export default Reference;
