import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <NavLink className="navbar-brand" exact to="/">
            <h1> WikiCountries</h1>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
