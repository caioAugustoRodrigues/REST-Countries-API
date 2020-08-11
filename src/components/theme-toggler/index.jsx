import React from 'react';


export default function ThemeToggler() {
    const body = document.body;
    let isDark = false;
    
    function switchTheme() {
        if (!isDark) {
            body.setAttribute('id', 'dark');
            isDark = true;
        } else if (isDark) {
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



