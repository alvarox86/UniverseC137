import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import VariantCard from "../../components/VariantCard/VariantCard";

function CharacterDetails() {
  const params = useParams();

  const [characterDetails, setCharacterDetails] = useState(null);
  const [variantsList, setVariantsList] = useState([]);

  useEffect(() => {
    getData();
  }, [params]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${params.characterId}`
      );
      setCharacterDetails(response.data);

      const responseVariants = await axios.get(`${import.meta.env.VITE_SERVER_URL}/variations?apiId=${params.characterId}`);
      setVariantsList(responseVariants.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (characterDetails === null) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <div>
      <div>
        <img src={characterDetails.image} alt="Character image" />
      </div>
      <div>
        <ul>
          <li>{characterDetails.name}</li>
          <li>{characterDetails.status}</li>
          <li>{characterDetails.species}</li>
          <li>{characterDetails.type}</li>
          <li>{characterDetails.gender}</li>
          <li>{characterDetails.origin.name}</li>
          <li>Numero de veces que aparece en toda la serie{characterDetails.episode.length}</li>
        </ul>
      </div>

      <div>
        {variantsList.map((eachVariant) => {
          return ( 
            <VariantCard key={eachVariant.id} eachVariant={eachVariant}/>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterDetails;
