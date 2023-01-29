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
import {createStore} from 'redux-toolkit';
import { ReactReduxFirebaseProvider, firebaseReducer, firestoreReducer, reactReduxFirebase } from 'react-redux-firebase'; 
import fbConfig from './config/fbConfig'
import firebase from 'firebase/compat/app';
import DataTable from './toolbar'
import { createContext } from 'react';
// import rootReducer from './store/reducers/rootReducer';
// https://www.youtube.com/watch?v=gf5bVfVlNUM from 

  // react-redux-firebase config
  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
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
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

    const rootReducer = combineReducers({
      firebase: firebaseReducer,
      firestore: firestoreReducer // <- needed if using firestore
    })
  
  const initialState = {};
  const store = createStore(
    rootReducer, initialState);

    // compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    // reduxFirestore(fbConfig),
    // reactReduxFirebase(fbConfig)

    // )
  // );
  
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
      {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
        {/* <App />  */}
        {/* <div> <DataTable /> </div> */}
      {/* </ReactReduxFirebaseProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
