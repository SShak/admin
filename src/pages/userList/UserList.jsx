import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../home/dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";
import { userRequest } from "../../requestMethods";

export default function UserList() {

  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users.users);

  useEffect(()=>{
    getUsers(dispatch);
  },[dispatch]);



const columns = [
  { field: '_id', 
    headerName: 'ID', 
    width: 90 },
  {
    field: 'users',
    headerName: 'Users',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          {params.row.username}
        </div>
      )
    }
  },

];

  return (
        <div className="userList">
          <DataGrid
            rows={users}
            getRowId={(row) => row._id}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
    )
}
