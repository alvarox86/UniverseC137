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

  //-----------------------
    //Estados para crear nuevas variantes de los personajes.
  const [nameNewVariant, setNameNewVariant] = useState("")
  const [statusNewVariant, setStatusNewVariant] = useState("")
  const [speciesNewVariant, setSpeciesNewVariant] = useState("")
  const [typeNewVariant, setTypeNewVariant] = useState("")
  const [genderNewVariant, setGenderNewVariant] = useState("")
  const [imageNewVariant, setImageNewVariant] = useState("")
  //-----------------------
  useEffect(() => {
    getData();
  }, [params]);

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
      getData()
      setNameNewVariant("")
      setStatusNewVariant("")
      setSpeciesNewVariant("")
      setTypeNewVariant("")
      setGenderNewVariant("")
      setImageNewVariant("")
    })
    .catch((error) => {
      console.log(error)
    })
}

const handleSubmitNewVariant = (e) => {
  e.preventDefault();

  const newVariant = {
    name: nameNewVariant,
    status: statusNewVariant,
    species : speciesNewVariant,
    type : typeNewVariant,
    gender : genderNewVariant,
    image : imageNewVariant,
    apiId : params.characterId
  }

  try {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/variations`, newVariant)
    getData()
  } catch (error) {
    console.log(error)
  }
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

      <div className="formAddVariant">
        <form onSubmit={handleSubmitNewVariant}>
          <label>Name</label>
          <input type="text" name="variantName" value={nameNewVariant} onChange={(e) => setNameNewVariant(e.target.value)}/>

          <label>Status</label>
          <input type="text" name="variantStatus" value={statusNewVariant} onChange={(e) => setStatusNewVariant(e.target.value)}/>

          <label>Species</label>
          <input type="text" name="variantSpecies" value={speciesNewVariant} onChange={(e) => setSpeciesNewVariant(e.target.value)}/>

          <label>Type</label>
          <input type="text" name="variantType" value={typeNewVariant} onChange={(e) => setTypeNewVariant(e.target.value)}/>

          <label>Gender</label>
          <input type="text" name="variantGender" value={genderNewVariant} onChange={(e) => setGenderNewVariant(e.target.value)}/>

          <label>Image (URL)</label>
          <input type="url" name="variantImage" value={imageNewVariant} onChange={(e) => setImageNewVariant(e.target.value)}/>

          <button type="submit">Create a new variant</button>

        </form>
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
