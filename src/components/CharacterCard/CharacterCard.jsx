import { Link } from "react-router-dom";
import "./CharacterCard.css"

function CharacterCard(props) {
  return (
    <Link to={`/CharacterDetails/${props.eachCharacter.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="characterCard">
        <img src={props.eachCharacter.image} alt="Character Image" /> 
        <h2>{props.eachCharacter.name}</h2>
      </div>
    </Link>
  );
}

export default CharacterCard;
