import React from "react";

export default function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        <p>{movie.Plot}</p>
      </>
    );
  };

  const loading = () => {
    return <h5>make a seach and your results will display here!</h5>;
  };

  return movie ? loaded() : loading();
}