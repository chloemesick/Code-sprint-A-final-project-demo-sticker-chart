import React from "react";
import Tabs from "./tabs";
import "./app.css";
import ToDoList from "./to-do-list";
import Footer from "./footer";
import "..//images/sleep.png";
import "./TodoList.css";

/**
 * The app is responsible for routing and loading the appropriate page within the application
 */

function App() {
  return (
    <div>
      <h1>The Sticker Chart</h1>
      <Tabs>
        <div label="To Do List">
          <ToDoList></ToDoList>
        </div>
        <div label="Home">Please click on the To do list tab!</div>
        <div label="Calendar">
          Eventually you will be able to add tasks to the calendar!
        </div>
        <div label="Stickers">
          After 'while, <em>Crocodile</em>!
        </div>
      </Tabs>
      <img src="..//images/sleep.png" width="800" alt=""></img>
      <Footer />
    </div>
  );
}

export default App;
