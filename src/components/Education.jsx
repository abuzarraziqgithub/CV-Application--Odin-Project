import { useState } from "react";

function Education() {
  const [state, setState] = useState({
    uniName: "",
    fieldStudy: "",
    totalEdYears: "",
  });

  function handleChange(event) {
    const value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value,
    });
  }
  return (
    <>
      <div className="bg-orange-300  border-4 border-neutral-800 flex justify-center items-center flex-col mt-10 w-1/2 rounded-lg ml-5 p-10">
        <label htmlFor="Institute/UniversityName">
          Institute/University Name:
        </label>
        <input
          type="text"
          name="uniName"
          value={state.uniName}
          onChange={handleChange}
          className="rounded-sm"
        />
        <br />
        <br />
        <label htmlFor="studyField">Field of Study: </label>
        <input
          type="text"
          name="studyField"
          value={state.fieldStudy}
          onChange={handleChange}
          className="rounded-sm"
        />

        <br />
        <br />
        <label htmlFor="totalEdYears">Years of Education: </label>
        <input
          type="number"
          name="totalEdYears"
          value={state.totalEdYears}
          onChange={handleChange}
          className="rounded-sm"
        />
      </div>
    </>
  );
}

export default Education;
