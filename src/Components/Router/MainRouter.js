import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Software from "./Software";
import Android from "./Android";
import CourseId from "./CourseId";
import Dashboard from "./Dashboard";

const MainRouter = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />}>
            <Route path="software" element={<Software />}>
              <Route path=":courseid" element={<CourseId />} />
            </Route>
            <Route path="android" element={<Android />} />
            
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainRouter;
