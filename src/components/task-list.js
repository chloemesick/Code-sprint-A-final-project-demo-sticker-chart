import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./app"
import ToDoList from "./to-do-list"
import "./TodoList.css";

var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
    <TodoList/>
    </div>,
    destination
);