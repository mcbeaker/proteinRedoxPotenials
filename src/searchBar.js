import React, { useState, useEffect } from 'react';
import db from './firebase'
import { collection, onSnapshot } from 'firebase/firestore';



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

  return (
    <div className="App-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search-input"></label>
            <input type="text" id="search-input" name="searchInput"/>
            <button type="submit">Search</button>
          </form> 
    </div>
  );
}
