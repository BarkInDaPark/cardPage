import {useState, useEffect} from 'react'
function Deck(){
    const [stack, setStack] = useState([]);
    const [deck , setDeck] = useState(false);
    const [card, setCard] = useState({text: "", number: 0});

    const push = (text, number) => {
        const newItem = {text, number};
        setStack([...stack, newItem]);
        console.log("card pushed into deck" + text + number)
    };

    const pop = () => {
        if (stack.length === 0) return;
        setCard(peek());
        console.log("poped: " + card  );
        setStack(stack.slice(0, -1));
    };

    const peek = () => {
        return stack.length > 0 ? `${stack[stack.length - 1].text} - ${stack[stack.length - 1].number}` : "stack is empty";
    };
    const shuffle = () => {
        const shuffleStack = [...stack].sort(() => Math.random() - 0.5);
        setStack(shuffleStack)
    };

    const addDeck = () => {
        for(let x = 0; x < 3; x++){
            let name;
            if(x === 0)
                name = "S"; // S as in Spades
            if(x === 1)
                name = "H"; // H as in Hearts
            if(x === 2)
                name = "D"; // D as in Dimonds
            else
                name = "C"; //C as in Clubs
    
            for(let i = 1; i < 15; i++)
                push(name, i);
        };
        console.log("cards pushed");
        shuffle();
        setDeck((prev) => !prev);
        console.log("deck shuffled");
    }
    useEffect(() => {
        console.log(stack.length - 1);
    }, [stack])
    useEffect(() => {
        if (!deck) {
            addDeck();
            
        }
    }, [deck]);

    return (
        <h1></h1>

    );
}
export  default Deck;