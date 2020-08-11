import React, { useState, useEffect } from 'react';

export default function SelectFilter({ newRegion }) {
    const [option, setOption] = useState("");

    
    useEffect(() => {
        handleRegion(option);
    }, [option])
    
    function handleRegion(option) {
        newRegion(option);
    }

    return (
        <>
            <form>
                <select 
                    name="region"
                    defaultValue="all"
                    id="region"
                    onChange={e => setOption(e.target.value)}
                >
                    <option value="all">Filter by Region</option>
                    <option value="region/africa">Africa</option>
                    <option value="region/americas">America</option>
                    <option value="region/asia">Asia</option>
                    <option value="region/europe">Europe</option>
                    <option value="region/oceania">Oceania</option>
                </select>
            </form>
        </>
    )
}