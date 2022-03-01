import { Button } from "@mui/material";
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CourseId = () => {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h2>URL param is : {courseid}</h2>

      <Button
        onClick={() => {
          navigate("/dashboard", {state:"499"}, {state2: courseid});
        }}
        variant="contained"
        color="info"
      >
        {" "}
        Price
      </Button>

      <Link to="/dashboard" state={"Java"}><Button
       
       variant="contained"
       color="warning"
     >
      
       test
     </Button></Link>
    </div>
  );
};

export default CourseId;
