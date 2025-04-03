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
    const [dealerCards, setDealerCards] = useState(0);

    
    const rules = "Rules: press hit to get aditional card, if you go above 21 you become fat and lose";

    const [deck , setDeck] = useState(false);
    const [deckIndex, setDeckIndex] = useState(0);
    const [card, setCard] = useState([{text: "", value: 0, name: ""},{text: "", value: 0, name: ""},{text: "", value: 0, name: ""},]);
    const [dealerCard, setDealerCard] = useState([{text: "", value: 0, name: ""},{text: "", value: 0, name: ""},{text: "", value: 0, name: ""},]);//dealer
    const [stack, setStack] = useState([
        {text: "H", value: 2, name: "2" },
        {text: "H", value: 3, name: "3"},
        {text: "H", value: 4, name: "4"},
        {text: "H", value: 5, name: "5"},
        {text: "H", value: 6, name: "6"},
        {text: "H", value: 7, name: "7"},
        {text: "H", value: 8, name: "8"},
        {text: "H", value: 9, name: "9"},
        {text: "H", value: 10, name: "10"},
        {text: "H", value: 10, name: "J"},
        {text: "H", value: 10, name: "Q"},
        {text: "H", value: 10, name: "K"},
        {text: "H", value: 11, name: "A"},
        {text: "S", value: 2, name: "2"},
        {text: "S", value: 3, name: "3"},
        {text: "S", value: 4, name: "4"},
        {text: "S", value: 5, name: "5"},
        {text: "S", value: 6, name: "6"},
        {text: "S", value: 7, name: "7"},
        {text: "S", value: 8, name: "8"},
        {text: "S", value: 9, name: "9"},
        {text: "S", value: 10, name: "10"},
        {text: "S", value: 10, name: "J"},
        {text: "S", value: 10, name: "Q"},
        {text: "S", value: 10, name: "K"},
        {text: "S", value: 11, name: "A"},
        {text: "D", value: 2, name: "2"},
        {text: "D", value: 3, name: "3"},
        {text: "D", value: 4, name: "4"},
        {text: "D", value: 5, name: "5"},
        {text: "D", value: 6, name: "6"},
        {text: "D", value: 7, name: "7"},
        {text: "D", value: 8, name: "8"},
        {text: "D", value: 9, name: "9"},
        {text: "D", value: 10, name: "10"},
        {text: "D", value: 10, name: "J"},
        {text: "D", value: 10, name: "Q"},
        {text: "D", value: 10, name: "K"},
        {text: "D", value: 11, name: "A"},
        {text: "C", value: 2, name: "2"},
        {text: "C", value: 3, name: "3"},
        {text: "C", value: 4, name: "4"},
        {text: "C", value: 5, name: "5"},
        {text: "C", value: 6, name: "6"},
        {text: "C", value: 7, name: "7"},
        {text: "C", value: 8, name: "8"},
        {text: "C", value: 9, name: "9"},
        {text: "C", value: 10, name: "10"},
        {text: "C", value: 10, name: "J"},
        {text: "C", value: 10, name: "Q"},
        {text: "C", value: 10, name: "K"},
        {text: "C", value: 11, name: "A"},
    ]);
    const [log, setLog] = useState ([]);
    const [logIndex, setLogIndex] = useState(0);
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const pop = () => {
        // if (stack.length === 0) return;

        //     setCard((prevCards) => {
        //         const updatedCards = [...prevCards]; // Create a copy of the current card array
        //         updatedCards[playerCards] = stack[deckIndex]; // Update the first card with stack[0]
        //         return updatedCards; // Return the updated array
        //     });
        // setDeckIndex((prevIndex) => prevIndex + 1);
        // setStack((prevStack)=> prevStack.slice(0,-1));
        setPlayerCards((prevCards) => prevCards + 1);
        
    };

    const dealerPop = () => {
        // await delay(5000);
        setDealerCards((prevCards) => prevCards + 1);
        // setDealerCard((prevCards) => {
        //     const updatedCards = [...prevCards]; // Create a copy of the current card array
        //     updatedCards[dealerCards] = stack[deckIndex]; // Update the first card with stack[0]
        //     return updatedCards; // Return the updated array
        // });

        // setDeckIndex((prevIndex) => prevIndex + 1);
        // setStack((prevStack)=> prevStack.slice(0,-1));
        
    }

    const countScore = (score, dealer) => {
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

    const reset = () => {
        setPlayerCards(0);
        setplayerScore(0);
        setPlayerFat(false);
        //sets all players cards to blank
        setCard((prevCards) => {
            return prevCards.map(() => ({ text: "", value: 0, name: "" }));
        });

        setDealerCards(0);
        setdealerScore(0);
        setDealerCard((prevCards) => {
            return prevCards.map(() =>({ text: "", value: 0, name: "" }) );
        });
    };

    const writeLog = (message) => {
        setLog((prevLog) => [...prevLog, message]);
    }

    

    const handleCardValue = (card) => {
        setplayerScore((prevScore) => prevScore + card.value);
    }


    const buttonStartQuitPressed = () =>{
        setstarted((prev) => !prev);
        setstartButt(started ? "Start" : "quit");
        started ? reset() : "";
        started ? "": shuffle();
        started ? "" : pop();
        started ? "" : dealerPop();

        
        
        console.log(started);
    };

    const buttonHitPressed = () =>{
        pop(false);
        writeLog("poping card");
    };

    const buttonStayPressed = () =>{
        
    };
    
    //sets players score
    useEffect (() => {
        setplayerScore(card[0].value + card[1].value + card[2].value)

        
    }, [card]);
    //checks if player got fat
    useEffect(() => {
        if(playerScore > 21){
                setPlayerFat((prev) => !prev);
                buttonStartQuitPressed();
                
            reset();
        }
    }, [playerScore]);
    //shuffles deck in begining
    useEffect(() => {
        if (!deck) {
            shuffleDeck();
            setDeck((prev) => !prev)
        }
        else{
        }
    }, []);

    useEffect(() => {
        setDealerCard((prevCards) => {
            const updatedCards = [...prevCards]; // Create a copy of the current card array
            updatedCards[dealerCards] = stack[deckIndex]; // Update the first card with stack[0]
            return updatedCards; // Return the updated array
        });

        setDeckIndex((prevIndex) => prevIndex + 1);
        setStack((prevStack)=> prevStack.slice(0,-1));
    }, [dealerCards]);

    useEffect(() => {
        setCard((prevCards) => {
            const updatedCards = [...prevCards]; // Create a copy of the current card array
            updatedCards[playerCards] = stack[deckIndex]; // Update the first card with stack[0]
            return updatedCards; // Return the updated array
        });
        setDeckIndex((prevIndex) => prevIndex + 1);
        setStack((prevStack)=> prevStack.slice(0,-1));
    }, [playerCards]);

    return(
        <div className = 'back'>
            <h1>blackjack</h1>
            <h1>{playerFat ? "YOUR FAT": "" }</h1>
            <h1>Score: {playerFat ? "" : playerScore}</h1>
            <h1>{started ? "" : rules}</h1>
            {started ?
            <div className='dealer-container'>
                {dealerCards >=1 ? <h1 className='dealer'>{dealerCards >=1 ? dealerCard[0].text + dealerCard[0].name : ""}</h1>: ""}
                {dealerCards >=2 ? <h1 className='dealer'>{dealerCards >=2 ? dealerCard[1].text + dealerCard[1].name : ""}</h1>: ""}
                {dealerCards >=3 ? <h1 className='dealer'>{dealerCards >=3 ? dealerCard[2].text + dealerCard[2].name : ""}</h1>: ""}
            </div>
            :
            ""
            };
            {started ? 
            <div className='player-container'>
                {/*Players cards */}
                <h1 className='player'>{playerCards >= 1 ? card[0].text + card[0].name : ""}</h1>
                <h1 className='player'>{playerCards >= 2 ? card[1].text + card[1].name : ""}</h1>
                {playerCards >= 3 ? <h1 className='player'>{playerCards >= 3 ? card[2].text + card[2].name : ""}</h1> :""}
            </div>
            :
            ""};
            <div className='log'>
                <h1>Log:</h1>
                {log.map((message, index) => (
                    <h1 key= {index}>{message}</h1>
                ))}
            </div>
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

