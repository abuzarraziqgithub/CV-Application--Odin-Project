import React from "react";

function CVRender({ basicInfo, education }) {
  return (
    <>
      <div className="text-center bg-blue-900 rounded-t-xl text-gray-200 w-full h-40 flex flex-col justify-evenly">
        <h1 className="text-4xl w-full">
          <span className="text-red-600 font-bold">{basicInfo.userName} </span>
        </h1>
        <p className="w-full">{basicInfo.userEmail}</p>
        <p className="w-full">{basicInfo.userPhone}</p>
      </div>
      <div className="bg-sky-200 flex flex-col items-center pt-5 h-36">
        <h2 className="text-red-800 text-2xl font-serif font-semibold underline ">
          About Me:
        </h2>
        <div id="bioContent" className="font-medium text-zinc-600">
          <h3>{basicInfo.aboutYourself}</h3>
        </div>
        <div id="education">
          <h2>Education:</h2>
          <ul>
            <li>{education.uniName}</li>
            <li>{education.field}</li>
            <li>{education.eduYears}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CVRender;
