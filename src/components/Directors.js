import React from "react";
import { directors } from "../data";

const Directors = () => {

  const directorProps = directors.map(director => (
    <div key={director.name}>
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies: </p>
        <ul>
        {director.movies.map(movie => { return (<li key={movie}>{movie}</li>) })}
        </ul>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorProps}
    </div>
  )
}

export default Directors;
