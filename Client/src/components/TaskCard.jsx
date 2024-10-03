/* eslint-disable react/prop-types */
import {useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate()
  
  return (
    <div style={{background: "black"}}
    onClick={()=>{
      navigate(`/task/${task.id}`)
    }}
    >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  );
}
