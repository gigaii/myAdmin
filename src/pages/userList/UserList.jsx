import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'
import { userRows } from '../../Data';
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function UserList() {
    const [data, setData] = useState (userRows);
    // delete function
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 150,
         renderCell: (params) => {
            // params for user
            return (
                <div className="userListParams">
                    <img className="userListAvatar" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 150 },
        {
          field: 'status',
          headerName: 'Status',
          width: 180,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                // params for delete button
                return (
                    <>
                    {/* params.row.id = every single user page */}
                    <Link to={"/user/" +params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    
                    <DeleteOutline 
                    className="userListDelete" 
                    onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            } 
          },
      ];
      
    return (
        <div className="userlist">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />        
        </div>
    )
}
