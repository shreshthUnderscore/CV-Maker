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
        {personalDetails.fullname && (<hr/>)}
        <div className={styles.EducationSection}>
          {educationDataList.length != 0 && (
            <h1>Education</h1>)}
          {educationDataList.map((education, index) => (
            <div key={index} className={styles.entry}>
              <div>
                <p className={styles.school}>{education.school}</p>
                <p>{education.degree}</p>
                <p>{education.score}</p>
              </div>
              <p>
                {education.startDate} - {education.endDate}
              </p>
              
            </div>
          ))}
        </div>
        <div className={styles.ExperienceSection}>
          {experienceDataList.length != 0 && (<h1>Experience</h1>)}
          {experienceDataList.map((experience, index) => (
            <div key={index} className={styles.entry}>
              <div>
                <span>
                  <p className={styles.companyName}>{experience.companyName}</p>
                  <p>| {experience.positionTitle}</p>
                </span>
                <p className={styles.description}>{experience.description}</p>  
              </div>
              <div className={styles.lefty}>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
                <p>{experience.location}</p>
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
