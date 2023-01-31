import './App.css';
// import Navbar from './components/layout/Navbar';
import TableRedox from './redox/tableRedox';
import Logo from './logo';
// import tableRedox from './redox/tableRedox';

function App() {
  return (
    <div>
   
      <div className="App">
        <Logo />
        </div>
        <div className="App"> 
          <TableRedox /> 
          </div> 
      </div>
  );
}

export default App;


  