import styles from "./AddButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddButton({ buttonText, onClick }) {
  return (
    <button className={styles.AddButton} onClick={onClick}>
      <span className={styles.span}>
        {buttonText}
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </button>
  );
}
