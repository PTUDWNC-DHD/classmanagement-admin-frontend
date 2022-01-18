import "./adminlist.css";
import { Link,CircularProgress, TableSortLabel, ListItemText, Table, TableBody, TableCell, TableRow, TableHead, Input, Button } from "@mui/material";
import { Fragment, useState, useContext, useEffect } from "react";
import { fetchGetAdminList } from '../../services/adminService';
import AuthContext from '../../contexts/authContext';


export default function AdminList() {

  const { currentUser } = useContext(AuthContext)
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [admins, setAdmins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  

  const callFetchAllAdmins = async(token) => {
    setIsLoading(true);
    const result = await fetchGetAdminList(token);
    
    if (result.data) {
      setAdmins(result.data)
    }
    else if (result.error) {
      setErrorMessage(result.error)
    }
    setIsLoading(false);
  }


  useEffect(() => {
    callFetchAllAdmins(currentUser.token)
  }, [])

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  } 
  else if (isLoading) {
    return(
      <div className="center-parent">
        <CircularProgress  />
      </div>
    )
  } 

  const searchHandle = async () => {
    console.log(true);
    let result = await fetchGetAdminList(currentUser.token);
    console.log(result);
    if (result.error) {
      return setAdmins(null);
    }
    if (searchWord.length == 0) {
      return setAdmins(result.data)
    }
    result.data = result.data.filter(x => x.name?.toLowerCase().includes(searchWord) || x.email?.toLowerCase().includes(searchWord))
    return setAdmins(result.data)
  }

  return (
    <div className="adminList">
      <Input value={searchWord} onChange={e => setSearchWord(e.target.value)} />
      <Button onClick={searchHandle}>Search</Button>
      <Fragment>
        <Link href="/newAdmin">
          <button className="adminListAdd">Add</button>
        </Link>
        <Table size="small" >
          <TableHead>
            <TableRow>
              <TableCell>
                <ListItemText><TableSortLabel><h4>Name</h4></TableSortLabel></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Role</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Email</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>username</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Create Time</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Action</h4></ListItemText></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!admins.length ? <TableRow><TableCell>Don't have Admin</TableCell></TableRow> :
            admins.map((admin) => (
              <TableRow>
                <TableCell><ListItemText>{admin.name}</ListItemText></TableCell>
                <TableCell><ListItemText>{admin.role}</ListItemText></TableCell>
                <TableCell><ListItemText>{admin.email}</ListItemText></TableCell>
                <TableCell><ListItemText>{admin.username}</ListItemText></TableCell>
                <TableCell><ListItemText>{admin.createdAt}</ListItemText></TableCell>
                <TableCell>
                <Link href={`/admin/${admin._id}`}>
                    <button className="adminListEdit">Detail</button>
                </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Fragment>

    </div>
  );
}
