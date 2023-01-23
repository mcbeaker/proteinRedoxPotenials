/** 
* @todo Have user choose which columns to show similiar to uniprot, ncbi, and pdb
*/

// ResultsTable.js
import React, { useState } from 'react';
import MaterialTable from 'material-table';
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
   
