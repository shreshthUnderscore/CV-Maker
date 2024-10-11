import styles from "./Sidebar.module.css";

import CustomButton from "../CustomButton/customButton";
import Form from "../Form/Form";
import EducationForm from "../EducationForm/EducationForm";
import ExpandedSection from "../ExpandedSection/ExpandedSection";
import { useState } from "react";
import {
  faFileLines,
  faGraduationCap,
  faSuitcase,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import ExperienceFrom from "../ExperienceForm/ExperienceForm";

export default function Sidebar({
  personalData,
  setPersonalDetails,
  educationData,
  setEducationDetails,
  experienceData,
  setExperienceDetails,
}) {
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

  const handleInputEducationChange = (newEducationData) => {
    setEducationDetails([...educationData, newEducationData]);
  };

  const handleInputExperienceChange = (newExperienceData) => {
    setExperienceDetails([...experienceData, newExperienceData]);
  };

  return (
    <>
      <div className={styles.Sidebar}>
        <div>
          <CustomButton
            text="Personal Details"
            id="personal-details"
            onClick={togglePersonalDetailsForm}
            iconDetail={faFileLines}
            iconCollapse={faMinus}
            iconExpand={faPlus}
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
            iconDetail={faGraduationCap}
            iconExpand={faPlus}
            iconCollapse={faMinus}
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
                <EducationForm
                  handleInputChange={handleInputEducationChange}
                  toggleFormVisibility={toggleEducationForm}
                />
              )}
            </>
          )}
        </div>
        <div>
          <CustomButton
            text="Experience"
            id="experience-details"
            btnClass="customButtons"
            iconDetail={faSuitcase}
            iconExpand={faPlus}
            iconCollapse={faMinus}
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
                <ExperienceFrom
                  handleFormInput={handleInputExperienceChange}
                  toggleFormVisibility={toggleExperienceDetailsForm}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
