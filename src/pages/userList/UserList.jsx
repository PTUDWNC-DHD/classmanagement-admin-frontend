import "./userList.css";

import { Link, CircularProgress, Avatar, ListItemAvatar,Checkbox,TableSortLabel, ListItemText, Table, TableBody, TableCell, TableRow, TableHead, Input, Button } from "@mui/material";

import { Fragment, useState, useContext, useEffect, React } from "react";
import { fetchGetUserList, fetchPatchUser } from '../../services/userService';
import AuthContext from '../../contexts/authContext';



export default function UserList() {
 
  const { currentUser } = useContext(AuthContext)
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [isIncrement, setIsIncrement] = useState(true);

  
  const callFetchAllUsers = async(token) => {
    setIsLoading(true);
    const result = await fetchGetUserList(token);
    
    if (result.data) {
      setUsers(result.data)
      setIsIncrement(true);
    }
    else if (result.error) {
      setErrorMessage(result.error)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    callFetchAllUsers(currentUser.token)
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
  
  const HandleLockClick = async (id,isLock) => {
    console.log(currentUser.token,id,{isLock});
    const result = await fetchPatchUser(currentUser.token,id,{isLock})
    console.log(id,isLock, result);
    const newUsers = users.map(x=>{
      if (x._id==id) {
        x.isLock=!x.isLock;
        
      }
      return x;
    })
    setUsers(newUsers);
  }
  
  const searchHandle = async () => {
    let result = await fetchGetUserList(currentUser.token);
    if (result.error) {
      return setUsers(null);
    }
    if (searchWord.length == 0) {
      return setUsers(result.data)
    }
    result.data = result.data.filter(x => x.name?.toLowerCase().includes(searchWord) || x.email?.toLowerCase().includes(searchWord))
    return setUsers(result.data)
  }

const sortListByTime = () => {
  const sortedList = users.sort((x, y) => (x.createdAt > y.createdAt) == isIncrement ? 0 : -1)
  setUsers(sortedList)
  setIsIncrement(!isIncrement)
}

  return (
    <div className="userList">
      <Input value={searchWord} onChange={e => setSearchWord(e.target.value)} />
      <Button onClick={searchHandle}>Search</Button>
      <Fragment>
        <Table size="small" >
          <TableHead className="tableHead">
          
            <TableRow>
              <TableCell>
              
                <ListItemText><TableSortLabel>
                
                <h4>Name</h4></TableSortLabel></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Email</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Student Id</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Active</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Lock</h4></ListItemText></TableCell>
              <TableCell><ListItemText><Button onClick={sortListByTime}><h4>Create Time</h4></Button></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Action</h4></ListItemText></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!users.length ? <TableRow><TableCell>Don't have User</TableCell></TableRow> :
            users.map((user) => (
              <TableRow>
                <TableCell><ListItemText>{user.name}</ListItemText></TableCell>
                <TableCell><ListItemText>{user.email}</ListItemText></TableCell>
                <TableCell><ListItemText>{user.studentId}</ListItemText></TableCell>
                <TableCell><Checkbox  checked={user.isActive} /></TableCell>
                <TableCell><Checkbox onChange={()=>{HandleLockClick(user._id,!user.isLock)}} checked={user.isLock}/></TableCell>
                <TableCell><ListItemText>{user.createdAt}</ListItemText></TableCell>
                <TableCell>
                  <Link href={`/user/${user._id}`}>
                    <button className="userListEdit">Detail</button>
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
