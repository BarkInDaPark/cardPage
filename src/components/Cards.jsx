import "./Cards.css"


function Cards({ name }) {
    if (!name){
        name = "no name";
    }
    const cardNameArr = ["BlackJack", "car", "Run", "draw", "jump", "bike", "skate", "ride", "walk", "swim"];
    
    return (
        <div className = "card-container">
            {cardNameArr.map((names) => (
            <div className="card"
            key={names}>
            {   names}
            </div>
            ))}
        </div>
    )
}

export default Cards;