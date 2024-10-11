import { useState } from "react";
import styles from "./ExperienceForm.module.css";

export default function ExperienceFrom({
  handleFormInput,
  toggleFormVisibility,
}) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPostitionTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExperienceData = {
      companyName,
      positionTitle,
      startDate,
      endDate,
      location,
      description,
    };
    handleFormInput(newExperienceData);
    setCompanyName("");
    setPostitionTitle("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setDescription("");
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="Position Title">
          <label>Position Title</label>
          <input
            value={positionTitle}
            onChange={(e) => setPostitionTitle(e.target.value)}
          />
        </div>
        <div className={styles.dates}>
          <div>
            <label>Start Date</label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="location">
          <label>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="description">
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
