import { useEffect, useState } from "react";
import styles from "./EducationForm.module.css";

export default function EducationForm({
  toggleFormVisibility,
  currentEducationData,
  handleEducationInput,
  addEducationData,
}) {
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    score: "",
  });

  useEffect(() => {
    if (currentEducationData) {
      setEducationData(currentEducationData);
    }
  }, [currentEducationData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Pass the updated education data to the parent component
    handleEducationInput({
      ...educationData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEducationInput(educationData); // Pass the complete education data
    setEducationData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      score: "",
    });
    addEducationData();
    toggleFormVisibility();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    toggleFormVisibility();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="school">
          <label>School</label>
          <input
            name="school"
            value={educationData.school}
            onChange={handleChange}
          />
        </div>
        <div className="Degree">
          <label>Degree</label>
          <input
            name="degree"
            value={educationData.degree}
            onChange={handleChange}
          />
        </div>
        <div className={styles.dates}>
          <div>
            <label>Start Date</label>
            <input
              name="startDate"
              value={educationData.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              name="endDate"
              value={educationData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="score">
          <label>Score</label>
          <input
            name="score"
            value={educationData.score}
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
