import React, { compose, Component} from 'react';
// import db from './firebase';
// import { collection, onSnapshot } from 'firebase/firestore';
import Box from '@mui/material/Box'
// import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector, connect } from 'react-redux'
import { firestoreConnect, withFirestore } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { Dashboard } from '@material-ui/icons';


// c
// const Todos = props => {

//     const createTodo = (props, todo) => props.dispatch(addTodo(props, todo));



// }

class DataTable extends Component{
    
  render(){
    console.log("DataTable");
    const columns = 
                [{field: 'id', headerName:'ID'},
                    {field: 'enzyme_name', headerName:"Enzyme Name"},
                    {field: 'cofactor', headerName:'Cofactor'},
                    {field: 'cofactor_type',headerName:'headerName'},
                    {field: 'redox_mv', headerName:'Redox (mv)'},
                    {field: 'pdbID', headerName:'pdbID'},
                    {field: 'uniprot_id', headerName:'UniProt_ID'},
                    {field: 'doi', headerName: 'DOI'},
                    {field: 'buffer', headerName:'exp_buffer'},
                    {field: 'method', headerName: 'exp_method'},
                    {field: 'module', headerName: 'SPAN_module'},
                    {field: 'pH', headerName: 'exp_pH'},
                    {field: 'notes', headerName: 'exp_notes'},
                    {field: 'temp_K', headerName: 'exp_temp (K)'},
                    {field: 'reviewed', headerName: 'Reviewed'}
                ];
    console.log('props are:')
    console.log(this.props)
    const data = this.props;
    return(
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid 
            columns={columns} 
            rows={data}
            disableColumnReorder={true} 
            components={{ Toolbar:GridToolbar, GridLoadingOverlay:LinearProgress }}
            getRowId={(row) => ({id:row.id})}
            />
         </Box>
    );
    }
}
    
    const mapStateToProps = (state) => {
        console.log(state);
        return{
            redox: state.project.redox
        }
    }
    
    export default compose( 
        connect(mapStateToProps),
        firestoreConnect([{collection: 'redox'}]), // or { collection: 'todos' }
        connect((state,props) => ({
            data: state.firestore.ordered.data
        }))
    )(DataTable);
        

    // const todos = useSelector(state => state.firebase.data.redox);
    
//     console.log(todos);
//     return(
//         <Box sx={{ height: 400, width: '100%' }}>
//         <DataGrid 
//         columns={columns} 
//         rows={todos}
//         disableColumnReorder={true} 
//         components={{ Toolbar:GridToolbar, GridLoadingOverlay:LinearProgress }}
//         getRowId={(row) => ({id:row.id})}
//         />
//       </Box>
//     );
//   } 
    
    // setColumns(col);


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const q = collection(db, 'redox');
//                 const unsubscribe = onSnapshot(q, (querySnapshot) => {
//                     if (querySnapshot.empty) {
//                         console.log("Error getting docs");
//                     } else {
//                         const queryDocs = querySnapshot.docs.map((doc) => ({
//                             id: doc.id,
//                             enzyme_name: doc.data().enzyme_name,
//                             cofactor: doc.data().cofactor,
//                             cofactor_type: doc.data().cofactor_type,
//                             redox_mv: doc.data().redox_mv,
//                             pdbID: doc.data().pdbID,
//                             uniprot_id: doc.data().uniprot_id,
//                             doi: doc.data().doi,
//                             buffer: doc.data().buffer,
//                             method: doc.data().method,
//                             module: doc.data().module,
//                             pH: doc.data().pH,
//                             notes: doc.data().notes,
//                             temp_K: doc.data().temp_K,
//                             reviewed: 'yes'

//                         }));
//                         setResults(queryDocs);
//                         // const rows: GridRowProp = ;
//                         // setResults(queryDocs);
//                     }
//                 });
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         fetchData();
//     }
    
//     , []);

//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid 
//       columns={columns} 
//       rows={results}
//       disableColumnReorder={true} 
//       components={{ Toolbar:GridToolbar, GridLoadingOverlay:LinearProgress }}
//       getRowId={(row) => ({id:row.id})}
//       />
//     </Box>
//   );
// }

// // c
//         // setColumns(col);
//         // console.log(col);