import React from "react";
import { actors } from "../data";
import {v4 as uuidv4} from "uuid"; 

const Actors = () => {

  const actorProps = actors.map(actor => (
    <div key={actor.name}>
      <div key={actor.name}>
        <h2>Name: {actor.name}</h2>
        <p>Movies: </p>
        <ul>
        {actor.movies.map(movie => { return (<li key={uuidv4()}>{movie}</li>) })}
        </ul>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {actorProps}
    </div>
  )
}

export default Actors;