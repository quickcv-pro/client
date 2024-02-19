import { useEffect, useState } from "react";
import { ExpandMore, ChromeReaderMode, Remove, UnfoldMore, Edit, DeleteOutline } from "@mui/icons-material";

const Course = ({ onCourseChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInputFields, setShowInputFields] = useState(false); // New state to control input field visibility
  const [courseList, setCourseList] = useState([]); // Array to store Edus and subskills
  const [editingIndex, setEditingIndex] = useState(null);

  const [courseData, setCourseData] = useState({
    title: "",
    institute: "",
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
      courseData.title ||
      courseData.institute ||
      courseData.startDate ||
      courseData.endDate ||
      courseData.city ||
      courseData.country ||
      courseData.info
    ) {
      // Format dates if present
      let formattedCourseData = { ...courseData };
      if (courseData.startDate) {
        const startDate = new Date(courseData.startDate);
        formattedCourseData.startDate = startDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }
      if (courseData.endDate) {
        const endDate = new Date(courseData.endDate);
        formattedCourseData.endDate = endDate.toLocaleString("en-US", {
          month: "short",
          year: "numeric",
        });
      }

      if (editingIndex !== null) {
        const updatedCourseList = [...courseList];
        updatedCourseList[editingIndex] = formattedCourseData;
        setCourseList(updatedCourseList);
        setEditingIndex(null);
      } else {
        setCourseList([...courseList, formattedCourseData]);
      }
      setCourseData({
        title: "",
        institute: "",
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
    const courseToEdit = courseList[index];
    setCourseData(courseToEdit);
    setEditingIndex(index);
    setShowInputFields(true);
  };

  const handleDeleteClick = (index) => {
    // Remove the item from the Courses list
    const updatedCourseList = [...courseList];
    updatedCourseList.splice(index, 1);
    setCourseList(updatedCourseList);
  };

  useEffect(() => {
    onCourseChange(courseList);
  }, [courseList, onCourseChange]);

  const handleCourseInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
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
    const newCourseList = [...courseList];
    const course = newCourseList[dragIndex];
    newCourseList.splice(dragIndex, 1);
    newCourseList.splice(index, 0, course);
    setCourseList(newCourseList);
  };

  return (
    <div className="skillsContainer">
      <div className="skillsHeader">
        <h1 className="skillsHero">
          <ChromeReaderMode sx={{ fontSize: "1.5vw" }} />
          Course
        </h1>
        <div className="skillsHero" onClick={handleExpandClick}>
          {isExpanded ? <Remove /> : <ExpandMore />}
        </div>
      </div>
      {isExpanded && (
        <div>
          <div className="skillsForm">
            <div>
              {courseList.map((item, index) => (
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
                    placeholder="Course Title"
                    name="title"
                    value={courseData.title}
                    onChange={handleCourseInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <input
                    className="generalLongInput"
                    type="text"
                    placeholder="Institution|Bootcamp|Body|School"
                    name="institute"
                    value={courseData.institute}
                    onChange={handleCourseInputChange}
                  />
                </div>
                <div className="profileInputs">
                  <input
                    className="generalShortInput"
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    value={courseData.startDate}
                    onChange={handleCourseInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="date"
                    placeholder="End Date"
                    name="endDate"
                    value={courseData.endDate}
                    onChange={handleCourseInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="City or State"
                    name="city"
                    value={courseData.city}
                    onChange={handleCourseInputChange}
                  />
                  <input
                    className="generalShortInput"
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={courseData.country}
                    onChange={handleCourseInputChange}
                  />
                </div>
                <div className="skillsFormInput">
                  <label>Course Information</label>
                  <textarea
                    className="generalTextArea"
                    type="text"
                    placeholder="Information about the Course"
                    name="info"
                    value={courseData.info}
                    onChange={handleCourseInputChange}
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

export default Course;
