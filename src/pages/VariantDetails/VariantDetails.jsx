import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress";

function VariantDetails() {
    const params = useParams()

    const [variantDetails, setVariantDetails] = useState(null)

    useEffect(() => {
        getData()
    },[params])

    const getData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/variations/${params.variantId}`)
            setVariantDetails(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    if (variantDetails === null) {
        return <CircularProgress color="inherit" />;
    }
    
  return (
    <div>
        <div>
        <img src={variantDetails.image} alt="Character image" />
      </div>
      <div>
        <ul>
          <li>{variantDetails.name}</li>
          <li>{variantDetails.status}</li>
          <li>{variantDetails.species}</li>
          <li>{variantDetails.type}</li>
          <li>{variantDetails.gender}</li>
        </ul>
      </div>
    </div>
  )
}

export default VariantDetails