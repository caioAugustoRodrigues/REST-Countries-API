import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import Countries from './components/list';
import Filter from './components/filter';


function App() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log(filter);
  }, [filter])

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Filter filter={setFilter}/>
        <Countries filter={filter}/>
      </main>
    </>
  );
}

export default App;
