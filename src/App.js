import logo from './logo.svg';
import './App.css';
// import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import {initDocs} from './initFirebase'
import MaterialTable from 'material-table';
import { getDocs } from 'firebase/firestore';

function FormExample ({searchInput, setSearchInput, retrieveFirestore}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target.searchInput.value);
    retrieveFirestore(searchInput);
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href="index.html"> 
          <img src={logo} className="App-logo" alt="logo" /> 
        </a> 
        <div className="App-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search-input"></label>
            <input type="text" id="search-input" name="searchInput"/>
            <button type="submit">Search</button>
          </form> 
        </div>
      </header>
      <MaterialTable
        columns={[
          { title: "PDB", field: "pdbID" },
          { title: "Redox(mv)", field: "redox_mv" },
        ]}
        data={data}
        title="Demo Title"
        theme={{
          direction: 'ltr',
        }}
      />
    </div>
  );
}

function App(){
  
  const [searchInput, setSearchInput] = useState('');
  function FormExample ({searchInput, setSearchInput, retrieveFirestore}) {
    const [data, setData] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSearchInput(event.target.searchInput.value);
      retrieveFirestore(searchInput);
    }
  
  async function retrieveFirestore(searchInput) {
    console.log("retrieveFirestore called");

      const gotDocs = await getDocs(initDocs);
      if (gotDocs.empty) {
        console.log('No matching documents.');
        return;
      }
      const allData = [];
      gotDocs.forEach(doc =>
        allData.push(doc.data()))
      const avengers = allData.filter(allData => allData.pdbID === searchInput);
        console.log(avengers);
      setData(avengers);
    }

  return (
    <div>
    <FormExample searchInput={searchInput} setSearchInput={setSearchInput} retrieveFirestore={retrieveFirestore} />
    </div>
  );
}

export default App;