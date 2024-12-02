import AddButton from "../AddButton/AddButton";
import styles from "./ExpandedSection.module.css";
export default function ExpandedSection({title, buttonText, onClick }) {
  return (
    <div className={styles.ExpandedSection} key={title}>
      <AddButton
        className={styles.AddButton}
        buttonText={buttonText}
        onClick={onClick}
      ></AddButton>
    </div>
  );
}
