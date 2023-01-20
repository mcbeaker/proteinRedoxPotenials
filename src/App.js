import logo from './logo.svg';
import './App.css';
// import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import {initFirebase} from './initFirebase'
import MaterialTable from 'material-table';
import { getDocs } from 'firebase/firestore';

function FormExample () {
  const [data, setData] = useState([{pdbID: "", redox_mv: ""}]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    console.log("useEffect called");

    async function retrieveFirestore() {
      console.log("retrieveFirestore called");

      const gotDocs = await getDocs(initFirebase());
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
    retrieveFirestore();
  }, [searchInput]);

  const handleSubmit = (event) => {
    console.log("form submitted");

    event.preventDefault();
    setSearchInput(event.target.searchInput.value);
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
  return (
    <div>
      {console.log('component rendered')}
      <FormExample />
    </div>
  );
}

export default App;