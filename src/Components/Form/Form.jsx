import "./Form.module.css";

export default function Form({ id }) {
  return (
    <div id={id} style={{ display: "none" }}>
      <form>
        <div className="fullname">
          <label>Fullname</label>
          <input></input>
        </div>
        <div className="email">
          <label>Email</label>
          <input></input>
        </div>
        <div className="contactNumber">
          <label>Contact Number</label>
          <input></input>
        </div>
        <div className="location">
          <label>Location</label>
          <input></input>
        </div>
      </form>
    </div>
  );
}
