import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TheDetails from '../TheDetails/TheDetails';

const CountryDetails = () => {
    const{name} = useParams();
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    const [details,setdetails] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setdetails(data))
    },[]);
    return (
        <div>
            {
                details.map(d => <TheDetails detail={d} key={d.alpha3Code}></TheDetails>)
            }
        </div>
    );
};

export default CountryDetails;