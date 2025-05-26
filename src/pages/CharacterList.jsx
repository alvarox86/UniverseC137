import { useEffect, useState } from 'react'
import axios from "axios"
import CharacterCard from '../components/CharacterCard/CharacterCard'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./CharacterList.css"


function CharacterList() {

    const [allCharacters, setAllCharaters] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character`)
            setAllCharaters(response.data.results)
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <div className='characterList'>
            {allCharacters.map((eachCharacter) => {
            return(
                    <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter} />
            )
        })}
        </div>

    <Stack spacing={2}>
        <Pagination count={10}/>
    </Stack>
    </div>

  )
}

export default CharacterList