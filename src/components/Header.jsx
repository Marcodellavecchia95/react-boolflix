import { useMovie } from "./contexts/MovieContext";

export default function Header() {
  const { query, setQuery, fetchFilteredMovies } = useMovie();

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
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
