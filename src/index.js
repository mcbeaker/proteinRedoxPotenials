import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, applyMiddleware, compose } from 'redux'
// import rootReducer from 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import {configureStore } from '@reduxjs/toolkit';
import {  ReactReduxFirebaseProvider, firebaseReducer, firestoreReducer, reactReduxFirebase } from 'react-redux-firebase'; 
import fbConfig from './config/fbConfig'
import firebase from 'firebase/compat/app';
// import rootReducer from './store/reducers/rootReducer';
// https://www.youtube.com/watch?v=gf5bVfVlNUM from 

  // react-redux-firebase config
  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
  
    const rootReducer = combineReducers({
      firebase: firebaseReducer,
      firestore: firestoreReducer // <- needed if using firestore
    })
  

  const store = configureStore(
    {reducer:rootReducer}, 
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
