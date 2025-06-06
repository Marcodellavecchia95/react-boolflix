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

  return (
    <main className="pt-2">
      <div className="container">
        <div className="row">
          {filteredMovies.map((movie) => {
            return (
              <div className="col-4" key={movie.id}>
                <div className="card mb-2">
                  <div className="card-front">
                    <img
                      src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="card-back">
                    <h3>{movie.title}</h3>
                    <ul>
                      <li>Titolo Originale: {movie.original_title}</li>
                      <li>
                        Lingua:
                        <img
                          src={movieLanguage(movie.original_language)}
                          alt={movie.original_language}
                        />
                      </li>
                      <li>Voto: {starFunction(movie.vote_average)}</li>
                      <li>Overview: {movie.overview}</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
