import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div class="container">
      <div class="row">
        {countries.map((country) => {
          return (
            <div className="col-5" style={{ maxHeight: '50 vh', overflow: 'scroll' }}>
            <div className="list-group" key={country.name.common}>
              <Link
                class="list-group-item list-group-action"
                exact
                to={`/${country.name.common}`}
              >{country.flag} {country.name.common}</Link>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
