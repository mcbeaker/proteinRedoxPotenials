/** 
* @todo Have user choose which columns to show similiar to uniprot, ncbi, and pdb
*/

// ResultsTable.js
import React from 'react';
import MaterialTable from 'material-table';


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



