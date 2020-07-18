import React from 'react';
import NavBar from './components/navbar';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <p>
          The Bagulho is loco
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;
