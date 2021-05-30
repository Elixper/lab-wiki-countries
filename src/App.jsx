import React from 'react';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CountriesList component={CountriesList} />
      <Switch>
        <Route exact path="/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
};

export default App;
