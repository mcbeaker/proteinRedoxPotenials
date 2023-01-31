import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import db from './fbConfig';
import { collection, doc, onSnapshot, query, where, getDocs} from 'firebase/firestore';
import { render } from '@testing-library/react';
=======
import db from './firebase'
import { collection, onSnapshot } from 'firebase/firestore';
>>>>>>> ae3702baab658acaec33424b89249ffb673ffd65



export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // make API call to retrieve search results using searchTerm
    onSnapshot(collection(db,'redox'), (snapshot) => 
        setSearchResults(snapshot.docs.map((doc) => doc.data()))
        )
    setShowResults(true);
  };

<<<<<<< HEAD
<<<<<<< HEAD
        // const q = query(collection(db, 'redox'),where('pdbID', '==', inputValue));
        const q = query(collection(db, 'redox'));
        // const qu = await getDocs(q) //..get();
        // console.log(query.docs);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            // console.log("Data",querySnapshot.docs.map(doc => doc.data()));
            if(querySnapshot.empty){
                console.log("error getting docs");
            }else{
                // queryResults = []
                const queryDocs = querySnapshot.docs.map((doc) => ({id:doc.id,enzyme_name:doc.data().enzyme_name,
                                                                    cofactor:doc.data().cofactor,cofactor_type:doc.data().cofactor_type,
                                                                    redox_mv:doc.data().redox_mv,pdbID:doc.data().pdbID,uniprot_id:doc.data().uniprot_id}));
                setSearchResults(queryDocs);
                setShowResults(true);
                onSubmit(queryDocs);
                setUnsub(unsubscribe);
            }
    });
  }
    useEffect(() => {
    return () => {
      unsub && unsub();
    };
  }, [unsub]);

    return (
=======
  return (
>>>>>>> parent of dd10870 (a functional website)
=======
  return (
>>>>>>> parent of dd10870 (a functional website)
    <div className="App-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search-input"></label>
            <input type="text" id="search-input" name="searchInput"/>
            <button type="submit">Search</button>
          </form> 
    </div>
  );
}
