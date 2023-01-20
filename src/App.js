import logo from './logo.svg';
import './App.css';
// import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Logo from './logo';
import SearchBar from './searchBar';
import ResultsTable from './resultTable';
      

function App(){
 

  return (
    <div className="App">
      <Logo src="logo.svg" alt="ProtRedox logo"/>
      <SearchBar />
      <ResultsTable />
    </div>

  );
}


export default App;



