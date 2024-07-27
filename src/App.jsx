import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import CVRender from "./components/CVRender";
import Experience from "./components/Experience";
import { useState } from "react";
function App() {
  const [basicInfo, setBasicInfo] = useState({
    userName: "Abuzar RaziQ",
    userEmail: "abuzarraziqo@gmail.com",
    userPhone: "1234555-555-0",
    aboutYourself: "I'm a React Developer...",
  });

  const [education, setEducation] = useState({
    uniName: "Virtual University",
    field: "Bachelors in Computer Science",
    eduYears: "16 Years",
  });

  const [experiences, setExperiences] = useState({
    company: "DevSinc",
    jobTitle: "Software Developer",
    yearsOfExp: 4,
  });
  return (
    <>
      <div
        id="CV-Template"
        className="flex sm:flex-col-reverse sm:m-0 p-5 bg-slate-200 h-screen  sm:overflow-auto w-full sm:justify-between"
      >
        <div
          id="UserInputs"
          className="border-2 w-1/2 sm:w-full sm:pt-10 flex flex-col space-y-10"
        >
          <PersonalInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          <Education education={education} setEducation={setEducation} />
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>

        <div id="userOutput" className=" border rounded-xl  w-full">
          <CVRender
            basicInfo={basicInfo}
            education={education}
            experiences={experiences}
          />
        </div>
      </div>
    </>
  );
}

export default App;
