import React from 'react';


export default function ThemeToggler() {
    const switcher = document.getElementById('theme-switcher');
    const body = document.body;
    let isDark = false;
    
    function switchTheme() {
        if (!isDark) {
            console.log('Dark!');
            body.setAttribute('id', 'dark');
            isDark = true;
        } else if (isDark) {
            console.log("Light!");
            body.setAttribute('id', 'light');
            isDark = false;
        }
    }

    return (
        <>
            <h4 id="theme-switcher" onClick={switchTheme}>Dark Mode</h4>
        </>
    )


    
}



