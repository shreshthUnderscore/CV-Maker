import "./Experience.module.css";

export default function ExperienceFrom({ id }) {
  return (
    <div id={id}>
      <form>
        <div className="Company Name">
          <label>Company Name</label>
          <input></input>
        </div>
        <div className="Position Title">
          <label>Position Title</label>
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
        <div className="description">
          <label>Description</label>
          <input></input>
        </div>
      </form>
    </div>
  );
}
