import { useState } from "react";

function Experience() {
  const [state, setState] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startingDate: "",
    lastDate: "",
  });
  function handleEvent(event) {
    const value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  return (
    <>
      <div className="bg-orange-300  border-4 border-neutral-800 flex justify-center items-center flex-col mt-10 w-1/2 rounded-lg ml-5 p-10">
        <label htmlFor="">Company Name: </label>
        <input
          type="text"
          name="companyName"
          value={state.companyName}
          onChange={handleEvent}
        />
        <br />
        <label htmlFor="positionTitle">Position Title:</label>
        <input
          type="text"
          name="positionTitle"
          value={state.positionTitle}
          onChange={handleEvent}
        />
        <br />
        <label htmlFor="responsibilities">Main Responsibilities:</label>
        <input
          type="text"
          name="responsibilities"
          value={state.responsibilities}
          onChange={handleEvent}
        />
        <br />
        <label htmlFor="startingDate">Starting Date: </label>
        <input
          type="text"
          name="startingDate"
          value={state.startingDate}
          onChange={handleEvent}
        />
      </div>
    </>
  );
}

export default Experience;
