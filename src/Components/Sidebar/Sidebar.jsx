import styles from "./Sidebar.module.css";

import CustomButton from "../CustomButton/customButton";
import Form from "../Form/Form";
import EducationForm from "../EducationForm/EducationForm";
import ExpandedSection from "../ExpandedSection/ExpandedSection";

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

export default function Sidebar() {
  return (
    <>
      <div className={styles.Sidebar}>
        <div>
          <CustomButton
            text="Personal Details"
            id="personal-details"
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
        <div>
          <CustomButton
            text="Experience"
            id="experience-details"
            btnClass="customButtons"
            iconDetail="src/assets/experience-icon.svg"
            iconExpand="src/assets/expand-icon.svg"
          />
        </div>
      </div>
    </>
  );
}
