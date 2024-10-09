import { useState } from "react";
import styles from "./CustomButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomButton({
  id,
  text,
  onClick,
  iconDetail,
  iconExpand,
  iconCollapse,
  isPressed,
}) {
  const [activeIcon, setActiveIcon] = useState(false);

  const handleClick = () => {
    setActiveIcon(!activeIcon);
  };

  const stateFunctionWrapper = () => {
    if (onClick) onClick();
    handleClick();
  };

  return (
    <button
      className={`${styles.CustomButton} ${isPressed ? styles.pressed : ""}`}
      id={id}
      onClick={stateFunctionWrapper}
    >
      <span className={styles.spanElement}>
        <FontAwesomeIcon icon={iconDetail} />
        {text}
      </span>
      <FontAwesomeIcon icon={activeIcon ? iconCollapse : iconExpand} />
    </button>
  );
}
