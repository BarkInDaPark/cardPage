import { useState } from 'react';
import './Blackjack.css';
import Deck from './Deck';
function Blackjack() {
    const [startButt, setstartButt] = useState("Start!");
    const [started, setstarted] = useState(false);
    const [playerScore, setplayerScore] = useState(0);
    const [dealerScore, setdealerScore] = useState(0);
    const [playerCards, setPlayerCards] = useState(0);
    const rules = "Rules: press hit to get aditional card, if you go above 21 you become fat and lose"

    const handleCardValue = (card) => {
        setplayerScore((prevScore) => prevScore + card.number);
    }

    const buttonStartQuitPressed = () =>{
        setPlayerCards(1);
        setstarted((prev) => !prev);
        setstartButt(started ? "Start" : "quit");
        
        
        console.log(started);
    };
    const buttonHitPressed = () =>{
        setPlayerCards(prevplayerCards => playerCards + 1);
    };
    const buttonStayPressed = () =>{
        
    };

    return(
        <div className = 'back'>
            <h1>blackjack</h1>
            <h1>Score: {playerScore}</h1>
            <h1>{started ? "" : rules}</h1>
            {started ? 
            <div className='player-container'>
                <h1 className='player'>{playerCards >= 1 ? <Deck onCardDraw={handleCardValue}/> : ""}</h1>
                <h1 className='player'>{playerCards >= 2 ? <Deck onCardDraw={handleCardValue}/> : ""}</h1>
                <h1 className='player'>{playerCards >= 3 ? <Deck onCardDraw={handleCardValue}/> : ""}</h1>
            </div>
            :
            ""};
            <div >
                <button className = "startButton" onClick={() => (buttonStartQuitPressed())}>{startButt}</button>
                {started && playerCards < 4 ? <button className = "hitButton" onClick={buttonHitPressed}>Hit</button> : ""}
                {started ? <button className = "stayButton">Stay</button> : ""}
            <div></div>
            
            </div>
        </div>
    );

}
export default Blackjack;

