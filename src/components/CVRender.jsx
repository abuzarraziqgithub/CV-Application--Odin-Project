import React from "react";

function CVRender({ basicInfo, education, experiences }) {
  return (
    <>
      <div className="text-center bg-blue-600 rounded-t-md text-gray-200 w-full h-40 flex flex-col justify-evenly">
        <h1 className="text-4xl w-full">
          <span className="text-gray-300 font-bold">{basicInfo.userName} </span>
        </h1>
        <p className="w-full">{basicInfo.userEmail}</p>
        <p className="w-full">{basicInfo.userPhone}</p>
      </div>
      <div className=" flex flex-col items-start pl-5 pt-5 h-36">
        <h2 className="  text-2xl font-serif font-semibold  pb-2">
          About Me :
        </h2>
        <div
          id="bioContent"
          className="font-medium text-zinc-800 bg-slate-300 h-36 w-full pl-3 pt-2 rounded-md"
        >
          <h3 className="antialiased text-sm font-sans text-cyan-900">
            {basicInfo.aboutYourself}
          </h3>
        </div>
      </div>
      <div id="education" className="flex flex-col ">
        <h2 className="font-medium text-3xl ml-4 mt-5 mb-3">Education:</h2>
        <ul className="bg-slate-300  rounded-md flex flex-col items-start space-y-3 p-5 w-full ml-4 mr-4">
          <li className=" bg-red-500 text-stone-300 p-2 font-semibold rounded-md">
            {education.uniName}
          </li>
          <li className="bg-red-800 text-stone-300 p-2 font-semibold rounded-md ">
            {education.field}
          </li>
          <li className="bg-sky-900 text-stone-300 p-2 font-semibold rounded-md">
            {education.eduYears}
          </li>
        </ul>
      </div>
      <div id="experience" className="flex flex-col ">
        <h2 className="font-medium text-3xl ml-4 mt-5 mb-3">Job Experience:</h2>
        <ul className="bg-slate-300  rounded-md flex flex-col items-start space-y-3 p-5 w-full ml-4 mr-4">
          <li className=" bg-violet-800 text-stone-300 p-2 font-semibold rounded-md">
            {experiences.company}
          </li>
          <li className="bg-cyan-700 text-stone-300 p-2 font-semibold rounded-md ">
            {experiences.jobTitle}
          </li>
          <li className="bg-rose-500 text-stone-300 p-2 font-semibold rounded-md">
            {experiences.yearsOfExp} Years
          </li>
        </ul>
      </div>
    </>
  );
}

export default CVRender;
