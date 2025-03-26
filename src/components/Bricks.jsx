import { Link, useNavigate } from "react-router-dom";
import "./Bricks.css"



function Bricks({ name }) {
    const navigate = useNavigate();
    if (!name){
        name = "no name";
    }
    const cardNameArr = ["BlackJack", "car", "Run", "draw", "jump", "bike", "skate", "ride", "walk", "swim"];
    
    return (
        <div className = "brick-container">
            {cardNameArr.map((names) => (
            <button className="brick"
            key={names} onClick={() => navigate(`/${names}`)}>
            {   names}
            </button>
            ))}
        </div>
    )
}

export default Bricks;