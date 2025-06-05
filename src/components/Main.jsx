import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useMovie } from "./contexts/MovieContext";

export default function Main() {
  const { filteredMovies } = useMovie();

  const starFunction = (vote) => {
    const starsNumber = Math.ceil(vote / 2);
    const totalStars = 5;

    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i < starsNumber ? faStarSolid : faStarRegular}
          color="gold"
        />
      );
    }

    return stars;
  };

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
              <p>Voto: {starFunction(movie.vote_average)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
