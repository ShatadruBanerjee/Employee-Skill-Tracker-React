import React, { useState } from "react";
import styles from "./EmployeeSkillTracker.module.css";

function CSSModuleComponent() {

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
    <div className={styles.container}>

      <h3 className={styles.heading}>Employee Skill Tracker (CSS Modules Version)</h3>

      <input
        className={styles.input}
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        className={styles.input}
        placeholder="Enter Skill"
        value={skill}
        onChange={(e)=>setSkill(e.target.value)}
      />

      <br/><br/>

      <button className={styles.button} onClick={handleSubmit}>Submit</button>
      <button className={styles.button} onClick={handleReset}>Reset</button>

      {error && <p className={styles.error}>{error}</p>}

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

export default CSSModuleComponent;