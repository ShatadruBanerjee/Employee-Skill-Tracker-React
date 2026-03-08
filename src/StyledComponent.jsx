import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
 text-align:center;
 margin-top:40px;
`;

const Heading = styled.h3`
 color:blue;
 text-shadow:1px 1px 3px gray;
`;

const Input = styled.input`
 padding:8px;
 border-radius:5px;
 border:1px solid lightgray;

 &:focus{
  border-color:green;
  outline:none;
 }
`;

const Button = styled.button`
 background:#007acc;
 color:white;
 border:none;
 padding:8px 15px;
 border-radius:5px;
 margin:5px;

 &:hover{
  background:#005f99;
 }
`;

const Error = styled.p`
 color:red;
 font-weight:bold;
`;

function StyledComponent() {

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
    <Container>

      <Heading>Employee Skill Tracker (Styled Components Version)</Heading>

      <Input
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <Input
        placeholder="Enter Skill"
        value={skill}
        onChange={(e)=>setSkill(e.target.value)}
      />

      <br/><br/>

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>

      {error && <Error>{error}</Error>}

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

    </Container>
  );
}

export default StyledComponent;