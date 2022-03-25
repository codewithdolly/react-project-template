import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Api = () => {
    const [user, userData]= useState([]);

const apiData="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=581&date=31-03-2021";

// axios.get(apiData).then((res)=>{
//     console.log(res.data.sessions);
//     userData(res.data.sessions);
// }).catch((err)=>{console.log(err);})

useEffect(() => {
    axios.get(apiData).then((res)=>{
        console.log(res.data.sessions);
        userData(res.data.sessions);
    }).catch((err)=>{console.log(err);})
    
}, [])




  return (
    <div>
    <h1>Hello tehre</h1>
        {user.map((user)=>{
            return(<>
                <h2>{user.name}</h2>
            </>)
        })}
    </div>
  )
}

export default Api