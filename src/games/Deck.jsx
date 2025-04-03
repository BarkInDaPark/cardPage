import {useState, useEffect} from 'react'
function Deck(){
    // const [stack, setStack] = useState([]);
    const [deck , setDeck] = useState(false);
    const [card, setCard] = useState({text: "", number: 0});
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

    const push = (text, number) => {
        setStack(prevStack => [...prevStack, {text, number}]);
        // console.log(stack[i].text + stack[i].number)

    };

    const pop = () => {
        if (stack.length === 0) return;
        // const topCard = stack[0];
        setCard(stack[0]);
        setStack((prevStack)=> prevStack.slice(0, -1));
        console.log("poped: " + card.number  );
    };

    const peek = () => {
        return stack.length > 0 ? `${stack[stack.length - 1].text} - ${stack[stack.length - 1].number}` : "stack is empty";
    };
    const shuffle = () => {
        const shuffleStack = [...stack].sort(() => Math.random() - 0.5);
        setStack(shuffleStack)
    };

    // const shuffleDeck = () => {
    //     for(let x = 0; x < 4; x++){
    //         let name;
    //         if(x === 0)
    //             name = "S"; // S as in Spades
    //         if(x === 1)
    //             name = "H"; // H as in Hearts
    //         if(x === 2)
    //             name = "D"; // D as in Dimonds
    //         if(x === 3)
    //             name = "C"; //C as in Clubs
    
    //         for(let i = 1; i < 15; i++){
    //             push(name, i);
    //             // console.log("pushed: " + name + i + " into stack")
    //         }
                
    //     };
    //     console.log("cards pushed");
    //     shuffle();
    //     setDeck((prev) => !prev);
    //     console.log("deck shuffled");
    // }

    const shuffleDeck = () => {
        // const newStack = [];
        // for (let x = 0; x < 4; x++) {
        //     let name;
        //     if (x === 0) name = "S"; // S as in Spades
        //     else if (x === 1) name = "H"; // H as in Hearts
        //     else if (x === 2) name = "D"; // D as in Diamonds
        //     else name = "C"; // C as in Clubs

        //     for (let i = 1; i <= 13; i++) {
        //         newStack.push({ text: name, number: i });
        //         console.log(stack[i].text + stack[i].number)
        //     }
        // }
        // setStack(newStack);
        // console.log("cards pushed");
        shuffle();
        setDeck(true);
        console.log("deck shuffled");
    };

    useEffect(() => {
    }, [deck])
    useEffect(() => {
        if (!deck) {
            shuffleDeck();
            setDeck((prev) => !prev)
            pop();
        }
        else{
            pop();
        }
    }, []);
    

    return (
        // <h1>{stack[0] ? `${stack[0].text} ${stack[0].number}` : "Loading..."}</h1>
        <h1>{card.text}{card.number}</h1>

    );
}
export  default Deck;