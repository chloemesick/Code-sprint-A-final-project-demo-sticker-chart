import React, { useState } from "react";
import ToDo from "./To-do";
import "../TodoList.css"


function ToDoList() {
  const [tasks, setTasks] = useState([
    "Walk the dogs",
    "Clean the house",
    "Finish homework",
  ]);
  const [newItemText, setNewItemText] = useState("");
  const onItemTextChange = (event) => {
    //console.log(event.target.value);
    setNewItemText(event.target.value);
  };
  console.log(tasks);

  const onButtonClick = (event) => {
    if (newItemText === "") {
      alert("Please enter a task");
      return;
    }
    setTasks([...tasks, newItemText]);
    event.preventDefault();

  };

  const taskMarkup = tasks.map((task, index) => {
    return <ToDo key={index}>{task}</ToDo>;
  });
  //console.log(taskMarkup);
  return (
    <div>
      <input
        className=""
        value={newItemText}
        type="text"
        onChange={onItemTextChange}
      />
      <button onClick={onButtonClick}>Add Task</button>
      <ul>{taskMarkup}</ul>
    </div>
    );
  
  };

export default ToDoList;
