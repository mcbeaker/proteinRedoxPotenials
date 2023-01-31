import React, { useState, useEffect } from 'react';
import db from './fbConfig';
import { collection, getDocs } from 'firebase/firestore';
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
 import LinearProgress from '@mui/material/LinearProgress';

export default function ReturnResults() {
    console.log("returnResults");
    const [results, setResults] = useState([{}]);
    const cols = 
             [
                 {field: 'id', headerName:"ID"},
                 {field: 'enzyme_name', headerName:"Enzyme Name"},
                 {field: 'cofactor', headerName:'Cofactor'},
                 {field: 'cofactor_type',headerName:'headerName'},
                 {field: 'redox_mv', headerName:'Redox (mv)'},
                 {field: 'pdb', headerName:'pdbID'},
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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = collection(db, 'redox');
                const querySnapshot = await getDocs(q);
                    if (querySnapshot.empty) {
                        console.log("Error getting docs");
                    } else {
                        const queryDocs = querySnapshot.docs.map((doc) => doc.data())
 
                        setResults(queryDocs);
                        // console.log('Results:', results);
                    }
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    // const defaultMaterialTheme = createTheme();

    return (
        // <> JSON.stringify({results})</> 
        
        <Box sx={{ height: 400, width: '100%' }}>
       <DataGrid 
       columns={cols} 
       rows={results}
    //    disableColumnReorder={true} 
    //    components={{ Toolbar:GridToolbar, GridLoadingOverlay:LinearProgress }}
       getRowId={(row) => ({id:row.id})}
       />
     </Box>
    );
}


// ({
                        //      enzyme_name: doc.data().enzyme_name,
                        //      cofactor: doc.data().cofactor,
                        //      cofactor_type: doc.data().cofactor_type,
                        //      redox_mv: doc.data().redox_mv,
                        //      pdbID: doc.data().pdb,
                        //      uniprot_id: doc.data().uniprot_id,
                        //      doi: doc.data().doi,
                        //      buffer: doc.data().buffer,
                        //      method: doc.data().method,
                        //      module: doc.data().module,
                        //      pH: doc.data().pH,
                        //      notes: doc.data().notes,
                        //      temp_K: doc.data().temp_K,
                        //      reviewed: doc.data().reviewed
                        // }));