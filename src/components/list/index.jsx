import React, { useEffect } from 'react';
import axios from 'axios';

export default function Countries({ filter }) {
    let country = filter;
    let getCountries = axios.get('https://restcountries.eu/rest/v2/'+country);

    function CountryCard() {
        while (getCountries) {
            return (
                <li className="countries__country">
                    <img src="" alt="" className="countries__country__flag"/>
                    <h3 className="countries__country__name">Germany</h3>
                    <h4 className="countries__country__unit">Population: <span className="countries__country__unit__value">81.770.900</span></h4>
                    <h4 className="countries__country__unit">Region: <span className="countries__country__unit__value">Europe</span></h4>
                    <h4 className="countries__country__unit">Capital: <span className="countries__country__unit__value">Berlin</span></h4>
                </li>
            )
        }
    }

    return (
        <ul className="countries" onChange={console.log(getCountries)}>
            <CountryCard />
        </ul>
    )
}