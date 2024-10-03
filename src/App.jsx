import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ResumeSection from "./Components/ResumeSection/ResumeSection";

export default function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <ResumeSection></ResumeSection>
    </>
  );
}
