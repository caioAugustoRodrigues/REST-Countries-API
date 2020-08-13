import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar';
import Countries from '../../components/list';
import Filter from '../../components/filter';


export default function Home() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log(filter);
  }, [filter])

  return (
    <>

      <main>
        <Filter filter={setFilter}/>
        <Countries filter={filter}/>
      </main>
    </>
  );
}

 
