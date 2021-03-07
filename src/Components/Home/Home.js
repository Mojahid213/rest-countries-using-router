import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setcountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setcountries(data))
    },[])
    return (
        <div>
            <h2><span style={{color:'red'}}>Total Countries: </span>{countries.length}</h2>
            <div style={{display:'inline-grid'}}>
               {
                    countries.map(country => <Country country={country}></Country>)
                }
               </div>
        </div>
    );
};

export default Home;