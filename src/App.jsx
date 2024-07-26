import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import CVRender from "./components/CVRender";
import { useState } from "react";
function App() {
  const [basicInfo, setBasicInfo] = useState({
    userName: "Abuzar RaziQ",
    userEmail: "abuzarraziqo@gmail.com",
    userPhone: "1234555-555-0",
    aboutYourself: "I'm a React Developer...",
  });

  const [education, setEducation] = useState({
    uniName: "XYZ University",
    field: "XYZ Field",
    eduYears: "14 Years",
  });
  return (
    <>
      <div
        id="CV-Template"
        className="flex sm:flex-col-reverse sm:m-0 p-5 bg-slate-200 h-screen  w-full sm:justify-between"
      >
        <div id="UserInputs" className="border-2 w-1/2 sm:w-full">
          <PersonalInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          <Education education={education} setEducation={setEducation} />
        </div>

        <div id="userOutput" className=" border rounded-xl  w-full">
          <CVRender basicInfo={basicInfo} education={education} />
        </div>
      </div>
    </>
  );
}

export default App;
