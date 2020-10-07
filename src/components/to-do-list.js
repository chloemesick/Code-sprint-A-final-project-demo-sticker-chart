import React, { useState } from "react";
import ToDo from "./To-do";
function ToDoList() {
  const [tasks, setTasks] = useState(["Sharks", "Cats", "Fish"]);
  const [newItemText, setNewItemText] = useState("");
  const onItemTextChange = (event) => {
    //console.log(event.target.value);
    setNewItemText(event.target.value);
  };
  console.log(tasks);

  const onButtonClick = (event) => {
    setTasks([...tasks, newItemText]);
    if (tasks === ""){
        alert("Please enter a task");
    }
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
}

export default ToDoList;
