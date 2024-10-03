export default function AddButton({ id, buttonText, onClick }) {
  return (
    <button id={id} onClick={onClick}>
      <span>
        {buttonText}
        <img src="src/assets/expand-icon.svg" />
      </span>
    </button>
  );
}
