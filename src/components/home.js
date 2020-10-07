import React, { useState } from "react";
import Tabs from './tabs';
import App from './app';
/**
 * Home will be the info page that has buttons to go to the calendar and the sticker book
 */




function name() {
  
  const [name, setName] = useState("");
  const onNameInputChange = (event) => {
    const value = event.target.value; 
console.log(value);
setName(value);
};

  return (
    <div>
     
      <div>
            <input type= "text" value={Name}  onChange={onNameInputChange} />
        </div>
        <p>Welcome, {name} to your sticker chart! </p>
      <button onClick={onButtonClick}>
       Add Name </button>
    </div>
  );
}