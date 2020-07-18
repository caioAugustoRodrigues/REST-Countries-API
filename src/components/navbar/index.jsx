import React from 'react';
import ThemeToggler from '../theme-toggler/';

export default function NavBar() {
    return (
        <header className="nav">
            <h1 className="nav__title">Where in the world?</h1>
            <ThemeToggler />
        </header>
    )
}