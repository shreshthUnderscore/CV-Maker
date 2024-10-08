import AddButton from "../AddButton/AddButton";
import styles from "./ExpandedSection.module.css";
export default function ExpandedSection({
  collapseId,
  buttonId,
  buttonText,
  onClick,
}) {
  return (
    <div className={styles.ExpandedSection}>
      <AddButton
        className={styles.AddButton}
        buttonText={buttonText}
        onClick={onClick}
      ></AddButton>
    </div>
  );
}
