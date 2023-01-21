import React, { useState, useEffect } from 'react';
import db from './firebase';
import { collection, doc, onSnapshot, query, where, getDocs} from 'firebase/firestore';
import { render } from '@testing-library/react';

const SearchBar = ({ onSubmit }) => {
  console.log("loaded searchBar");
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [unsub, setUnsub] = useState(null);

  const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.searchInput.value);
        const inputValue = event.target.searchInput.value;
    // if(inputValue){
        setSearchTerm(inputValue);
        console.log(inputValue);

        const q = query(collection(db, 'redox'),where('pdbID', '==', inputValue));
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
    <div className="App-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input"></label>
        <input type="text" id="search-input" name="searchInput" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
  
};


export default SearchBar;






// import {React, useState, useEffect } from 'react';
// import db from './firebase'
// import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';


// class SearchBar extends React.Component {
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setSearchTerm(event.target.searchInput.value);
    
//         const q = query(collection(db,'redox'), where('pdbID', '==', searchTerm));
//         console.log(q);
//         const unsub = onSnapshot(q,(querySnapshot) => {
//                 console.log("Data", querySnapshot.docs.map(doc=>doc.data()));
//                 if (querySnapshot.empty){
//                     console.log('Error getting document');
//                 }
//                 else{
//                     const data = querySnapshot.docs.map(doc => doc.data());
//                     setSearchResults(data);
//                     setShowResults(true);
//                     // call the callback function to pass the data to the parent component
//                     onSubmit(data);
//                 }
//             });
//     useEffect(() => {
//     return () => {
//       unsub();
//     };
//   }, []);
// }

  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           {/* form inputs */}
//           <button type="submit">Submit</button>
//         </form>
//       );
//     }
//   }



// export default function SearchBar() {
//     console.log("loaded SearchBar");
    
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [showResults, setShowResults] = useState(false);


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setSearchTerm(event.target.searchInput.value);

//     const q = query(collection(db,'redox'), where('pdbID', '==', searchTerm));
//     console.log(q);
//     const unsub = onSnapshot(q,(querySnapshot) => {
//             console.log("Data", querySnapshot.docs.map(doc=>doc.data()));
//             if (querySnapshot.empty){
//                 console.log('Error getting document');
//             }
//             else{
//                 setSearchResults(querySnapshot.docs.map(doc => doc.data()));
//                 setShowResults(true);
//                 console.log(showResults);
//             }
//         });
//     // make API call to retrieve search results using searchTerm
//   } 

//   return (
//     <div className="App-form">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="search-input"></label>
//             <input type="text" id="search-input" name="searchInput"/>
//             <button type="submit">Search</button>
//           </form> 
//     </div>
//   );
//   }
