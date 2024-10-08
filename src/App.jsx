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

  return (
    <>
      <Sidebar
        personalData={personalDetails}
        setPersonalDetails={setPersonalDetails}
      ></Sidebar>
      <ResumeSection personalDetails={personalDetails}></ResumeSection>
    </>
  );
}
