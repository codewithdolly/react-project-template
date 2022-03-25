import { valueToPercent } from '@mui/base'
import React, { useState } from 'react'
import Interview from './Components/Interview/interview'


const App = () => {
  const [value, setValue]= useState(0);


useEffect(() => {
  setValue()
},[])


  return (
    <>
    <h1>Hello there</h1>
    <Interview fisrtName="Dolly" lastName="Singh" />
    </>
  )
}

export default App