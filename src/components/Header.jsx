import { useMovie } from "./contexts/MovieContext";

export default function Header() {
  const { query, setQuery, fetchFilteredMovies } = useMovie();

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center">
        <img className="logo mt-3" src="src/img/logo.png" alt="" />

        <section className="mt-3">
          <input
            onChange={handleInput}
            value={query}
            type="text"
            placeholder="Cerca film o serie Tv..."
          />
          <button onClick={fetchFilteredMovies}>Cerca</button>
        </section>
      </div>
    </header>
  );
}
