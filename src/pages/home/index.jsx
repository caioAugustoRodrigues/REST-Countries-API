import React, { useState } from 'react';
import Countries from '../../components/list';
import Filter from '../../components/filter';


export default function Home() {
  const [filter, setFilter] = useState("all");

  return (
    <>

      <main>
        <Filter filter={setFilter}/>
        <Countries filter={filter}/>
      </main>
    </>
  );
}

 
