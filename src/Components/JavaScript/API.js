  
import React, { useEffect } from "react";
import axios from "axios";

const interview = () => {
    

    const hospitalAPI =
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=581&date=31-03-2021";
  
let fetchAPI=  axios
.get(
  hospitalAPI
)
.then((res) => {
  console.log(res.data);
  console.log(res.data.sessions);
})
.catch((error) => {
  console.log();
});

console.log(fetchAPI);


  return (
    <div>interview</div>
  )
}

export default interview