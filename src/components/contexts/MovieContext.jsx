import { createContext, useContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchFilteredMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      )
      .then((res) => {
        setFilteredMovies(res.data.results);
      });
  };

  return (
    <MovieContext.Provider
      value={{ query, setQuery, filteredMovies, fetchFilteredMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  return useContext(MovieContext);
}

export { MovieProvider, useMovie };
