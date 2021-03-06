import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const{name,capital} = props.country
    console.log(props.country);
    return (
        <div className='country-div'>
            <h2>Name: {name}</h2>
            <h3>Capitar: {capital}</h3>
            <Link to={`/country/${name}`}>Show details</Link>
        </div>
    );
};

export default Country;