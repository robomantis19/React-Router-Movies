import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Movie from './Movie';


const MovieCard = ( props ) => {
  // return <Link to={`/movies/${<MovieDetails {id} />}`}>{props.title}</Link>;
  return (
    <div className="movie-card">
      <h2><Link to={`/movies/${props.id}`}>{props.title}  </Link></h2>
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )
};

export default MovieCard;
