import React, { useState } from "react";
import Confetti from "react-confetti";

function ButtonConfetti(){
    const[isRunning, setIsRunning] = useState(false);

    const toggleConfetti = () => {
        setIsRunning(!isRunning);
    };

   const buttonText = `Turn Confetti ${isRunning ? "Off" : "On"}`;

return (
<div>
    <h1>Confetti!</h1>
    <button onClick={toggleConfetti}> {buttonText}</button>
    <Confetti wind ={0.1} gravity ={0.2} run={isRunning} />

</div>
);
}
export default ButtonConfetti;