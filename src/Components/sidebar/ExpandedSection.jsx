import AddButton from "./AddButton";
import "../Styles/ExpandedSection.css";

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
