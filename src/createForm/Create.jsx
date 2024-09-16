import React from "react";
import axios from "axios";
import { useState } from "react";
import "./style.scss";

function Create({ date, onTaskAdded }) {
  const [task, setTask] = useState("");
  const addHandler = () => {
    if (!task.trim()) {
      alert("Please enter a task");
      return;
    }
    const obj = new Date();
    let day = obj.getDate();
    let month = obj.getMonth() + 1;
    let year = obj.getFullYear();
    const time = `${day}-${month}-${year}`;
    axios
      .post(`https://todolistbe-whmw.onrender.com/add/` + date, { task: task, time: time })
      .then((result) => {
        setTask(""); 
        onTaskAdded(result.data); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={addHandler}>
        Add
      </button>
    </div>
  );
}

export default Create;
