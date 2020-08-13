import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Details({ countryCode }) {
    const [country, setCountry] = useState();
    const [currencies, setCurrency] = useState();
    const [languages, setLanguages] = useState();
    const [borderingCountries, setBorderingCountries] = useState([]);

    let countryToDetail = countryCode;

    useEffect(() => {
        getCountry(countryToDetail);
    }, [countryToDetail])

    let getCountry = async (filter) => {
        let res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${filter}`);
        setCountry(res.data);
        setCurrency(res.data.currencies);
        setLanguages(res.data.languages);
        handleNeighbours(res.data.borders);
    }

    let getNeighbour = async (neighbour) => {
        let res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
            .then(res => {
                const neighbour = {
                    name: res.data.name,
                    id: res.data.alpha3Code
                }
                setBorderingCountries(borderingCountries => [...borderingCountries, neighbour]);
            });
    }


    function handleCurrencies(currencies) {
        if (currencies) {
            return (
                <>
                    {currencies.map(currency => (
                        <React.Fragment key={currency.code}>{currency.name}</React.Fragment>
                    ))}
                </>
            ) 
        } else {
            return (
                <React.Fragment>This country has no currencies</React.Fragment>
            )
        }
    }

    function handleLanguages(languages) {
        if (languages) {
            return (
                <>
                    {languages.map(language => (
                        <React.Fragment key={language.name}>{language.name}</React.Fragment>
                    ))}
                </>
            ) 
        } else {
            return (
                <React.Fragment>This country has no language</React.Fragment>
            )
        }
    }

    function handleNeighbours(neighbours) {
        if(neighbours) {
            return (
                <>
                    {neighbours.map(neighbour => {
                        getNeighbour(neighbour)
                    })}
                </>
            )
        } else {
            neighbours = false;
        }
    }

    function Neighbours({ neighbours }) {
        if (neighbours) {
            return (
                <>
                    {neighbours.map(neighbour => (
                        <li key={neighbour.id}>{neighbour.name}</li>
                    ))}
                </>
            )
        } else {
            return (
                <h3>This country has no bordering nations.</h3>
            )
        }
    }

    function Country({ country, currency, language, borders }) {
        
        if (country) {
            let currencies = currency;
            let languages = language;
            let borderingCountries = borders;

            return (
                <>
                    <div className="country">
                        <img src={country.flag} alt="Country flag" className="country__flag"/>

                        <h2 className="country__name">{country.name}</h2>

                        <ul className="country__data">
                            <li className="country__data__unit">
                                Native Name:
                                <span className="country__data__unit__value">{country.nativeName}</span>
                            </li>

                            <li className="country__data__unit">
                                Population:
                                <span className="country__data__unit__value">{country.population}</span>
                            </li>

                            <li className="country__data__unit">
                                Region:
                                <span className="country__data__unit__value">{country.region}</span>
                            </li>

                            <li className="country__data__unit">
                                Sub Region:
                                <span className="country__data__unit__value">{country.subregion}</span>
                            </li>
                            
                            <li className="country__data__unit">
                                Capital:
                                <span className="country__data__unit__value">{country.capital}</span>
                            </li>

                            <li className="country__data__unit">
                                Top Level Domain:
                                <span className="country__data__unit__value">{country.topLevelDomain}</span>
                            </li>

                            <li className="country__data__unit">
                                Currencies:
                                <span className="country__data__unit__value">{handleCurrencies(currencies)}</span>
                            </li>

                            <li className="country__data__unit">
                                Languages:
                                <span className="country__data__unit__value">{handleLanguages(languages)}</span>
                            </li>
                        </ul>

                        <ul className="country__neighbours">
                            <h4 className="country__neighbours__title">Border Countries:</h4>
                            
                            <Neighbours neighbours={borderingCountries}/>
                        </ul>
                    </div>
                </>
            )
        } else {
            return (
                <h3>Country not found</h3>
            )
        }
    }
    
    
    return (
        <>
            <Link to="/">
                <button>← Back</button>
            </Link>

            <Country 
                country={country} 
                currency={currencies}
                language={languages}
                borders={borderingCountries}
            />
        </>
    )
}