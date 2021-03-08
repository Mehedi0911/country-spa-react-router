import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Countries.css'

const Countries = (props) => {
    const {name, flag, population, capital} = props.country;
      
    return (
        <div className="country-container">
            <img src={flag} alt=""/>
            <Link to={`/countryDetails/${name}`}><h3>Country Name : {name}</h3></Link>
            <h3>Country Capital : {capital}</h3>
            <p>Population: {population}</p>
        </div>
    );
};

export default Countries;