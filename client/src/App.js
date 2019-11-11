import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'; 

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}></Route>
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
