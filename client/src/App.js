import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'; 
import Movie from './Movies/Movie'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  
  const addToSavedList = movie => {

    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <Movie setchangId = {setchangeId} />  */}
      <Route exact path="/" component={MovieList}></Route>
      <Route path="/movies/:id" render={props => <Movie {...props} setSavedList={addToSavedList}  />}/> 
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
