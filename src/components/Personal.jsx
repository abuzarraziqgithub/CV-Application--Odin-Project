import React, { useState } from "react";

function Personal() {
  const [state, setState] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const handleEvent = function (event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <div className="bg-orange-300  border-4 border-neutral-800 flex justify-center items-center flex-col mt-10 w-1/2 rounded-lg ml-5 p-10">
        <label htmlFor="userName">Name: </label>
        <input
          type="text"
          name="userName"
          value={state.userName}
          onChange={handleEvent}
          className="rounded-sm "
        />
        <br />
        <br />
        <label htmlFor="userEmail">Email: </label>
        <input
          type="email"
          name="userEmail"
          value={state.userEmail}
          onChange={handleEvent}
          className="rounded-sm"
        />
        <br />
        <br />
        <label htmlFor="userPhone">Phone: </label>
        <input
          type="text"
          name="userPhone"
          value={state.userPhone}
          onChange={handleEvent}
          className="rounded-sm"
        />
      </div>
    </>
  );
}

export default Personal;
