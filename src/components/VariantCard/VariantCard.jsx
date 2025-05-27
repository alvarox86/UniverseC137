import { Link } from "react-router-dom";

function VariantCard(props) {
  return (
    <Link to={`/VariantDetails/${props.eachVariant.id}`}>
      <div key={props.eachVariant.id}>
        <img src={props.eachVariant.image} alt="Variant Image" />
        <h2>{props.eachVariant.name}</h2>
      </div>
    </Link>
  );
}

export default VariantCard;
