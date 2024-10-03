export default function CustomButton({
  btnClass,
  id,
  text,
  onClick,
  iconDetail,
  iconExpand,
}) {
  return (
    <button className={btnClass} id={id} onClick={onClick}>
      <span id="button-text">
        <img id="detail-icon" src={iconDetail}></img>
        {text}
      </span>
      <img id="expand-icon" src={iconExpand}></img>
    </button>
  );
}
