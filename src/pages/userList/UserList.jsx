import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../home/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

  const [data, setdata] = useState(userRows);

  const handleDelete = (id)=>{
    setdata(data.filter((item) => item.id !== id));
  };

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    }
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false
  },
  {
    field: 'transaction',
    headerName: '$$$',
    sortable: false
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 150,
    renderCell: (params) =>{
      return (
        <>
          <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
        </> 
      );
    }
  },
];

  return (
        <div className="userList">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
    )
}
