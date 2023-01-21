/** 
* @todo Have user choose which columns to show similiar to uniprot, ncbi, and pdb
*/

// ResultsTable.js
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';



// export class ResultsTable extends React.Component ({searchResults}){
export default function ResultsTable({ searchResults }) {
    const [tableData, setTableData] = useState(searchResults);
    console.log("loaded Table");
    // console.log(_.isArray(data)); // will log true if data is an array, false otherwise
    // console.log(_.isObject(data)); // will log true if data is an object, false otherwise
    console.log(searchResults);
    console.log(tableData);
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
          data={searchResults}
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
   
