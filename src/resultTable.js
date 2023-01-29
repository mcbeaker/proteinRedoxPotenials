/** 
* @todo Have user choose which columns to show similiar to uniprot, ncbi, and pdb
*/

// ResultsTable.js
import React from 'react';
import MaterialTable from 'material-table';
<<<<<<< HEAD
import { ThemeProvider, createTheme } from '@mui/material';
import returnResults from './pullFirestoreData';

// export class ResultsTable extends React.Component ({searchResults}){
export default function ResultsTable() {
    console.log("loaded Table");
    
    const showData = returnResults();

    const defaultMaterialTheme = createTheme();
        return (
            <div style={{ width: '100%', height: '100%' }}>
            <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
        <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
          columns={[ 
            { title: 'Enzyme_Name', field: 'enzyme_name' },
            { title: 'Cofactor', field: 'cofactor' },
            { title: 'Cofactor_type', field: 'cofactor_type' },
            { title: 'Redox(mv)', field: 'redox_mv' },
            { title: 'PDBID', field: 'pdbID' },
            { title: 'UniprotID', field: 'uniprot_id' }
          ]}
          data= {showData}
          options={{
            filtering: true,
            sorting: true,
            paginationType: 'stepped',
          }}
          />
          </ThemeProvider>
          </div>
          );
    }
   
=======


export default function ResultsTable({ searchResults }) {
  return (
    <MaterialTable
  columns={[ 
    { title: 'Enzyme_Name', field: 'enzyme_name' },
    { title: 'Cofactor', field: 'cofactor' },
    { title: 'Cofactor_type', field: 'cofactor_type' },
    { title: 'Redox(mv)', field: 'redox_mv' },
    { title: 'PDBID', field: 'pdbID' },
    { title: 'UniprotID', field: 'uniprot_id' }
  ]}
  data={searchResults}
  options={{
    filtering: true,
    sorting: true,
    paginationType: 'stepped',
  }}
  />
  );
}



>>>>>>> parent of dd10870 (a functional website)
