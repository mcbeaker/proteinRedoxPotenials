// import React, {useMemo} from 'react';
// // import SummaryProject from './SummaryProject';
// import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import Box from '@mui/material/Box';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
//  import LinearProgress from '@mui/material/LinearProgress';
//  import { firestoreConnect } from 'react-redux-firebase';
//  import { compose } from 'redux';
// import memoize from 'lodash/memoize';


//  class TableRedox extends React.Component {
//     state = { redoxData: [{}]}

//     static getDerivedStateFromProps(props, state) {
//         // Your code to update the state based on changes in props
//         return {
//             redoxData: props.redoxData
//         };
//     }
//     render() {
    
//     const redoxData = this.props.redoxData;

//     const momoizedCols = useMemo(() =>  
//              [
//                  {field: 'id', headerName:"ID"},
//                  {field: 'enzyme_name', headerName:"Enzyme Name"},
//                  {field: 'cofactor', headerName:'Cofactor'},
//                  {field: 'cofactor_type',headerName:'headerName'},
//                  {field: 'redox_mv', headerName:'Redox (mv)'},
//                  {field: 'pdb', headerName:'pdbID'},
//                  {field: 'uniprot_id', headerName:'UniProt_ID'},
//                  {field: 'doi', headerName: 'DOI'},
//                  {field: 'buffer', headerName:'exp_buffer'},
//                  {field: 'method', headerName: 'exp_method'},
//                  {field: 'module', headerName: 'SPAN_module'},
//                  {field: 'pH', headerName: 'exp_pH'},
//                  {field: 'notes', headerName: 'exp_notes'},
//                  {field: 'temp_K', headerName: 'exp_temp (K)'},
//                  {field: 'reviewed', headerName: 'Reviewed'}
//              ],[]);
//             // let rows = this.props.redoxData;
//             console.log(this.props.redoxData);
//         return (

//             <Box sx={{ height: 400, width: '100%' }}>
//                 <DataGrid 
//                 columns={momoizedCols} 
//                 rows={redoxData}
//                 disableColumnReorder={true} 
//                 components={{ Toolbar:GridToolbar, GridLoadingOverlay:LinearProgress }}
//                 getRowId={(row) => ({id:row.id})}
//                 />
//             </Box>
            
//         );
// }
// }

// const mapStateToProps = state => {
//     console.log(state.firestore.data.redox);
//     return {
//         redoxData: state.firestore.data.redox ? state.firestore.data.redox : [{}]
//     };
//   };
  

// export default compose(connect(mapStateToProps),firestoreConnect([{ collection: 'redox' }]))(TableRedox);


import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const TableRedox = ({ redoxData }) => {
  const cols = [
    { field: 'id', headerName: 'ID' },
    { field: 'enzyme_name', headerName: 'Enzyme Name' },
    { field: 'cofactor', headerName: 'Cofactor' },
    { field: 'cofactor_type', headerName: 'headerName' },
    { field: 'redox_mv', headerName: 'Redox (mv)' },
    { field: 'pdb', headerName: 'pdbID' },
    { field: 'uniprot_id', headerName: 'UniProt_ID' },
    { field: 'doi', headerName: 'DOI' },
    { field: 'buffer', headerName: 'exp_buffer' },
    { field: 'method', headerName: 'exp_method' },
    // { field: 'module', headerName: 'SPAN_module' },
    { field: 'pH', headerName: 'exp_pH' },
    { field: 'notes', headerName: 'exp_notes' },
    { field: 'temp_K', headerName: 'exp_temp (K)' },
    { field: 'reviewed', headerName: 'Reviewed' }
  ];

//   const memoizedData = useMemo(() => Object.values(redoxData).map(x => 
//     // const container = {};
//         ( {id : x.id, enzyme_name: x.enzyme_name,cofactor:x.cofactor,
//          cofactor_type: x.cofactor_type, redox_mv: x.redox_mv, pdb:x.pdb, uniprot_id:x.uniprot_id,
//          doi: x.doi, buffer: x.buffer, method: x.method, module: x.module,
//          pH: x.pH, notes:x.notes, temp_K: x.temp_K, reviewed: x.reviewed
//         })
    
//     ), [redoxData])
    const memoizedData = useMemo(() => redoxData, [redoxData]);
//   const values = [];
//   for (let i = 0; i < memoizedData.length; i++) {
//     for (let key in memoizedData[i]) {
//       values.push(memoizedData[i][key]);
//     }
//   }
  console.log("memoizedData:", memoizedData);

//   console.log('blah',values);
// var values = Object.values(memoizedData);
function generateRandom() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

  return (

    <Box sx={{ height: 1000, width: '50%' }}>
      <DataGrid
        columns={cols}
        rows={Object.values(memoizedData)}
        disableColumnReorder={true}
        components={{ Toolbar: GridToolbar, GridLoadingOverlay: LinearProgress, }}
        // getRowId={row => ({ id: row.id })}
        getRowId={(row) =>  generateRandom()}


      />
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    redoxData: state.firestore.data.redox ? state.firestore.data.redox : [{}]
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'redox' }])
)(TableRedox);
