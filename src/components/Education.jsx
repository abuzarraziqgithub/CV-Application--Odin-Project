function Education({ education, setEducation }) {
  function handleInputChangeE(e) {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  }
  return (
    <>
      <div
        className=" flex flex-col   md:m-5 justify-around md:overflow-scroll md:overflow-x-hidden 
      "
      >
        <h1 className="text-2xl">Educational Information:</h1>
        <label htmlFor="uniName">
          University/Institute:
          <input
            type="text"
            name="uniName"
            id="uniName"
            value={education.uniName}
            onChange={handleInputChangeE}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>
        <label htmlFor="field">
          Field of study:
          <input
            type="text"
            name="field"
            id="field"
            value={education.field}
            onChange={handleInputChangeE}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>

        <label htmlFor="eduYears">
          Years of Education:
          <input
            type="text"
            name="eduYears"
            id="eduYears"
            value={education.eduYears}
            onChange={handleInputChangeE}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>
      </div>
    </>
  );
}

export default Education;
