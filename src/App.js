<<<<<<< HEAD
// import React from 'react';
import './App.css';
// import * as firebase from 'firebase/app';

// import 'firebase/firestore'; // SIDE EFFECT PACKAGES
import Navbar from "./components/navigationBar";
import Section from './components/section';


// import ResultsTable from './resultTable';
// import ReturnResults from './pullFirestoreData';
// import MaterialTable from 'material-table';
// import { initializeApp } from 'firebase/app';
import Logo from './logo';
// import ReturnResult from './toolbar';
// import { initializeApp } from 'firebase/compat/app';
import { getFirestore } from 'firebase/compat/firestore';
import React from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // <- needed if using firestore
import { combineReducers, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import Data from './toolbar'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import DataTable from './toolbar';

// Setup react-redux so that connect HOC can be used
export default function App() {
  return (
    <div className="App">
         <Navbar />
          <Section
          title=""
          subtitle=""
          dark={true}
          id="section1"
          />
        
        <header className='App-header'>
          <div><Logo /> </div>
          {/* <div> <ReturnResults /></div> */}
          <div><DataTable /></div>
        
        </header>
      </div>
    );
  
}

=======
import logo from './logo.svg';
import './App.css';
// import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Logo from './logo';
import SearchBar from './searchBar';
import ResultsTable from './resultTable';
      

function App(){
 

  return (
    <div className="App">
      <Logo src="logo.svg" alt="ProtRedox logo"/>
      <SearchBar />
      <ResultsTable />
    </div>

  );
}


export default App;
>>>>>>> parent of dd10870 (a functional website)



// export default class App extends React.Component {
// state = {
//   character: {}
// }

// componentDidMount(){
//   console.log("componentDidMount");
//   fetch("https://swapi.dev/api/people/1")
//   .then(res=> res.json())
//   // .then(data=>console.log(data))
//   .then(data => {
//         this.setState({character: data})

//     })
  
//     }
 
//   render(){
//     console.log("render")
//     return (
//       <h1>{this.state.character.name}</h1>
      // <div className="App">
      //   <Navbar />
      //   <Section
      //     title=""
      //     subtitle=""
      //     dark={true}
      //     id="section1"
      //   />
        
      //   {/* <header className='App-header'> */}
      //     {/* <div><Logo /> </div> */}
      //     {/* <div> <ReturnResults /></div> */}
      //     <div><ReturnResult /></div>
        
      //   {/* </header> */}
      // </div>
//     );
  
// }

// }



  // state = {
  //   data: [{}],
  //   dataRetrieved: false
  // }
  // handleSubmit = async (searchResults) => {
  
  //   // update state
  //   var newData = await searchResults;
  //   console.log(newData);
  //   this.setState({ data: newData, dataRetrieved: true });
  //   console.log(this.state.data,this.state.dataRetrieved);
  // }


// function App(){