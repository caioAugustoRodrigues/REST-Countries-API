import React, { useState } from 'react';
import { useEffect } from 'react';

export default function TextFilter({ setName }) {
    const [name, setNames] = useState("");

    useEffect(() => {
        handleText(name);
    })
    
    function handleText(name) {
        setName(name);
    }

    return (
        <>
            <input 
                type="text"
                placeholder="Search for a country..."
                onChange={e => setNames(e.target.value)}
            />
        </>
    )
}