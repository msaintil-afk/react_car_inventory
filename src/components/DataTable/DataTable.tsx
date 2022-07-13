import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'make',
    headerName: 'Make',
    width: 150,
    editable: true,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 150,
    editable: true,
  },
  {
    field: 'year',
    headerName: 'Year',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 120,
    editable: true,
  },
];

const rows = [
  { id: 1, make: 'Chevy', model: 'Impala', year: '1995', price: '$50,000'},
  { id: 2, make: 'BMW', model: 'i8', year: '2020', price: '$90,000' },
  { id: 3, make: 'Ford', model: 'Mustang GT', year: '1990 ', price: '$85,000'},
  { id: 4, make: 'Tesla', model: 'Cyber Truck', year: '2023' , price: '$75,000'},
  { id: 5, make: 'Honda', model: 'CRV', year: '2015' , price: '$45,000'},
  { id: 6, make: 'Toyota', model: 'Camry', year: '2021' , price: '$25,000'},
  { id: 7, make: 'Chevy', model: 'Mustang', year: '2020' , price: '$65,000'},
  { id: 8, make: 'Tesla', model: 'Model X', year: '2022' , price: '$100,000'},
  { id: 9, make: 'Tesla', model: 'Model S', year: '2022' , price: '$90,000'},
];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars In Inventory</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}