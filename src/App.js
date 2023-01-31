import './App.css';
// import Navbar from './components/layout/Navbar';
import TableRedox from './redox/tableRedox';
import Logo from './logo';
// import tableRedox from './redox/tableRedox';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";

function App() {
  return (
    <div className="App"> 
    <Navbar />
    <div>
    <Section
      title="Table"
      Component={TableRedox}
      dark={false}
      id="Table"
    />
    </div>
    {/* </div> */}
    </div>
    /*<Section
      title="Form"
      subtitle={dummyText}
      dark={false}
      id="section2"
    />
    <Section
      title="Section 3"
      subtitle={dummyText}
      dark={true}
      id="section3"
    /> 
  }*/
    // </div>
  );
}

// function App() {
//   return (
//     <div>
//    {/* <h1 > Hello World</h1> */}
//       <div className="App-logo">
//         <Logo />
//         </div>
//         <div className="App"> 
//           <TableRedox /> 
//           </div> 
//       </div>
//   );
// }

export default App;


  