import './App.css';
// import Navbar from './components/layout/Navbar';
import TableRedox from './redox/tableRedox';
import Logo from './logo';
// import tableRedox from './redox/tableRedox';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Form from './form';

function App() {
  return (
    <div className="App"> 
    <Navbar />
    <div className='section-content'>
    <Section
      title="Table"
      Component={TableRedox}
      dark={false}
      id="Table"
    />
    </div>
    {/* <div className='section-form'> */}
    
    <h1> Contribute to ProtReDox </h1>  
    <p>
       Please enter experimental details and press submit <br></br>
       to contribute to ProtReDox. Submissions will be <br></br> reviewed and appropriately handled. <br></br>
      Thank you, <br></br> The ProtReDox Team
    </p>

    <div id='section-form'>
    <Section
      title="Form"
      Component={Form}
      dark={false}
      id="Form"
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


  