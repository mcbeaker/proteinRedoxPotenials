import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

export default function MuiResultsTable({ columns, rows }) {
    // const [tableData, setTableData] = useState(searchResults);
    console.log("loaded Table");
    // console.log(_.isArray(data)); // will log true if data is an array, false otherwise
    // console.log(_.isObject(data)); // will log true if data is an object, false otherwise

        return (
          <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid 
          columns={columns} 
          rows={rows}
          disableColumnReorder={true} 
          components={{ Toolbar:GridToolbar, GridLoadingOverlay:LinearProgress }}
          getRowId={(row) => ({id:row.id})}
          />
        </Box>
          );
    }