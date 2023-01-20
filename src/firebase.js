 // Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore'

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
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Reference to your Firestore database
  export default getFirestore();
  

  