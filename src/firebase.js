 // Import the functions you need from the SDKs you need

<<<<<<< HEAD
<<<<<<< HEAD
import { initializeApp } from 'firebase/compat/app';
import { getFirestore } from 'firebase/compat/firestore'
=======
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
>>>>>>> parent of 2bb2814 (update using redux-react-firebase)
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { combineReducers, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore


=======
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore'
>>>>>>> parent of dd10870 (a functional website)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

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

  // react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
  // Initialize Firebase
  initializeApp(firebaseConfig);

  firebase.firestore() // <- needed if using firestore

  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })

  // Create store with reducers and initial state
const initialState = {}
const store = configureStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

  // Reference to your Firestore database
  export default getFirestore();
  

  