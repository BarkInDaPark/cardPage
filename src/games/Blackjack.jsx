import { useState } from 'react';
import './Blackjack.css';
function Blackjack() {
    const [startButt, setstartButt] = useState("Start!");
    const [started, setstarted] = useState(false);
    const rules = "Rules: press hit to get aditional card, if you go above 21 you become fat and lose"

    const buttonPressHandle = () =>{
        setstarted((prev) => !prev);
        setstartButt(started ? "Start" : "quit");
        
        console.log(started);
    };

    return(
        <div className = 'back'>
            <h1>blackjack</h1>
            <h1>{started ? "" : rules}</h1>
            <div >
            <button className = "startButton" onClick={() => (buttonPressHandle())}>{startButt}</button>
            
            {started ? <button className = "hitButton">Hit</button> : ""}
            {started ? <button className = "stayButton">Stay</button> : ""}
            
            </div>
        </div>
    );

}
export default Blackjack;

