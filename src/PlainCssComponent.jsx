import React, { useState } from "react";
import "./EmployeeSkillTracker.css";

function PlainCSSComponent() {

  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    if(name === "" || skill === ""){
      setError("Please fill out all fields.");
      setShow(false);
    } 
    else{
      setError("");
      setShow(true);
    }
  };

  const handleReset = () => {
    setName("");
    setSkill("");
    setError("");
    setShow(false);
  };

  return (
    <div className="container">

      <h3>Employee Skill Tracker (Plain CSS Version)</h3>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Enter Skill"
        value={skill}
        onChange={(e)=>setSkill(e.target.value)}
      />

      <br/><br/>
      <div className="button-group">
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      </div>
      {error && <p className="error">{error}</p>}

      {show && (
        <div>
          <h4>Employee Details</h4>
          <p>Name: {name}</p>
          <p>Skill: {skill}</p>

          {skill.toLowerCase() === "react" ? (
            <p>Excellent choice! React is in high demand.</p>
          ) : (
            <p>Great! Keep sharpening your skills.</p>
          )}
        </div>
      )}

    </div>
  );
}

export default PlainCSSComponent;