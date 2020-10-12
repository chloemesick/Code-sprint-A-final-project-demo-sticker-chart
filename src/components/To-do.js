import React from "react";
import "./TodoList.css";
/**
 * A to do represents a single task and should have a check box to toggle the task between complete and in complete.
 */
function ToDo(props) {
  const { children } = props;
  return (
    <li>
      <input type="checkbox" name="" id="" />
      {children}
    </li>
  );
}
export default ToDo;
