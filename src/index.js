import React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { combineReducers, compose, legacy_createStore as createStore } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
  firestoreConnect,
  FirestoreReducer,
  FirebaseReducer,
  isLoaded,
  isEmpty,
  populate
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

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
  //userProfile: "users",
  //useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

function Redoxs({ Redoxs }: any) {
  console.log(Redoxs);
  if (!isLoaded(Redoxs)) {
    return <div>Loading...</div>;
  }
  if (isEmpty(Redoxs)) {
    return <p>Redoxs list is empty</p>;
  }
  return (
    <div>
      <p>{JSON.stringify(Redoxs)}</p>
    </div>
  );
}

// const populates = [
//   {
//     child: "ingredients",
//     root: "ingredients",
//     childAlias: "populatedIngredients"
//   }
// ];

const RedoxsC = compose(
  firestoreConnect([{ collection: "redox" }]), // populates }]),
  // firestoreConnect((props) => [
  //   { collection: "Redoxs", populates } // or `todos/${props.todoId}`
  // ]),
  // @ts-ignore
  //firestoreConnect(() => [{ collection: "Redoxs", populates }]), // or { collection: 'Redoxs' }
  connect(({ firestore, firebase }: RootState) => {
    return {
      //Redoxs: firestore.ordered.Redoxs,
      Redoxs: populate(firestore, "redox", []) //, populates)
    };
  })
)(Redoxs) as React.ComponentType;

// Setup react-redux so that connect HOC can be used
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <RedoxsC />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
