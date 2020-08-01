import React, { useState } from 'react';

export default function TextFilter({ setName }) {

    return (
        <>
            <input 
                type="text"
                placeholder="Search for a country..."
                onChange={e => setName(e.target.value)}
            />
        </>
    )
}