import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';

function initFirebase(){
    const app = initializeApp({
        apiKey: "AIzaSyDC-iI7vlaEb4BVmZ9zxRbQ7z-HjGmw87w",
        authDomain: "protein-redox-potential.firebaseapp.com",
        databaseURL: "https://protein-redox-potential-default-rtdb.firebaseio.com",
        projectId: "protein-redox-potential",
        storageBucket: "protein-redox-potential.appspot.com",
        messagingSenderId: "1070866434741",
        appId: "1:1070866434741:web:9b83f77dfe9f2ce3bb8cfc",
        measurementId: "G-EMFPX708HR"
      });
    
      // Reference to your Firestore database
      const db = getFirestore(app);
      const initDocs = collection(db,'redox');
      return initDocs;
}
export initFirebase;
