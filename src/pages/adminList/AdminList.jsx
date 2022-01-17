import "./adminlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AdminList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "admin",
      headerName: "Admin",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="adminListItem">
            <img className="adminListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/" + params.row.id}>
              <button className="adminListEdit">Edit</button>
            </Link>
            <Link to="/newUser">
              <button className="adminListAdd">Add</button>
            </Link>
              <button className="adminListBan">Ban</button>
              <button className="adminListUnBan">UnBan</button>
            <DeleteOutline
              className="adminListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="adminList">
      
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}
