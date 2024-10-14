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

  const [educationDetails, setEducationDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);

  return (
    <>
      <Sidebar
        personalData={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationData={educationDetails}
        setEducationDetails={setEducationDetails}
        experienceData={experienceDetails}
        setExperienceDetails={setExperienceDetails}
      ></Sidebar>
      <ResumeSection
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        experienceDetails={experienceDetails}
      ></ResumeSection>
    </>
  );
}
