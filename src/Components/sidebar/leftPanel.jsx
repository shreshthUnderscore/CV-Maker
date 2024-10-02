import "../Styles/leftPanel.css";
import CustomButton from "./customButton";
import Form from "./form";
import ExpandedSection from "./ExpandedSection";
import EducationForm from "./EducationForm";

function buttonEventHandler(buttonId, hiddenSectionId) {
  const buttonElement = document.querySelector(buttonId);

  const hiddenSectionElement = document.querySelector(hiddenSectionId);

  buttonElement.classList.toggle("open");

  if (hiddenSectionElement.style.display === "none") {
    hiddenSectionElement.style.display = "flex";
  } else {
    hiddenSectionElement.style.display = "none";
  }
}

function newFieldHandler(openElement, closedForm) {
  const openFieldElement = document.querySelector(openElement);
  const closedFormElement = document.querySelector(closedForm);

  openFieldElement.style.display = "none";
  closedFormElement.style.display = "flex";
}

export default function LeftPanel() {
  return (
    <>
      <div className="leftPanel">
        <div>
          <CustomButton
            text="Personal Details"
            id="personal-details"
            btnClass="customButtons"
            onClick={() =>
              buttonEventHandler("#personal-details", "#personal-details-form")
            }
            iconDetail="src/assets/personal-details-icon.svg"
            iconExpand="src/assets/expand-icon.svg"
          />
          <Form id="personal-details-form" />
        </div>

        <div>
          <CustomButton
            text="Education"
            id="education-details"
            btnClass="customButtons"
            iconDetail="src/assets/education-icon.svg"
            iconExpand="src/assets/expand-icon.svg"
            onClick={() =>
              buttonEventHandler(
                "#education-details",
                "#education-collapse-section"
              )
            }
          />
          <ExpandedSection
            collapseId="education-collapse-section"
            buttonId="education-add-button"
            buttonText="Add Field"
            onClick={() =>
              newFieldHandler(
                "#education-collapse-section",
                "#education-hidden-form"
              )
            }
          />
          <EducationForm id="education-hidden-form" />
        </div>

        <CustomButton
          text="Experience"
          id="experience-details"
          btnClass="customButtons"
          iconDetail="src/assets/experience-icon.svg"
          iconExpand="src/assets/expand-icon.svg"
        />
      </div>
    </>
  );
}
