import AddButton from "../AddButton/AddButton";
import styles from "./ExpandedSection.module.css";
export default function ExpandedSection({
  data,
  handleEdit,
  title,
  buttonText,
  onClick,
}) {
  return (
    <div className={styles.ExpandedSection} key={title}>
      {data.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleEdit(index)}>{item[title]}</button>
        </div>
      ))}

      <AddButton
        className={styles.AddButton}
        buttonText={buttonText}
        onClick={onClick}
      ></AddButton>
    </div>
  );
}
