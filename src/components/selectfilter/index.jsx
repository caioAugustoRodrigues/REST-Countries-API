import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SelectFilter({ newRegion }) {
    let regionName = 'region';
    let region = 'foi';


    return (
        <>
            <form>
                <select name="region" id="region" onChange={e => newRegion(e.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        </>
    )
}