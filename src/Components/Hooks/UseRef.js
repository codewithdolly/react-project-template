import React, { useState, useRef } from "react";
import { Button } from "@mui/material";

const UseRef = () => {
  const yourName = useRef(null);
  const [value, SetValue] = useState(false);

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(yourName.current.value);
    const name = yourName.current.value;
    name === "" ? alert("please fill the input") : SetValue(true);
  };

  return (
    <>
      <form action="" onSubmit={SubmitForm}>
        <label htmlFor="Fill your Name">My Name is </label>
        <input
          type="text"
          placeholder="full name"
          id="yourName"
          ref={yourName}
        />

        <Button>Submit</Button>
      </form>
      <h2>{value ? `your lucky name ${yourName.current.value}` : ""}</h2>
    </>
  );
};

export default UseRef;
