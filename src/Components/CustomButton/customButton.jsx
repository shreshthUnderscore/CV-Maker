import styles from "./CustomButton.module.css";

export default function CustomButton({
  id,
  text,
  onClick,
  iconDetail,
  iconExpand,
}) {
  return (
    <button className={styles.CustomButton} id={id} onClick={onClick}>
      <span className={styles.spanElement}>
        <img id="detail-icon" src={iconDetail}></img>
        {text}
      </span>
      <img className={styles.expandIcon} src={iconExpand}></img>
    </button>
  );
}
