import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CharacterList.css";

function CharacterList() {
  const [allCharacters, setAllCharaters] = useState([]);
  const [countPages, setCountPages] = useState(0);
  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setAllCharaters(response.data.results);
      setCountPages(response.data.info.pages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <Stack spacing={2} sx={{alignItems:"center"}}>
        <Pagination
          page={page}
          count={countPages}
          onChange={handleChangePage}
          sx={{backgroundColor: "lightgray", borderRadius:"100px", width:"350px"}}
        />
      </Stack>
      <div className="characterList">
        {allCharacters.map((eachCharacter) => {
          return (
            <CharacterCard
              key={eachCharacter.id}
              eachCharacter={eachCharacter}
            />
          );
        })}
      </div>
      <Stack spacing={2} sx={{alignItems:"center"}}>
        <Pagination
          page={page}
          count={countPages}
          onChange={handleChangePage}
          sx={{backgroundColor: "lightgray", borderRadius:"100px", width:"350px"}}
        />
      </Stack>
    </div>
  );
}

export default CharacterList;
