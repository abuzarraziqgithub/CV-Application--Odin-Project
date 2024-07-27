function Experience({ experiences, setExperiences }) {
  function handleInputChangeEx(e) {
    const { name, value } = e.target;
    setExperiences({
      ...experiences,
      [name]: value,
    });
  }

  return (
    <>
      <div
        className=" flex flex-col   md:m-5 justify-around md:overflow-scroll md:overflow-x-hidden 
      "
      >
        <h1 className="text-2xl">Job Experience:</h1>
        <label htmlFor="company">
          Company:
          <input
            type="text"
            antialiased
            name="company"
            id="company"
            value={experiences.company}
            onChange={handleInputChangeEx}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>
        <label htmlFor="jobTitle">
          Position:
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            antialiased
            value={experiences.jobTitle}
            onChange={handleInputChangeEx}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>

        <label htmlFor="experience">
          Years of Experience:
          <input
            type="number"
            name="yearsOfExp"
            id="yearsOfExp"
            antialiased
            value={experiences.yearsOfExp}
            onChange={handleInputChangeEx}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>
      </div>
    </>
  );
}

export default Experience;
