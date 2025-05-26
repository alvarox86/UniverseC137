import React, { useEffect, useState } from 'react'
import axios from "axios"
import CharacterCard from '../components/CharacterCard/CharacterCard'

function CharacterList() {

    const [allCharacters, setAllCharaters] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/character")
            setAllCharaters(response.data.results)
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        {allCharacters.map((eachCharacter) => {
            return(
                <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter} />
            )
        })}
    </div>
  )
}

export default CharacterList