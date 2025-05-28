import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import VariantCard from "../../components/VariantCard/VariantCard";

function CharacterDetails() {
  const params = useParams();
  const navigate = useNavigate()

  const [characterDetails, setCharacterDetails] = useState(null);
  const [variantsList, setVariantsList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseVariants = await axios.get(`${import.meta.env.VITE_SERVER_URL}/variations?apiId=${params.characterId}`);
      setVariantsList(responseVariants.data);
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${params.characterId}`);
      setCharacterDetails(response.data); 

    } catch (error) {
      console.log(error);
    }
  };

  if (characterDetails === null) {
    return <CircularProgress color="inherit" />;
  }

  const handleDeleteVariant = (id) => {
     axios.delete(`${import.meta.env.VITE_SERVER_URL}/variations/${id}`)
     .then(() => {
      // si entramos en este .then, significa que todo estuvo ok. Se creo correctamente el proyecto.

    })
    .catch((error) => {
      console.log(error)
    })
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
            <VariantCard key={eachVariant.id} eachVariant={eachVariant} handleDeleteVariant={handleDeleteVariant} />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterDetails;
