
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/firestore'; // <- needed if using firestore
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import { reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import db from './fbConfig';
// import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDC-iI7vlaEb4BVmZ9zxRbQ7z-HjGmw87w",
  authDomain: "protein-redox-potential.firebaseapp.com",
  databaseURL: "https://protein-redox-potential-default-rtdb.firebaseio.com",
  projectId: "protein-redox-potential",
  storageBucket: "protein-redox-potential.appspot.com",
  messagingSenderId: "1070866434741",
  appId: "1:1070866434741:web:9b83f77dfe9f2ce3bb8cfc",
  measurementId: "G-EMFPX708HR"
};
// Initialize Firebase
console.log('taga');

const app = firebase.initializeApp(firebaseConfig);
console.log('taga2');

// Reference to your Firestore database
const firestore = firebase.firestore();

console.log('taga3');
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const store = configureStore({reducer:rootReducer}, 
  compose(
    applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    firestore
    })),
    reduxFirestore(firebase)
    // reactReduxFirebase(db)
    )
    );
    const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);
