import AddButton from "../AddButton/AddButton";
import "./ExpandedSection.module.css";

export default function ExpandedSection({
  collapseId,
  buttonId,
  buttonText,
  onClick,
}) {
  return (
    <div id={collapseId} style={{ display: "none" }}>
      <AddButton
        id={buttonId}
        buttonText={buttonText}
        onClick={onClick}
      ></AddButton>
    </div>
  );
}
