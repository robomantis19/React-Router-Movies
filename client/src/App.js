import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div> 
        <Route exact path="/"  components={MovieList}/>
        <Route path="/movies/:id" components={Movie}/>
        <Link to="/movies/">Movies</Link>
      </div>
    </div>
  );
};

export default App;
