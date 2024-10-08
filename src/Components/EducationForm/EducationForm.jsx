import styles from "./EducationForm.module.css";

export default function EducationForm({ id }) {
  return (
    <div id={id}>
      <form>
        <div className="school">
          <label>School</label>
          <input></input>
        </div>
        <div className="Degree">
          <label>Degree</label>
          <input></input>
        </div>
        <div className={styles.dates}>
          <div>
            <label>Start Date</label>
            <input></input>
          </div>
          <div>
            <label>End Date</label>
            <input></input>
          </div>
        </div>
        <div className="location">
          <label>Location</label>
          <input></input>
        </div>
        <div className={styles.buttons}>
          <button className={styles.savebtn} type="submit" value="Submit">
            Submit
          </button>

          <button className={styles.cancelbtn} type="cancel" value="Cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
