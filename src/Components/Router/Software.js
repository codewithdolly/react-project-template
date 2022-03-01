import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Software = () => {

  const courseList= ["React", "HTML", "CSS", "JavaScript", "Bootstrap"];
  const RandumCourseName= courseList[Math.floor(Math.random()*courseList.length)]

  return (
   <>
     <h2>Software</h2>

     <NavLink 
     style={({isActive})=>{
      return{
        backgroundColor: isActive ? "Red" :"Yellow"
      }
     }}
     
     to={`/services/software/${RandumCourseName}`}>{RandumCourseName}</NavLink>
     <NavLink to={`/services/software/hellothere`}>HelloThere!</NavLink>

     <Outlet />

   </>
  )
}

export default Software