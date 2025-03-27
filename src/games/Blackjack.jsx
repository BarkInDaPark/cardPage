import { useState } from 'react';
import './Blackjack.css';
function Blackjack() {
    const [startButt, setstartButt] = useState("Start!");
    const [started, setstarted] = useState(false);

    const buttonPressHandle = () =>{
        setstarted(started ? false : true);
        setstartButt(started ? "Start" : "quit");
        
        console.log(started);
    };

    return(
        <div className = 'back'>
            <h1>blackjack</h1>
            <h1>Rules: press hit to get aditional card, if you go above 21 you become fat and lose</h1>
            <button className = "startButton" onClick={() => (buttonPressHandle())}>{startButt}</button>
        </div>
    );

}
export default Blackjack;

function Start(){
    console.log("start")
    return (
        <div>
            <h1>Started!</h1>
        </div>
    );
}