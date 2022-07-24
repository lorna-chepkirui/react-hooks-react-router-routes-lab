import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map((value) => (
    <div key={value.name}>
      <h2>{value.name}</h2>

      <ul>
        {value.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
     ));
  return (<div>
    <h1>Directors Page</h1>
    {displayDirectors}
  </div>)
}

export default Directors;