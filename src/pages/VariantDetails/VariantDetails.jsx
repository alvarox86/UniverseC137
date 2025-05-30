import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress";
import "./VariantDetails.css"

function VariantDetails() {
    const params = useParams()
    const navigate = useNavigate()

    const [variantDetails, setVariantDetails] = useState(null)

    //-----------------------
    //Estados para editar los datos de las variantes.
    const [nameVariant, setNameVariant] = useState("")
    const [statusVariant, setStatusVariant] = useState("")
    const [speciesVariant, setSpeciesVariant] = useState("")
    const [typeVariant, setTypeVariant] = useState("")
    const [genderVariant, setGenderVariant] = useState("")
    const [imageVariant, setImageVariant] = useState("")
    //-----------------------

    useEffect(() => {
        getData()
    },[params])

    const getData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/variations/${params.variantId}`)
            setVariantDetails(response.data)
        } catch (error) {
            console.log(error)
            navigate("*")
        }
    }

    if (variantDetails === null) {
        return <CircularProgress color="inherit" />;
    }
    
    const handleSubmitForm = async (e) => {
      e.preventDefault();

      const updatedVariant = {
        name: nameVariant,
        status: statusVariant,
        species: speciesVariant,
        type: typeVariant,
        gender: genderVariant,
        image: imageVariant,
        apiId: variantDetails.apiId
      }

      try {
        await axios.put(`${import.meta.env.VITE_SERVER_URL}/variations/${params.variantId}`, updatedVariant)
        navigate(`/CharacterDetails/${variantDetails.apiId}`)
      } catch (error) {
        console.log(error)
        navigate("*")
      }

    }

  return (
    <div>
      <div className="variantsDetailsContainer">
        <div>
        <img src={variantDetails.image} alt="Character image" className="variantImg"/>
      </div>
      <div className="variantInfo">
        <p>Name: <strong>{variantDetails.name}</strong></p>
        <p>Status: <strong>{variantDetails.status}</strong></p>
        <p>Species: <strong>{variantDetails.species}</strong></p>
        <p>Type: <strong>{variantDetails.type}</strong></p>
        <p>Gender: <strong>{variantDetails.gender}</strong></p>
      </div>
      </div>
      <div className="variantFormUpdate">
        <form onSubmit={handleSubmitForm}>
          <h3 className="h3UpdateVariant">Update Variant</h3>
          <label>Name</label>
          <input type="text" required name="variantName" value={nameVariant} onChange={(e) => setNameVariant(e.target.value)}/>

          <label>Status</label>
          <input type="text" required name="variantStatus" value={statusVariant} onChange={(e) => setStatusVariant(e.target.value)}/>

          <label>Species</label>
          <input type="text" required name="variantSpecies" value={speciesVariant} onChange={(e) => setSpeciesVariant(e.target.value)}/>

          <label>Type</label>
          <input type="text" required name="variantType" value={typeVariant} onChange={(e) => setTypeVariant(e.target.value)}/>

          <label>Gender</label>
          <input type="text" required name="variantGender" value={genderVariant} onChange={(e) => setGenderVariant(e.target.value)}/>

          <label>Image (URL)</label>
          <input type="url" required name="variantImage" value={imageVariant} onChange={(e) => setImageVariant(e.target.value)}/>

          <button type="submit">Update Variant</button>

        </form>
      </div>
    </div>
  )
}

export default VariantDetails