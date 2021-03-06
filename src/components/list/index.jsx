import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default function Countries({ filter }) {
    const [countries, setCountries] = useState();
    let newFilter = filter;

    useEffect(() => {
        getCountries(newFilter);
    }, [newFilter])
    
    let getCountries = async (filters) => {
        let res = await axios.get(`https://restcountries.eu/rest/v2/${filters}`);
        setCountries(res.data)
    }

    function CountryCard() {
        if (countries) {
            return (
                <>
                    {countries.map(country => (
                        <Link to={`details/${country.alpha3Code}`} key={country.alpha3Code}>
                            <li className="countries__country" >
                                <img src={country.flag} alt="" className="countries__country__flag"/>
                                <h3 className="countries__country__name">{country.name}</h3>
                                <h4 className="countries__country__unit">
                                    Population: <span className="countries__country__unit__value">{country.population}</span>
                                </h4>

                                <h4 className="countries__country__unit">
                                    Region: <span className="countries__country__unit__value">{country.region}</span>
                                </h4>

                                <h4 className="countries__country__unit">
                                    Capital: <span className="countries__country__unit__value">{country.capital}</span>
                                </h4>
                            </li>
                        </Link>
                    ))}
                </>
            )
        } else {
            return (
                <li className="countries__country">
                    <h2>No countries found(maybe check spelling?)</h2>
                </li>
            )
        }
    }

    return (
        <ul className="countries"
        >
            <CountryCard />
        </ul>
    )
}