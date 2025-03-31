import { useState, useEffect } from 'react';
import './Blackjack.css';
import Deck from './Deck';
function Blackjack() {
    const [startButt, setstartButt] = useState("Start!");
    const [started, setstarted] = useState(false);
    const [showRules, setShowRules] = useState(true);
    const [playerScore, setplayerScore] = useState(0);
    const [playerCards, setPlayerCards] = useState(0);
    const [playerFat, setPlayerFat] = useState(false);
    const [dealerScore, setdealerScore] = useState(0);
    
    const rules = "Rules: press hit to get aditional card, if you go above 21 you become fat and lose";

    const [deck , setDeck] = useState(false);
    const [deckIndex, setDeckIndex] = useState(0);
    const [card, setCard] = useState([{text: "", number: 0},{text: "", number: 0},{text: "", number: 0},]);
    const [stack, setStack] = useState([
        {text: "H", number: 1},
        {text: "H", number: 2},
        {text: "H", number: 3},
        {text: "H", number: 4},
        {text: "H", number: 5},
        {text: "H", number: 6},
        {text: "H", number: 7},
        {text: "H", number: 8},
        {text: "H", number: 9},
        {text: "H", number: 10},
        {text: "H", number: 11},
        {text: "H", number: 12},
        {text: "H", number: 13},
        {text: "H", number: 14},
        {text: "S", number: 1},
        {text: "S", number: 2},
        {text: "S", number: 3},
        {text: "S", number: 4},
        {text: "S", number: 5},
        {text: "S", number: 6},
        {text: "S", number: 7},
        {text: "S", number: 8},
        {text: "S", number: 9},
        {text: "S", number: 10},
        {text: "S", number: 11},
        {text: "S", number: 12},
        {text: "S", number: 13},
        {text: "S", number: 14},
        {text: "D", number: 1},
        {text: "D", number: 2},
        {text: "D", number: 3},
        {text: "D", number: 4},
        {text: "D", number: 5},
        {text: "D", number: 6},
        {text: "D", number: 7},
        {text: "D", number: 8},
        {text: "D", number: 9},
        {text: "D", number: 10},
        {text: "D", number: 11},
        {text: "D", number: 12},
        {text: "D", number: 13},
        {text: "D", number: 14},
        {text: "C", number: 1},
        {text: "C", number: 2},
        {text: "C", number: 3},
        {text: "C", number: 4},
        {text: "C", number: 5},
        {text: "C", number: 6},
        {text: "C", number: 7},
        {text: "C", number: 8},
        {text: "C", number: 9},
        {text: "C", number: 10},
        {text: "C", number: 11},
        {text: "C", number: 12},
        {text: "C", number: 13},
        {text: "C", number: 14},
    ])

    const pop = () => {
        if (stack.length === 0) return;
        // const topCard = stack[0];
        setCard((prevCards) => {
            const updatedCards = [...prevCards]; // Create a copy of the current card array
            updatedCards[playerCards] = stack[deckIndex]; // Update the first card with stack[0]
            return updatedCards; // Return the updated array
        });
        
        setDeckIndex((prevIndex) => prevIndex + 1);
        console.log("player has: " + (playerCards + 1) + " cards");
        setStack((prevStack)=> prevStack.slice(0,-1));
        console.log(stack.length);
        //console.log("poped: " + card[0].number  ); 1step behind
        // countScore(card[playerCards].number);
        setPlayerCards((prevCards) => prevCards + 1);
    };

    const countScore = (score) => {
        setplayerScore((prevScore) => prevScore + score);
    };

    const shuffleDeck = () => {
        shuffle();
        setDeck(true);
        console.log("deck shuffled");
    };

    const shuffle = () => {
        const shuffleStack = [...stack].sort(() => Math.random() - 0.5);
        setStack(shuffleStack)
        
    };

    useEffect(() => {
            if (!deck) {
                shuffleDeck();
                setDeck((prev) => !prev)
            }
            else{
            }
        }, []);

    const handleCardValue = (card) => {
        setplayerScore((prevScore) => prevScore + card.number);
    }

    const buttonStartQuitPressed = () =>{
        // setPlayerCards(1);
        
        setstarted((prev) => !prev);
        setstartButt(started ? "Start" : "quit");
        started ? "": shuffle();
        pop();
        
        
        
        console.log(started);
    };
    const buttonHitPressed = () =>{
        pop();
    };
    const buttonStayPressed = () =>{
        
    };
    useEffect (() => {
        setplayerScore(card[0].number + card[1].number + card[2].number)

        
    }, [card])
    useEffect(() => {
        if(playerScore > 21)
            {
                setPlayerFat((prev) => !prev);
                buttonStartQuitPressed();
                for(let i = 0; i < 3; i++){
                    setCard((prevCards) => {
                        const updatedCards = [...prevCards]
                        updatedCards[i] = [{text: "", number: 0}];
                        return updatedCards;
                    })
                }
            }
    }, [playerScore])
    // setplayerScore(card[0].number + card[1].number + card[2].number)

    return(
        <div className = 'back'>
            <h1>blackjack</h1>
            <h1>{playerFat ? "YOUR FAT": "" }</h1>
            <h1>Score: {playerFat ? "" : playerScore}</h1>
            <h1>{started ? "" : rules}</h1>
            {started ? 
            <div className='player-container'>
                {/* <h1 className='player'>{playerCards >= 1 ? <Deck onCardDraw={handleCardValue}/> : ""}</h1>
                <h1 className='player'>{playerCards >= 2 ? <Deck onCardDraw={handleCardValue}/> : ""}</h1>
                <h1 className='player'>{playerCards >= 3 ? <Deck onCardDraw={handleCardValue}/> : ""}</h1> */}
                <h1 className='player'>{playerCards >= 1 ? card[0].text + card[0].number : ""}</h1>
                <h1 className='player'>{playerCards >= 2 ? card[1].text + card[1].number : ""}</h1>
                <h1 className='player'>{playerCards >= 3 ? card[2].text + card[2].number : ""}</h1>
            </div>
            :
            ""};
            <div >
                <button className = "startButton" onClick={() => (buttonStartQuitPressed())}>
                    {startButt}
                </button>
                {started && playerCards < 4 && !playerFat ? <button className = "hitButton" onClick={buttonHitPressed}>
                    Hit
                </button> : ""}
                {started && !playerFat ? <button className = "stayButton">
                    Stay
                </button> : ""} 
            <div></div>
            
            </div>
        </div>
    );

}
export default Blackjack;

