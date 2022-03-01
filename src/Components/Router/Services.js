import { Button } from '@mui/material'
import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'


const Services = () => {

  return (
    <div>Services
    <Link to="android"><Button variant="outlined" color="info">Android</Button></Link>
    <Link to="software"><Button variant="outlined" color="error">Software</Button></Link>

    <Outlet />
    </div>
  )
}

export default Services