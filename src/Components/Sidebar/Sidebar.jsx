import styles from "./Sidebar.module.css";

import CustomButton from "../CustomButton/customButton";
import Form from "../Form/Form";
import EducationForm from "../EducationForm/EducationForm";
import ExpandedSection from "../ExpandedSection/ExpandedSection";
import { useState } from "react";

export default function Sidebar({ personalData, setPersonalDetails }) {
  const [isPersonalDetailsFormVisible, setPersonalDetailsVisibility] =
    useState(false);
  const [isEducationDetailsVisible, setEducationDetailsVisibility] =
    useState(false);
  const [isEducationFormVisible, setEducationFormVisibility] = useState(false);
  const [isExperienceDetailsVisible, setExperienceVisibility] = useState(false);
  const [isExperienceFormVisible, setExperienceFormVisibility] =
    useState(false);

  const togglePersonalDetailsForm = () => {
    setPersonalDetailsVisibility((visibility) => !visibility);
  };
  const toggleEducationDetailsForm = () => {
    setEducationDetailsVisibility((visibility) => !visibility);
  };
  const toggleEducationForm = () => {
    setEducationFormVisibility((visibility) => !visibility);
  };
  const toggleExperienceDetails = () => {
    setExperienceVisibility((visibility) => !visibility);
  };
  const toggleExperienceDetailsForm = () => {
    setExperienceFormVisibility((visibility) => !visibility);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.Sidebar}>
        <div>
          <CustomButton
            text="Personal Details"
            id="personal-details"
            onClick={togglePersonalDetailsForm}
            iconDetail="src/assets/personal-details-icon.svg"
            iconExpand="src/assets/expand-icon.svg"
            isPressed={isPersonalDetailsFormVisible}
          />
          {isPersonalDetailsFormVisible && (
            <Form
              formData={personalData}
              handleInputChange={handleInputChange}
            />
          )}
        </div>

        <div>
          <CustomButton
            text="Education"
            id="education-details"
            iconDetail="src/assets/education-icon.svg"
            iconExpand="src/assets/expand-icon.svg"
            onClick={toggleEducationDetailsForm}
            isPressed={isEducationDetailsVisible}
          />

          {isEducationDetailsVisible && (
            <>
              {!isEducationFormVisible && isEducationDetailsVisible && (
                <ExpandedSection
                  buttonText="Add Field"
                  onClick={toggleEducationForm}
                />
              )}
              {isEducationFormVisible && (
                <EducationForm id="education-hidden-form" />
              )}
            </>
          )}
        </div>
        <div>
          <CustomButton
            text="Experience"
            id="experience-details"
            btnClass="customButtons"
            iconDetail="src/assets/experience-icon.svg"
            iconExpand="src/assets/expand-icon.svg"
            onClick={toggleExperienceDetails}
            isPressed={isExperienceDetailsVisible}
          />

          {isExperienceDetailsVisible && (
            <>
              {!isExperienceFormVisible && isExperienceDetailsVisible && (
                <ExpandedSection
                  collapseId="experience-collapse-section"
                  buttonId="experience-add-button"
                  buttonText="Add Field"
                  onClick={toggleExperienceDetailsForm}
                />
              )}
              {isExperienceFormVisible && (
                <EducationForm id="experiences-hidden-form" />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
