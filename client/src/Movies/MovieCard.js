import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const MovieCard = props => {
  return <Link to={`/movies/${props.id}`}>{props.title}</Link>;
};

export default MovieCard;
