import React from 'react';
import TextFilter from './text';
import SelectFilter from './select';

export default function Filters({ filter }) {

    function setName(newName) {
        if (newName) {
            filter(`name/${newName}`);
        } else {
            filter("all");
        }
    }

    function newRegion(newRegion) {
        filter(newRegion);
    }
    
    return (
        <>
            <TextFilter 
                setName={setName} 
            />

            <SelectFilter 
                newRegion={newRegion}
            />
        </>
    )
}