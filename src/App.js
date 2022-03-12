import React from "react";
import UseRef from "./Components/Hooks/UseRef";
import Interview from "./Components/Interview/interview"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App=()=>{
  return(
    <>
    <Router>
 <Link to="/interview">Interview</Link>


<Routes>
  <Route path="/interview" element={ <Interview />} />
</Routes>

  </Router>
    </>
  )
}

export default App;