import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./CharacterList.css";
import CircularProgress from "@mui/material/CircularProgress";

import SearchBar from "../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function CharacterList() {
  const [allCharacters, setAllCharaters] = useState(null);
  const [countPages, setCountPages] = useState(0);
  const [page, setPage] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isUsingSearch, setIsUsingSearch] = useState(false)

  const navigate = useNavigate()

  const handleChangePage = (event, value) => {
    // el evento debemos dejarlo como parametro aunque no lo usemos.
    setPage(value);
  };

  useEffect(() => {
    getData();
  }, [page]);



  const getData = async () => {
    try {
      let response;
      if (isUsingSearch && searchInputValue) {
        // el usuario está usando el filtro de busqueda y tambien tiene un valor en el filtro de busqueda
        response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${searchInputValue}&page=${page}`
        );
      } else {
        response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
      }
      setAllCharaters(response.data.results);
      setCountPages(response.data.info.pages);
    } catch (error) {
      console.log(error);
      navigate("*")
    }
  };

  if (allCharacters === null) {
    return <CircularProgress color="inherit" />;
  }

  const handleSubmitSearch = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchInputValue}`
      );
      setAllCharaters(response.data.results)
      setCountPages(response.data.info.pages);
      setIsUsingSearch(true)
      setPage(1)
    } catch (error) {
      console.log(error);
    }
  };

  if (searchInputValue === null) {
    return <CircularProgress color="inherit" />;
  }

const handleResetSearch = () => {
  getData()
    setPage(1)
    setIsUsingSearch(false)
  }

  return (
    <div>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Pagination
          page={page}
          count={countPages}
          onChange={handleChangePage}
          sx={{
            backgroundColor: "lightgray",
            borderRadius: "100px",
            width: "350px",
          }}
        />
      </Stack>

      <SearchBar
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        handleResetSearch={handleResetSearch}
      />
      <div className="btnSubmitSearch">
        <button onClick={handleSubmitSearch} >Search character</button>
      </div>

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
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Pagination
          page={page}
          count={countPages}
          onChange={handleChangePage}
          sx={{
            backgroundColor: "lightgray",
            borderRadius: "100px",
            width: "350px",
          }}
        />
      </Stack>
    </div>
  );
}

export default CharacterList;
