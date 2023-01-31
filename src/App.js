// import React from 'react';
// import './App.css';
// // import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import Logo from './logo';
// import ResultsTable from './resultTable';
// import ReturnResults from './pullFirestoreData';
// // import MaterialTable from 'material-table';


// class App extends React.Component {
//   // state = {
//   //   data: [{}],
//   //   dataRetrieved: false
//   // }
//   // handleSubmit = async (searchResults) => {
  
//   //   // update state
//   //   var newData = await searchResults;
//   //   console.log(newData);
//   //   this.setState({ data: newData, dataRetrieved: true });
//   //   console.log(this.state.data,this.state.dataRetrieved);
//   // }


// // function App(){
 
//   render(){
//     return (
//         <div className="App">
//         <header className='App-header'>
//           <div><Logo /> </div>
//           <div> <ReturnResults /></div>
        
//         </header>
//       </div>
//     );
  
// }

// }
// export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/layout/Navbar';
import Dashboard from './dashboard/dashboard';
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


   {/* <BrowserRouter> */}
 {/* <Navbar/> */}
      {/* <Routes>
        <Route exact path="/" element={<TableRedox/>} />
            {/* </BrowserRouter> */}