import "../Styles/EducationForm.css";

export default function EducationForm({ id }) {
  return (
    <div id={id} style={{ display: "none" }}>
      <form>
        <div className="school">
          <label>School</label>
          <input></input>
        </div>
        <div className="Degree">
          <label>Degree</label>
          <input></input>
        </div>
        <div className="dates">
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
      </form>
    </div>
  );
}
