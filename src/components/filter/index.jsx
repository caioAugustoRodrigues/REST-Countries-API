import React, { useState } from 'react';
import TextFilter from './text';
import SelectFilter from './select';

export default function Filters({ filter }) {
    const [countryName, setCountryName] = useState("");
    const [region, setRegion] = useState("");

    function setName(newName) {
        setCountryName(newName);
        setRegion("");
        filter("name/" + newName);
    }

    function newRegion(newRegion) {
        setRegion(newRegion);
        setCountryName("");
        filter(newRegion);
    }
    
    return (
        <>
            <TextFilter 
                setName={setName} 
                region={region}
            />

            <SelectFilter 
                newRegion={newRegion}
            />
        </>
    )
}