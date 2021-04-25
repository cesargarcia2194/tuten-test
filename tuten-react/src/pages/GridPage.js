import React, { useContext } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../context/AuthContext';
import { useFetchData } from '../hooks/useFetchData';
import { types } from '../context/types';
import { LinearProgress } from '@material-ui/core';


const columns = [
    { field: 'bookingId', headerName: 'BookingId', width: 150, filterable: true, sortable: false },
    { field: 'client', headerName: 'Cliente', width: 150, filterable: false, sortable: false},
    {   field: 'createDate', 
        headerName: 'Fecha de Creación',
        type: 'date', width: 180, 
        filterable: false, 
        sortable: false,
        valueFormatter: ({value}) =>{
            const date = new Date(value);
            return date.getDay()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
        }
    },
    { field: 'direction', headerName: 'Dirección', width: 200, filterable: false, sortable: false},
    { field: 'price', headerName: 'Precio', type: 'number', width: 150, filterable: true, sortable: false}
];

export const GridPage = () => {

    const {dispatch} = useContext(AuthContext);
    const {tkn} = JSON.parse(localStorage.getItem('state'))
    const params = {
        adminemail: 'testapis@tuten.cl',
        email: 'contacto@tuten.cl',
        current: true,
        tkn,
        app: 'APP_BCK'
    }
    const {data, loading} = useFetchData(params);
    const handleLogout = () =>{
        dispatch({
            type: types.logout
        })
        localStorage.removeItem('state')
    }
    return (
        
        <div style={{ height: 400, width: '80%', margin: 'auto'}}>
            {
                (loading) && <LinearProgress />  
            }
            
            <DataGrid rows={data} columns={columns} pageSize={2} />
                <Button
                    style={{marginTop:'10px'}}
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                >
                Logout
            </Button>
             
        </div>
    )
}
