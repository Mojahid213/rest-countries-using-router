import React from 'react';
import './TheDetails.css'

const TheDetails = (props) => {
    const{name,flag,capital,region,population} = props.detail;
    return (
        <div className='theDetailsDiv'>
        <img src={flag} alt="" style={{width:'400px'}}/>
        <h2>{name}</h2>
        <h3>Capital: {capital}</h3>
        <h3>Region: {region}</h3>
        <h3>Population: {population}</h3>
    </div>
    );
};

export default TheDetails;