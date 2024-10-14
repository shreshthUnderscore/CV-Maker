import { useEffect, useState } from "react";
import styles from "./EducationForm.module.css";

export default function EducationForm({
  handleInputChange,
  toggleFormVisibility,
  currentEducation,
}) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    if (currentEducation) {
      setSchool(currentEducation.school);
      setDegree(currentEducation.degree);
      setStartDate(currentEducation.startDate);
      setEndDate(currentEducation.endDate);
      setScore(currentEducation.score);
    }
  }, [currentEducation]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEducationDetail = { school, degree, startDate, endDate, score };
    handleInputChange(newEducationDetail);

    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setScore("");

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
          <input value={school} onChange={(e) => setSchool(e.target.value)} />
        </div>
        <div className="Degree">
          <label>Degree</label>
          <input value={degree} onChange={(e) => setDegree(e.target.value)} />
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
        <div className="score">
          <label>Score</label>
          <input value={score} onChange={(e) => setScore(e.target.value)} />
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
