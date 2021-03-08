import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'


const CountryDetails = () => {
   const {countryName} = useParams();
   const [country, setCountry] = useState([]);
   const{flag, name, population, capital} = country;

   useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
      fetch(url)
      .then(res => res.json())
      .then(data => setCountry(data[0]))

   },[])
   console.log(country);
    return (
        <div className="country-details">
           <h2>Details of {name}</h2>
           <img src={flag} alt=""/>
           <h4>Capital : {capital}</h4>
           <h5>Population : {population}</h5>

        </div>
    );
};

export default CountryDetails;
