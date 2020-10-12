import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./tabs";
import "./app.css";
import ToDoList from "./to-do-list";
import ToDo from "./To-do";
import TodoItems from "../../src/components/TodoItems";

/**
 * The app is responsible for routing and loading the appropriate page within the application
 */

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Home">Please click on the To do list tab!</div>
        <div label="Calendar"></div>
        <div label="Stickers">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="To Do List">
          <ul>
          </ul>
        </div>
      </Tabs>
    </div>
  );
}
export default App;
