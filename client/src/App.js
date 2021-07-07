import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  //const [product, setProduct] = useState(Movie);
  // const addToSavedList = movie => {
  //   setSavedList( [...savedList, movie] );
  // };

  return (
    <div>
      <SavedList list={savedList} />
      
        <Route exact path="/"  component={MovieList}/>
        {/* <Route path="/movies/:id" component={Movie}/> */}
        <Route exact path="/movies/:id" component = {Movie}/>
        {/* <Link to="/movies/">Movies</Link> */}
      
    </div>
  );
};

export default App;
