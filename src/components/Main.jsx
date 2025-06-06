import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useMovie } from "./contexts/MovieContext";
import { useState } from "react";

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

  const [isShown, setIsShown] = useState(false);

  return (
    <main>
      <div className="container">
        <div className="row">
          {filteredMovies.map((movie) => {
            return (
              <div className="col">
                <div
                  className="card"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card’s content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                  {/* <li key={movie.id}>
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
                  </li> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
