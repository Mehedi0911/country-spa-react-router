import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import './Home.css'

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

  
    return (
        <div className="home-container">
          <h2>Total Loaded Countries : {countries.length}</h2>
          <div className="countries-container">
              {
                  countries.map(country => <Countries country={country}></Countries>)
              }
          </div>
        </div>
    );
};

export default Home;