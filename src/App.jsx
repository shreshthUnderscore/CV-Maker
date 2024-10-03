import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import RightPanel from "./Components/RightPanel/RightPanel";

export default function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <RightPanel></RightPanel>
    </>
  );
}
