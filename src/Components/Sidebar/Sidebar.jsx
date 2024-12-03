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
  currentEducationData,
  handleEducationInput,
  addEducationData,
  currentExperienceData,
  handleExperienceInput,
  experienceDataList,
  addExperienceData,
  educationDataList,
  setIsUpdate,
  setUpdateIndex,
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

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    score: "",
  });

  const [experienceData, setExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleEditClick = (index) => {
    setIsUpdate(true); // Enable update mode
    setUpdateIndex(index); // Set the index for updating
    
    // Correctly access the education data from the list
    const selectedEducation = educationDataList[index];
    setEducationData(selectedEducation); // Prefill the form with the selected education data
    
    // Open the education form
    toggleEducationForm();
  };

  const handleExperienceEditClick = (index) => {
    setIsUpdate(true);
    setUpdateIndex(index);

    const selectedExperience = experienceDataList[index];
    setExperienceData(selectedExperience);

    toggleExperienceDetailsForm();
  }

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
                <>
                  {educationDataList.map((data, index) => (
                    <button className={styles.editButton} key={index} onClick={ () => {
                      handleEditClick(index);
                    }}>
                      {data.school}
                    </button>
                  ))}
                  <ExpandedSection
                    buttonText="Add Field"
                    onClick={toggleEducationForm}
                  />
                </>
              )}

              {isEducationFormVisible && (
                <EducationForm
                  toggleFormVisibility={toggleEducationForm}
                  currentEducationData={educationData}
                  handleEducationInput={handleEducationInput}
                  addEducationData={addEducationData}
                  educationData={educationData}
                  setEducationData={setEducationData}
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
                <>
                  {experienceDataList.map((data, index) => (
                    <button className={styles.editButton} key={index} onClick={()=>{
                      handleExperienceEditClick(index);
                    }}>
                      {data.companyName}
                    </button>
                  ))}
                  <ExpandedSection
                    buttonText="Add Field"
                    onClick={toggleExperienceDetailsForm}
                  />

                </>
              )}
              {isExperienceFormVisible && (
                <ExperienceFrom
                  toggleFormVisibility={toggleExperienceDetailsForm}
                  currentExperienceData={experienceData}
                  handleExperienceInput={handleExperienceInput}
                  addExperienceData={addExperienceData}
                  experienceData={experienceData}
                  setExperienceData={setExperienceData}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
