import { useEffect, useState } from "react";
import styles from "./ExperienceForm.module.css";
import EducationForm from "../EducationForm/EducationForm";

export default function ExperienceFrom({
  toggleFormVisibility,
  currentExperienceData,
  handleExperienceInput,
  addExperienceData,
}) {
  const [experienceData, setExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (currentExperienceData) {
      setExperienceData(currentExperienceData);
    }
  }, [currentExperienceData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Pass the updated education data to the parent component
    handleExperienceInput({
      ...experienceData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleExperienceInput(experienceData);

    setExperienceData({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });

    addExperienceData();
    toggleFormVisibility();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    toggleFormVisibility();
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <div className="Company Name">
          <label>Company Name</label>
          <input
            name="companyName"
            value={experienceData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="Position Title">
          <label>Position Title</label>
          <input
            name="positionTitle"
            value={experienceData.positionTitle}
            onChange={handleChange}
          />
        </div>
        <div className={styles.dates}>
          <div>
            <label>Start Date</label>
            <input
              name="startDate"
              value={experienceData.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              name="endDate"
              value={experienceData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="location">
          <label>Location</label>
          <input
            name="location"
            value={experienceData.location}
            onChange={handleChange}
          />
        </div>
        <div className="description">
          <label>Description</label>
          <input
            name="description"
            value={experienceData.description}
            onChange={handleChange}
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.savebtn} type="submit">
            Submit
          </button>

          <button className={styles.cancelbtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
