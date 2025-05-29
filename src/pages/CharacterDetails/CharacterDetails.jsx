import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import VariantCard from "../../components/VariantCard/VariantCard";
import "./CharacterDetails.css"

function CharacterDetails() {
  const params = useParams();

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
      
    })
    .catch((error) => {
      console.log(error)
    })
}

const handleSubmitNewVariant = async (e) => {
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
     await axios.post(`${import.meta.env.VITE_SERVER_URL}/variations`, newVariant)
    getData()
    setNameNewVariant("")
      setStatusNewVariant("")
      setSpeciesNewVariant("")
      setTypeNewVariant("")
      setGenderNewVariant("")
      setImageNewVariant("")
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      <div className="characterDetailsContainer">
        <div >
          <img src={characterDetails.image} alt="Character image" className="characterImg"/>
        </div>
        
      <div className="characterInfo">
        <p>Name: <strong>{characterDetails.name}</strong></p>
        <p>Status: <strong>{characterDetails.status}</strong></p>
        <p>Species: <strong>{characterDetails.species}</strong></p>
        <p>Type: <strong>{characterDetails.type}</strong></p>
        <p>Gender: <strong>{characterDetails.gender}</strong></p>
        <p>Origin: <strong>{characterDetails.origin.name}</strong></p>
        <p>Times it has appeared in the series: <strong>{characterDetails.episode.length}</strong></p>
      </div>
      </div>

      <div className="formAddVariant">
        <form onSubmit={handleSubmitNewVariant}>
          <h3 className="h3CreateVariant">Create a variant character</h3>
          <label>Name</label>
          <input type="text" required name="variantName" value={nameNewVariant} onChange={(e) => setNameNewVariant(e.target.value)}/>

          <label>Status</label>
          <input type="text" required name="variantStatus" value={statusNewVariant} onChange={(e) => setStatusNewVariant(e.target.value)}/>

          <label>Species</label>
          <input type="text" required name="variantSpecies" value={speciesNewVariant} onChange={(e) => setSpeciesNewVariant(e.target.value)}/>

          <label>Type</label>
          <input type="text" required name="variantType" value={typeNewVariant} onChange={(e) => setTypeNewVariant(e.target.value)}/>

          <label>Gender</label>
          <input type="text" required name="variantGender" value={genderNewVariant} onChange={(e) => setGenderNewVariant(e.target.value)}/>

          <label>Image (URL)</label>
          <input type="url" required name="variantImage" value={imageNewVariant} onChange={(e) => setImageNewVariant(e.target.value)}/>

          <button type="submit">Create a new variant</button>

        </form>
      </div>

      <div className="variantList">
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
