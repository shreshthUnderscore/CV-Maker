import styles from "./ResumeSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export default function ResumeSection({ personalDetails }) {
  return (
    <>
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
        </div>
      </div>
    </>
  );
}
