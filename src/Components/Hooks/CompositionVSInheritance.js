import { lighten } from "@material-ui/core";
import React, { use, useEffect } from "react";
import "./Counter.scss";

const oldDetails = {
  name: "Johm Kumar",
  number: "+91- 903421042",
  house: "Delhi",
};

const Counter = () => {
  //let count = 1;
  const [count, setCount] = use(0);
  const [user, setuser] = use("Ridhi"); //adding string
  const [personDetails, setpersonDetails] = use(oldDetails);  //adding object.   To add object there should be old obj and then new obj will be replaced, also if there is any not updated obj then it will print old obj details.
  const[data, setData]= use(null)
  console.log(data);


  const Manage = () => {
    // console.log(count);
    setCount(count + 1);
    setuser("Dolly");
    setpersonDetails({
      name: "Johm mathue",
      number: 67532,
      house: "USA",
    });
  };

  useEffect(() => {
    Manage()
    fetch("https://jsonplaceholder.typicode.com/posts ")
      .then((response) => response.json())
      .then((data) => {
        const onlytitle = data.map((obj) => {
          return {
            userId: obj.title,
          };
        });
        console.log(onlytitle);
      })
      .catch((err)=>{
        console.log("Error");
      })


  }, []);

  return (
    <div>
      <h1>Counter : {count}</h1>
      <h2> Hello {user}</h2>
      <h2>Object :My name is {personDetails.name},  Contact Number {personDetails.number}, and my place is  {personDetails.house}. </h2>
      {/* <button onClick={Manage}>increment</button> */}
    </div>
  );
};

export default Counter;
