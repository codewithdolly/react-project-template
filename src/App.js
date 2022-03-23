import React, {useState} from 'react'

const obj=[
  {
    name:"Dolly",
    roll:4321
  },
]

const App = () => {
  const [name, setName]= useState("radha");



const updateObj= (e)=>{
  const newValue= e.target.value
  setName("I am Riti.")
  setName(newValue)

}

  return (
    <div>
    <h2>{name}</h2>
    {/* <button onChange={updateObj}>click me</button> */}
    <input type="text" placeholder= "type here" onChange={updateObj} />
    </div>
  )
}

export default App