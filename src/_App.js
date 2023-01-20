import logo from './logo.svg';
import './App.css';
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, query, getDocs, getDocsFromServer} from 'firebase/firestore';
// import { useState, useEffect, useCallback } from 'react';
import {initDocs} from './initFirebase'
import { useTable } from 'react-table'
import { useEffect, useRef } from 'react';
import MaterialTable from 'material-table';

function FormExample () {
  
  const formRef = useRef(null);
  // Get form element
  var form = document.getElementById("search-form");

  useEffect(() => {
  // Listen for form submit event
  const ref = formRef;
  formRef.current.addEventListener("submit",handleSubmit);
  // console.log("hello");
  return() => {
    ref.current.removeEventListener('submit',handleSubmit);
  
  };
},[formRef]);

async function retrieveFirestore (searchInput) {
  // console.log(initDocs);
  console.log(searchInput);
  var allDocs = [];
  const gotDocs = await getDocs(initDocs);
  gotDocs.forEach(doc => {

    const data = doc.data();
    allDocs.push(data);
  })
  if (gotDocs.empty) {
    console.log('No matching documents.');
    return;
  }
  // console.log(allDocs);
  return (
    
      <MaterialTable
        columns={[
          { title: "Adı", field: "name" },
          { title: "Soyadı", field: "surname" },
          { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
          {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            birthCity: 63,
          },
        ]}
        title="Demo Title"
      />
    
  );
}

  const handleSubmit = (event) => {
    event.preventDefault();
    var searchInput = document.getElementById("search-input").value;
    // console.log(searchInput);
    retrieveFirestore(searchInput);
  }
  

 return (
    <div className="App">
      <header className="App-header">
        <a href="index.html"> 
          <img src={logo} className="App-logo" alt="logo" /> 
        </a> 
        <div className="App-form">
          <form ref={formRef} id="search-form">
            <label htmlFor="search-input"></label>
            <input type="text" id="search-input"/>
            <button type="submit">Search</button>
          </form> 
            
            </div>
      </header>
    </div>
  );


}


function App(){

    return (
      <div>
        <FormExample />
      </div>
    );
  }

export default App;

