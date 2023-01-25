import React, { useState, useEffect } from 'react';
import db from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

export default function ReturnResults() {
    const [results, setResults] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = collection(db, 'redox');
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    if (querySnapshot.empty) {
                        console.log("Error getting docs");
                    } else {
                        const queryDocs = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            enzyme_name: doc.data().enzyme_name,
                            cofactor: doc.data().cofactor,
                            cofactor_type: doc.data().cofactor_type,
                            redox_mv: doc.data().redox_mv,
                            pdbID: doc.data().pdbID,
                            uniprot_id: doc.data().uniprot_id
                        }));
                        setResults(queryDocs);
                    }
                });
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    const defaultMaterialTheme = createTheme();

    return (
        <div style={{ width: '100%', height: '50%' }}>
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
          data= {results}
          options={{
            filtering: true,
            sorting: true,
            paginationType: 'stepped',
            exportButton: {
                csv: true,
                pdf: false,
             },
             exportCsv: (data, columns) => console.log(data, columns, '<== CSV'),
             exportPdf: (data, columns) => console.log(data, columns, '<== PDF'),
          }}
          />
          </ThemeProvider>
          </div>
    );
}
