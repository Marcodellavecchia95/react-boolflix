import axios from "axios";
import { useState } from "react";

export default function Header() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const fetchFilteredMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      )
      .then((res) => {
        console.log(res.data.results);
        setFilteredMovies(res.data.results);
      });
  };

  return (
    <header>
      <div className="container">
        <section>
          <input onChange={handleInput} value={query} type="text" />
          <button onClick={fetchFilteredMovies}>Cerca</button>
        </section>
      </div>
    </header>
  );
}
