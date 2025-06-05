import { useMovie } from "./contexts/MovieContext";

export default function Main() {
  const { filteredMovies } = useMovie();
  const { id, title, original_title, original_language, vote_average } =
    filteredMovies;

  return (
    <section>
      <ul>
        {filteredMovies.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Titolo Originale: {movie.original_title}</p>
              <p>Lingua: {movie.original_language} </p>
              <p>Voto: {movie.vote_average}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
