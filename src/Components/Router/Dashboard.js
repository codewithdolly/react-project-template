import React from 'react'
import {useLocation } from 'react-router-dom'

const Dashboard = () => {
const location= useLocation();
const location2= useLocation();

  return (
    <div>

<h3>Info that i want to carry is: {location.state}</h3>





    </div>
  )
}

export default Dashboard