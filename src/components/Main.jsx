import { useMovie } from "./contexts/MovieContext";

export default function Main() {
  const { filteredMovies } = useMovie();

  return (
    <section>
      <ul>
        {filteredMovies.map((movie) => {
          const flagLanguage = () => {
            if (movie.original_language === "en") {
              movie.original_language = "gb";
            }
            return movieLanguage();
          };

          const movieLanguage = () => {
            return `https://flagsapi.com/${movie.original_language.toUpperCase()}/flat/64.png`;
          };

          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Titolo Originale: {movie.original_title}</p>
              <p>
                Lingua:
                <img src={flagLanguage()} alt="" />
              </p>
              <p>Voto: {movie.vote_average}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
