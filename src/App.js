import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import Countries from './components/list';
import TextFilter from './components/textfilter';
import SelectFilter from './components/selectfilter';


function App() {
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");
  const [filter, setNewFilter] = useState("all");

  function setName(newName) {
    setCountryName(newName);
    setNewFilter("name/" + newName);
  }

  function newRegion(newRegion) {
    setRegion(newRegion);
    setNewFilter("region/" + newRegion);
  }


  return (
    <>
      <header>
        <NavBar />
        <TextFilter setName={setName}/>
        <SelectFilter newRegion={newRegion} />
      </header>

      <main>
        <Countries filter={filter}/>
      </main>
    </>
  );
}

export default App;
