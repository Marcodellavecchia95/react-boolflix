import { useMovie } from "./contexts/MovieContext";

export default function Main() {
  const { filteredMovies } = useMovie();

  const getCorrectFlagName = (lang) => {
    const flagDictionary = {
      en: "gb",
      ja: "jp",
      ko: "kr",
      da: "dk",
    };

    const result = flagDictionary[lang] ?? lang;

    return result;
  };

  const movieLanguage = (lang) => {
    const flagName = getCorrectFlagName(lang);

    return `https://flagsapi.com/${flagName.toUpperCase()}/flat/64.png`;
  };

  return (
    <section>
      <ul>
        {filteredMovies.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}
                alt=""
              />
              <p>Titolo Originale: {movie.original_title}</p>
              <p>
                Lingua:
                <img
                  src={movieLanguage(movie.original_language)}
                  alt={movie.original_language}
                />
              </p>
              <p>Voto: {movie.vote_average}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
