import styles from "./ResumeSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ResumeSection({
  personalDetails,
  educationDataList,
  currentEducationData,
  experienceDataList = { experienceDataList },
  currentExperienceData = { currentExperienceData },
}) {
  return (
    <div className={styles.ResumeDiv}>
      <div className={styles.ResumeSection}>
        <div className={styles.headerDetails}>
          <div className={styles.Name}>{personalDetails.fullname}</div>
          <div className={styles.ContactInfo}>
            {personalDetails.email && (
              <span className={styles.Email}>
                <FontAwesomeIcon icon={faEnvelope} />
                {personalDetails.email}
              </span>
            )}
            {personalDetails.contactNumber && (
              <span className={styles.ContactNumber}>
                <FontAwesomeIcon icon={faPhone} />
                {personalDetails.contactNumber}
              </span>
            )}
            {personalDetails.location && (
              <span className={styles.Location}>
                <FontAwesomeIcon icon={faLocationDot} />
                {personalDetails.location}
              </span>
            )}
          </div>
        </div>
        <hr />
        <div className={styles.EducationSection}>
          <h1>Education</h1>
          {educationDataList.map((education, index) => (
            <div key={index} className="education-item">
              <p>School: {education.school}</p>
              <p>Degree: {education.degree}</p>
              <p>
                Dates: {education.startDate} - {education.endDate}
              </p>
              <p>Score: {education.score}</p>
            </div>
          ))}
          {currentEducationData && (
            <div className="current-education-item">
              <p>{currentEducationData.school}</p>
              <p>{currentEducationData.degree}</p>
              <p>
                {currentEducationData.startDate}
                {currentEducationData.endDate}
              </p>
              <p>{currentEducationData.score}</p>
            </div>
          )}
        </div>
        <div className={styles.ExperienceSection}>
          <h1>Experience</h1>
          {experienceDataList.map((experience, index) => (
            <div key={index} className="experience-item">
              <p>Company Name: {experience.companyName}</p>
              <p>Position Title: {experience.positionTitle}</p>
              <p>
                Dates: {experience.startDate} - {experience.endDate}
              </p>
              <p>Location: {experience.location}</p>
              <p>Description: {experience.description}</p>
            </div>
          ))}
          {currentExperienceData && (
            <div className="current-experience-item">
              <p>{currentExperienceData.companyName}</p>
              <p>{currentExperienceData.positionTitle}</p>
              <p>
                {currentExperienceData.startDate}{" "}
                {currentExperienceData.endDate}
              </p>
              <p>{currentExperienceData.location}</p>
              <p>{currentExperienceData.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
