import React from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  console.log(props.match.params.cca3);

  const cca3 = props.match.params.cca3;

  const exactCountry = countriesJSON.find((country) => country.cca3 === cca3);
console.log(exactCountry);
  return (
    <div>
      {/* exactCountry is undefined */}
      <h1>{exactCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{exactCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {exactCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  {exactCountry.borders.map((border)=>{
                  const borderExists = countriesJSON.find((country)=>{
                   return country.cca3===border;
                  }); 
                  return (
                  <li>
                    <Link></Link>
                </li>
                  );
                })};
                </li>
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
