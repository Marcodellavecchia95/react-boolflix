import { createContext, useContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

function MovieProvider({ children }) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchFilteredMovies = () => {
    Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
      ),
    ]).then(([resMovies, resTvSeries]) => {
      const correctMovies = resMovies.data.results.map((movie) => ({
        ...movie,
      }));
      const correctTvSeries = resTvSeries.data.results.map((serie) => ({
        ...serie,
        title: serie.name,
        original_title: serie.original_name,
      }));
      const results = [...correctMovies, ...correctTvSeries];

      setFilteredMovies(results);
    });
  };

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        filteredMovies,
        fetchFilteredMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  return useContext(MovieContext);
}

export { MovieProvider, useMovie };
