function VariantCard(props) {



  return (
    <div key={props.eachVariant.id}>
      <img src={props.eachVariant.image} alt="Variant Image" />
      <h2>{props.eachVariant.name}</h2>
    </div>
  );
}

export default VariantCard;
