import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ResumeSection from "./Components/ResumeSection/ResumeSection";

export default function App() {
  //personal details object that 
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
  const [isUpdate, setIsUpdate] = useState(false); // Flag for update mode
  const [updateIndex, setUpdateIndex] = useState(null); // Track which item to update

  const handleEducationInput = (data) => {
    // Update both currentEducationData and the specific item in educationDataList
    setCurrentEducationData(data);
  
    if (isUpdate && updateIndex !== null) {
      // Directly update the specific item in the list while typing
      setEducationDataList(prevList => {
        const newList = [...prevList];
        newList[updateIndex] = data;
        return newList;
      });
    }
  };

  const addEducationData = () => {
    if (isUpdate && updateIndex !== null) {
      // Update the object
      setEducationDataList(prevItems => {
        const newItems = [...prevItems];
        newItems[updateIndex] = currentEducationData; // Update the object at the index
        return newItems;
      });
      setIsUpdate(false); // Reset update mode
      setUpdateIndex(null);
    } else {
      // Add a new object
      setEducationDataList((prevData) => [...prevData, currentEducationData]);
    }
    setCurrentEducationData({});
  };

  const handleExperienceInput = (data) => {
    setCurrentExperienceData(data);
  
    if (isUpdate && updateIndex !== null) {
      // Directly update the specific item in the list while typing
      setExperienceDataList(prevList => {
        const newList = [...prevList];
        newList[updateIndex] = data;
        return newList;
      });
    }
  };

  const addExperienceData = () => {
    if (isUpdate && updateIndex !== null) {
      // Update the object
      setExperienceDataList(prevItems => {
        const newItems = [...prevItems];
        newItems[updateIndex] = currentExperienceData; // Update the object at the index
        return newItems;
      });
      setIsUpdate(false); // Reset update mode
      setUpdateIndex(null);
    } else {
      // Add a new object
      setExperienceDataList((prevData) => [...prevData, currentExperienceData]);
    }
    setCurrentExperienceData({});
  };

  return (
    <>
      <Sidebar
        personalData={personalDetails}
        setPersonalDetails={setPersonalDetails}
        currentEducationData={currentEducationData}
        handleEducationInput={handleEducationInput}
        educationDataList={educationDataList}
        addEducationData={addEducationData}
        currentExperienceData={currentExperienceData}
        handleExperienceInput={handleExperienceInput}
        experienceDataList={experienceDataList}
        addExperienceData={addExperienceData}
        setIsUpdate={setIsUpdate}
        setUpdateIndex={setUpdateIndex}
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
