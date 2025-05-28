import { Link } from "react-router-dom";
import "./variantCard.css";

function VariantCard(props) {
  return (
    <div key={props.eachVariant.id} className="variantCard">
      <Link to={`/VariantDetails/${props.eachVariant.id}`}>
        <div>
          <img src={props.eachVariant.image} alt="Variant Image" />
          <h2>{props.eachVariant.name}</h2>
        </div>
      </Link>
      <button className="deleteBtnVariant" onClick={() => props.handleDeleteVariant(props.eachVariant.id)}>
        Delete
      </button>
    </div>
  );
}

export default VariantCard;
