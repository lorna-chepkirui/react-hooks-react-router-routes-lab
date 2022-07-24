import React from "react";
import { actors } from "../data";

function Actors() {
  const displayActors = actors.map((value) => (
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
    <h1>Actors Page</h1>
    {displayActors}
  </div>)
}

export default Actors;