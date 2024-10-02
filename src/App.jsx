import { useState } from "react";
import LeftPanel from "./Components/sidebar/leftPanel";
import RightPanel from "./Components/resume/rightPanel";
import "./Styles/App.css";

export default function App() {
  return (
    <>
      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
    </>
  );
}
