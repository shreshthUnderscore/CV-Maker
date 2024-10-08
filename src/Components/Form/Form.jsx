import "./Form.module.css";

export default function Form({ formData, handleInputChange }) {
  return (
    <div>
      <form>
        <div className="fullname">
          <label>Fullname</label>
          <input
            type="text"
            name="fullname"
            onChange={handleInputChange}
            value={formData.fullname}
          />
        </div>
        <div className="email">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          ></input>
        </div>
        <div className="contactNumber">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            onChange={handleInputChange}
            value={formData.contactNumber}
          ></input>
        </div>
        <div className="location">
          <label>Location</label>
          <input
            type="text"
            name="location"
            onChange={handleInputChange}
            value={formData.location}
          ></input>
        </div>
      </form>
    </div>
  );
}
