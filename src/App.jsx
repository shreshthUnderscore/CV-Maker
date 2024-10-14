import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ResumeSection from "./Components/ResumeSection/ResumeSection";

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullname: "",
    email: "",
    contactNumber: "",
    location: "",
  });

  const [educationDataList, setEducationDataList] = useState([]);
  const [currentEducationData, setCurrentEducationData] = useState({});
  const [experienceDataList, setExperienceDataList] = useState([]);
  const [currentExperienceData, setCurrentExperienceData] = useState({});

  const handleEducationInput = (data) => {
    setCurrentEducationData(data);
  };
  const addEducationData = () => {
    setEducationDataList((prevData) => [...prevData, currentEducationData]);
    setCurrentEducationData({});
  };

  const handleExperienceInput = (data) => {
    setCurrentExperienceData(data);
  };

  const addExperienceData = () => {
    setExperienceDataList((prevData) => [...prevData, currentExperienceData]);
    setCurrentExperienceData({});
  };

  return (
    <>
      <Sidebar
        personalData={personalDetails}
        setPersonalDetails={setPersonalDetails}
        currentEducationData={currentEducationData}
        handleEducationInput={handleEducationInput}
        addEducationData={addEducationData}
        currentExperienceData={currentExperienceData}
        handleExperienceInput={handleExperienceInput}
        addExperienceData={addExperienceData}
      ></Sidebar>
      <ResumeSection
        personalDetails={personalDetails}
        educationDataList={educationDataList}
        currentEducationData={currentEducationData}
        experienceDataList={experienceDataList}
        currentExperienceData={currentExperienceData}
      ></ResumeSection>
    </>
  );
}
