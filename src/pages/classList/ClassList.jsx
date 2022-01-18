import "./classList.css";
import { Link, CircularProgress, Avatar, ListItemAvatar,Checkbox,TableSortLabel, ListItemText, Table, TableBody, TableCell, TableRow, TableHead, Input, Button } from "@mui/material";
import { useState, Fragment,  useContext, useEffect  } from "react";
import { fetchGetClassList } from '../../services/classService';
import AuthContext from '../../contexts/authContext';

export default function ClassList() {
  const { currentUser } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [classes, setClasses] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  
  const callFetchAllClasses = async(token) => {
    setIsLoading(true);
    const result = await fetchGetClassList(token);
    
    if (result.data) {
      setClasses(result.data)
    }
    else if (result.error) {
      setErrorMessage(result.error)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    callFetchAllClasses(currentUser.token)
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
    let result = await fetchGetClassList(currentUser.token);
    if (result.error) {
      return setClasses(null);
    }
    if (searchWord.length == 0) {
      return setClasses(result.data)
    }
    result.data = result.data.filter(x => x.name?.toLowerCase().includes(searchWord) || x.email?.toLowerCase().includes(searchWord))
    return setClasses(result.data)
  }

  return (
    <div className="productList">
      <Input value={searchWord} onChange={e => setSearchWord(e.target.value)} />
      <Button onClick={searchHandle}>Search</Button>
      <Fragment>
     
        <Table size="small" >
          <TableHead>
          
            <TableRow>
              <TableCell>
              
                <ListItemText><TableSortLabel>
                
                <h4>Name</h4></TableSortLabel></ListItemText></TableCell>
              
              <TableCell><ListItemText><h4>Invite</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Ended</h4></ListItemText></TableCell>
              
              <TableCell><ListItemText><h4>Create Time</h4></ListItemText></TableCell>
              <TableCell><ListItemText><h4>Action</h4></ListItemText></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!classes.length ? <TableRow><TableCell>Class has no teacher</TableCell></TableRow> :
            classes.map((classe) => (
              <TableRow>
                <TableCell><ListItemText>{classe.name}</ListItemText></TableCell>
                
                <TableCell><ListItemText>{classe.invite}</ListItemText></TableCell>
                <TableCell><Checkbox checked={classe.isEnded}/></TableCell>
                <TableCell><ListItemText>{classe.createdAt}</ListItemText></TableCell>
                <TableCell>
                <Link href={`/class/${classe._id}`}>
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
