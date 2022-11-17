import React, { useState } from 'react';
import {DATA} from '../src/data'
//Component Imports
import NavBar from "./Components/NavBar/NavBar";
import Table from './Components/Table/Table';

function App() {

  const[data,setData] = useState(DATA)

  return <div className="App">
    <NavBar />
    <Table data={data}/>
  </div>;
}

export default App;
