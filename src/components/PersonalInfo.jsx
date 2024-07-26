function PersonalInfo({ basicInfo, setBasicInfo }) {
  function handleInputChange(e) {
    const { name, value } = e.target;
    setBasicInfo({
      ...basicInfo,
      [name]: value,
    });
  }
  return (
    <>
      <div
        className=" flex flex-col   md:m-5 justify-around md:overflow-scroll md:overflow-x-hidden 
      "
      >
        <h1 className="text-2xl">Personal Information:</h1>
        <label htmlFor="userName">
          Name:
          <input
            type="text"
            name="userName"
            id="userName"
            value={basicInfo.userName}
            onChange={handleInputChange}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>
        <label htmlFor="userEmail">
          Email:
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={basicInfo.userEmail}
            onChange={handleInputChange}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>

        <label htmlFor="userPhone">
          Phone:
          <input
            type="tel"
            name="userPhone"
            id="userPhone"
            value={basicInfo.userPhone}
            onChange={handleInputChange}
            className="border-2 w-full pl-3 outline-sky-400"
          />
        </label>

        <div className="flex flex-col">
          <label htmlFor="about">Bio:</label>
          <textarea
            name="aboutYourself"
            id="aboutYourself"
            value={basicInfo.aboutYourself}
            onChange={handleInputChange}
            rows={3}
            placeholder="I'm a React Frontend Developer..."
            className="outline-sky-400"
          />
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
