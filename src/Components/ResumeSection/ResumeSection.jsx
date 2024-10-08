import styles from "./ResumeSection.module.css";

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
                  <img src="src/assets/mail-icon.svg"></img>
                  {personalDetails.email}
                </span>
              )}

              {personalDetails.contactNumber && (
                <span className={styles.ContactNumber}>
                  <img src="src/assets/contact-icon.svg"></img>
                  {personalDetails.contactNumber}
                </span>
              )}

              {personalDetails.location && (
                <span className={styles.Location}>
                  <img src="src/assets/location-icon.svg"></img>
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
