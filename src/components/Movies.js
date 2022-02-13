import React from "react";
import { movies } from "../data";
import {v4 as uuidv4} from "uuid"; 

const Movies = () => {

  const movieProps = movies.map(movie => (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <div key={movie.name}>
        <p>Genres:</p>
        <ul>
        {movie.genres.map(genre => { return (<li key={uuidv4()}>{genre}</li>) })} 
        </ul>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieProps}
    </div>
  )
}

export default Movies;