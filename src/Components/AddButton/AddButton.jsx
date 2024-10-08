import styles from "./AddButton.module.css";

export default function AddButton({ buttonText, onClick }) {
  return (
    <button className={styles.AddButton} onClick={onClick}>
      <span className={styles.span}>
        {buttonText}
        <img src="src/assets/expand-icon.svg" />
      </span>
    </button>
  );
}
