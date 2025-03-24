import "./Cards.css"


function Cards({ name }) {
    if (!name){
        name = "no name";
    }
    return (
        <div className="card"
        key={name}>
            {name}
            
        </div>
    );
}

export default Cards;